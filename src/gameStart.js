function gameStart() {
    main.classList.remove('mainHardnessPick')
    remove(main)
    upperBar = document.createElement('div')
    const timer = document.createElement('input')
    const min = document.createElement('p')
    const sec = document.createElement('p')
    const minSecBar = document.createElement('div')
    const timerBar = document.createElement('div')
    mainBar = document.createElement('div')
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

    // delete
    restartButton.addEventListener('click', () => {
        remove(mainBar)
        cardsRoll()    
    })

    // let base = 60;
    // let clocktimer, dateObj, dh, dm, ds
    // let readout = ''
    // let h = 1,
    //     m = 1,
    //     tm = 1,
    //     s = 0,
    //     ts = 0,
    //     ms = 0,
    //     init = 0;

    //     function ClearСlock() {
    //         clearTimeout(clocktimer);
    //         h = 1;
    //         m = 1;
    //         tm = 1;
    //         s = 0;
    //         ts = 0;
    //         ms = 0;
    //         init = 0;
    //         readout = '00:00:00';
    //         document.timer.value = readout;
    //       }
    //     function StartTIME() {
    // let cdateObj = new Date();
    // let t = (cdateObj.getTime() - dateObj.getTime()) - (s * 1000);
    // if (t > 999) {
    //     s++;
    // }
    // if (s >= (m * base)) {
    //     ts = 0;
    //     m++;
    // } else {
    //     ts = parseInt((ms / 100) + s);
    //     if (ts >= base) {
    //     ts = ts - ((m - 1) * base);
    //     }
    // }
    // if (m > (h * base)) {
    //     tm = 1;
    //     h++;
    // } else {
    //     tm = parseInt((ms / 100) + m);
    //     if (tm >= base) {
    //     tm = tm - ((h - 1) * base);
    //     }
    // }
    // ms = Math.round(t / 10);
    // if (ms > 99) {
    //     ms = 0;
    // }
    // if (ms == 0) {
    //     ms = '00';
    // }
    // if (ms > 0 && ms <= 9) {
    //     ms = '0' + ms;
    // }
    // if (ts > 0) {
    //     ds = ts;
    //     if (ts < 10) {
    //     ds = '0' + ts;
    //     }
    // } else {
    //     ds = '00';
    // }
    // dm = tm - 1;
    // if (dm > 0) {
    //     if (dm < 10) {
    //     dm = '0' + dm;
    //     }
    // } else {
    //     dm = '00';
    // }
    // dh = h - 1;
    // if (dh > 0) {
    //     if (dh < 10) {
    //     dh = '0' + dh;
    //     }
    // } else {
    //     dh = '00';
    // }
    // readout = dh + ':' + dm + ':' + ds;
    // document.MyForm.stopwatch.value = readout;
    // clocktimer = setTimeout("StartTIME()", 1);
    // }
    // function StartStop() {
    //     if (init == 0) {
    //       ClearСlock();
    //       dateObj = new Date();
    //       StartTIME();
    //       init = 1;
    //     } else {
    //       clearTimeout(clocktimer);
    //       init = 0;
    //     }
    //   }
    //   window.onload = () => {
    //     StartStop();
    //   }
    }
