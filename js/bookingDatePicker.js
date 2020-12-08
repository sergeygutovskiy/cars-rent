window.addEventListener('DOMContentLoaded', () => {
    
    try {
        let startDater = new Datepicker('#startDateI', {
            min: (function(){
                var date = new Date();
                date.setDate(date.getDate() - 1);
                return date;
              })(),
            weekStart: 1
        });
    } catch (e) {
        console.log(e)
    }

    try {
        let endDater = new Datepicker('#endDateI', {
            min: (function(){
                var date = new Date();
                date.setDate(date.getDate() - 1);
                return date;
              })(),
            weekStart: 1
        });
    } catch (e) {
        console.log(e)
    }

    let observer = new MutationObserver(mutationRecords => {
        // console.log(mutationRecords)
        if (mutationRecords[0].attributeName == "data-value") {
            document.getElementById('startDate').value = mutationRecords[0].target.dataset.value;
            document.getElementById('startDate').focus();
            document.getElementById('startDate').blur();
        }
    });

    let enderObserver = new MutationObserver(mutationRecords => {
        // console.log(mutationRecords)
        if (mutationRecords[0].attributeName == "data-value") {
            document.getElementById('endDate').value = mutationRecords[0].target.dataset.value;
            document.getElementById('endDate').focus();
            document.getElementById('endDate').blur();
        }
    });
      
      // наблюдать за всем, кроме атрибутов
      observer.observe(document.getElementById('startDateI'), {
        attributes: true
      });

      enderObserver.observe(document.getElementById('endDateI'), {
        attributes: true
      });

    document.getElementById('startDate').addEventListener('blur', () => {
        if (document.getElementById('startDate').value &&  !/^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/.test(document.getElementById('startDate').value)) {
            document.getElementById('startDate').value = "";
        }

        // console.log(document.getElementById('startDate').value)


        if (document.getElementById('startDate').value && document.getElementById('endDate').value) {
            let me = document.getElementById('startDate').value.split('.');
            let it = document.getElementById('endDate').value.split('.');

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
        }
    });
});