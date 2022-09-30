let changer = 40
let mainBar
let upperBar
let cardCopy
let littleBlueScreen
let timer

const body = document.querySelector('body')
const main = document.querySelector('.main')

function remove(block) {
    while (block.firstChild) {
        block.removeChild(block.firstChild)
    }
}
window.gameState = {
    hardness: 0
}
window.onload = () => {
hardnessPick()
}
