import React from 'react'
import {
  Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'
import { render } from 'react-dom'
import ReactDOM from 'react-dom'
import DevTools from 'mobx-react-devtools'

import 'antd';

// STORES -------------------------
import createHistory from 'history/createHashHistory';
import { Provider } from 'mobx-react';
import { RouterStore, syncHistoryWithStore } from 'mobx-react-router';
import { ContactGroupStore } from './stores/ContactGroupStore';
import { ContactStore } from './stores/ContactStore';
const routingStore = new RouterStore();
const contactGroupStore = new ContactGroupStore()
const contactStore = new ContactStore()
const stores = {
	routing: routingStore,
	contactGroupStore : contactGroupStore,
	contactStore : contactStore
};
var hashHistory = createHistory()
const history = syncHistoryWithStore(hashHistory, routingStore);


// PROJECT SPECIFIC IMPORTS ---------------------------
import {API_CONFIG} from './Constant'
import ApiClass from './api'
import Auth from './helpers/auth'


// COMPONENTS -------------------------
import Layout from './components/Layout.jsx'
import LayoutPlain from './components/LayoutPlain.jsx'
import UserLogin from './components/UserLogin.jsx'
import Home from './components/Home.jsx'
import Demo from './components/Demo.jsx'
import ContactGroup from './components/ContactGroup'
import Contact from './components/Contact'
import CaspioEstimate from './components/CaspioEstimate'


// WINDOW OBJECT -------------------------
window.Auth = Auth;
window.ReactDOM = ReactDOM
window.React = React
window.stores = stores
window.Api = new ApiClass(API_CONFIG)
window.hashHistory = hashHistory


const Root = () => (
	<Provider {...stores}>
		<Router history={history}>
			<div>
				<Switch>
					<Route exact path="/" component={UserLogin}/>
					<Layout>
						{/*<Route exact path="/dashboard" component={Home}/>*/}
						<Route path="/demo" component={Demo}/>
						<Route path="/dashboard" component={CaspioEstimate}/>
						<Route path="/contact_group" component={ContactGroup}/>
						<Route path="/contact" component={Contact}/>
						
					</Layout>  
				</Switch>     
			</div>
		</Router>
	</Provider>
)

render(<Root/>, document.getElementById('root'))