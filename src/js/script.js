const sidebarMenu = document.querySelector('.sidebar-menu');
const hamburgerIcon = document.querySelector('.fa-bars');
const sectionContainer = document.querySelector('.section-container');
// const sectionContainer = document.querySelector('.section-container');
console.log(hamburgerIcon, 'click');

// let viewportWidth = window.innerWidth || document.documentElement.clientWidth;

// hamburgerIcon.addEventListener('click', function() {
//     sidebarMenu.classList.toggle('active');
//     if (viewportWidth <= 440 && sidebarMenu.classList.contains('active')) {
//         sectionContainer.style.marginTop = '75%';
//         console.log('75');
//     } else {
//         sectionContainer.style.marginTop = '20%';
//     }
//     if (viewportWidth >= 440 && viewportWidth <= 680 && sidebarMenu.classList.contains('active')) {
//         sectionContainer.style.marginTop = '65%';
//         console.log('65');
//     } else {
//         sectionContainer.style.marginTop = '15.5%';
//     }
//     if (viewportWidth >= 680 && viewportWidth <= 900 && sidebarMenu.classList.contains('active')) {
//         sectionContainer.style.marginTop = '55%';
//         console.log('55');
//     } else {
//         sectionContainer.style.marginTop = '7.5%';
//     }


// });

hamburgerIcon.addEventListener('click', function() {
    sidebarMenu.classList.toggle('active');
    sectionContainer.classList.toggle('margin');
});