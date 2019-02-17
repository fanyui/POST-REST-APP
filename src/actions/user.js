export const RECEIVE_USER = 'RECEIVE_USER'

export function receiveUsers(users) {
	return {
		type: RECEIVE_USER,
		users,
	}
}