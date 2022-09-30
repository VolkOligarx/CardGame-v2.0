function cardsRoll() {
let card1 = './cards/6byb.jpg'
let card2 = './cards/6cher.jpg'
let card3 = './cards/6pic.jpg'
let card4 = './cards/6kre.jpg'
let card5 = './cards/7byb.jpg'
let card6 = './cards/7cher.jpg'
let card7 = './cards/7pic.jpg'
let card8 = './cards/7kre.jpg'
let card9 = './cards/8byb.jpg'
let card10 = './cards/8cher.jpg'
let card11 = './cards/8kre.jpg'
let card12 = './cards/8pic.jpg'
let card13 = './cards/9pic.jpg'
let card14 = './cards/9kre.jpg'
let card15 = './cards/9byb.jpg'
let card16 = './cards/9cher.jpg'
let card17 = './cards/10pic.jpg'
let card18 = './cards/10kre.jpg'
let card19 = './cards/10byb.jpg'
let card20 = './cards/10cher.jpg'
let card21 = './cards/Jpic.jpg'
let card22 = './cards/Jkre.jpg'
let card23 = './cards/Jbyb.jpg'
let card24 = './cards/Jcher.jpg'
let card25 = './cards/Dpic.jpg'
let card26 = './cards/Dkre.jpg'
let card27 = './cards/Dbyb.jpg'
let card28 = './cards/Dcher.jpg'
let card29 = './cards/Kpic.jpg'
let card30 = './cards/Kkre.jpg'
let card31 = './cards/Kbyb.jpg'
let card32 = './cards/Kcher.jpg'
let card33 = './cards/Tpic.jpg'
let card34 = './cards/Tkre.jpg'
let card35 = './cards/Tbyb.jpg'
let card36 = './cards/Tcher.jpg'

let cardShacker = [card1, card2, card3, card4, card5, card6, card7, card8, card9, card10, card11, card12, card13, card14, card15, card16, card17, card18, card19, card20, card21, card22, card23, card24, card25, card26, card27, card28, card29, card30, card31, card32, card33, card34, card35, card36]

let randomizer
let randomControl = []
let expander = -1
let clicker = 0
let winClicker = 0
let cardData

function check() {
    randomControl.forEach(element => {
        if (element === randomizer) {
            randomizer = Math.round(Math.random()*36)
            check()
        }
    });
}

if (window.gameState.hardness === 1) {
    let pusher = []
    for (let i = 0; i < 6; i++) {
        randomizer = Math.round(Math.random()*35)
        check()
        randomControl.push(randomizer)
        pusher.push(cardShacker[randomizer])
        pusher.push(cardShacker[randomizer])
    }
    
    pusher.sort(()=>Math.random()-0.5)
    for (let i = 0; i < pusher.length; i++) {
            let wrap = document.createElement('div')
            let front = document.createElement('div')
            let back = document.createElement('div')
            let cardBack = document.createElement('div')
    
            wrap.classList.add('wrap')
            front.classList.add('front')
            back.classList.add('back')
    
            back.style.backgroundImage = `url(${pusher[i]})`
            mainBar.appendChild(wrap)
            cardBack.appendChild(front)
            cardBack.appendChild(back)
            wrap.appendChild(cardBack)
            cardBack.classList.add('cardBack')
    }
    randomControl = []
    randomizer = 0
    mainBar.classList.add('mainBar1')
    mainBar.style.width = '66%'
    mainBar.style.marginLeft = '17%'
    mainBar.style.marginRight = '17%'
    
    setTimeout(() => {
    const showUpInterval = setInterval(() => {
        expander += 1
        mainBar.childNodes[expander].firstChild.firstChild.style.animation = 'flip-vertical-left 2s both'
        mainBar.childNodes[expander].firstChild.lastChild.style.animation = 'flip-vertical-left-back 2s both'
        if (expander === 11) {
            clearInterval(showUpInterval)
        }
    }, 200);
}, 1000);

    setTimeout(() => {
        expander = 12
    const hideInterval = setInterval(() => {
        expander = expander - 1
        mainBar.childNodes[expander].firstChild.firstChild.style.animation = 'flip-vertical-left-back 2s both'
        mainBar.childNodes[expander].firstChild.lastChild.style.animation = 'flip-vertical-left 2s both'
        if (expander === 0) {
            clearInterval(hideInterval)
        }
    }, 200);
}, 7500);

setTimeout(() => {   
let clickAnimation = document.querySelectorAll('.cardBack')
clickAnimation.forEach(element => {
    element.addEventListener('click', () => {
        element.firstChild.style.animation = 'flip-vertical-left 2s both'
        element.lastChild.style.animation = 'flip-vertical-left-back 2s both'
        clicker += 1
        winClicker += 1
        element.classList.add('chosen')
        if (winClicker === 12) {
            remove(main)
            finalScreen()
            win()
        }
        else if (cardData === element.lastChild.style.backgroundImage) {
            clicker = 0
            console.log('true');
            const comrade = document.querySelector('.comrade')
            comrade.style.color = '#a2ff03'
            comrade.style.opacity = '1'

            let randomAnimation0 = 'rotate-scale-up 2.9s both'
            let randomAnimation1 = 'rotate-scale-up-diag-1 2.9s both'
            let randomAnimation2 = 'shake-horizontal 2.9s both'
            let randomAnimation3 ='bounce-top 2.9s both'

            let randomAnimation = [randomAnimation0, randomAnimation1, randomAnimation2, randomAnimation3]

            let randomText0 = 'В точку!'
            let randomText1 = 'Вот это да!'
            let randomText2 = 'Именно!'
            let randomText3 = 'Ооо да...'
            let randomText4 = 'Та самая карта!'
            let randomText5 = 'Отличная память!'
            let randomText6 = 'Не сбавляй темп!'
            let randomText7 = 'Продолжай в том же духе!'
            let randomText8 = 'Идешь на рекорд!'
            let randomText9 = 'Еще немного...'

            let randomText = [randomText0,randomText1,randomText2,randomText3,randomText4,randomText5,randomText6,randomText7,randomText8,randomText9]

            comrade.style.animation = randomAnimation[Math.round(Math.random()*4)]
            comrade.textContent = randomText[Math.round(Math.random()*10)]

            let vanish = document.querySelectorAll('.chosen')
            vanish.forEach(card => {
                setTimeout(() => {
                card.style.animation = 'true 2s both'
                setTimeout(() => {
                    card.classList.add('ashes')
                    comrade.animation = ''
                    comrade.style.opacity = '0'
                }, 2000);
            }, 1000);
            });
        }
        else if (clicker === 2) {
            clicker = 0
            console.log('false');
            const comrade = document.querySelector('.comrade')
            comrade.textContent = 'Упс...'
            comrade.style.color = '#f75555'
            comrade.style.animation = 'false 2.9s'
            let vanish = document.querySelectorAll('.chosen')
            vanish.forEach(card => {
                setTimeout(() => {
                card.style.animation = 'false 2s both'
                setTimeout(() => {
                    card.classList.add('ashes')
                    comrade.style.animation = ''
                    comrade.style.color =''
                    remove(mainBar)
                    finalScreen()
                    lose()
                }, 2000);
            }, 1000);
            });
        }
        cardData = element.lastChild.style.backgroundImage
        console.log(element.lastChild.style.backgroundImage);
    })
});
}, 11000);
}

if (window.gameState.hardness === 2) {
    let pusher = []
    for (let i = 0; i < 12; i++) {
        randomizer = Math.round(Math.random()*35)
        check()
        randomControl.push(randomizer)
        pusher.push(cardShacker[randomizer])
        pusher.push(cardShacker[randomizer])
    }
    
    pusher.sort(()=>Math.random()-0.5)
    for (let i = 0; i < pusher.length; i++) {
            let wrap = document.createElement('div')
            let front = document.createElement('div')
            let back = document.createElement('div')
            let cardBack = document.createElement('div')
    
            wrap.classList.add('wrap')
            front.classList.add('front')
            back.classList.add('back')
    
            back.style.backgroundImage = `url(${pusher[i]})`
            mainBar.appendChild(wrap)
            cardBack.appendChild(front)
            cardBack.appendChild(back)
            wrap.appendChild(cardBack)
            cardBack.classList.add('cardBack')
    }
    randomControl = []
    randomizer = 0
    mainBar.classList.add('mainBar1')
    mainBar.style.width = '66%'
    mainBar.style.marginLeft = '17%'
    mainBar.style.marginRight = '17%'
    
    setTimeout(() => {
    const showUpInterval = setInterval(() => {
        expander += 1
        mainBar.childNodes[expander].firstChild.firstChild.style.animation = 'flip-vertical-left 2s both'
        mainBar.childNodes[expander].firstChild.lastChild.style.animation = 'flip-vertical-left-back 2s both'
        if (expander === 23) {
            clearInterval(showUpInterval)
        }
    }, 200);
}, 1000);

    setTimeout(() => {
        expander = 24
    const hideInterval = setInterval(() => {
        expander = expander - 1
        mainBar.childNodes[expander].firstChild.firstChild.style.animation = 'flip-vertical-left-back 2s both'
        mainBar.childNodes[expander].firstChild.lastChild.style.animation = 'flip-vertical-left 2s both'
        if (expander === 0) {
            clearInterval(hideInterval)
        }
    }, 200);
}, 15000);

setTimeout(() => {   
let clickAnimation = document.querySelectorAll('.cardBack')
clickAnimation.forEach(element => {
    element.addEventListener('click', () => {
        element.firstChild.style.animation = 'flip-vertical-left 2s both'
        element.lastChild.style.animation = 'flip-vertical-left-back 2s both'
        clicker += 1
        winClicker += 1
        element.classList.add('chosen')
        if (winClicker === 24) {
            remove(main)
            finalScreen()
            win()
        }
        else if (cardData === element.lastChild.style.backgroundImage) {
            clicker = 0
            console.log('true');
            const comrade = document.querySelector('.comrade')
            comrade.style.color = '#a2ff03'
            comrade.style.opacity = '1'

            let randomAnimation0 = 'rotate-scale-up 2.9s both'
            let randomAnimation1 = 'rotate-scale-up-diag-1 2.9s both'
            let randomAnimation2 = 'shake-horizontal 2.9s both'
            let randomAnimation3 ='bounce-top 2.9s both'

            let randomAnimation = [randomAnimation0, randomAnimation1, randomAnimation2, randomAnimation3]

            let randomText0 = 'В точку!'
            let randomText1 = 'Вот это да!'
            let randomText2 = 'Именно!'
            let randomText3 = 'Ооо да...'
            let randomText4 = 'Та самая карта!'
            let randomText5 = 'Отличная память!'
            let randomText6 = 'Не сбавляй темп!'
            let randomText7 = 'Продолжай в том же духе!'
            let randomText8 = 'Идешь на рекорд!'
            let randomText9 = 'Еще немного...'

            let randomText = [randomText0,randomText1,randomText2,randomText3,randomText4,randomText5,randomText6,randomText7,randomText8,randomText9]

            comrade.style.animation = randomAnimation[Math.round(Math.random()*4)]
            comrade.textContent = randomText[Math.round(Math.random()*10)]

            let vanish = document.querySelectorAll('.chosen')
            vanish.forEach(card => {
                setTimeout(() => {
                card.style.animation = 'true 2s both'
                setTimeout(() => {
                    card.classList.add('ashes')
                    comrade.animation = ''
                    comrade.style.opacity = '0'
                }, 2000);
            }, 1000);
            });
        }
        else if (clicker === 2) {
            clicker = 0
            console.log('false');
            const comrade = document.querySelector('.comrade')
            comrade.textContent = 'Упс...'
            comrade.style.color = '#f75555'
            comrade.style.animation = 'false 2.9s'
            let vanish = document.querySelectorAll('.chosen')
            vanish.forEach(card => {
                setTimeout(() => {
                card.style.animation = 'false 2s both'
                setTimeout(() => {
                    card.classList.add('ashes')
                    comrade.style.animation = ''
                    comrade.style.color =''
                    remove(mainBar)
                    finalScreen()
                    lose()
                }, 2000);
            }, 1000);
            });
        }
        cardData = element.lastChild.style.backgroundImage
        console.log(element.lastChild.style.backgroundImage);
    })
});
}, 16000);
}

if (window.gameState.hardness === 3) {
    let pusher = []
    for (let i = 0; i < 18; i++) {
        randomizer = Math.round(Math.random()*35)
        check()
        randomControl.push(randomizer)
        pusher.push(cardShacker[randomizer])
        pusher.push(cardShacker[randomizer])
    }
    
    pusher.sort(()=>Math.random()-0.5)
    for (let i = 0; i < pusher.length; i++) {
            let wrap = document.createElement('div')
            let front = document.createElement('div')
            let back = document.createElement('div')
            let cardBack = document.createElement('div')
    
            wrap.classList.add('wrap')
            front.classList.add('front')
            back.classList.add('back')
    
            back.style.backgroundImage = `url(${pusher[i]})`
            mainBar.appendChild(wrap)
            cardBack.appendChild(front)
            cardBack.appendChild(back)
            wrap.appendChild(cardBack)
            cardBack.classList.add('cardBack')
    }
    randomControl = []
    randomizer = 0
    mainBar.classList.add('mainBar3')
    mainBar.style.width = '100%'
    
    setTimeout(() => {
    const showUpInterval = setInterval(() => {
        expander += 1
        mainBar.childNodes[expander].firstChild.firstChild.style.animation = 'flip-vertical-left 2s both'
        mainBar.childNodes[expander].firstChild.lastChild.style.animation = 'flip-vertical-left-back 2s both'
        if (expander === 35) {
            clearInterval(showUpInterval)
        }
    }, 200);
}, 1000);

    setTimeout(() => {
        expander = 36
    const hideInterval = setInterval(() => {
        expander = expander - 1
        mainBar.childNodes[expander].firstChild.firstChild.style.animation = 'flip-vertical-left-back 2s both'
        mainBar.childNodes[expander].firstChild.lastChild.style.animation = 'flip-vertical-left 2s both'
        if (expander === 0) {
            clearInterval(hideInterval)
        }
    }, 200);
}, 30000);

setTimeout(() => {   
let clickAnimation = document.querySelectorAll('.cardBack')
clickAnimation.forEach(element => {
    element.addEventListener('click', () => {
        element.firstChild.style.animation = 'flip-vertical-left 2s both'
        element.lastChild.style.animation = 'flip-vertical-left-back 2s both'
        clicker += 1
        winClicker += 1
        element.classList.add('chosen')
        if (winClicker === 36) {
            remove(main)
            finalScreen()
            win()
        }
        else if (cardData === element.lastChild.style.backgroundImage) {
            clicker = 0
            console.log('true');
            const comrade = document.querySelector('.comrade')
            comrade.style.color = '#a2ff03'
            comrade.style.opacity = '1'

            let randomAnimation0 = 'rotate-scale-up 2.9s both'
            let randomAnimation1 = 'rotate-scale-up-diag-1 2.9s both'
            let randomAnimation2 = 'shake-horizontal 2.9s both'
            let randomAnimation3 ='bounce-top 2.9s both'

            let randomAnimation = [randomAnimation0, randomAnimation1, randomAnimation2, randomAnimation3]

            let randomText0 = 'В точку!'
            let randomText1 = 'Вот это да!'
            let randomText2 = 'Именно!'
            let randomText3 = 'Ооо да...'
            let randomText4 = 'Та самая карта!'
            let randomText5 = 'Отличная память!'
            let randomText6 = 'Не сбавляй темп!'
            let randomText7 = 'Продолжай в том же духе!'
            let randomText8 = 'Идешь на рекорд!'
            let randomText9 = 'Еще немного...'

            let randomText = [randomText0,randomText1,randomText2,randomText3,randomText4,randomText5,randomText6,randomText7,randomText8,randomText9]

            comrade.style.animation = randomAnimation[Math.round(Math.random()*4)]
            comrade.textContent = randomText[Math.round(Math.random()*10)]

            let vanish = document.querySelectorAll('.chosen')
            vanish.forEach(card => {
                setTimeout(() => {
                card.style.animation = 'true 2s both'
                setTimeout(() => {
                    card.classList.add('ashes')
                    comrade.animation = ''
                    comrade.style.opacity = '0'
                }, 2000);
            }, 1000);
            });
        }
        else if (clicker === 2) {
            clicker = 0
            console.log('false');
            const comrade = document.querySelector('.comrade')
            comrade.textContent = 'Упс...'
            comrade.style.color = '#f75555'
            comrade.style.animation = 'false 2.9s'
            let vanish = document.querySelectorAll('.chosen')
            vanish.forEach(card => {
                setTimeout(() => {
                card.style.animation = 'false 2s both'
                setTimeout(() => {
                    card.classList.add('ashes')
                    comrade.style.animation = ''
                    comrade.style.color =''
                    remove(mainBar)
                    finalScreen()
                    lose()
                }, 2000);
            }, 1000);
            });
        }
        cardData = element.lastChild.style.backgroundImage
        console.log(element.lastChild.style.backgroundImage);
    })
});
}, 31000);
}
}