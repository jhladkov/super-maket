
const  isMobile = {
    Android: function () {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
        return (
            isMobile.Android () ||
            isMobile.BlackBerry()  ||
            isMobile.iOS() ||
            isMobile.Opera() ||
            isMobile.Windows()
        )
    }
};
if (isMobile.any()) {
    document.body.classList.add('touch');
}else {
    document.body.classList.add('pc')
}
const headerTop = document.querySelector('.header-top');
const menuBurger = document.querySelector('.header-menu-burger')
menuBurger.onclick = () =>{
menuBurger.classList.toggle('active');
headerTop.classList.toggle('block');
document.body.classList.toggle('lock')
}

const menuLinks = document.querySelectorAll('.header-menu-list-title-link[data-goto]');
    menuLinks.forEach(item => {
        item.addEventListener('click', onMenuLikClick);
    });
    function onMenuLikClick (e) {
        const menuLink = e.target;
        if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)){
            const gotoBlock = document.querySelector(menuLink.dataset.goto)
            const gotoBlockValue = gotoBlock.getBoundingClientRect().top /* получаем местоположение елемента */ + pageYOffset /* получаем количество прокрученых пикселей */ - document.querySelector('header').offsetHeight;

            if (menuBurger.classList.contains('active')) {
                document.body.classList.remove('lock');
                menuBurger.classList.remove('active');
                headerTop.classList.remove('block')
            }

            window.scrollTo({
                top: gotoBlockValue, // рокручеваемся с верху
                behavior: 'smooth' // прокрутка будет плавной
            })
            e.preventDefault()
        }
}