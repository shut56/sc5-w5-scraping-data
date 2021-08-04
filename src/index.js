console.log("Test")

document.querySelector('body').style = undefined

document.querySelector('p').textContent = 'New text 1'
// document.querySelector('.first-block').textContent = 'New text'
// document.querySelector('#my-block').textContent = 'New text'

const nameList = Array
  .from(document.querySelectorAll('ol > li'))
  .map((htmlElem) => htmlElem.textContent)

console.log(nameList)

// document.getElementById('my-block') // Получение элемента по айди (самый быстрый)  
// document.getElementsByClassName('first-block') // Получение элементов по классу  
// document.getElementsByTagName('p') // Получение элементов по тегу  

// console.log(document.querySelector('#example').textContent)
// console.log(document.querySelector('#example').innerText)

const domElement = document.querySelector('#elem4')
const domElementClasses = domElement.getAttribute('class')
const ind = 'indigo'
console.log(domElementClasses.indexOf(ind) > -1)
console.log(domElement.getAttribute('pepe-power'))

const image = document.querySelector('img')
console.log(image.getAttribute('src'))

console.log(document.querySelector('#elem3').getAttribute('class'))
console.log(document.querySelector('#elem3').className)

console.log(document.querySelector('#elem3').getAttribute('id'))
console.log(document.querySelector('#elem3').id)

document.querySelector('h1').setAttribute('class', 'rose')

document.querySelector('body').removeAttribute('style')

const arr = new Array(7).fill(null)

console.log(arr)

arr.forEach((_, index) => {
  const newPhoto = document.createElement('img')
  newPhoto.alt = `photo${index}`
  newPhoto.src = 'https://source.unsplash.com/400x600'

  document.querySelector('.gallery').appendChild(newPhoto)
})

const gal = document.querySelector('.gallery')
const ch = document.querySelector('*[alt="photo0"]')

gal.removeChild(ch)

const ch1 = document.querySelector('#link')
console.log(ch1)
const all = ch1.parentNode
console.log(all)

const btn = document.querySelector('button')

const eFunc = () => {
  gal.removeChild(gal.childNodes[gal.childNodes.length - 1])
  console.log('Photo was deleted')
}

btn.addEventListener('click', eFunc)
