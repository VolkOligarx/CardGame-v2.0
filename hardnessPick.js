function hardnessPick() {
    remove(main);
    const numbers = document.createElement('div');
    const pick = document.createElement('p');
    const first = document.createElement('div');
    const second = document.createElement('div');
    const third = document.createElement('div');
    const startButton = document.createElement('button');

    first.classList.add('picker');
    second.classList.add('picker');
    third.classList.add('picker');
    startButton.classList.add('startButton');

    pick.textContent = 'Выбери сложность';
    first.textContent = '1';
    second.textContent = '2';
    third.textContent = '3';
    startButton.textContent = 'Старт';

    main.style.display = 'flex';
    main.style.flexDirection = 'column';
    main.style.alignContent = 'center';
    main.style.justifyContent = 'center';
    main.style.alignItems = 'center';
    main.style.background = '#C2F5FF';
    main.style.width = '50vw';
    main.style.height = '50vh';
    main.style.gap = '5vh';

    numbers.style.display = 'flex';
    numbers.style.alignContent = 'center';
    numbers.style.justifyContent = 'center';
    numbers.style.alignItems = 'center';
    numbers.style.gap = '24px';

    pick.style.width = '20vw';
    pick.style.fontFamily = 'StratosSkyeng';
    pick.style.fontStyle = 'normal';
    pick.style.fontWeight = '400';
    pick.style.fontSize = '40px';
    pick.style.lineHeight = '48px';
    pick.style.textAlign = 'center';
    pick.style.color = '#004980';
    pick.style.margin = '0px';

    first.style.width = '10vw';
    first.style.height = '10vh';
    first.style.display = 'flex';
    first.style.alignContent = 'center';
    first.style.justifyContent = 'center';
    first.style.alignItems = 'center';
    first.style.fontFamily = 'StratosSkyeng';
    first.style.fontStyle = 'normal';
    first.style.fontWeight = '400';
    first.style.fontSize = '64px';
    first.style.lineHeight = '72px';
    first.style.borderRadius = '12px';

    second.style.width = '10vw';
    second.style.height = '10vh';
    second.style.display = 'flex';
    second.style.alignContent = 'center';
    second.style.justifyContent = 'center';
    second.style.alignItems = 'center';
    second.style.fontFamily = 'StratosSkyeng';
    second.style.fontStyle = 'normal';
    second.style.fontWeight = '400';
    second.style.fontSize = '64px';
    second.style.lineHeight = '72px';
    second.style.borderRadius = '12px';

    third.style.width = '10vw';
    third.style.height = '10vh';
    third.style.display = 'flex';
    third.style.alignContent = 'center';
    third.style.justifyContent = 'center';
    third.style.alignItems = 'center';
    third.style.fontFamily = 'StratosSkyeng';
    third.style.fontStyle = 'normal';
    third.style.fontWeight = '400';
    third.style.fontSize = '64px';
    third.style.lineHeight = '72px';
    third.style.borderRadius = '12px';

    startButton.style.width = '25vw';
    startButton.style.height = '5vh';
    startButton.style.background = '#7AC100';
    startButton.style.borderRadius = '12px';
    startButton.style.fontFamily = 'StratosSkyeng';
    startButton.style.fontStyle = 'normal';
    startButton.style.fontWeight = '400';
    startButton.style.fontSize = '24px';
    startButton.style.lineHeight = '32px';
    startButton.style.color = '#FFFFFF';
    startButton.style.display = 'flex';
    startButton.style.alignItems = 'center';
    startButton.style.textAlign = 'center';
    startButton.style.justifyContent = 'center';

    first.addEventListener('click', () => {
        first.classList.add('colorChanger');
        second.classList.remove('colorChanger');
        third.classList.remove('colorChanger');
    })
    second.addEventListener('click', () => {
        first.classList.remove('colorChanger');
        second.classList.add('colorChanger');
        third.classList.remove('colorChanger');
    })
    third.addEventListener('click', () => {
        first.classList.remove('colorChanger');
        second.classList.remove('colorChanger');
        third.classList.add('colorChanger');
    })

    main.appendChild(pick);
    main.appendChild(numbers);
    main.appendChild(startButton);
    numbers.appendChild(first);
    numbers.appendChild(second);
    numbers.appendChild(third);
}