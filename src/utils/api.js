const url= 'http://localhost:8080/post-rest/api/post'
//make an api call and provide content to the ui
export function getInnitalData() {
	return fetch(url, {
				method: 'GET',
				headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
				// 'Authorization': 'Basic Auth ' + Base64.encode("harisu" + ":" + "test123"),

				},
			})
			.then((response) => response.json())
			// .then(response => Promise.all([response, response.json()]))
			// .then((responseJson)=>{
			// 	users: "",
			// 	posts: responseJson,
			// })
	// .then(([ users, posts ]))
}

export function toogleLike() {
	// body...
}

export function savePost(body) {
	return fetch('http://localhost:8080/post-rest/api/user/1/post', {
				method: 'post',
				headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
				// 'Authorization': 'Basic Auth ' + Base64.encode("harisu" + ":" + "test123"),

				},
				body: JSON.stringify(body),
			})
			.then((response) => response.json())
			// .then(response => Promise.all([response, response.json()]))
			// .then((responseJson)=>{
			// 	users: "",
			// 	posts: responseJson,
			// })
	// .then(([ users, posts ]))
}

export function saveComment( postId, body) {
	return fetch('http://localhost:8080/post-rest/api/post/'+ postId+ '/user/1/comment', {
				method: 'post',
				headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
				// 'Authorization': 'Basic Auth ' + Base64.encode("harisu" + ":" + "test123"),

				},
				body: JSON.stringify(body),
			})
			.then((response) => response.json())
			// .then(response => Promise.all([response, response.json()]))
			// .then((responseJson)=>{
			// 	users: "",
			// 	posts: responseJson,
			// })
	// .then(([ users, posts ]))
}