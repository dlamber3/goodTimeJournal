require("isomorphic-fetch");

export default deletePerson(name) {
	return fetch('http://localhost:3001/Delete', {
		method: 'DELETE',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({ name })
	})
}



