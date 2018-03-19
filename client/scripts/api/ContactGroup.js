import axios from 'axios';

class ContactGroup {
	constructor(options = {}) {
		Object.assign(this, {
			// http://localhost:5000
			api_host: null,
            // /contact_group
            api_endpoint: null,  
            headers : {},
        }, options);

        this.options = options
        this.api_url = options.api_host + options.api_endpoint
	}

	hello() {
		console.log(this.options)
		return 'Hello'
	}

	list() {
        return axios({
            method: 'get',
            headers: null,
            url: this.api_url,
            // params: params
        })
    }

    show(id) {
         return axios({
            method: 'get',
            headers: null,
            url: this.api_url + "/" + id
        })
    }

    store(data) {
        return axios({
            method: 'post',
            headers: null,
            url: this.api_url,
            data: data
        })
    }


    update(id, data) {
         return axios({
            method: 'put',
            headers: null,
            url: this.api_url + "/" + id,
            data: data
        })
    }

    delete(id) {
        return axios({
            method: 'delete',
            headers: null,
            url: this.api_url + "/" + id,
        })
    }

    save(data, id = null) {
        // const dataJson = URI.parseQuery(data)
        if (id) {
            var ajaxObj = this.update(id, data)
        } else {
            var ajaxObj = this.store(data)
        }
        return ajaxObj;
    }
}

export default ContactGroup