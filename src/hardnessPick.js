// @ts-nocheck
import { gameStart } from './gameStart.js'
import { timerFunct } from './gameStart.js'

import { body } from './index.js'
import { main } from './index.js'
import { changer } from './index.js'
import { mainBar } from './index.js'
import { upperBar } from './index.js'
import { cardCopy } from './index.js'
import { littleBlueScreen } from './index.js'
import { timer } from './index.js'
import { remove } from './index.js'

export function hardnessPick() {
    remove(main)
    clearInterval(timerEngine)
    const numbers = document.createElement('div')
    const pick = document.createElement('p')
    const first = document.createElement('div')
    const second = document.createElement('div')
    const third = document.createElement('div')
    const startButton = document.createElement('button')

    first.classList.add('picker', 'first')
    second.classList.add('picker', 'second')
    third.classList.add('picker', 'third')
    startButton.classList.add('startButton')
    main.classList.add('mainHardnessPick')
    numbers.classList.add('numbers')
    pick.classList.add('pick')

    pick.textContent = 'Выбери сложность'
    first.textContent = '1'
    second.textContent = '2'
    third.textContent = '3'
    startButton.textContent = 'Старт'

    first.addEventListener('click', () => {
        first.classList.add('colorChanger')
        second.classList.remove('colorChanger', 'pickAfterPick')
        third.classList.remove('colorChanger', 'pickAfterPick')
        first.classList.add('pickAfterPick')
        window.gameState.hardness = 1
    })
    second.addEventListener('click', () => {
        first.classList.remove('colorChanger', 'pickAfterPick')
        second.classList.add('colorChanger', 'pickAfterPick')
        third.classList.remove('colorChanger', 'pickAfterPick')
        second.classList.add('pickAfterPick')
        window.gameState.hardness = 2
    })
    third.addEventListener('click', () => {
        first.classList.remove('colorChanger', 'pickAfterPick')
        second.classList.remove('colorChanger', 'pickAfterPick')
        third.classList.add('colorChanger')
        third.classList.add('pickAfterPick')
        window.gameState.hardness = 3
    })
    startButton.addEventListener('click', (event) => {
        event.preventDefault()
        if (window.gameState.hardness !== 0) {
            return gameStart()
        } else {
            pick.style.color = 'red'
            pick.style.fontSize = 45 + 'px'
        }
    })

    main.appendChild(pick)
    main.appendChild(numbers)
    main.appendChild(startButton)
    numbers.appendChild(first)
    numbers.appendChild(second)
    numbers.appendChild(third)
}
