const container = document.querySelector("div[data-business-id='David']")
container.style.display='flex'
container.style.width ='300px'
container.style.height='200px'
const link = document.querySelector("div[data-business-id='David'] > a")
const img = document.createElement('img')
img.setAttribute('src', 'https://images.unsplash.com/photo-1598885159329-9377168ac375?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y2FuY2VyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60')
img.style.width='300px'
img.style.height='200px'
img.style.objectFit='contain'
link.appendChild(img)
