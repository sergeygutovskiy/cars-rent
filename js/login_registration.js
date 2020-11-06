
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

    let passResets = document.getElementsByClassName('passReset');

    try {
        for (let elem in passResets) {
            (() => {
                
                passResets[elem].addEventListener('click', (event) => {
                   
                    if (passCheck[1].getElementsByTagName('input')[0].value != passCheck[0].getElementsByTagName('input')[0].value) {
                        if (passCheck[1].classList.contains('correctPassword')) {
                            passCheck[1].classList.remove('correctPassword');
                            document.getElementsByClassName('inputHint')[0].classList.remove('correctInputHint');
                            document.getElementsByClassName('inputHint')[0].innerHTML = "Пароли не совпадают!";
                        }
                        passCheck[1].classList.add('incorrectPassword');
                        document.getElementsByClassName('inputHint')[0].classList.add('incorrectInputHint');
                    } else if (!passCheck[1].getElementsByTagName('input')[0].value || !passCheck[0].getElementsByTagName('input')[0].value) {
                        passCheck[1].classList.remove('incorrectPassword');
                        document.getElementsByClassName('inputHint')[0].classList.remove('incorrectInputHint');
                        passCheck[1].classList.remove('correctPassword');
                        document.getElementsByClassName('inputHint')[0].classList.remove('correctInputHint');
                    } else {
                        if (passCheck[1].classList.contains('incorrectPassword')) {
                            passCheck[1].classList.remove('incorrectPassword');
                            document.getElementsByClassName('inputHint')[0].classList.remove('incorrectInputHint');
                            document.getElementsByClassName('inputHint')[0].innerHTML = "Пароли совпадают!";
                        }
                        passCheck[1].classList.add('correctPassword');
                        document.getElementsByClassName('inputHint')[0].classList.add('correctInputHint');
                    }

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
                
                inputContents[elem].addEventListener('focus', (e) => {
                    
                    if (!inputContents[elem].value) {
                        inputResets[elem].style.display = "none";
                    } else {
                        inputResets[elem].style.display = "block";
                    }
                });

                inputContents[elem].addEventListener('input', (e) => {
                    
                    if (!inputContents[elem].value) {
                        inputResets[elem].style.display = "none";
                    } else {
                        inputResets[elem].style.display = "block";
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


    let passCheck = document.getElementsByClassName('connectedPass');

    passCheck[0].addEventListener('input', () => {
        if (passCheck[1].getElementsByTagName('input')[0].value != passCheck[0].getElementsByTagName('input')[0].value) {
            if (passCheck[1].classList.contains('correctPassword')) {
                passCheck[1].classList.remove('correctPassword');
                document.getElementsByClassName('inputHint')[0].classList.remove('correctInputHint');
                document.getElementsByClassName('inputHint')[0].innerHTML = "Пароли не совпадают!";
            }
            passCheck[1].classList.add('incorrectPassword');
            document.getElementsByClassName('inputHint')[0].classList.add('incorrectInputHint');
        } else if (!passCheck[1].getElementsByTagName('input')[0].value || !passCheck[0].getElementsByTagName('input')[0].value) {
            passCheck[1].classList.remove('incorrectPassword');
            document.getElementsByClassName('inputHint')[0].classList.remove('incorrectInputHint');
            passCheck[1].classList.remove('correctPassword');
            document.getElementsByClassName('inputHint')[0].classList.remove('correctInputHint');
        } else {
            if (passCheck[1].classList.contains('incorrectPassword')) {
                passCheck[1].classList.remove('incorrectPassword');
                document.getElementsByClassName('inputHint')[0].classList.remove('incorrectInputHint');
                document.getElementsByClassName('inputHint')[0].innerHTML = "Пароли совпадают!";
            }
            passCheck[1].classList.add('correctPassword');
            document.getElementsByClassName('inputHint')[0].classList.add('correctInputHint');
        }
    })

    passCheck[1].addEventListener('input', () => {
        if (passCheck[1].getElementsByTagName('input')[0].value != passCheck[0].getElementsByTagName('input')[0].value) {
            if (passCheck[1].classList.contains('correctPassword')) {
                passCheck[1].classList.remove('correctPassword');
                document.getElementsByClassName('inputHint')[0].classList.remove('correctInputHint');
                document.getElementsByClassName('inputHint')[0].innerHTML = "Пароли не совпадают!";
            }
            passCheck[1].classList.add('incorrectPassword');
            document.getElementsByClassName('inputHint')[0].classList.add('incorrectInputHint');
        } else if (!passCheck[1].getElementsByTagName('input')[0].value || !passCheck[0].getElementsByTagName('input')[0].value) {
            passCheck[1].classList.remove('incorrectPassword');
            document.getElementsByClassName('inputHint')[0].classList.remove('incorrectInputHint');
            passCheck[1].classList.remove('correctPassword');
            document.getElementsByClassName('inputHint')[0].classList.remove('correctInputHint');
        } else {
            if (passCheck[1].classList.contains('incorrectPassword')) {
                passCheck[1].classList.remove('incorrectPassword');
                document.getElementsByClassName('inputHint')[0].classList.remove('incorrectInputHint');
                document.getElementsByClassName('inputHint')[0].innerHTML = "Пароли совпадают!";
            }
            passCheck[1].classList.add('correctPassword');
            document.getElementsByClassName('inputHint')[0].classList.add('correctInputHint');
        }
    })



    
    document.getElementById('enterBackSubmitReg').addEventListener('click', () => {
        document.getElementsByClassName('absoluted')[0].style.opacity = '0';
        setTimeout(() => {document.getElementsByClassName('absoluted')[0].style.display = 'none';}, 300)

        document.getElementsByClassName('absoluted')[1].style.display = 'flex';
        setTimeout(() => {document.getElementsByClassName('absoluted')[1].style.opacity = '1';}, 300)
    });

    document.getElementById('regBackClose').addEventListener('click', () => {
        document.getElementsByClassName('absoluted')[1].style.opacity = '0';
        setTimeout(() => {document.getElementsByClassName('absoluted')[1].style.display = 'none';}, 300)
        document.body.style.overflowY = "unset";
        document.body.style.height = "max-content";
        document.body.style.width = "unset";
    });

    document.getElementById('enterBackClose').addEventListener('click', () => {
        document.getElementsByClassName('absoluted')[0].style.opacity = '0';
        setTimeout(() => {document.getElementsByClassName('absoluted')[0].style.display = 'none';}, 300)
        document.body.style.overflowY = "unset";
        document.body.style.height = "max-content";
        document.body.style.width = "unset";
    });

    document.getElementsByClassName('enter')[0].addEventListener('click', () => {
        document.getElementsByClassName('absoluted')[0].style.display = 'flex';
        setTimeout(() => {document.getElementsByClassName('absoluted')[0].style.opacity = '1';}, 300)
        document.body.style.overflowY = "hidden";
        document.body.style.height = "100vh";
        document.body.style.width = window.innerWidth - 20 + "px";
    });

    document.getElementsByClassName('enter')[1].addEventListener('click', () => {
        document.getElementsByClassName('absoluted')[0].style.display = 'flex';
        setTimeout(() => {document.getElementsByClassName('absoluted')[0].style.opacity = '1';}, 300)
        document.body.style.overflowY = "hidden";
        document.body.style.height = "100vh";
        document.body.style.width = window.innerWidth - 20 + "px";
    });

});

function getState(elem) {
    if (elem.classList.contains('emptyState')) return "emptyState";
    else if (elem.classList.contains('notEmptyUnfocusedState')) return "notEmptyUnfocusedState";
    else if (elem.classList.contains('activeState')) return "activeState";
}
