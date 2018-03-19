import axios from 'axios';
import ContactGroup from './ContactGroup'
import Contact from './Contact'
class ApiClass {
	constructor(options = {}, optional={}) {
		Object.assign(this, {
			host: null,
            endpoint_contact_group: null,
            endpoint_contact: null,
        }, options);

        Object.assign(this, {
            headers : optional.headers,
        }, optional);

        this.options = options

        this.ContactGroup = new ContactGroup({
            api_host : options.host,
            api_endpoint: options.endpoint_contact_group,
            headers : optional.headers
        })

        this.Contact = new Contact({
            api_host : options.host,
            api_endpoint: options.endpoint_contact,
            headers : optional.headers
        })

	}
}

export default ApiClass