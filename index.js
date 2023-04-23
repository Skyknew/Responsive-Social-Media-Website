//SIDEBAR 
const menuItems = document.querySelectorAll('.menu-item');

// MESSAGES
const messagesNotification = document.querySelector('#messages-notification');
const messages = document.querySelector('.messages');
const message = messages.querySelectorAll('.messages');
const messageSearch = document.querySelector('#message-search');

//THEME
const theme = document.querySelector('#theme');
const themeModal = document.querySelector('.customize-theme');

//================== SIDEBAR ========================// 

//remove active class from all menu items 
const changeActiveItem = () => {
    menuItems.forEach(items => {
        items.classList.remove('active');
    })
}

menuItems.forEach(item => {
    item.addEventListener('click', () => {
        changeActiveItem();
        item.classList.add('active');
        if(item.id != 'notification'){
            document.querySelector('.notifications-popup').style.display = 'none';
        } else {
            document.querySelector('.notifications-popup').style.display = 'block';
            document.querySelector('#notifications .notification-count').style.display = 'none';
        }
    })
})


//================== MESSAGES ========================// 
messagesNotification.addEventListener('click', () => {
    messages.style.boxshadow = '0 0 1rem var(--color-primary)';
    messagesNotification.querySelector('.notification-count').style.display = 'none';
    setTimeout(() => {
        messages.style.boxshadow = 'none';
    }, 2000);
})
