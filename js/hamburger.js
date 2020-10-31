window.addEventListener('DOMContentLoaded', () => {
    document.getElementById('hamburger').addEventListener('click', () => {
        document.getElementById('absolutedHamburger').classList.remove('notDisplay');
    });

    document.getElementById('absolutedHamburgerClose').addEventListener('click', () => {
        document.getElementById('absolutedHamburger').classList.add('notDisplay');
    });
    
});