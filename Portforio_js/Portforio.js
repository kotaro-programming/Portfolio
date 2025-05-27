const loadingAreaWhite = document.querySelector("#loading");
const loadingAreaPink = document.querySelector('#loading-screen');
const loadingText = document.querySelector('#loading p');

window.addEventListener('load', () =>{
    loadingAreaWhite.animate(
        {
            opacity: [1,0],
            visibility: 'hidden',
        },
        {
            duration: 2000,
            delay: 1200,
            easing: 'ease',
            fill: 'forwards',
        }
    );
    loadingAreaPink.animate(
        {
            translate: ['0 100vh','0 0','0 -100vh']
        },
        {
            duration: 2000,
            delay: 800,
            easing: 'ease',
            fill: 'forwards',
        }
    );
    loadingText.animate(
        [
            {
                opacity: 1,
                offsef: .8
            },
            {
                opacity: 0,
                offset: 1
            },
        ],
        {
            duration: 1200,
            easing: 'ease',
            fill: 'forwards',
        }
    );
});

const menuOpen = document.querySelector('#menu-open');
const menuClose = document.querySelector('#menu-close');
const menuPanel = document.querySelector('#menu-panel');
const menuOptions = {
    duration: 1400,
    easing: 'ease',
    fill: 'forwards',
};

menuOpen.addEventListener('click',() =>{
    //console.log('メニューを開く');
    menuPanel.animate({translate: ['100vw',0]},menuOptions);
    menuOpen.animate({opacity: [1,0]},menuOptions);
});

menuClose.addEventListener('click', () =>{
    menuPanel.animate({translate: [0,'100vw']},menuOptions);
    menuOpen.animate({opacity: [0,1]},menuOptions);
});
