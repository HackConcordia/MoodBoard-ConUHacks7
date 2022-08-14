/*!
* Start Bootstrap - Resume v7.0.5 (https://startbootstrap.com/theme/resume)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const sideNav = document.body.querySelector('#sideNav');
    if (sideNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#sideNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});


function animateById (elemID) {
    switch (elemID) {
        case 'tada': 
            document.getElementById('tada').className = 'text-center animate__animated animate__tada';
            break;
        case 'flash': 
            document.getElementById('flash').className = 'text-center animate__animated animate__flash';
            break;
        case 'flipInX': 
            document.getElementById('flipInX').className = 'text-center animate__animated animate__flipInX';
            break;
        case 'lightSpeedInLeft': 
            document.getElementById('lightSpeedInLeft').className = 'text-center animate__animated animate__lightSpeedInLeft';
            break;
        case 'lightSpeedInRight': 
            document.getElementById('lightSpeedInRight').className = 'text-center animate__animated animate__lightSpeedInRight';
            break;
        case 'slideInLeft': 
            document.getElementById('slideInLeft').className = 'text-center animate__animated animate__slideInLeft';
            break;
        case 'slideInRight': 
            document.getElementById('slideInRight').className = 'text-center animate__animated animate__slideInRight';
            break;
    }
}

function clearClassName(elemID) {
    document.getElementById(elemID).className = 'text-center';
}

//INSERT CONTENT HERE