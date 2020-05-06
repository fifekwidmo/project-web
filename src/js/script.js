const sidebarMenu = document.querySelector('.sidebar-menu');
const hamburgerIcon = document.querySelector('.fa-bars');
const sectionContainer = document.querySelector('.section-container');
console.log(hamburgerIcon, 'click');
hamburgerIcon.addEventListener('click', function() {
    sidebarMenu.classList.toggle('active');
    sectionContainer.classList.toggle('margin');
});
//modal
const widgetLogin = document.querySelector('.widget-login');
widgetLogin.addEventListener('click', function() {
    document.querySelectorAll('#overlay > *').forEach(function(modal) {
        modal.classList.remove('show');
    });
    document.querySelector('#overlay').classList.add('show');
    document.getElementById('first-modal').classList.add('show');
    // document.getElementById('second-modal').classList.add('show');
});
const widgetQuit = document.querySelector('.widget-quit');
widgetQuit.addEventListener('click', function() {
    document.querySelectorAll('#overlay > *').forEach(function(modal) {
        modal.classList.remove('show');
    });
    document.querySelector('#overlay').classList.add('show');
    document.getElementById('second-modal').classList.add('show');
});
const people = document.querySelector('.people');
people.addEventListener('click', function() {
    document.querySelectorAll('#overlay > *').forEach(function(modal) {
        modal.classList.remove('show');
    });
    document.querySelector('#overlay').classList.add('show');
    document.getElementById('third-modal').classList.add('show');
});

function closeModal() {
    document.getElementById('overlay').classList.remove('show');
}
document.querySelectorAll('#overlay .js--close-modal').forEach(function(btn) {
    btn.addEventListener('click', function(e) {
        e.preventDefault();
        closeModal();
    });
});
document.querySelector('#overlay').addEventListener('click', function(e) {
    if (e.target === this) {
        closeModal();
    }
});
document.addEventListener('keyup', function(e) {
    if (e.keyCode === 27) {
        closeModal();
    }
});