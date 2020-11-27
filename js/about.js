window.addEventListener('DOMContentLoaded', () => {
    let workButton = document.getElementsByClassName('howAllWorksButton');
    let workBlock = document.getElementsByClassName('howAllWorksExampleBlock');

    workButton[0].addEventListener('click', () => {
        if (!(workButton[0].classList.contains('activeHowAllWorksButton'))) {
            workButton[0].classList.add('activeHowAllWorksButton');
            workButton[1].classList.remove('activeHowAllWorksButton');
            
            document.getElementById('howAllWorksExampleBlockContainer').style.opacity = '0';
            setTimeout(()=>{
                workBlock[0].classList.remove('notDisplayExmapleBlock');
                workBlock[1].classList.add('notDisplayExmapleBlock');
                document.getElementById('howAllWorksExampleBlockContainer').style.opacity = '1';
            },300);
        }
    });

    workButton[1].addEventListener('click', () => {
        if (!(workButton[1].classList.contains('activeHowAllWorksButton'))) {
            workButton[1].classList.add('activeHowAllWorksButton');
            workButton[0].classList.remove('activeHowAllWorksButton');
            
            document.getElementById('howAllWorksExampleBlockContainer').style.opacity = '0';
            setTimeout(()=>{
                workBlock[1].classList.remove('notDisplayExmapleBlock');
                workBlock[0].classList.add('notDisplayExmapleBlock');
                document.getElementById('howAllWorksExampleBlockContainer').style.opacity = '1';
            },300);
        }
    });

    let activeQuestion = -1;

    let question = document.getElementsByClassName('question');
    let questionIcon = document.getElementsByClassName('questionIcon');

    for (let elem in question) {
        (() => {question[elem].addEventListener('click', () => {
            if (activeQuestion != -1) {
                question[activeQuestion].classList.toggle('activeQuestion');
                questionIcon[activeQuestion].innerHTML = "+";
            }
            if (elem == activeQuestion) {
                question[elem].classList.remove('activeQuestion');
                questionIcon[elem].innerHTML = "+";
            } else {
                question[elem].classList.add('activeQuestion');
                questionIcon[elem].innerHTML = "-";
            }
            if (question[elem].classList.contains('activeQuestion')) activeQuestion = elem; else activeQuestion = -1;
        })})();
    }
});