
window.addEventListener('DOMContentLoaded', () => {

    let ready = 0;

    let animContainer = document.getElementById('chatContentFixer');

    // let inMessage = '<div class="chatMessage inMessage"><div class="messageContent">Lorem ipsum dolor sit amet, consectetur adipiscing elit  adipiscing elit </div><div class="messageTime">23:04</div></div>';
    // let outMessage = '<div class="chatMessage outMessage"><div class="messageContent">Lorem ipsum dolor sit amet, consectetur adipiscing elit  adipiscing elit </div><div class="messageTime">23:04</div></div>';

    window.addEventListener('scroll', () => {
        if ((animContainer.getBoundingClientRect().top < window.innerHeight && animContainer.getBoundingClientRect().top > 200) || (Math.abs(animContainer.getBoundingClientRect().top) > Math.abs(window.innerHeight) && animContainer.getBoundingClientRect().top <= 200)) {
            if (!ready) {
                // console.log("asd")
                setTimeout(addIn1Message, 4);
                setTimeout(addOut1Message, 2000);
                setTimeout(addIn2Message, 4000);
                setTimeout(addOut2Message, 6000);
                setTimeout(addIn3Message, 8000);
                ready = 1;
            }
        }
    });

    
});

function addIn1Message() {
    let animContainer = document.getElementById('chatContentFixer');

    let inMessage = '<div class="chatMessage inMessage"><div class="messageContent">Добрый день, как я могу получить ключи от автомобиля?</div><div class="messageTime">23:04</div></div>';

    animContainer.innerHTML += inMessage;
    // console.log (animContainer.getElementsByClassName('chatMessage').length - 1)
    setTimeout(() => {
        animContainer.getElementsByClassName('chatMessage')[animContainer.getElementsByClassName('chatMessage').length - 1].style.opacity = '1';
        animContainer.getElementsByClassName('chatMessage')[animContainer.getElementsByClassName('chatMessage').length - 1].style.maxHeight = '100px';
    }, 20);
    // console.log (animContainer.getElementsByClassName('chatMessage').length - 1)
}

function addOut1Message() {
    let animContainer = document.getElementById('chatContentFixer');

    let outMessage = '<div class="chatMessage outMessage"><div class="messageContent">Здравствуйте, при личной встрече. Перед началом аренды я передам вам ключи и автомобиль.</div><div class="messageTime">23:04</div></div>';

    animContainer.innerHTML += outMessage;
    setTimeout(() => {
        animContainer.getElementsByClassName('chatMessage')[animContainer.getElementsByClassName('chatMessage').length - 1].style.opacity = '1';
        animContainer.getElementsByClassName('chatMessage')[animContainer.getElementsByClassName('chatMessage').length - 1].style.maxHeight = '100px';
    }, 25);
}

function addIn2Message() {
    let animContainer = document.getElementById('chatContentFixer');

    let inMessage = '<div class="chatMessage inMessage"><div class="messageContent">Отлично. Где и когда мы можем встретиться?</div><div class="messageTime">23:04</div></div>';

    animContainer.innerHTML += inMessage;
    // console.log (animContainer.getElementsByClassName('chatMessage').length - 1)
    setTimeout(() => {
        animContainer.getElementsByClassName('chatMessage')[animContainer.getElementsByClassName('chatMessage').length - 1].style.opacity = '1';
        animContainer.getElementsByClassName('chatMessage')[animContainer.getElementsByClassName('chatMessage').length - 1].style.maxHeight = '100px';
    }, 20);
    // console.log (animContainer.getElementsByClassName('chatMessage').length - 1)
}

function addOut2Message() {
    let animContainer = document.getElementById('chatContentFixer');

    let outMessage = '<div class="chatMessage outMessage"><div class="messageContent">Давайте мы с вами встретимся завтра в 10:00 возле дома 5 на набережной реки Карповки.</div><div class="messageTime">23:04</div></div>';

    animContainer.innerHTML += outMessage;
    setTimeout(() => {
        animContainer.getElementsByClassName('chatMessage')[animContainer.getElementsByClassName('chatMessage').length - 1].style.opacity = '1';
        animContainer.getElementsByClassName('chatMessage')[animContainer.getElementsByClassName('chatMessage').length - 1].style.maxHeight = '100px';
    }, 25);
}

function addIn3Message() {
    let animContainer = document.getElementById('chatContentFixer');

    let inMessage = '<div class="chatMessage inMessage"><div class="messageContent">Хорошо, тогда до встречи!</div><div class="messageTime">23:04</div></div>';

    animContainer.innerHTML += inMessage;
    // console.log (animContainer.getElementsByClassName('chatMessage').length - 1)
    setTimeout(() => {
        animContainer.getElementsByClassName('chatMessage')[animContainer.getElementsByClassName('chatMessage').length - 1].style.opacity = '1';
        animContainer.getElementsByClassName('chatMessage')[animContainer.getElementsByClassName('chatMessage').length - 1].style.maxHeight = '100px';
    }, 20);
    // console.log (animContainer.getElementsByClassName('chatMessage').length - 1)
}
