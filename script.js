const container = document.querySelector('.container')
const div = document.createElement('div')

const div1 = div.cloneNode(true)

container.appendChild(div)
container.appendChild(div1)