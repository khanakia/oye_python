# -*- coding: utf-8 -*-
import sys, os
sys.path.append('..\\..\\')

from config import www
from modules.db import db

from sqlalchemy import text
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.firefox.options import Options
import re
from bs4 import BeautifulSoup

class WebsiteClass:
	def __init__(self, website ):
		self.website = website
		options = Options()
		# options.add_argument("--headless")
		driver = webdriver.Firefox(firefox_options=options)
		driver.get(website)
		
		self.driver = driver

	def hello(self):
		print "hello"

	def get(self, url):
		self.driver.get(self.website + url)

	def getPageSource(self):
		return self.driver.page_source.encode('utf-8')

	def close(self):
		self.driver.close()

	def parseWikipedia(self, page_source):
		soup = BeautifulSoup(page_source, 'html.parser')
		return soup.find_all('a', href=re.compile("^/wiki"))

	def parseDzone(self, page_source):
		soup = BeautifulSoup(page_source, 'html.parser')
		return soup.find_all('a', href=re.compile("wikipedia"))


def generateMarkdownLinks():
	file = open('list.txt', 'w') 
	rows = db.connection.execute(text('Select * from programming_languages order by title asc'))
	for row in rows:
		file.write('[%s](%s)\n' % (row.title, row.website))

	file.close()

db.init()

# urls = [
# 	'https://en.wikipedia.org/wiki/List_of_programming_languages',
# 	'https://dzone.com/articles/big-list-256-programming'
# ]
# website = WebsiteClass(urls[1])
# page_source = website.getPageSource()

# # soup = BeautifulSoup(page_source, 'html.parser')
# # # print soup.title

# for link in website.parseDzone(page_source):
# 	href = link.get('href').encode('ascii', 'ignore').decode('ascii').replace('"', '\\"')
# 	title = link.text.encode('ascii', 'ignore').decode('ascii').replace('"', '\\"')
# 	sql = 'INSERT into programming_languages (title, website, description) VALUES ("%s", "%s", "%s");' % (title, href, '')
# 	# print (title, href, '')
# 	db.connection.engine.execute(text(sql))


generateMarkdownLinks()