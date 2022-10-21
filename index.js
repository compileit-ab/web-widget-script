const container = document.querySelector("div[data-business-id='David']")
container.style.display='flex'
container.style.width ='300px'
container.style.height='200px'
const link = document.querySelector("div[data-business-id='David'] > a")
const img = document.createElement('img')
img.setAttribute('src', 'https://images.unsplash.com/photo-1495653797063-114787b77b23?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')
img.style.width='300px'
img.style.height='200px'
img.style.objectFit='contain'
link.appendChild(img)
