from bootstrap import *
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.firefox.options import Options


# WINDOW_SIZE = "1920,1080"
# chrome_options = Options()  
# chrome_options.add_argument("--headless")  
# chrome_options.add_argument("--window-size=%s" % WINDOW_SIZE)
# # chrome_options.binary_location = 'C:\Program Files (x86)\Google\Chrome\Application'
# chrome_options.add_argument('--disable-gpu')  # Last I checked this was necessary.
# driver = webdriver.Chrome(executable_path=r"chromedriver.exe", chrome_options=chrome_options)

class MyBbClass:
	def __init__(self, website, cookieMybbuser ):
		self.website = website
		self.cookieMybbuser = cookieMybbuser

		options = Options()
		# options.add_argument("--headless")
		driver = webdriver.Firefox(firefox_options=options)
		driver.get(website)
		cookie = {'name' :'mybbuser', 'value' : cookieMybbuser}
		driver.add_cookie(cookie)
		self.driver = driver

	def hello(self):
		print "hello"

	def get(self, url):
		self.driver.get(self.website + url)

	def getPageSource(self):
		return self.driver.page_source.encode('utf-8')

	def close(self):
		self.driver.close()




mybb = MyBbClass('https://hackforums.net', '3816611_GqiN2gQPZGucfhnni6gEOCbo3tAOO8pTYjEsrb31Xt1Gn0g60q')
page = "/usercp.php"
mybb.get(page)
page_source = mybb.getPageSource()

from bs4 import BeautifulSoup
soup = BeautifulSoup(page_source, 'html.parser')
# print soup.title

for link in soup.find_all('a'):
	href = link.get('href')
	print href
	sql = 'INSERT into links (website_id, parent_page, url) VALUES ("%s", "%s", "%s");' % (1, page, href)
	db.connection.engine.execute(sql)

# inurl:"index.php?tab=" intext:"MyBB"