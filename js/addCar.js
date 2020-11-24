
window.addEventListener('DOMContentLoaded', () => {

    let stepManager = [0, 0, 0, 0, 0];

    let activeStep = 0;

    let steps = document.getElementsByClassName('step');
    let nextButtons = document.getElementsByClassName('nextStep');
    let prevButtons = document.getElementsByClassName('prevStep');
    let contents = document.getElementsByClassName('newCarContentStepContent');

    for (let i = 0; i < nextButtons.length; i++) {
        nextButtons[i].addEventListener('click', () => {
            if (i+1 < nextButtons.length) {
                steps[i].classList.add('acceptedStep');
                stepManager[i] = 1;
                steps[i+1].click();
            } else {
                let summ = 0;
                for (let j = 0; j < stepManager.length; j++) {
                    summ += stepManager[j];
                }
                if (summ == 4) {
                    steps[i].classList.add('acceptedStep');
                    stepManager[i] = 1;
                    summ++;
                }
                if (summ == 5) alert('Объявление создано!'); else alert('Не все шаги выполнены!');
            }
        });
    }

    for (let i = 1; i < prevButtons.length + 1; i++) {
        prevButtons[i - 1].addEventListener('click', () => {
            // if (i+1 < nextButtons.length) {
                // steps[i - 1].classList.add('acceptedStep');
                stepManager[i - 1] = 0;
                steps[i - 1].click();
            // }
        });
    }

    for (let i = 0; i < steps.length; i++) {
        steps[i].addEventListener("click", function() {
            if (!(activeStep == i)) {
                steps[i].classList.add("activeStep");
                steps[activeStep].classList.remove("activeStep");

                let tmp = activeStep;
                setTimeout(() => {
                    contents[i].style.opacity = 0;
                    setTimeout(() => {contents[i].style.opacity = 1;}, 20);
                    contents[i].classList.add('activeStepContent');
                    contents[tmp].classList.remove('activeStepContent');
                }, 200);
                contents[activeStep].style.opacity = 0;

                activeStep = i;
            }
        });
    }

    let inputs = document.getElementsByClassName('stepContentBlockInputFlexElemContent');
    let values = document.getElementsByClassName('tableFlexElemContent');

    for (let i = 0; i < inputs.length; i++) {
        inputs[i].addEventListener('input', () => {
            values[i].innerHTML = (inputs[i].value * .9).toFixed(2);
        });
    }

    stepsContent = document.getElementsByClassName('stepContent');

    if (document.body.clientWidth < 768) {
        stepsContent[0].innerHTML = "Шаг 1";
        stepsContent[1].innerHTML = "Шаг 2";
        stepsContent[2].innerHTML = "Шаг 3";
        stepsContent[3].innerHTML = "Шаг 4";
        stepsContent[4].innerHTML = "Шаг 5";
    }

    window.addEventListener('resize', () => {
        if (document.body.clientWidth < 768) {
            stepsContent[0].innerHTML = "Шаг 1";
            stepsContent[1].innerHTML = "Шаг 2";
            stepsContent[2].innerHTML = "Шаг 3";
            stepsContent[3].innerHTML = "Шаг 4";
            stepsContent[4].innerHTML = "Шаг 5";
        } else {
            stepsContent[0].innerHTML = "Шаг 1: Фото транспорта";
            stepsContent[1].innerHTML = "Шаг 2: Информация об автомобиле";
            stepsContent[2].innerHTML = "Шаг 3: Стоимость";
            stepsContent[3].innerHTML = "Шаг 4: Документы";
            stepsContent[4].innerHTML = "Шаг 5: Местонахождение транспорта";
        }
    });

});

function adjustHeight(el){
    el.style.height = (el.scrollHeight > el.clientHeight) ? (el.scrollHeight)+"px" : el.clientHeight = "px";
}