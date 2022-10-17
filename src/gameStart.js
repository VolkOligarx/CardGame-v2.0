// @ts-nocheck
import { hardnessPick } from './hardnessPick.js'
import { cardsRoll } from './cards.js'

import { body } from './index.js'
import { main } from './index.js'
import { changer } from './index.js'
import { mainBar } from './index.js'
import { upperBar } from './index.js'
import { cardCopy } from './index.js'
import { littleBlueScreen } from './index.js'
import { timer } from './index.js'
import { remove } from './index.js'

export function gameStart() {
    main.classList.remove('mainHardnessPick')
    remove(main)
    clearInterval(timerEngine)
    const min = document.createElement('p')
    const sec = document.createElement('p')
    const minSecBar = document.createElement('div')
    const timerBar = document.createElement('div')
    const restartButton = document.createElement('button')
    const comrade = document.createElement('div')

    timer.classList.add('timer')
    timerBar.classList.add('timerBar')
    upperBar.classList.add('upperBar')
    mainBar.classList.add('mainBar')
    minSecBar.classList.add('minSecBar')
    min.classList.add('upperBarText')
    sec.classList.add('upperBarText')
    restartButton.classList.add('restartButton')
    comrade.classList.add('comrade')

    sec.textContent = 'sek'
    min.textContent = 'min'
    restartButton.textContent = 'Начать заново'

    timer.setAttribute('name', 'stopwatch')
    timer.setAttribute('size', '1')
    timer.setAttribute('value', '00.00')
    timer.setAttribute('disabled', 'disabled')

    timerBar.appendChild(timer)
    timerBar.appendChild(minSecBar)
    minSecBar.appendChild(min)
    minSecBar.appendChild(sec)
    upperBar.appendChild(timerBar)
    upperBar.appendChild(comrade)
    upperBar.appendChild(restartButton)
    main.appendChild(upperBar)
    main.appendChild(mainBar)

    cardsRoll()

    restartButton.addEventListener('click', () => {
        remove(upperBar)
        remove(mainBar)
        hardnessPick()
    })
}

export function timerFunct() {
    timerEngine = setInterval(() => {
        if (clocker >= 0.6) {
            clocker = 0.01
            minClocker += 1
        }
        timer.value = '0' + minClocker + clocker.toFixed(2).substring(1)
        clocker += 0.01
    }, 1000)
}
