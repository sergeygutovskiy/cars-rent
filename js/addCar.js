
window.addEventListener('DOMContentLoaded', () => {

    let stepManager = [0, 0, 0, 0, 0];

    let activeStep = 0;

    let steps = document.getElementsByClassName('step');
    let nextButtons = document.getElementsByClassName('nextStep');
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

    

});

function adjustHeight(el){
    el.style.height = (el.scrollHeight > el.clientHeight) ? (el.scrollHeight)+"px" : el.clientHeight = "px";
}