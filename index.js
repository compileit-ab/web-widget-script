const container = document.querySelector('div[data-bcf-business-id]')
// container.style.width ='400px'
// container.style.height='300px'
const companyName = container.getAttribute('data-bcf-business-id')
const language = container.getAttribute('data-widget-language')
const link = document.querySelector('div[data-bcf-business-id] > a')
const img = document.createElement('img')
// very important to include the date at the end to avoid getting old cached image
const date = new Date()
let imgSrc = ''
if (language !== 'en') {
  imgSrc = `https://web-widget-image-bucket.s3.eu-north-1.amazonaws.com/BCF-widget/companies/${companyName.toLowerCase()}/barncancerfonden-widget?date=${date}`
} else {
  imgSrc = `https://web-widget-image-bucket.s3.eu-north-1.amazonaws.com/BCF-widget/companies/${companyName.toLowerCase()}/barncancerfonden-widget-en?date=${date}`
}
img.setAttribute('src', imgSrc)
img.setAttribute('alt', 'widgetbilden')
img.style.width = '100%'
img.style.height = '100%'
link.appendChild(img)
