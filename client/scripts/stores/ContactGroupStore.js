import { observable, action, runInAction } from 'mobx';

export class ContactGroupStore {
	@observable fetched = false;
	@observable.ref contact_group_item = {
		id : null
	};
	@observable.shallow contact_group_list = [];
	
	@action fetchList() {
        Api.ContactGroup.list().then( (res) => {
            this.contact_group_list = res.data
        })
    }
}

