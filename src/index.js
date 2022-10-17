import { hardnessPick } from './hardnessPick.js'
import { finalScreen } from './finalScreen.js'
import { win } from './finalScreen.js'
import { lose } from './finalScreen.js'
import { timerFunct } from './gameStart.js'

export const body = document.querySelector('body')
export const main = document.querySelector('.main')

export let changer = 40
export let mainBar = document.createElement('div')
export let upperBar = document.createElement('div')
export let cardCopy
export let littleBlueScreen = document.createElement('div')
export let timer = document.createElement('input')

export function remove(block) {
    while (block.firstChild) {
        block.removeChild(block.firstChild)
    }
}

window.onload = () => {
    hardnessPick()
}
