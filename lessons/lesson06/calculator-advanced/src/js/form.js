export function isPasswordValid(password) {
	console.log(password)

	if (password.length >= 10) {
		return true
	}
	return false
}
