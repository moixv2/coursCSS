// sélection des éléments HTML
let iconMobileNav = document.querySelector('.icon-mobile-nav');
let siteNav = document.querySelector('.site-nav');

// clic sur l'icône du menu
iconMobileNav.addEventListener('click', e => siteNav.classList.toggle('site-nav-mobile'));