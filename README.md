> _Fork_ deze leertaak en ga aan de slag. Onderstaande outline ga je gedurende deze taak in jouw eigen GitHub omgeving uitwerken. De instructie vind je in: [docs/INSTRUCTIONS.md](docs/INSTRUCTIONS.md)

# UI Stack van een visitekaartje
Een visitekaartje met verschillende states van de UI-Stack.

## Wireflow
Toen ik mijn visitekaartje van deze sprint bekeek ben ik erachter gekomen dat het visitekaartje veel informatie heeft. Daarom wou ik voor deze opdracht een nieuw visitekaartje maken met minder informatie. Ik heb een empty state en een Loading state geschetst voor het nieuwe ontwerp van het visitekaartje.

![IMG_1404](https://user-images.githubusercontent.com/69635977/160109399-e40e80cf-3772-4cca-9a88-729d1ff58062.jpg)

![IMG_1405](https://user-images.githubusercontent.com/69635977/160109428-8613851e-2d2e-453c-a84e-292c2bdc257c.JPG)

![IMG_1406](https://user-images.githubusercontent.com/69635977/160109437-2e90cd8b-1c07-4d58-a3bf-847b8b9d8a55.jpg)

## Breakdown

![IMG_1447](https://user-images.githubusercontent.com/69635977/162714242-afb6acc0-47a5-45b1-a3b4-04d5062a979f.jpg)

## Code 
```javascript
// Business card api
const apiBase = 'https://tribe.api.fdnd.nl/v1/member'
const businessCardData = document.querySelector('.business-card');
// Loading state
const loadingState = document.querySelector('.loading-state')
loadingState.classList.add('loading-show')
// Empty state
const emptyState = document.querySelector('.empty-state')
emptyState.classList.add('empty-dissapear')
// Error state
const errorState = document.querySelector('.error-state')

renderMembers()

async function getMembers() {
		try {
			const response = await fetch(apiBase)
			const data = await response.json()
    	return data.data
		} catch (error) {
			errorState.classList.add('error-show')
		}
    
}

async function renderMembers() {
  const members = await getMembers()
	// Hide loading
	loadingState.classList.remove('loading-show')
	// Filter and render members
      members.filter((member) => {
				return member.memberId === 13
			})
			.map((member) => {
        // Create a HTML business card
        businessCardData.insertAdjacentHTML('beforeend',
            `
		<section class="information">
			<h1>${member.name} ${member.prefix} ${member.surname}</h1>
			<h2>Frontend Developer</h2>
			<a href="${member.githubHandle}" target="_blank">${member.githubHandle}</a>
			<h3>Bio</h3>
			<p>${member.bio}</p>
			<img class="image-pig" src="assets/daphne-pig.png">
		</section>
		<section class="illustration">
			<img class="image-avatar" src="${member.avatar}" alt="">
		</section>
        `
        )
    })
}
```
## Licentie

![GNU GPL V3](https://www.gnu.org/graphics/gplv3-127x51.png)

This work is licensed under [GNU GPLv3](./LICENSE).
