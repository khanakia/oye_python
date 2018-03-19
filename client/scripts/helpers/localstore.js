/*
 * HOW TO USE
 *  Localstore.setOrg(2)
	Localstore.setUser({id: 1, name: 'aman'})
	console.log(Localstore.getItem('org'))
*/

export default class localstore {
	static setOrg(org={}) {
		localStorage.setItem('org', JSON.stringify(org));
	}

	static setUser(user={}) {
		localStorage.setItem('user', JSON.stringify(user));
	}

	static getItem(itemname) {
		return JSON.parse(localStorage.getItem(itemname))
	}

	static clear() {
		localStorage.removeItem('org')
		localStorage.removeItem('user')
	}



	// TASKLIST LOCALSTORE
	static tasklistLocalStoreDefaults()  {
        const args = {
            show_tasks: true,
        }
        return args;
    }

    static getTasklistLocalStore(tasklist_id) {
        const data = JSON.parse(localStorage.getItem('tasklist_'+tasklist_id))
        return jQuery.extend(this.tasklistLocalStoreDefaults(), data)
    }

    static setTasklistLocalStore(tasklist_id, data ={}) {
        var data = jQuery.extend(this.tasklistLocalStoreDefaults(), data)
        localStorage.setItem('tasklist_'+tasklist_id, JSON.stringify(data));
    }

    // TASK LOCALSTORE
	static taskLocalStoreDefaults()  {
        const args = {
            show_subtasks: false,    
        }
        return args;
    }

    static getTaskLocalStore(task_id) {
        const data = JSON.parse(localStorage.getItem('task_'+task_id))
        return jQuery.extend(this.taskLocalStoreDefaults(), data)
    }

    static setTaskLocalStore(task_id, data ={}) {
        var data = jQuery.extend(this.taskLocalStoreDefaults(), data)
        localStorage.setItem('task_'+task_id, JSON.stringify(data));
    }
}