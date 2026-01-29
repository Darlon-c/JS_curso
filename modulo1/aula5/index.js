const paragrafos = document.querySelector('.paragrafos')
const tagP = paragrafos.querySelectorAll('p')

const styleBody = getComputedStyle(document.body)
const bodyBackground = styleBody.backgroundColor

console.log(bodyBackground)


for (let p of tagP) {
    p.style.backgroundColor = bodyBackground
}
    
