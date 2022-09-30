function finalScreen() {
    const littleBlueScreen = document.createElement('div')

    main.classList.add('mainOpacity')
    littleBlueScreen.classList.add('littleBlueScreen')

    body.appendChild(littleBlueScreen)

    littleBlueScreen.addEventListener('click', () => {
        main.classList.remove('mainOpacity')
        body.removeChild(littleBlueScreen)
    })
}