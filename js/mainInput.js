window.addEventListener('DOMContentLoaded', () => {

    let activeCategory = -1;
    let categories = document.getElementById('mainInputBlock').getElementsByClassName('categoryInputContainer');
    let categoriesNames = ["Тип", "Город"];
    let categoriesText = document.getElementById('mainInputBlock').getElementsByClassName('categoryInputText');
    let categoriesMarkers = document.getElementById('mainInputBlock').getElementsByClassName('categoryInputMarker');
    let activatedCategories = 0;

    let categoriesContent = document.getElementById('mainInputBlock').getElementsByClassName('categoryInputContentItem');


    try {
        for (let elem in categories) {
            (() => {
                    categories[elem].addEventListener('click', () => {
                        // console.log(elem)
                        categories[elem].classList.toggle('activeCategoryInputContainer');
                        if (activeCategory == -1) {
                            activeCategory = elem;
                        } else if (activeCategory == elem) {
                            activeCategory = -1;
                        } else {
                            categories[activeCategory].classList.toggle('activeCategoryInputContainer');
                            activeCategory = elem;
                        }
                        if (categories[elem].classList.contains('activeCategoryInputContainer')) {
                            categoriesText[elem].innerHTML = categoriesNames[elem];
                            categoriesMarkers[elem].innerHTML = "<img src='assets/all/sortArrowRight.svg' width='5px' height='9px'/>";
                            categoriesMarkers[elem].style.top="24px";
                        } else {
                            categoriesMarkers[elem].innerHTML = "<img src='assets/all/sortArrowDown.svg' />";
                            categoriesMarkers[elem].style.top="28px";
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

    let startDater = new Datepicker('#startDateBlock');

    let observer = new MutationObserver(mutationRecords => {
        console.log(mutationRecords[0].target.dataset.value)
        if (mutationRecords[0].attributeName == "data-value") {
            document.getElementById('startDate').value = mutationRecords[0].target.dataset.value;
            document.getElementById('startDate').click();
            document.getElementById('startDate').click();
        }
    });

    let endDater = new Datepicker('#endDateBlock');

    let observerEnder = new MutationObserver(mutationRecords => {
        console.log(mutationRecords[0].target.dataset.value)
        if (mutationRecords[0].attributeName == "data-value") {
            document.getElementById('endDate').value = mutationRecords[0].target.dataset.value;
            document.getElementById('endDate').click();
            document.getElementById('endDate').click();
        }
    });
      
      // наблюдать за всем, кроме атрибутов
      observer.observe(document.getElementById('startDateBlock'), {
        attributes: true
      });

      observerEnder.observe(document.getElementById('endDateBlock'), {
        attributes: true
      });

});