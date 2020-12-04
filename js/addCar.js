
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

    let inputsManager = [0, 0, 0, 0, 0];

    for (let i = 0; i < inputs.length; i++) {
        inputs[i].addEventListener('input', () => {
            
            if (inputs[i].value) inputsManager[i] = 1; else inputsManager[i] = 0;
            if (inputs[i].value) {
                let cur = i;
                for (let j = i; j < inputs.length; j++) {
                    values[j].innerHTML = (inputs[cur].value * .9).toFixed(2);
                    if (inputsManager[j]) {
                        cur = j;
                        values[j].innerHTML = (inputs[cur].value * .9).toFixed(2);
                    }
                }
            } else {
                let cur = 0;
                for (let k = i; k >= 0; k--) {
                    if (inputsManager[k]) {
                        cur = k;
                        break;
                    }
                }
                for (let j = i; j < inputs.length; j++) {

                    if (inputsManager[j]) {
                        break;
                    }
                    values[j].innerHTML = (inputs[cur].value * .9).toFixed(2);
                    
                }
            }
            
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










    let sorters = document.getElementsByClassName('selectSortElemBlock');
    let sortersMarkers = document.getElementsByClassName('selectSortElemMarker');
    let price = 0;
    
    try {
        sorters[0].addEventListener('click', () => {
            price = !price;
            sortersMarkers[0].classList.toggle('fa-angle-up');
            sortersMarkers[0].classList.toggle('fa-angle-down');
        });
    
        document.getElementsByClassName('selectFiltration')[0].addEventListener('click', () => {
            document.getElementById('stickyBlock').classList.toggle('selectedStickyBlock');
        });
    } catch (e) {
        console.log(e);
    }

    let pointChoice = document.getElementsByClassName('pointChoiceText');
    let activePoint = 0;
    let pointMarker = document.getElementsByClassName('pointChoiceMarker')[0];
    let positions = ["calc(18% - 8px)","calc(50% - 8px)","calc(84% - 8px)"];

    try {
        for (let elem in pointChoice) {
            (() => {
                    pointChoice[elem].addEventListener('click', () => {
                        try {document.getElementsByClassName('resetCategories')[0].click();} catch(e) {console.log(e)}
                        if (elem != activePoint) {

                            if (elem == 0) {
                                document.getElementById('stickyBlock').classList.add('auto');
                                document.getElementById('stickyBlock').classList.remove('water');
                                document.getElementById('stickyBlock').classList.remove('moto');
                            }
                            if (elem == 1) {
                                document.getElementById('stickyBlock').classList.remove('auto');
                                document.getElementById('stickyBlock').classList.add('water');
                                document.getElementById('stickyBlock').classList.remove('moto');
                            }
                            if (elem == 2) {
                                document.getElementById('stickyBlock').classList.remove('auto');
                                document.getElementById('stickyBlock').classList.remove('water');
                                document.getElementById('stickyBlock').classList.add('moto');
                            }
                            
                            pointChoice[elem].classList.toggle('activePoint');
                            pointChoice[activePoint].classList.toggle('activePoint');
                            activePoint = elem;
                            pointMarker.style.left = positions[elem];
                        }
                    });
            })()
        }
    } catch (e) {
        console.log(e);
    }

    let activeCategory = -1;
    let categories;
    try {categories = document.getElementById('selectContent').getElementsByClassName('categoryInputContainer');} catch (e) {console.log(e)};
    console.log(categories)
    console.log(document.getElementById('selectContent'))
    let categoriesNames = ["Марка", "", "Тип кузова", "", "", "КПП", "Привод", "Руль", "Двигатель", "", "", "",        "Тип", "", "Двигатель", "Тактность", "", "", "", "", "",             "Тип", "Марка", "", "Двигатель", "КПП", "Тактность", "", "", "", ""];
    let categoriesText;
    try {categoriesText = document.getElementById('selectContent').getElementsByClassName('categoryInputText');} catch (e) {console.log(e)};
    let categoriesMarkers;
    try {categoriesMarkers = document.getElementById('selectContent').getElementsByClassName('categoryInputMarker');} catch (e) {console.log(e)};
    let activatedCategories = 0;

    for (let i = 0; i < moto.length; i++) {
        document.getElementById('motoCatContainer').innerHTML += '<div class="categoryInputContentItem">' + moto[i] + '</div>'
    }

    let categoriesContent;
    try {categoriesContent = document.getElementById('selectContent').getElementsByClassName('categoryInputContentItem');} catch (e) {console.log(e)};


    try {
        for (let elem in categories) {
            (() => {
                    categories[elem].addEventListener('click', () => {
                        // console.log(elem)

                        

                        categories[elem].classList.toggle('activeCategoryInputContainer');

                        // if (activeCategory != -1) {
                        //     if (categoriesMarkers[activeCategory].innerHTML == "<img src='assets/all/sortArrowRight.svg' width='5px' height='9px'/>") {
                        //         categoriesMarkers[activeCategory].style.top="22px";
                        //     }
                        // }

                        if (activeCategory == -1) {
                            activeCategory = elem;
                        } else if (activeCategory == elem) {
                            activeCategory = -1;
                        } else {
                            categories[activeCategory].classList.toggle('activeCategoryInputContainer');
                            categoriesMarkers[activeCategory].innerHTML = "<img src='assets/all/sortArrowDown.svg' />";
                            categoriesMarkers[activeCategory].style.top="22px";
                            activeCategory = elem;
                        }
                        if (categories[elem].classList.contains('activeCategoryInputContainer')) {
                            categoriesText[elem].innerHTML = categoriesNames[elem];
                            categoriesMarkers[elem].innerHTML = "<img src='assets/all/sortArrowRight.svg' width='5px' height='9px'/>";
                            categoriesMarkers[elem].style.top="18px";
                        } else {
                            categoriesMarkers[elem].innerHTML = "<img src='assets/all/sortArrowDown.svg' />";
                            categoriesMarkers[elem].style.top="22px";
                        }
                    });
            })()
        }
    } catch (e) {
        console.log(e);
    }

    try {
        for (let elem in categoriesContent) {
            (() => {
                    categoriesContent[elem].addEventListener('click', () => {
                        categoriesText[activeCategory].innerHTML = categoriesContent[elem].innerHTML;
                    });
            })()
        }
    } catch (e) {
        console.log(e);
    }

    let filterRadio = document.getElementsByClassName('filterRadio');

    try {
        document.getElementById('selectContent').addEventListener('click', () => {
            activatedCategories = 0;
            for (let i = 0; i < categoriesNames.length; i++) {
                if (categoriesText[i].innerHTML != categoriesNames[i]) activatedCategories++;
            }
            for (let i = 0; i < filterRadio.length; i++) {
                if (filterRadio[i].checked) activatedCategories++;
            }
            document.getElementsByClassName('resetCategoriesCount')[0].innerHTML = activatedCategories;
            try {document.getElementsByClassName('filtersCount')[0].innerHTML = activatedCategories;} catch {}
        });
    } catch (e) {
        console.log(e);
    }

    try {
        document.getElementsByClassName('resetCategories')[0].addEventListener('click', () => {
            activeCategory = -1;
            activatedCategories = 0;
            for (let i = 0; i < filterRadio.length; i++) {
                filterRadio[i].checked = false;
            }
            for (let i = 0; i < categoriesNames.length; i++) {
                if (categoriesText[i].innerHTML != categoriesNames[i]) {
                    categoriesText[i].innerHTML = categoriesNames[i];
                }
                if (categories[i].classList.contains('activeCategoryInputContainer')) {
                    categories[i].classList.toggle('activeCategoryInputContainer');
                    categoriesMarkers[i].innerHTML = "<img src='assets/all/sortArrowDown.svg' />";
                    categoriesMarkers[i].style.top="22px";
                }
            }
        });
    } catch (e) {
        console.log(e);
    }

































    let newFeatureInput = document.getElementsByClassName('newCarFeatureInput');

    newFeatureInput[1].addEventListener('focus', function () {

        newFeatureInput[1].click();

        this.value = this.value.split(" л.с.")[0];
        this.type = 'number';

        // categories[elem].classList.toggle('activeCategoryInputContainer');
        //                 if (activeCategory == -1) {
        //                     activeCategory = elem;
        //                 } else if (activeCategory == elem) {
        //                     activeCategory = -1;
        //                 } else {
        //                     categories[activeCategory].classList.toggle('activeCategoryInputContainer');
        //                     categoriesMarkers[activeCategory].innerHTML = "<img src='assets/all/sortArrowDown.svg' />";
        //                     activeCategory = elem;
        //                 }
        //                 if (categories[elem].classList.contains('activeCategoryInputContainer')) {
        //                     categoriesText[elem].innerHTML = categoriesNames[elem];
        //                     categoriesMarkers[elem].innerHTML = "<img src='assets/all/sortArrowRight.svg' width='5px' height='9px'/>";
        //                     categoriesMarkers[elem].style.top="22px";
        //                 } else {
        //                     categoriesMarkers[elem].innerHTML = "<img src='assets/all/sortArrowDown.svg' />";
        //                     categoriesMarkers[elem].style.top="22px";
        //                 }
    });

    newFeatureInput[1].addEventListener('blur', function () {
        this.type = 'text';
        if (this.value) this.value += ' л.с.';
    });

    newFeatureInput[2].addEventListener('focus', function () {

        newFeatureInput[2].click();

        this.value = this.value.split(" г.")[0];
        this.type = 'number';

        // categories[elem].classList.toggle('activeCategoryInputContainer');
        //                 if (activeCategory == -1) {
        //                     activeCategory = elem;
        //                 } else if (activeCategory == elem) {
        //                     activeCategory = -1;
        //                 } else {
        //                     categories[activeCategory].classList.toggle('activeCategoryInputContainer');
        //                     categoriesMarkers[activeCategory].innerHTML = "<img src='assets/all/sortArrowDown.svg' />";
        //                     activeCategory = elem;
        //                 }
        //                 if (categories[elem].classList.contains('activeCategoryInputContainer')) {
        //                     categoriesText[elem].innerHTML = categoriesNames[elem];
        //                     categoriesMarkers[elem].innerHTML = "<img src='assets/all/sortArrowRight.svg' width='5px' height='9px'/>";
        //                     categoriesMarkers[elem].style.top="22px";
        //                 } else {
        //                     categoriesMarkers[elem].innerHTML = "<img src='assets/all/sortArrowDown.svg' />";
        //                     categoriesMarkers[elem].style.top="22px";
        //                 }
    });

    newFeatureInput[2].addEventListener('blur', function () {
        this.type = 'text';
        if (this.value) this.value += ' г.';
    });

    newFeatureInput[3].addEventListener('focus', function () {

        newFeatureInput[3].click();

        this.value = this.value.split(" км")[0];
        this.type = 'number';

        // categories[elem].classList.toggle('activeCategoryInputContainer');
        //                 if (activeCategory == -1) {
        //                     activeCategory = elem;
        //                 } else if (activeCategory == elem) {
        //                     activeCategory = -1;
        //                 } else {
        //                     categories[activeCategory].classList.toggle('activeCategoryInputContainer');
        //                     categoriesMarkers[activeCategory].innerHTML = "<img src='assets/all/sortArrowDown.svg' />";
        //                     activeCategory = elem;
        //                 }
        //                 if (categories[elem].classList.contains('activeCategoryInputContainer')) {
        //                     categoriesText[elem].innerHTML = categoriesNames[elem];
        //                     categoriesMarkers[elem].innerHTML = "<img src='assets/all/sortArrowRight.svg' width='5px' height='9px'/>";
        //                     categoriesMarkers[elem].style.top="22px";
        //                 } else {
        //                     categoriesMarkers[elem].innerHTML = "<img src='assets/all/sortArrowDown.svg' />";
        //                     categoriesMarkers[elem].style.top="22px";
        //                 }
    });

    newFeatureInput[3].addEventListener('blur', function () {
        this.type = 'text';
        if (this.value) this.value += ' км';
    });

    newFeatureInput[4].addEventListener('focus', function () {

        newFeatureInput[4].click();

        this.value = this.value.split(" д.")[0];
        this.type = 'number';

        // categories[elem].classList.toggle('activeCategoryInputContainer');
        //                 if (activeCategory == -1) {
        //                     activeCategory = elem;
        //                 } else if (activeCategory == elem) {
        //                     activeCategory = -1;
        //                 } else {
        //                     categories[activeCategory].classList.toggle('activeCategoryInputContainer');
        //                     categoriesMarkers[activeCategory].innerHTML = "<img src='assets/all/sortArrowDown.svg' />";
        //                     activeCategory = elem;
        //                 }
        //                 if (categories[elem].classList.contains('activeCategoryInputContainer')) {
        //                     categoriesText[elem].innerHTML = categoriesNames[elem];
        //                     categoriesMarkers[elem].innerHTML = "<img src='assets/all/sortArrowRight.svg' width='5px' height='9px'/>";
        //                     categoriesMarkers[elem].style.top="22px";
        //                 } else {
        //                     categoriesMarkers[elem].innerHTML = "<img src='assets/all/sortArrowDown.svg' />";
        //                     categoriesMarkers[elem].style.top="22px";
        //                 }
    });

    newFeatureInput[4].addEventListener('blur', function () {
        this.type = 'text';
        if (this.value) this.value += ' д.';
    });

    newFeatureInput[5].addEventListener('focus', function () {

        newFeatureInput[5].click();

        this.value = this.value.split(" ч.")[0];
        this.type = 'number';

    });

    newFeatureInput[5].addEventListener('blur', function () {
        this.type = 'text';
        if (this.value) this.value += ' ч.';
    });

    newFeatureInput[6].addEventListener('focus', function () {

        newFeatureInput[6].click();

        this.value = this.value.split(" л.с.")[0];
        this.type = 'number';

    });

    newFeatureInput[6].addEventListener('blur', function () {
        this.type = 'text';
        if (this.value) this.value += ' л.с.';
    });

    newFeatureInput[7].addEventListener('focus', function () {

        newFeatureInput[7].click();

        this.value = this.value.split(" м")[0];
        this.type = 'number';

    });

    newFeatureInput[7].addEventListener('blur', function () {
        this.type = 'text';
        if (this.value) this.value += ' м';
    });

    newFeatureInput[8].addEventListener('focus', function () {

        newFeatureInput[8].click();

        this.value = this.value.split(" м")[0];
        this.type = 'number';

    });

    newFeatureInput[8].addEventListener('blur', function () {
        this.type = 'text';
        if (this.value) this.value += ' м';
    });

    newFeatureInput[9].addEventListener('focus', function () {

        newFeatureInput[9].click();

        this.value = this.value.split(" л")[0];
        this.type = 'number';

    });

    newFeatureInput[9].addEventListener('blur', function () {
        this.type = 'text';
        if (this.value) this.value += ' л';
    });

    newFeatureInput[10].addEventListener('focus', function () {

        newFeatureInput[10].click();

        this.value = this.value.split(" см")[0];
        this.type = 'number';

    });

    newFeatureInput[10].addEventListener('blur', function () {
        this.type = 'text';
        if (this.value) this.value += ' см';
    });


    newFeatureInput[11].addEventListener('focus', function () {

        newFeatureInput[11].click();

        this.value = this.value.split(" ч.")[0];
        this.type = 'number';

    });

    newFeatureInput[11].addEventListener('blur', function () {
        this.type = 'text';
        if (this.value) this.value += ' ч.';
    });

    newFeatureInput[12].addEventListener('focus', function () {

        newFeatureInput[12].click();

        this.value = this.value.split(" см3")[0];
        this.type = 'number';

    });

    newFeatureInput[12].addEventListener('blur', function () {
        this.type = 'text';
        if (this.value) this.value += ' см3';
    });

    newFeatureInput[13].addEventListener('focus', function () {

        newFeatureInput[13].click();

        this.value = this.value.split(" км")[0];
        this.type = 'number';

    });

    newFeatureInput[13].addEventListener('blur', function () {
        this.type = 'text';
        if (this.value) this.value += ' км';
    });

    newFeatureInput[14].addEventListener('focus', function () {

        newFeatureInput[14].click();

        this.value = this.value.split(" л/вт")[0];
        this.type = 'number';

    });

    newFeatureInput[14].addEventListener('blur', function () {
        this.type = 'text';
        if (this.value) this.value += ' л/вт';
    });

    newFeatureInput[15].addEventListener('focus', function () {

        newFeatureInput[15].click();

        this.value = this.value.split(" кг")[0];
        this.type = 'number';

    });

    newFeatureInput[15].addEventListener('blur', function () {
        this.type = 'text';
        if (this.value) this.value += ' кг';
    });

    newFeatureInput[16].addEventListener('focus', function () {

        newFeatureInput[16].click();

        this.value = this.value.split(" ч")[0];
        this.type = 'number';

    });

    newFeatureInput[16].addEventListener('blur', function () {
        this.type = 'text';
        if (this.value) this.value += ' ч';
    });

});

function adjustHeight(el){
    el.style.height = (el.scrollHeight > el.clientHeight) ? (el.scrollHeight)+"px" : el.clientHeight = "px";
}