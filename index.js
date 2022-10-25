const container = document.querySelector("div[data-bcf-business-id]")
// container.style.width ='400px'
// container.style.height='300px'
const companyName= container.getAttribute('data-bcf-business-id')
const link = document.querySelector("div[data-bcf-business-id] > a")
const img = document.createElement('img')
// very important to include the date at the end to avoid getting old cached image
const date= new Date()
const imgSrc =`https://res.cloudinary.com/barncancerfonden/image/upload/BCF-widget/${companyName.toLowerCase()}/barncancerfonden.jpg?date=${date}`
img.removeAttribute('src')
img.setAttribute('src', imgSrc )
img.style.width='100%'
img.style.height='100%'
link.appendChild(img)
