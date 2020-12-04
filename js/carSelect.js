window.addEventListener('DOMContentLoaded', () => {
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
    let categoriesNames = ["Цена", "Марка", "Тип кузова", "Мощность", "Год выпуска", "КПП", "Привод", "Руль", "Двигатель", "Пробег",        "Тип", "Цена", "Мощность", "Двигатель", "Тактность",       "Тип", "Цена", "Марка", "Объем", "Двигатель", "КПП", "Тактность", "Пробег"];
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
            document.getElementsByClassName('filtersCount')[0].innerHTML = activatedCategories;
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
    


});