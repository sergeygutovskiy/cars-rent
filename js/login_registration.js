
window.addEventListener('DOMContentLoaded', () => {
    
    let inputs = document.getElementsByClassName('customServisInput');
    let inputContents = document.getElementsByClassName('customServisInputMain');
    let inputResets = document.getElementsByClassName('formContentReset');

    let passwordShow = document.getElementsByClassName('passwordShower')[0];
    let needShow = 0;

    passwordShow.addEventListener('click', () => {
        if (!needShow) {
            passwordShow.src = "assets/all/Hide.svg"
            document.getElementsByClassName('passwordInputer')[0].getElementsByTagName('input')[0].type = "text";
        } else {
            passwordShow.src = "assets/all/View.svg"
            document.getElementsByClassName('passwordInputer')[0].getElementsByTagName('input')[0].type = "password";
        }
        needShow = !needShow;
    });

    

    try {
        for (let elem in inputResets) {
            (() => {
                
                inputResets[elem].addEventListener('click', (event) => {
                    inputContents[elem].value = "";
                    inputContents[elem].focus();
                });

            })()
        }
    } catch (e) {
        console.log(e);
    }

    try {
        for (let elem in inputs) {
            (() => {
                
                inputs[elem].addEventListener('click', (e) => {
                    if (!inputs[elem].classList.contains('activeState')) {
                        let state = getState(inputs[elem]);

                        switch (state) {
                            case "emptyState": {
                                inputs[elem].classList.toggle(state);
                                inputs[elem].classList.toggle("activeState");
                                inputContents[elem].focus();
                                break;
                            }

                            case "notEmptyUnfocusedState": {
                                inputs[elem].classList.toggle(state);
                                inputs[elem].classList.toggle("activeState");
                                inputContents[elem].focus();
                                break;
                            }
                        }
                    } else {
                        inputContents[elem].focus();
                    }
                });

            })()
        }
    } catch (e) {
        console.log(e);
    }

    try {
        for (let elem in inputContents) {
            (() => {
                
                inputContents[elem].addEventListener('blur', () => {
                    let state = getState(inputs[elem]);
                    

                    // if (state == "activeState") {
                        if (inputContents[elem].value) {
                            inputs[elem].classList.toggle(state);
                            inputs[elem].classList.toggle("notEmptyUnfocusedState");
                        } else {
                            inputs[elem].classList.toggle(state);
                            inputs[elem].classList.toggle("emptyState");
                        }
                    // }
                });

            })()
        }
    } catch (e) {
        console.log(e);
    }

    
    document.getElementById('enterBackSubmitReg').addEventListener('click', () => {
        document.getElementsByClassName('absoluted')[0].style.opacity = '0';
        setTimeout(() => {document.getElementsByClassName('absoluted')[0].style.display = 'none';}, 300)

        document.getElementsByClassName('absoluted')[1].style.display = 'flex';
        setTimeout(() => {document.getElementsByClassName('absoluted')[1].style.opacity = '1';}, 300)
    });

    document.getElementById('regBackClose').addEventListener('click', () => {
        document.getElementsByClassName('absoluted')[1].style.opacity = '0';
        setTimeout(() => {document.getElementsByClassName('absoluted')[1].style.display = 'none';}, 300)
    });

    document.getElementById('enterBackClose').addEventListener('click', () => {
        document.getElementsByClassName('absoluted')[0].style.opacity = '0';
        setTimeout(() => {document.getElementsByClassName('absoluted')[0].style.display = 'none';}, 300)
    });

    document.getElementsByClassName('enter')[0].addEventListener('click', () => {
        document.getElementsByClassName('absoluted')[0].style.display = 'flex';
        setTimeout(() => {document.getElementsByClassName('absoluted')[0].style.opacity = '1';}, 300)
    });

    document.getElementsByClassName('enter')[1].addEventListener('click', () => {
        document.getElementsByClassName('absoluted')[0].style.display = 'flex';
        setTimeout(() => {document.getElementsByClassName('absoluted')[0].style.opacity = '1';}, 300)
    });

});

function getState(elem) {
    if (elem.classList.contains('emptyState')) return "emptyState";
    else if (elem.classList.contains('notEmptyUnfocusedState')) return "notEmptyUnfocusedState";
    else if (elem.classList.contains('activeState')) return "activeState";
}
