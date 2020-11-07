window.addEventListener('DOMContentLoaded', () => {
    
    try {
        let startDater = new Datepicker('#startDate');
    } catch (e) {
        console.log(e)
    }

    try {
        let endDater = new Datepicker('#endDate');
    } catch (e) {
        console.log(e)
    }

    document.getElementById('startDate').addEventListener('blur', () => {
        if (document.getElementById('startDate').value &&  !/^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/.test(document.getElementById('startDate').value)) {
            document.getElementById('startDate').value = "";
        }

        if (document.getElementById('startDate').value && document.getElementById('endDate').value) {
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

        if (document.getElementById('startDate').value && document.getElementById('endDate').value) {
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
});