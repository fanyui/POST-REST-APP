
export function formatDate(timeStamp) {
	const d = new Date(timeStamp)
	const time = d.toLocaleTimeString('en-US')
	return time.substring(0, 5) + time.slice(-2) + '|' + d.toLocaleDateString()
}

export function formatPost(post) {
	return post
}

// export function formatPost(post, author, authedUser, parentTweet) {
// 	const { id, likes, comments, title, description, createdAt } = post
// 	const { name, avaterUrl } = author

// 	return {
// 		name,
// 		createdAt,
// 		title,
// 		description,
// 		avatar: avaterUrl,
// 		likes: likes.likes,
// 		comments: comments.length,
// 		hasLiked: likes.include(authedUser),
// 		// parent: parentPost ? null: {
// 		// 	author: parentPost.author,
// 		// 	id: parentPost.id,
// 		// }
// 	}
// }





