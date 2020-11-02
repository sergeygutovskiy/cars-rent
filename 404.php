<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>О компании</title>
    <link rel="stylesheet" href="css/all.css">
    <!-- <link rel="stylesheet" href="css/main.css"> -->

    <link href="https://use.fontawesome.com/releases/v5.14.0/css/all.css" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Commissioner:wght@400;500;600;700&display=swap" rel="stylesheet">

    <link rel="stylesheet" href="https://unpkg.com/swiper/swiper-bundle.css">
    <script src="https://unpkg.com/swiper/swiper-bundle.js"></script>
    <!-- <script src="js/swiper.js"></script> -->
    <script src="js/hamburger.js"></script>
    <!-- <script src="js/mainInput.js"></script> -->

    <style>
        .submitButton {
            width: 330px;
            height: 65px;
            margin: auto;
            margin-top: 54px;
            /* margin-bottom: 250px; */
        }

        #unfinedBack {
            width: 1000px;
            height: 320px;
            position: fixed;
            bottom: calc(50% - 160px);
            right: -605px;
        }

        .soldTextMain  h1{
            font-size: 56px;
        }

        .soldTextContent {
            display: flex;
            justify-content: center;
            max-width: unset;
        }

        @media only screen and (max-width: 1259px) {
            #unfinedBack {
                right: -770px;
            }
        }

        @media only screen and (max-width: 767px) {

            .soldTextMain  h1{
                font-size: 24px;
            }

            #unfinedBack {
                bottom: unset;
                top: 380px;
                width: 500px;
                height: 160px;
                right: -350px;
            }
        }
    </style>

</head>
<body>

    <!-- <div class="absoluted">
        <div id="enterBack">
            <div id="enterBackClose"><i class="fas fa-times"></i></div>
            <div id="enterBackMain">Вход</div>

            <div id="enterBackContent">
                <div class="normalisedInput">
                    <input type="text" id="enterEmail" />
                    <div class="inactiveNormalisedText">Телефон или e-mail</div>
                </div>

                <div class="normalisedInput"></div>
            </div>

            <div id="enterBackSubmit">
                <div class="submitButton">Войти</div>
                <div id="enterBackSubmitForget">Забыли пароль?</div>
                <div id="enterBackSubmitReg">Регистрация</div>
            </div>
        </div>
    </div> -->

    <!-- <div class="absoluted"></div> -->

    <div id="absolutedHamburger" class="notDisplay">
        <div id="absolutedHamburgerContent">
            <div id="nav">
                <div id="navLogo">
                    <div id="navLogoImage"></div>
                    <!-- <div id="navLogoContent" class="grey"><i class="fas fa-map-marker-alt"></i> <span id="geolocation">&nbsp;Санкт-петербург</span></div> -->
                </div>
                <!-- <div id="navContent">
                    <p class="navContentText blue">О компании</p>
                    <p class="navContentText blue">Арендовать</p>
                    <p class="navContentText blue">Сдать</p>
                </div> -->
                <div id="navPersonal">
                    <!-- <div id="lang">
                        <div class="langBlock lightGrey activeLangBlock"><p>Ru</p></div>
                        <div class="langBlock lightGrey"><p>En</p></div>
                    </div> -->
                    <div id="enter" class="blue"><div id="animateEnter"></div><p>Войти</p></div>
                </div>
    
                <div id="absolutedHamburgerClose">
                    <div class="absolutedHamburgerCloseContent"></div>
                    <div class="absolutedHamburgerCloseContent"></div>
                </div>
            </div>

            <div id="absolutedHamburgerTextContent">
                <div class="absolutedHamburgerText blue">О компании</div>
                <div class="absolutedHamburgerText blue">Арендовать</div>
                <div class="absolutedHamburgerText blue">Сдать</div>
            </div>
            
            <div id="lang">
                <div class="langBlock lightGrey activeLangBlock"><p>Ru</p></div>
                <div class="langBlock lightGrey"><p>En</p></div>
            </div>

            <div id="navLogoContent" class="grey"><i class="fas fa-map-marker-alt"></i> <span id="geolocation">&nbsp;Санкт-петербург</span></div>
            
        </div>
    </div>

    <div id="main">

        <div id="nav">
            <div id="navLogo">
                <div id="navLogoImage"></div>
                <div id="navLogoContent" class="grey"><i class="fas fa-map-marker-alt"></i> <span id="geolocation">&nbsp;Санкт-петербург</span></div>
            </div>
            <div id="navContent">
                <a href="about.html"><p class="navContentText blue">О компании</p></a>
                <p class="navContentText blue">Арендовать</p>
                <p class="navContentText blue">Сдать</p>
            </div>
            <div id="navPersonal">
                <div id="lang">
                    <div class="langBlock lightGrey activeLangBlock"><p>Ru</p></div>
                    <div class="langBlock lightGrey"><p>En</p></div>
                </div>
                <div id="enter" class="blue"><div id="animateEnter"></div><p>Войти</p></div>
            </div>

            <div id="hamburger"></div>
        </div>

        <div class="soldText">
            <div class="soldTextMain">
                <h1>404. Страница не найдена</h1>
            </div>
            <div class="soldTextContent grey">
                <p>Страница, которую Вы ищете, не существует или была перенесена</p>
            </div>

            <div class="submitButton">Перейти на главную страницу</div>
            <img src="assets/main/mainCar.png" alt="" id="unfinedBack" />
        </div>

        <!-- <div id="footer">
            <div id="footerLogo"><a href="#"><p>Lorem Ipsum</p></a></div>
            <div id="footerContent">
                <p>О компании</p>
                <p>Арендовать</p>
                <p>Сдать</p>
                <p>Личный кабинет</p>
            </div>
            <div id="footerLine"></div>
            <div id="footerText">© 2020 Lorem Ipsum. All rights reserved.</div>
        </div> -->

    </div>

</body>
</html>