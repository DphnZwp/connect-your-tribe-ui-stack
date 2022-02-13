const display = document.querySelector('section')
display.textContent = "Laden van visitekaartje, even geduld a.u.b"
const nameEl = document.getElementById('name')
const frontendTitle = document.getElementById('frontend-title')
const githubEl = document.getElementById("github")
const bioEl = document.getElementById('bio')
const image = document.getElementById("image")

fetch("https://tribe.api.fdnd.nl/v1/member")
.then(response=> {
	display.textContent=""
	return response.json()
})
.then (json => {
	let data = json.data[5];

	nameEl.innerText = `${data.name} ${data.surname}`
	frontendTitle.innerText = `Frontend Developer`
	githubEl.innerText = `${data.githubHandle}`
	bioEl.innerText = `${data.bio}`
	image.src = `${data.avatar}`
});