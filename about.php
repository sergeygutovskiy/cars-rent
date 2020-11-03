<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>О компании</title>
    <link rel="stylesheet" href="css/all.css">
    <link rel="stylesheet" href="css/about.css">
    <!-- <link rel="stylesheet" href="css/main.css"> -->
    <link href="https://use.fontawesome.com/releases/v5.14.0/css/all.css" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Commissioner:wght@400;500;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://unpkg.com/swiper/swiper-bundle.css">
    <script src="https://unpkg.com/swiper/swiper-bundle.js"></script>
    <!-- <script src="js/swiper.js"></script> -->
    <script src="js/hamburger.js"></script>
    <script src="js/about.js"></script>
    <!-- <script src="js/mainInput.js"></script> -->
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
                    <div class="enter blue"><div id="animateEnter"></div><p>Войти</p></div>
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
    <img src="assets/about/carAbout.png" id="aboutBack" alt="" />
    <div id="main">
        <div id="nav">
            <div id="navLogo">
                <div id="navLogoImage"></div>
                <div id="navLogoContent" class="grey"><i class="fas fa-map-marker-alt"></i> <span id="geolocation">&nbsp;Санкт-петербург</span></div>
            </div>
            <div id="navContent">
                <p class="navContentText blue">О компании</p>
                <p class="navContentText blue">Арендовать</p>
                <p class="navContentText blue">Сдать</p>
            </div>
            <div id="navPersonal">
                <div id="lang">
                    <div class="langBlock lightGrey activeLangBlock"><p>Ru</p></div>
                    <div class="langBlock lightGrey"><p>En</p></div>
                </div>
                <div class="enter blue"><div id="animateEnter"></div><p>Войти</p></div>
            </div>
            <div id="hamburger"></div>
        </div>
        <div class="soldText">
            <div class="soldTextMain">
                <h1>Lorem Ipsum</h1>
            </div>
            <div class="soldTextContent grey">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
            </div>
        </div>
        <div id="aboutBlock">
            <div id="aboutPluses">
                <div class="aboutPlusesBlock">
                    <div class="aboutPlusesBlockLogo"></div>
                    <div class="aboutPlusesBlockMain">Безопасная сделка</div>
                    <div class="aboutPlusesBlockText">У нас не бывает случайных клиентов - служба безопасности тщательно проверяет каждого потенциального арендатора</div>
                </div>
                <div class="aboutPlusesBlock">
                    <div class="aboutPlusesBlockLogo"></div>
                    <div class="aboutPlusesBlockMain">Полное сопровождение сделки</div>
                    <div class="aboutPlusesBlockText">Берём на себя решение таких вопросов, как выплата штрафов и компенсация повреждений</div>
                </div>
                <div class="aboutPlusesBlock">
                    <div class="aboutPlusesBlockLogo"></div>
                    <div class="aboutPlusesBlockMain">Полный контроль над сделкой</div>
                    <div class="aboutPlusesBlockText">Вы сами выбираете, на каких условиях сдавать свой автомобиль в аренду. Кроме того, решающее слово всегда за вами - сдавать авто предложенному клиенту или нет</div>
                </div>
                <div class="aboutPlusesBlock">
                    <div class="aboutPlusesBlockLogo"></div>
                    <div class="aboutPlusesBlockMain">Гибкий источник дохода</div>
                    <div class="aboutPlusesBlockText">Комфортный, безопасный и не требующий особых усилий способ обнулить расходы на содержание авто или даже полностью окупить его приобретение!</div>
                </div>
            </div>
        </div>
        <div id="howAllWorks">
            <h3>Как это работает?</h3>
            <div id="howAllWorksButtons">
                <div class="allBlocksHelpButton howAllWorksButton activeHowAllWorksButton">Арендатору</div>
                <div class="allBlocksHelpButton howAllWorksButton">Собственнику</div>
            </div>
            <div class="howAllWorksExampleBlock">
                <div class="exampleAllWorks">
                    <div class="exampleNumber">1</div>
                    <div class="exampleMain">Арендатору</div>
                    <div class="exampleText">Lorem ipsum dolor sit amet, consectetur adipiscing</div>
                </div>
                <div class="exampleAllWorks">
                    <div class="exampleNumber">2</div>
                    <div class="exampleMain">Арендатору</div>
                    <div class="exampleText">Lorem ipsum dolor sit amet, consectetur adipiscing</div>
                </div>
                <div class="exampleAllWorks">
                    <div class="exampleNumber">3</div>
                    <div class="exampleMain">Арендатору</div>
                    <div class="exampleText">Lorem ipsum dolor sit amet, consectetur adipiscing</div>
                </div>
                <div class="exampleAllWorks">
                    <div class="exampleNumber">4</div>
                    <div class="exampleMain">Арендатору</div>
                    <div class="exampleText">Lorem ipsum dolor sit amet, consectetur adipiscing</div>
                </div>
                <div class="exampleAllWorks">
                    <div class="exampleNumber">5</div>
                    <div class="exampleMain">Арендатору</div>
                    <div class="exampleText">Lorem ipsum dolor sit amet, consectetur adipiscing</div>
                </div>
                <div class="exampleAllWorks">
                    <div class="exampleNumber">6</div>
                    <div class="exampleMain">Арендатору</div>
                    <div class="exampleText">Lorem ipsum dolor sit amet, consectetur adipiscing</div>
                </div>
            </div>
            <div class="howAllWorksExampleBlock notDisplayExmapleBlock">
                <div class="exampleAllWorks">
                    <div class="exampleNumber">1</div>
                    <div class="exampleMain">Собственнику</div>
                    <div class="exampleText">Lorem ipsum dolor sit amet, consectetur adipiscing</div>
                </div>
                <div class="exampleAllWorks">
                    <div class="exampleNumber">2</div>
                    <div class="exampleMain">Собственнику</div>
                    <div class="exampleText">Lorem ipsum dolor sit amet, consectetur adipiscing</div>
                </div>
                <div class="exampleAllWorks">
                    <div class="exampleNumber">3</div>
                    <div class="exampleMain">Собственнику</div>
                    <div class="exampleText">Lorem ipsum dolor sit amet, consectetur adipiscing</div>
                </div>
                <div class="exampleAllWorks">
                    <div class="exampleNumber">4</div>
                    <div class="exampleMain">Собственнику</div>
                    <div class="exampleText">Lorem ipsum dolor sit amet, consectetur adipiscing</div>
                </div>
                <div class="exampleAllWorks">
                    <div class="exampleNumber">5</div>
                    <div class="exampleMain">Собственнику</div>
                    <div class="exampleText">Lorem ipsum dolor sit amet, consectetur adipiscing</div>
                </div>
                <div class="exampleAllWorks">
                    <div class="exampleNumber">6</div>
                    <div class="exampleMain">Собственнику</div>
                    <div class="exampleText">Lorem ipsum dolor sit amet, consectetur adipiscing</div>
                </div>
            </div>
            <div class="animatedButton blue"><div class="animatedButtonEnter"></div><p>Перейти к выбору автомобиля</p></div>
        </div>
        <div id="questions">
            <div id="popularQuestions">
                <h3>Популярные вопросы</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
            <div id="questionsContent">
                <div class="question">
                    <p class="questionMain">Lorem ipsum dolor sit</p>
                    <p class="questionIcon">+</p>
                    <p class="questionText">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
                </div>
                <div class="question">
                    <p class="questionMain">Lorem ipsum dolor sit</p>
                    <p class="questionIcon">+</p>
                    <p class="questionText">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
                </div>
                <div class="question">
                    <p class="questionMain">Lorem ipsum dolor sit</p>
                    <p class="questionIcon">+</p>
                    <p class="questionText">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
                </div>
                <div class="question">
                    <p class="questionMain">Lorem ipsum dolor sit</p>
                    <p class="questionIcon">+</p>
                    <p class="questionText">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
                </div>
            </div>
        </div>
       
        <div id="allBlocksHelp">
            <div class="allBlocksHelpButton">Я собственник</div>
            <div class="allBlocksHelpButton">Я арендатор</div>
            <img src="assets/all/helpCar.png" />
        </div>
        <div id="footer">
            <div id="footerLogo"><a href="#"><p>Lorem Ipsum</p></a></div>
            <div id="footerContent">
                <p>О компании</p>
                <p>Арендовать</p>
                <p>Сдать</p>
                <p>Личный кабинет</p>
            </div>
            <div id="footerLine"></div>
            <div id="footerText">© 2020 Lorem Ipsum. All rights reserved.</div>
        </div>
    </div>
</body>
</html>