import { hardnessPick } from "./hardnessPick.ts";
import { timerFunct } from "./gameStart.ts";

export function finalScreen(obj: any) {
    littleBlueScreen = document.createElement('div')

    main.classList.add('mainOpacity')
    littleBlueScreen.classList.add('littleBlueScreen')

    body.appendChild(littleBlueScreen)
}

export function lose(obj: any) {
    const loseImg = document.createElement('img')
    const loseText = document.createElement('div')
    const spentTime = document.createElement('div')
    const yourTime = document.createElement('div')
    const finalRestartButton = document.createElement('button')

    loseImg.setAttribute('src', './images/loseImg.png')
    finalRestartButton.style.marginRight = '0.1px'
    finalRestartButton.style.marginBottom = '48px'
    finalRestartButton.style.marginTop = '40px'
    loseImg.style.marginTop = '30px'

    loseText.classList.add('finalText')
    spentTime.classList.add('spentTime')
    yourTime.classList.add('yourTime')
    finalRestartButton.classList.add('restartButton')

    loseText.textContent = 'Вы проиграли!'
    spentTime.textContent = 'Затраченное время:'
    yourTime.textContent = timer.value
    clearInterval(timerEngine)
    finalRestartButton.textContent = 'Играть снова'

    finalRestartButton.addEventListener('click', () => {
        main.classList.remove('mainOpacity')
        let deleteShit = document.querySelectorAll('.littleBlueScreen')
        deleteShit.forEach((element)=>{
            remove(element)
            element.classList.remove('littleBlueScreen')})
        remove(main)
        hardnessPick()
    })

    littleBlueScreen.appendChild(loseImg)
    littleBlueScreen.appendChild(loseText)
    littleBlueScreen.appendChild(spentTime)
    littleBlueScreen.appendChild(yourTime)
    littleBlueScreen.appendChild(finalRestartButton)
}

export function win(obj: any) {
    const winImg = document.createElement('img')
    const winText = document.createElement('div')
    const spentTime = document.createElement('div')
    const yourTime = document.createElement('div')
    const finalRestartButton = document.createElement('button')

    winImg.setAttribute('src', './images/winImg.png')
    finalRestartButton.style.marginRight = '0.1px'
    finalRestartButton.style.marginBottom = '48px'
    finalRestartButton.style.marginTop = '40px'
    winImg.style.marginTop = '30px'

    winText.classList.add('finalText')
    spentTime.classList.add('spentTime')
    yourTime.classList.add('yourTime')
    finalRestartButton.classList.add('restartButton')

    winText.textContent = 'Вы выиграли!'
    spentTime.textContent = 'Затраченное время:'
    yourTime.textContent = timer.value
    clearInterval(timerEngine)
    finalRestartButton.textContent = 'Играть снова'

    finalRestartButton.addEventListener('click', () => {
        main.classList.remove('mainOpacity')
        let deleteShit = document.querySelectorAll('.littleBlueScreen')
        deleteShit.forEach((element)=>{
            remove(element)
            element.classList.remove('littleBlueScreen')})
        remove(main)
        hardnessPick()
    })

    littleBlueScreen.appendChild(winImg)
    littleBlueScreen.appendChild(winText)
    littleBlueScreen.appendChild(spentTime)
    littleBlueScreen.appendChild(yourTime)
    littleBlueScreen.appendChild(finalRestartButton)
}
