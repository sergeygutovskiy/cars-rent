window.addEventListener('DOMContentLoaded', () => {
    document.getElementById('hamburger').addEventListener('click', () => {
        document.getElementById('absolutedHamburger').classList.remove('notDisplay');

        let sticks = document.getElementsByClassName('absolutedHamburgerCloseContent');
        sticks[0].style.transform = "rotateZ(45deg) translateY(2px)";
        sticks[1].style.transform = "rotateZ(-45deg) translateY(2px)";
    });

    document.getElementById('absolutedHamburgerClose').addEventListener('click', () => {
        document.getElementById('absolutedHamburger').classList.add('notDisplay');
        let sticks = document.getElementsByClassName('absolutedHamburgerCloseContent');
        sticks[0].style.transform = "rotateZ(0deg) translateY(0px)";
        sticks[1].style.transform = "rotateZ(0deg) translateY(0px)";
    });
    
});