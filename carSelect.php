<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>О компании</title>
    <link rel="stylesheet" href="css/all.css">
    <link rel="stylesheet" href="css/carSelect.css">
    <!-- <link rel="stylesheet" href="css/main.css"> -->

    <link href="https://use.fontawesome.com/releases/v5.14.0/css/all.css" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Commissioner:wght@400;500;600;700&display=swap" rel="stylesheet">

    <link rel="stylesheet" href="https://unpkg.com/swiper/swiper-bundle.css">
    <script src="https://unpkg.com/swiper/swiper-bundle.js"></script>
    <!-- <script src="js/swiper.js"></script> -->
    <script src="js/hamburger.js"></script>
    <script src="js/carSelect.js"></script>
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

        

        <div id="mainInputBlock">

            <div id="inputFixerBlock">
                <div class="input dateInput">
                    <div class="inputContent">
                        <div class="inactiveContent">
                            <p>Начало аренды</p>
                        </div>
                        <div class="activeContent"></div>
                    </div>
                    <img src="assets/all/Calandar.svg" class="inputLogo"/>
                </div>
                <div class="input dateInput">
                    <div class="inputContent">
                        <div class="inactiveContent">
                            <!-- <p>Начало аренды</p> -->
                        </div>
                        <div class="activeContent">
                            <p class="activeContentPlaceholder">Конец аренды</p>
                            <p class="activeContentText">20.12.2020</p>
                        </div>
                    </div>
                    <img src="assets/all/Calandar.svg" class="inputLogo"/>
                </div>
                <div class="input typeInput">
                    <div class="inputContent"></div>
                    <img src="assets/all/Arrow.svg" class="inputLogo typeInputLogo"/>
                </div>
                <div class="input textInput">
                    <input class="inputContent" type="text" id="city" placeholder="Введите город"/>
                    <img src="assets/all/Search.svg" class="inputLogo"/>
                </div>
            </div>

            <div class="submitButton">Подобрать</div>
        </div>




        <div id="selectContent">

            <!-- <div id="stickyBlock">

                <div class="pointChoice">
                    <p class="pointChoiceText">Автомобиль</p>
                    <p class="pointChoiceText activePoint">Водный</p>
                    <p class="pointChoiceText">Мототехника</p>
                    <div class="pointChoiceMarker"></div>
                </div>

                <div class="categoryInputContainer">
                    <div class="categoryInput">
                        <div class="categoryInputText">Цена</div>
                        <div class="categoryInputMarker"><img src="assets/all/sortArrowDown.svg" ></div>
                    </div>

                    <div class="categoryInputContent">
                        <div class="categoryInputContentItem">Lorem</div>
                        <div class="categoryInputContentItem">ipsum</div>
                    </div>
                </div>


                <div class="categoryInputContainer">
                    <div class="categoryInput">
                        <div class="categoryInputText">Марка</div>
                        <div class="categoryInputMarker"><img src="assets/all/sortArrowDown.svg" ></div>
                    </div>

                    <div class="categoryInputContent">
                        <div class="categoryInputContentItem">Lorem</div>
                        <div class="categoryInputContentItem">ipsum</div>
                    </div>
                </div>

                <div class="categoryInputContainer">
                    <div class="categoryInput">
                        <div class="categoryInputText">Класс</div>
                        <div class="categoryInputMarker"><img src="assets/all/sortArrowDown.svg" ></div>
                    </div>
                    
                    <div class="categoryInputContent">
                        <div class="categoryInputContentItem">Lorem</div>
                        <div class="categoryInputContentItem">ipsum</div>
                    </div>
                </div>

                <div class="categoryInputContainer">
                    <div class="categoryInput">
                        <div class="categoryInputText">Категория</div>
                        <div class="categoryInputMarker"><img src="assets/all/sortArrowDown.svg" ></div>
                    </div>
                    
                    <div class="categoryInputContent">
                        <div class="categoryInputContentItem">Lorem</div>
                        <div class="categoryInputContentItem">ipsum</div>
                    </div>
                </div>

                <div class="categoryInputContainer">
                    <div class="categoryInput">
                        <div class="categoryInputText">Коробка</div>
                        <div class="categoryInputMarker"><img src="assets/all/sortArrowDown.svg" ></div>
                    </div>
                    
                    <div class="categoryInputContent">
                        <div class="categoryInputContentItem">Lorem</div>
                        <div class="categoryInputContentItem">ipsum</div>
                    </div>
                </div>

                <div class="categoryInputContainer">
                    <div class="categoryInput">
                        <div class="categoryInputText">Двигатель</div>
                        <div class="categoryInputMarker"><img src="assets/all/sortArrowDown.svg" ></div>
                    </div>
                    
                    <div class="categoryInputContent">
                        <div class="categoryInputContentItem">Lorem</div>
                        <div class="categoryInputContentItem">ipsum</div>
                    </div>
                </div>

                <label class="container">Поездка за пределы города
                    <input class="filterRadio" type="checkbox">
                    <span class="checkmark"></span>
                </label>
                  
                <label class="container">Детское кресло
                    <input type="checkbox" class="filterRadio">
                    <span class="checkmark"></span>
                </label>
                  
                <label class="container">Багажник на крыше
                    <input type="checkbox" class="filterRadio">
                    <span class="checkmark"></span>
                </label>
                  
                <label class="container">Крепление на крыше
                    <input type="checkbox" class="filterRadio">
                    <span class="checkmark"></span>
                </label>

                <label class="container">Наличие доставки
                    <input type="checkbox" class="filterRadio">
                    <span class="checkmark"></span>
                </label>

                <div class="resetCategories"><i class="fas fa-times"></i>&nbsp; Сбросить все параметры (<span class="resetCategoriesCount">0</span>)</div>
            </div> -->








                
            <div id="selectMainContainer">
                <div id="selectSort">
                    <div class="selectSortElemBlock">
                        <p class="selectSortElem">По цене&nbsp; </p>
                        <i class="fas fa-angle-up selectSortElemMarker"></i>
                    </div>



                    <div class="selectSortElemBlock selectFiltration">
                        <img src="assets/all/filter.svg" />
                        <p class="selectSortElem">&nbsp; Фильтры (<span class="filtersCount">0</span>)</p>
                    </div>
                </div>


                <div id="stickyBlock">

                    <div class="pointChoice">
                        <p class="pointChoiceText">Автомобиль</p>
                        <p class="pointChoiceText activePoint">Водный</p>
                        <p class="pointChoiceText">Мототехника</p>
                        <div class="pointChoiceMarker"></div>
                    </div>
    
                    <div class="categoryInputContainer">
                        <div class="categoryInput">
                            <div class="categoryInputText">Цена</div>
                            <div class="categoryInputMarker"><img src="assets/all/sortArrowDown.svg" ></div>
                        </div>
    
                        <div class="categoryInputContent">
                            <div class="categoryInputContentItem">Lorem</div>
                            <div class="categoryInputContentItem">ipsum</div>
                        </div>
                    </div>
    
    
                    <div class="categoryInputContainer">
                        <div class="categoryInput">
                            <div class="categoryInputText">Марка</div>
                            <div class="categoryInputMarker"><img src="assets/all/sortArrowDown.svg" ></div>
                        </div>
    
                        <div class="categoryInputContent">
                            <div class="categoryInputContentItem">Lorem</div>
                            <div class="categoryInputContentItem">ipsum</div>
                        </div>
                    </div>
    
                    <div class="categoryInputContainer">
                        <div class="categoryInput">
                            <div class="categoryInputText">Класс</div>
                            <div class="categoryInputMarker"><img src="assets/all/sortArrowDown.svg" ></div>
                        </div>
                        
                        <div class="categoryInputContent">
                            <div class="categoryInputContentItem">Lorem</div>
                            <div class="categoryInputContentItem">ipsum</div>
                        </div>
                    </div>
    
                    <div class="categoryInputContainer">
                        <div class="categoryInput">
                            <div class="categoryInputText">Категория</div>
                            <div class="categoryInputMarker"><img src="assets/all/sortArrowDown.svg" ></div>
                        </div>
                        
                        <div class="categoryInputContent">
                            <div class="categoryInputContentItem">Lorem</div>
                            <div class="categoryInputContentItem">ipsum</div>
                        </div>
                    </div>
    
                    <div class="categoryInputContainer">
                        <div class="categoryInput">
                            <div class="categoryInputText">Коробка</div>
                            <div class="categoryInputMarker"><img src="assets/all/sortArrowDown.svg" ></div>
                        </div>
                        
                        <div class="categoryInputContent">
                            <div class="categoryInputContentItem">Lorem</div>
                            <div class="categoryInputContentItem">ipsum</div>
                        </div>
                    </div>
    
                    <div class="categoryInputContainer">
                        <div class="categoryInput">
                            <div class="categoryInputText">Двигатель</div>
                            <div class="categoryInputMarker"><img src="assets/all/sortArrowDown.svg" ></div>
                        </div>
                        
                        <div class="categoryInputContent">
                            <div class="categoryInputContentItem">Lorem</div>
                            <div class="categoryInputContentItem">ipsum</div>
                        </div>
                    </div>
    
                    <label class="container">Поездка за пределы города
                        <input class="filterRadio" type="checkbox">
                        <span class="checkmark"></span>
                    </label>
                      
                    <label class="container">Детское кресло
                        <input type="checkbox" class="filterRadio">
                        <span class="checkmark"></span>
                    </label>
                      
                    <label class="container">Багажник на крыше
                        <input type="checkbox" class="filterRadio">
                        <span class="checkmark"></span>
                    </label>
                      
                    <label class="container">Крепление на крыше
                        <input type="checkbox" class="filterRadio">
                        <span class="checkmark"></span>
                    </label>
    
                    <label class="container">Наличие доставки
                        <input type="checkbox" class="filterRadio">
                        <span class="checkmark"></span>
                    </label>
    
                    <div class="resetCategories"><i class="fas fa-times"></i>&nbsp; Сбросить все параметры (<span class="resetCategoriesCount">0</span>)</div>
                </div>

                <div id="selectMain">



                    <div class="swiper-slide">
                        <div class="swiperSlideImage">
                        </div>
                        <div class="swiperSlideName darkGrey">Mercedes-Benz E, 2013asfg adgdsfhffghfgh gdkfjgbsdlf vbsdlhfvbs dhfdsf lfgdlk</div>
                        <div class="swiperSlidePrice darkGrey">2 000 ₽ <span class="priceDay lightGrey">/сутки</span></div>
                        <div class="swiperSlideFeatures">
                            <div class="swiperFeature orangeFeature"><i class="fas fa-tag"></i>&nbsp; Автомат</div>
                            <div class="swiperFeature blueFeature"><i class="fas fa-tag"></i>&nbsp; Комфорт</div>
                        </div>
                    </div>
                    <div class="swiper-slide">
                        <div class="swiperSlideImage">
                        </div>
                        <div class="swiperSlideName darkGrey">Mercedes-Benz E, 2013</div>
                        <div class="swiperSlidePrice darkGrey">2 000 ₽ <span class="priceDay lightGrey">/сутки</span></div>
                        <div class="swiperSlideFeatures">
                            <div class="swiperFeature orangeFeature"><i class="fas fa-tag"></i>&nbsp; Автомат</div>
                            <div class="swiperFeature blueFeature"><i class="fas fa-tag"></i>&nbsp; Комфорт</div>
                        </div>
                    </div>
                    <div class="swiper-slide">
                        <div class="swiperSlideImage">
                        </div>
                        <div class="swiperSlideName darkGrey">Mercedes-Benz E, 2013</div>
                        <div class="swiperSlidePrice darkGrey">2 000 ₽ <span class="priceDay lightGrey">/сутки</span></div>
                        <div class="swiperSlideFeatures">
                            <div class="swiperFeature orangeFeature"><i class="fas fa-tag"></i>&nbsp; Автомат</div>
                            <div class="swiperFeature blueFeature"><i class="fas fa-tag"></i>&nbsp; Комфорт</div>
                        </div>
                    </div>
                    <div class="swiper-slide">
                        <div class="swiperSlideImage">
                        </div>
                        <div class="swiperSlideName darkGrey">Mercedes-Benz E, 2013</div>
                        <div class="swiperSlidePrice darkGrey">2 000 ₽ <span class="priceDay lightGrey">/сутки</span></div>
                        <div class="swiperSlideFeatures">
                            <div class="swiperFeature orangeFeature"><i class="fas fa-tag"></i>&nbsp; Автомат</div>
                            <div class="swiperFeature blueFeature"><i class="fas fa-tag"></i>&nbsp; Комфорт</div>
                        </div>
                    </div>
                    <div class="swiper-slide">
                        <div class="swiperSlideImage">
                        </div>
                        <div class="swiperSlideName darkGrey">Mercedes-Benz E, 2013</div>
                        <div class="swiperSlidePrice darkGrey">2 000 ₽ <span class="priceDay lightGrey">/сутки</span></div>
                        <div class="swiperSlideFeatures">
                            <div class="swiperFeature orangeFeature"><i class="fas fa-tag"></i>&nbsp; Автомат</div>
                            <div class="swiperFeature blueFeature"><i class="fas fa-tag"></i>&nbsp; Комфорт</div>
                        </div>
                    </div>
                    <div class="swiper-slide">
                        <div class="swiperSlideImage">
                        </div>
                        <div class="swiperSlideName darkGrey">Mercedes-Benz E, 2013</div>
                        <div class="swiperSlidePrice darkGrey">2 000 ₽ <span class="priceDay lightGrey">/сутки</span></div>
                        <div class="swiperSlideFeatures">
                            <div class="swiperFeature orangeFeature"><i class="fas fa-tag"></i>&nbsp; Автомат</div>
                            <div class="swiperFeature blueFeature"><i class="fas fa-tag"></i>&nbsp; Комфорт</div>
                        </div>
                    </div>
                    <div class="swiper-slide">
                        <div class="swiperSlideImage">
                        </div>
                        <div class="swiperSlideName darkGrey">Mercedes-Benz E, 2013</div>
                        <div class="swiperSlidePrice darkGrey">2 000 ₽ <span class="priceDay lightGrey">/сутки</span></div>
                        <div class="swiperSlideFeatures">
                            <div class="swiperFeature orangeFeature"><i class="fas fa-tag"></i>&nbsp; Автомат</div>
                            <div class="swiperFeature blueFeature"><i class="fas fa-tag"></i>&nbsp; Комфорт</div>
                        </div>
                    </div>
                    <div class="swiper-slide">
                        <div class="swiperSlideImage">
                        </div>
                        <div class="swiperSlideName darkGrey">Mercedes-Benz E, 2013</div>
                        <div class="swiperSlidePrice darkGrey">2 000 ₽ <span class="priceDay lightGrey">/сутки</span></div>
                        <div class="swiperSlideFeatures">
                            <div class="swiperFeature orangeFeature"><i class="fas fa-tag"></i>&nbsp; Автомат</div>
                            <div class="swiperFeature blueFeature"><i class="fas fa-tag"></i>&nbsp; Комфорт</div>
                        </div>
                    </div>
                    <div class="swiper-slide">
                        <div class="swiperSlideImage">
                        </div>
                        <div class="swiperSlideName darkGrey">Mercedes-Benz E, 2013</div>
                        <div class="swiperSlidePrice darkGrey">2 000 ₽ <span class="priceDay lightGrey">/сутки</span></div>
                        <div class="swiperSlideFeatures">
                            <div class="swiperFeature orangeFeature"><i class="fas fa-tag"></i>&nbsp; Автомат</div>
                            <div class="swiperFeature blueFeature"><i class="fas fa-tag"></i>&nbsp; Комфорт</div>
                        </div>
                    </div>
                    <div class="swiper-slide">
                        <div class="swiperSlideImage">
                        </div>
                        <div class="swiperSlideName darkGrey">Mercedes-Benz E, 2013</div>
                        <div class="swiperSlidePrice darkGrey">2 000 ₽ <span class="priceDay lightGrey">/сутки</span></div>
                        <div class="swiperSlideFeatures">
                            <div class="swiperFeature orangeFeature"><i class="fas fa-tag"></i>&nbsp; Автомат</div>
                            <div class="swiperFeature blueFeature"><i class="fas fa-tag"></i>&nbsp; Комфорт</div>
                        </div>
                    </div>
                    <div class="swiper-slide">
                        <div class="swiperSlideImage">
                        </div>
                        <div class="swiperSlideName darkGrey">Mercedes-Benz E, 2013</div>
                        <div class="swiperSlidePrice darkGrey">2 000 ₽ <span class="priceDay lightGrey">/сутки</span></div>
                        <div class="swiperSlideFeatures">
                            <div class="swiperFeature orangeFeature"><i class="fas fa-tag"></i>&nbsp; Автомат</div>
                            <div class="swiperFeature blueFeature"><i class="fas fa-tag"></i>&nbsp; Комфорт</div>
                        </div>
                    </div>
                    <div class="swiper-slide">
                        <div class="swiperSlideImage">
                        </div>
                        <div class="swiperSlideName darkGrey">Mercedes-Benz E, 2013</div>
                        <div class="swiperSlidePrice darkGrey">2 000 ₽ <span class="priceDay lightGrey">/сутки</span></div>
                        <div class="swiperSlideFeatures">
                            <div class="swiperFeature orangeFeature"><i class="fas fa-tag"></i>&nbsp; Автомат</div>
                            <div class="swiperFeature blueFeature"><i class="fas fa-tag"></i>&nbsp; Комфорт</div>
                        </div>
                    </div>



                </div>
            </div>
            
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