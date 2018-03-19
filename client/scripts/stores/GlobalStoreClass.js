import { observable, action } from 'mobx';

import { LOCALSTORAGE_SESSIONID, LOCALSTORAGE_METERID } from "../Constant"

import OtherHelper from '../helpers/OtherHelper'


export class GlobalStoreClass {
	@observable fetched = false;
	@observable selectedSessionId = localStorage.getItem(LOCALSTORAGE_SESSIONID);
	@observable selectedMeterId = localStorage.getItem(LOCALSTORAGE_METERID);

	@observable.ref settings = {}

	setSessionId(id) {
		localStorage.setItem(LOCALSTORAGE_SESSIONID, id)
		this.selectedSessionId = id
	}

	setMeterId(id) {
		localStorage.setItem(LOCALSTORAGE_METERID, id)
		this.selectedMeterId = id
	}


	@action fetchSettings() {
		OtherHelper.getSettings()
		.then((res) => {
	    	window.settings = res.data
	    	this.settings = res.data
	    })
	    .catch(() => this.fetched = false);
	}
}

