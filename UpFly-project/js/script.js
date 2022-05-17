document.addEventListener('DOMContentLoaded', () => {

    const burgerContainer = document.querySelector('.burger-container-mini');
    const krest = document.querySelector('.krest');
    const burgerMenu = document.querySelector('.burger-menu');

    burgerMenu.addEventListener('click', () => {
        burgerContainer.style.display = 'block';
        burgerContainer.classList.remove('burger-container-minitranslateMinus');
        burgerContainer.classList.add('burger-container-mini-translatePlus');
        document.body.style.background = 'rgba(54, 54, 54, 0.2)';
    });

    krest.addEventListener('click', () => {
        burgerContainer.classList.remove('burger-container-mini-translatePlus');
        burgerContainer.classList.add('burger-container-minitranslateMinus');
        setTimeout(() => {
            burgerContainer.style.display = 'none';
        }, 650);
        document.body.style.background = '#F6F6F5';
    })

    // burgerContainer.addEventListener('click', () =>{
    //     const _BurgerContainer = burgerContainer.addEventListener('click') = true; 
    //     if ( !_BurgerContainer) {
    //         burgerContainer.classList.remove('burger-container-mini-translatePlus');
    //         burgerContainer.classList.add('burger-container-minitranslateMinus');
    //         setTimeout(() => {
    //             burgerContainer.style.display = 'none';
    //         }, 650);
    //         document.body.style.background = '#F6F6F5';
    //     }
    // } )


})

