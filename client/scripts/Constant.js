
export const APP_TITLE = 'Phototech Trakkar v1.0';
// export const APP_ROOT_HOST = 'http://127.0.0.1:3000';

export const DEFAULT_DATE_FORMAT = "ll"


export const APP_URL_PAGE_DASHBOARD = '/dashboard';
export const APP_URL_PAGE_USER = '/user';
export const APP_URL_PAGE_CONTACT_GROUP = '/contact_group';
export const APP_URL_PAGE_CONTACT = '/contact';


console.log(window.location.hostname)
export const API_CONFIG = {
	// host : 'http://127.0.0.1:5000',
	host: '//' + window.location.hostname+':5000',
	endpoint_auth : '/auth',
	endpoint_contact_group : '/contact_group',
	endpoint_contact : '/contact'
}