/* global Chart, DateRangePicker */
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
document.querySelector('.second-btn').addEventListener('click', function() {
    closeModal();
});

//canvas

var ctx = document.getElementById('myChart').getContext('2d');
console.log(chart);
var chart = new Chart(ctx, {
    // 1
    type: 'bar',
    data: {
        // 2
        labels: ['01', '02', '03', '04', '05', '06', '07', '08', '09'],
        // 3
        datasets: [{
                // 4
                label: 'Signups',
                // 5
                backgroundColor: '#8DBEC8',
                borderColor: '#8DBEC8',
                // 6
                data: [52, 51, 41, 94, 26, 6, 72, 9, 21, 88],
            },
            {
                label: 'FTD',
                backgroundColor: '#F29E4E',
                borderColor: '#F29E4E',
                data: [6, 72, 1, 0, 47, 11, 50, 44, 63, 76],
            },
            {
                label: 'Earned',
                backgroundColor: '#71B374',
                borderColor: '#71B374',
                data: [59, 49, 68, 90, 67, 41, 13, 38, 48, 48],
                // 7
                hidden: true,
            }
        ]
    },
});

const elem = document.getElementById('range');
const dateRangePicker = new DateRangePicker(elem, {
    autohide: false,
});
console.log(dateRangePicker);