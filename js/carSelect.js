window.addEventListener('DOMContentLoaded', () => {
    let sorters = document.getElementsByClassName('selectSortElemBlock');
    let sortersMarkers = document.getElementsByClassName('selectSortElemMarker');
    let price = 0;
    
    sorters[0].addEventListener('click', () => {
        price = !price;
        sortersMarkers[0].classList.toggle('fa-angle-up');
        sortersMarkers[0].classList.toggle('fa-angle-down');
    });

    document.getElementsByClassName('selectFiltration')[0].addEventListener('click', () => {
        document.getElementById('stickyBlock').classList.toggle('selectedStickyBlock');
    });

    let pointChoice = document.getElementsByClassName('pointChoiceText');
    let activePoint = 1;
    let pointMarker = document.getElementsByClassName('pointChoiceMarker')[0];
    let positions = ["calc(18% - 8px)","calc(50% - 8px)","calc(84% - 8px)"];

    try {
        for (let elem in pointChoice) {
            (() => {
                    pointChoice[elem].addEventListener('click', () => {
                        document.getElementsByClassName('resetCategories')[0].click();
                        if (elem != activePoint) {
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
    let categories = document.getElementsByClassName('categoryInputContainer');
    let categoriesNames = ["Цена", "Марка", "Класс", "Категория", "Коробка", "Двигатель"];
    let categoriesText = document.getElementsByClassName('categoryInputText');
    let categoriesMarkers = document.getElementsByClassName('categoryInputMarker');
    let activatedCategories = 0;

    let categoriesContent = document.getElementsByClassName('categoryInputContentItem');


    try {
        for (let elem in categories) {
            (() => {
                    categories[elem].addEventListener('click', () => {
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

    document.getElementById('selectContent').addEventListener('click', () => {
        activatedCategories = 0;
        for (let i = 0; i < categoriesNames.length; i++) {
            if (categoriesText[i].innerHTML != categoriesNames[i]) activatedCategories++;
        }
        for (let i = 0; i < filterRadio.length; i++) {
            if (filterRadio[i].checked) activatedCategories++;
        }
        document.getElementsByClassName('resetCategoriesCount')[0].innerHTML = activatedCategories;
        document.getElementsByClassName('filtersCount')[0].innerHTML = activatedCategories;
    });

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


});