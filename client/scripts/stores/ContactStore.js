import { observable, action, runInAction } from 'mobx';

export class ContactStore {
	@observable fetched = false;
	@observable.ref contact_item = {
		id : null
	};
	@observable.shallow contact_list = [];
	
	@action fetchList() {
        Api.Contact.list().then( (res) => {
            this.contact_list = res.data
        })
    }
}

