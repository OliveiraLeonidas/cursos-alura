const btn = document.getElementById('btn-mobile');

function toogleMenu(event) {
    if(event.type === 'touchstart') event.preventDefault
    const nav = document.querySelector('#nav');
    nav.classList.toggle('active');
    const menu = document.querySelector('#btn-mobile')
    menu.classList.toggle('change');

    /* PARA ACESSIBILIDADE */
    const active = nav.classList.contains('active');
    event.currentTarget.setAttribute('aria-expanded', active);

    (active) ? event.currentTarget.setAttribute('aria-label', 'fechar menu') : event.currentTarget.setAttribute('aria-label', 'abrir menu');

}

btn.addEventListener('click', toogleMenu);
btn.addEventListener('touchstart', toogleMenu);