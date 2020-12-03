window.addEventListener('DOMContentLoaded', () => {
    let workButton = document.getElementsByClassName('jsOrintiedButtons');
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

    let questionsButton = document.getElementsByClassName('questionsJSButtons');
    let questionsBlock = document.getElementsByClassName('forQuestionsBlock');

    questionsButton[0].addEventListener('click', () => {
        if (!(questionsButton[0].classList.contains('activeHowAllWorksButton'))) {
            questionsButton[0].classList.add('activeHowAllWorksButton');
            questionsButton[1].classList.remove('activeHowAllWorksButton');
            
            // document.getElementById('howAllWorksExampleBlockContainer').style.opacity = '0';
            document.getElementById('questionsAnimationMainBlock').style.opacity = '0';
            setTimeout(()=>{
                questionsBlock[0].classList.remove('notDisplayedForQuestionBlock');
                questionsBlock[1].classList.add('notDisplayedForQuestionBlock');
                document.getElementById('questionsAnimationMainBlock').style.opacity = '1';
                question[0].click();
            },300);
           
        }
    });

    questionsButton[1].addEventListener('click', () => {
        if (!(questionsButton[1].classList.contains('activeHowAllWorksButton'))) {
            questionsButton[1].classList.add('activeHowAllWorksButton');
            questionsButton[0].classList.remove('activeHowAllWorksButton');
            
            document.getElementById('questionsAnimationMainBlock').style.opacity = '0';
            setTimeout(()=>{
                // console.log()
                questionsBlock[1].classList.remove('notDisplayedForQuestionBlock');
                questionsBlock[0].classList.add('notDisplayedForQuestionBlock');
                document.getElementById('questionsAnimationMainBlock').style.opacity = '1';
                question[9].click();
            },300);
        }
    });

    let activeQuestion = -1;

    let question = document.getElementsByClassName('question');
    let questionIcon = document.getElementsByClassName('questionIcon');
    let answerBlocks = document.getElementsByClassName('questionTextContainer');

    for (let elem in question) {
        try {
            question[elem].addEventListener('click', () => {
                if (activeQuestion != -1) {
                    question[activeQuestion].classList.toggle('activeQuestion');
                    questionIcon[activeQuestion].innerHTML = "+";
                    answerBlocks[activeQuestion].classList.remove('activeQuestionTextContainer');
                }
                if (elem == activeQuestion) {
                    question[elem].classList.remove('activeQuestion');
                    questionIcon[elem].innerHTML = "+";
                    answerBlocks[elem].classList.remove('activeQuestionTextContainer');
                } else {
                    question[elem].classList.add('activeQuestion');
                    questionIcon[elem].innerHTML = "-";
                    answerBlocks[elem].classList.add('activeQuestionTextContainer');
                }
                if (question[elem].classList.contains('activeQuestion')) activeQuestion = elem; else activeQuestion = -1;
            })
        } catch {}
    }

    question[0].click();

    if (window.innerWidth >= 1260) {
        answerBlocks[0].style.top = '32px';
        answerBlocks[1].style.top = '124px';
        answerBlocks[2].style.top = '216px';
        answerBlocks[3].style.top = '108px';
        answerBlocks[4].style.top = '55px';
        answerBlocks[5].style.top = '158px';
        answerBlocks[6].style.top = '328px';
        answerBlocks[7].style.top = '306px';
        answerBlocks[8].style.top = '604px';
        answerBlocks[9].style.top = '32px';
        answerBlocks[10].style.top = '126px';
        answerBlocks[11].style.top = '92px';
        answerBlocks[12].style.top = '-167px';
        answerBlocks[13].style.top = '80px';
    } else {
        answerBlocks[0].style.top = '0px';
        answerBlocks[1].style.top = '0px';
        answerBlocks[2].style.top = '0px';
        answerBlocks[3].style.top = '0px';
        answerBlocks[4].style.top = '0px';
        answerBlocks[5].style.top = '0px';
        answerBlocks[6].style.top = '0px';
        answerBlocks[7].style.top = '0px';
        answerBlocks[8].style.top = '0px';
        answerBlocks[9].style.top = '0px';
        answerBlocks[10].style.top = '0px';
        answerBlocks[11].style.top = '0px';
        answerBlocks[12].style.top = '0px';
        answerBlocks[13].style.top = '0px';
    }

    window.addEventListener('resize', () => {
        if (window.innerWidth >= 1260) {
            answerBlocks[0].style.top = '32px';
            answerBlocks[1].style.top = '124px';
            answerBlocks[2].style.top = '216px';
            answerBlocks[3].style.top = '108px';
            answerBlocks[4].style.top = '55px';
            answerBlocks[5].style.top = '158px';
            answerBlocks[6].style.top = '328px';
            answerBlocks[7].style.top = '306px';
            answerBlocks[8].style.top = '604px';
            answerBlocks[9].style.top = '32px';
            answerBlocks[10].style.top = '126px';
            answerBlocks[11].style.top = '92px';
            answerBlocks[12].style.top = '-167px';
            answerBlocks[13].style.top = '80px';
        } else {
            answerBlocks[0].style.top = '0px';
            answerBlocks[1].style.top = '0px';
            answerBlocks[2].style.top = '0px';
            answerBlocks[3].style.top = '0px';
            answerBlocks[4].style.top = '0px';
            answerBlocks[5].style.top = '0px';
            answerBlocks[6].style.top = '0px';
            answerBlocks[7].style.top = '0px';
            answerBlocks[8].style.top = '0px';
            answerBlocks[9].style.top = '0px';
            answerBlocks[10].style.top = '0px';
            answerBlocks[11].style.top = '0px';
            answerBlocks[12].style.top = '0px';
            answerBlocks[13].style.top = '0px';
        }
    });

    
});