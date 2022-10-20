const container = document.querySelector("div[data-business-id='David']")
container.style.display='flex'
container.style.width ='300px'
container.style.height='200px'
const link = document.querySelector("div[data-business-id='David'] > a")
const img = document.createElement('img')
img.setAttribute('src', 'https://res.cloudinary.com/barncancerfonden/image/upload/v1666016270/BCF-widget/admin/xbkyh7nb6ripm9hjdyck.png')
img.style.width='300px'
img.style.height='200px'
img.style.objectFit='contain'
link.appendChild(img)
