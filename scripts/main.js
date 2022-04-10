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
							<h2>${member.name} ${member.prefix} ${member.surname}</h2>
							<h3>Frontend Developer</h3>
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