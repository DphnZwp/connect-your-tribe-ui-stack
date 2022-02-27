// Empty state
const display = document.querySelector('.dissapear')
display.style.display = "none";
// Loading state
const preLoaderWrapper = document.querySelector(".preloader-wrapper");
// Business card ids
const nameEl = document.getElementById('name')
const frontendTitle = document.getElementById('frontend-title')
const githubEl = document.getElementById("github")
const bioEl = document.getElementById('bio')
const avatar = document.getElementById("avatar")
const imagePig = document.getElementById("daphne-pig")
imagePig.src = 'assets/daphne-pig.png';


fetch("https://tribe.api.fdnd.nl/v1/member")
.then(response=> {
	preLoaderWrapper.classList.add("hide");
	return response.json()
})
.then (json => {
	let data = json.data[5];

	nameEl.innerText = `${data.name} ${data.surname}`
	frontendTitle.innerText = `Frontend Developer`
	githubEl.innerText = `${data.githubHandle}`
	bioEl.innerText = `${data.bio}`
	avatar.src = `${data.avatar}`
});