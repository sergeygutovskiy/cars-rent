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
                    categories[elem].addEventListener('click', (e) => {
                        if (e.target.classList.contains('categoryInput') || e.target.classList.contains('categoryInputText') || e.target.tagName.toLowerCase() == 'img') {
                            categories[elem].classList.toggle('activeCategoryInputContainer');
                            if (activeCategory == -1) {
                                activeCategory = elem;
                            } else if (activeCategory == elem) {
                                activeCategory = -1;
                            } else {
                                categories[activeCategory].classList.toggle('activeCategoryInputContainer');
                                activeCategory = elem;
                            }
                            if (categoriesText[elem].innerHTML == categoriesNames[elem]) categoriesText[elem].classList.toggle('selectedCategory');
                            if (categories[elem].classList.contains('activeCategoryInputContainer')) {
                                categoriesText[elem].innerHTML = categoriesNames[elem];
                                categoriesMarkers[elem].innerHTML = "<img src='assets/all/sortArrowRight.svg' width='5px' height='9px'/>";
                                categoriesMarkers[elem].style.top="24px";
                            } else {
                                categoriesMarkers[elem].innerHTML = "<img src='assets/all/sortArrowDown.svg' />";
                                categoriesMarkers[elem].style.top="28px";
                            }
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
                        categories[activeCategory].classList.toggle('activeCategoryInputContainer');
                        activeCategory = -1;
                        // categoriesText[activeCategory].classList.toggle('selectedCategory');
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

        if (document.getElementById('startDate').value && document.getElementById('endDate').value) {
            let me = document.getElementById('startDate').value.split('.');
            let it = document.getElementById('endDate').value.split('.');

            // console.log(me[2] < it[2])
            // console.log(me[1] < it[1])
            // console.log(me[0] < it[0])

            if (Number(me[2]) < Number(it[2])) {
                
            } else {
                if ((Number(me[2]) <= Number(it[2]) && Number(me[1]) < Number(it[1]))) {
                    
                } else {
                    if ((Number(me[2]) <= Number(it[2]) && Number(me[1]) <= Number(it[1]) && Number(me[0]) < Number(it[0]))) {
                    } else {
                        let tmp = (('0' + (Number(it[0]))).slice(-2) + '.' + it[1] + '.' + it[2]).split('.');

                        var date = new Date(tmp[2], (Number(tmp[1]) - 1), tmp[0]).getTime();

                        date -= 3600 * 24 * 1000;

                        document.getElementById('startDate').value = formatDate(new Date(date));
                    }
                }
            }
        }
    });

    document.getElementById('endDate').addEventListener('blur', () => {
        if (document.getElementById('endDate').value &&  !/^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/.test(document.getElementById('endDate').value)) {
            document.getElementById('endDate').value = "";
        }

        if (document.getElementById('startDate').value && document.getElementById('endDate').value) {
            let it = document.getElementById('startDate').value.split('.');
            let me = document.getElementById('endDate').value.split('.');

            // console.log(me[2] > it[2])
            // console.log(me[1] > it[1])
            // console.log(me[0] > it[0])
            

            if (Number(me[2]) > Number(it[2])) {
                
            } else {

                if ((Number(me[2]) >= Number(it[2]) && Number(me[1]) > Number(it[1]))) {
                    
                } else {

                    if ((Number(me[2]) >= Number(it[2]) && Number(me[1]) >= Number(it[1]) && Number(me[0]) > Number(it[0]))) {
                    } else {

                        let tmp = (('0' + (Number(it[0]))).slice(-2) + '.' + it[1] + '.' + it[2]).split('.');

                        var date = new Date(tmp[2], (Number(tmp[1]) - 1), tmp[0]).getTime();

                        date += 3600 * 24 * 1000;

                        document.getElementById('endDate').value = formatDate(new Date(date));

                    }
                }
            }



            // me = document.getElementById('endDate').value.split('.');

            // var date = new Date(me[2], me[1], me[0]).getTime();
            // alert(date)

            // var example = '05-10-1983';
            // var date = new Date();
            // var parts = document.getElementById('endDate').value.split('.');
            // alert(document.getElementById('endDate').value)
            // alert(document.getElementById('endDate').value.split('.')[2])
            // alert(parts[2] + " " + Number(parts[1])-1 + " "  + parts[0])
            // date.setFullYear(parts[2], parts[1]-1, parts[0]); // year, month (0-based), day
            // date.setTime(date.getTime() + 86400000);
            // alert(date);
        }
    });

    let startDater = new Datepicker('#startDateBlock', {
        min: (function(){
            var date = new Date();
            date.setDate(date.getDate() - 1);
            return date;
          })(),
        weekStart: 1
    });

    let observer = new MutationObserver(mutationRecords => {
        // console.log(mutationRecords[0].target.dataset.value)
        if (mutationRecords[0].attributeName == "data-value") {
            document.getElementById('startDate').value = mutationRecords[0].target.dataset.value;
            document.getElementById('startDate').click();
            document.getElementById('startDate').click();
        }
    });

    let endDater = new Datepicker('#endDateBlock', {
        min: (function(){
            var date = new Date();
            date.setDate(date.getDate() - 1);
            return date;
          })(),
        weekStart: 1
    });

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

function formatDate(date) {

    var dd = date.getDate();
    if (dd < 10) dd = '0' + dd;
  
    var mm = date.getMonth() + 1;
    if (mm < 10) mm = '0' + mm;
  
    var yy = date.getFullYear();
    // if (yy < 10) yy = '0' + yy;
  
    return dd + '.' + mm + '.' + yy;
  }