

import 'whatwg-fetch'

import 'es6-promise'

export default function get(url){
	
	return fetch(url,{
		credentials:'include',
		headers:{
			'Accept':'application/json,text/plain,*/*'
		}
	})
	
}
