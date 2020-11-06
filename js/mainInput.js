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





    document.getElementById('startDate').addEventListener('blur', () => {
        if (document.getElementById('startDate').value &&  !/^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/.test(document.getElementById('startDate').value)) {
            document.getElementById('startDate').value = "";
        }

        if (document.getElementById('endDate').value) {
            let me = document.getElementById('startDate').value.split('.');
            let it = document.getElementById('endDate').value.split('.');

            if (me[2] <= it[2]) {
                if (me[1] <= it[1]) {
                    if (me[0] < it[0]) {
                    } else {
                        document.getElementById('startDate').value = ('0' + (it[0] - 1)).slice(-2) + '.' + it[1] + '.' + it[2];
                    }
                } else {
                    document.getElementById('startDate').value = ('0' + (it[0] - 1)).slice(-2) + '.' + it[1] + '.' + it[2];
                }
            } else {
                document.getElementById('startDate').value = ('0' + (it[0] - 1)).slice(-2) + '.' + it[1] + '.' + it[2];
            }
        }
    });

    document.getElementById('endDate').addEventListener('blur', () => {
        if (document.getElementById('endDate').value &&  !/^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/.test(document.getElementById('endDate').value)) {
            document.getElementById('endDate').value = "";
        }

        if (document.getElementById('startDate').value) {
            let it = document.getElementById('startDate').value.split('.');
            let me = document.getElementById('endDate').value.split('.');

            if (me[2] >= it[2]) {
                if (me[1] >= it[1]) {
                    if (me[0] > it[0]) {
                    } else {
                        document.getElementById('endDate').value = ('0' + (Number(it[0]) + 1)).slice(-2) + '.' + it[1] + '.' + it[2];
                    }
                } else {
                    document.getElementById('endDate').value = ('0' + (Number(it[0]) + 1)).slice(-2) + '.' + it[1] + '.' + it[2];
                }
            } else {
                document.getElementById('endDate').value = ('0' + (Number(it[0]) + 1)).slice(-2) + '.' + it[1] + '.' + it[2];
            }
        }
    });

    let startDater = new Datepicker('#startDateBlock');

    let observer = new MutationObserver(mutationRecords => {
        // console.log(mutationRecords[0].target.dataset.value)
        if (mutationRecords[0].attributeName == "data-value") {
            document.getElementById('startDate').value = mutationRecords[0].target.dataset.value;
            document.getElementById('startDate').click();
            document.getElementById('startDate').click();
        }
    });

    let endDater = new Datepicker('#endDateBlock');

    let observerEnder = new MutationObserver(mutationRecords => {
        // console.log(mutationRecords[0].target.dataset.value)
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