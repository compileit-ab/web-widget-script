const container = document.querySelector("div[data-bcf-business-id]")
// container.style.width ='400px'
// container.style.height='300px'
const companyName= container.getAttribute('data-bcf-business-id')
const link = document.querySelector("div[data-bcf-business-id] > a")
const img = document.createElement('img')
img.setAttribute('src', `https://res.cloudinary.com/barncancerfonden/image/upload/BCF-widget/${companyName.toLowerCase()}/barncancerfonden.jpg`)
img.style.width='100%'
img.style.height='100%'
link.appendChild(img)
