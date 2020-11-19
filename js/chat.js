
window.addEventListener('DOMContentLoaded', () => {

    let ready = 0;

    let animContainer = document.getElementById('chatContentFixer');

    let inMessage = '<div class="chatMessage inMessage"><div class="messageContent">Lorem ipsum dolor sit amet, consectetur adipiscing elit  adipiscing elit </div><div class="messageTime">23:04</div></div>';
    let outMessage = '<div class="chatMessage outMessage"><div class="messageContent">Lorem ipsum dolor sit amet, consectetur adipiscing elit  adipiscing elit </div><div class="messageTime">23:04</div></div>';

    window.addEventListener('scroll', () => {
        console.log(window.innerHeight/2)
        if (animContainer.getBoundingClientRect().top < window.innerHeight) {
            if (!ready) {
                console.log("asd")
                setTimeout(addOutMessage, 4);
                setTimeout(addInMessage, 1500);
                setTimeout(addOutMessage, 3000);
                setTimeout(addInMessage, 4500);
                ready = 1;
            }
        }
    });

    
});

function addInMessage() {
    let animContainer = document.getElementById('chatContentFixer');

    let inMessage = '<div class="chatMessage inMessage"><div class="messageContent">Lorem ipsum dolor sit amet, consectetur adipiscing elit  adipiscing elit </div><div class="messageTime">23:04</div></div>';

    animContainer.innerHTML += inMessage;
    // console.log (animContainer.getElementsByClassName('chatMessage').length - 1)
    setTimeout(() => {
        animContainer.getElementsByClassName('chatMessage')[animContainer.getElementsByClassName('chatMessage').length - 1].style.opacity = '1';
        animContainer.getElementsByClassName('chatMessage')[animContainer.getElementsByClassName('chatMessage').length - 1].style.maxHeight = '100px';
    }, 20);
    // console.log (animContainer.getElementsByClassName('chatMessage').length - 1)
}

function addOutMessage() {
    let animContainer = document.getElementById('chatContentFixer');

    let outMessage = '<div class="chatMessage outMessage"><div class="messageContent">Lorem ipsum dolor sit amet, consectetur adipiscing elit  adipiscing elit </div><div class="messageTime">23:04</div></div>';

    animContainer.innerHTML += outMessage;
    setTimeout(() => {
        animContainer.getElementsByClassName('chatMessage')[animContainer.getElementsByClassName('chatMessage').length - 1].style.opacity = '1';
        animContainer.getElementsByClassName('chatMessage')[animContainer.getElementsByClassName('chatMessage').length - 1].style.maxHeight = '100px';
    }, 4);
}
