<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>О компании</title>
    <link rel="stylesheet" href="css/all.css">
    <link rel="stylesheet" href="css/carPage.css">
    <!-- <link rel="stylesheet" href="css/main.css"> -->

    <link href="https://use.fontawesome.com/releases/v5.14.0/css/all.css" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Commissioner:wght@400;500;600;700&display=swap" rel="stylesheet">

    <link rel="stylesheet" href="https://unpkg.com/swiper/swiper-bundle.css">
    <script src="https://unpkg.com/swiper/swiper-bundle.js"></script>
    <script src="js/swiper.js"></script>
    <script src="js/additionalSwiper.js"></script>
    <script src="js/hamburger.js"></script>
    <!-- <script src="js/carSelect.js"></script> -->
    <!-- <script src="js/mainInput.js"></script> -->

</head>
<body>

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

        

        <!-- <div id="mainInputBlock">

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
        </div> -->

    

        <div id="allPageContent">

            <div class="carPageCarGallery">
                <div class="galleryName">
                    <p class="galleryNameMain">Mercedes-Benz E</p>
                    <p class="galleryNameAdd"><span class="galleryNameAddPrice">2 000 ₽</span>/сутки</p>
                </div>
                <div class="carGallery">
                    <div class="galleryMain">
                    <!-- style="background-image: url('assets/main/swiperCar.png');" -->
                   

                        <div class="gallery-main-swiper-container">
                            <div class="swiper-wrapper">

                                <div class="swiper-slide" style="background-image: url('assets/main/swiperCar.png');"></div>
                                <div class="swiper-slide" style="background-image: url('assets/main/minivan.png');"></div>
                                <div class="swiper-slide" style="background-image: url('assets/main/swiperCar.png');"></div>
                                <div class="swiper-slide" style="background-image: url('assets/main/minivan.png');"></div>
                                <div class="swiper-slide" style="background-image: url('assets/main/swiperCar.png');"></div>
                                <div class="swiper-slide" style="background-image: url('assets/main/minivan.png');"></div>
                                
                            </div>
                            
                            
                
                        </div>
                        




                        <div class="galleryMainController galleryMainControllerPrev"><i class="fas fa-chevron-left"></i></div>
                        <div class="galleryMainController galleryMainControllerNext"><i class="fas fa-chevron-right"></i></div>
                    </div>




                    <div class="gallerySwiper">


                        <div class="gallery-swiper-container">
                            <div class="swiper-wrapper">

                                <div class="swiper-slide" style="background-image: url('assets/main/swiperCar.png');"></div>
                                <div class="swiper-slide" style="background-image: url('assets/main/minivan.png');"></div>
                                <div class="swiper-slide" style="background-image: url('assets/main/swiperCar.png');"></div>
                                <div class="swiper-slide" style="background-image: url('assets/main/minivan.png');"></div>
                                <div class="swiper-slide" style="background-image: url('assets/main/swiperCar.png');"></div>
                                <div class="swiper-slide" style="background-image: url('assets/main/minivan.png');"></div>
                                
                            </div>
                            
                            </div>
                
                        </div>


                    </div>




                </div>

                <div class="carDescription">

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
                        </div>
            
                        <div class="submitButton">Подобрать</div>
                    </div>

                    <div class="carDescriptionMain">
                        <div class="carDescriptionMainBlock">
                            <div class="carDescriptionMainBlockImg"></div>
                            <div class="carDescriptionMainBlockDesc">Тип кузова</div>
                            <div class="carDescriptionMainBlockMain">Седан</div>
                        </div>
                        <div class="carDescriptionMainBlock">
                            <div class="carDescriptionMainBlockImg"></div>
                            <div class="carDescriptionMainBlockDesc">Тип кузова</div>
                            <div class="carDescriptionMainBlockMain">Седан</div>
                        </div>
                        <div class="carDescriptionMainBlock">
                            <div class="carDescriptionMainBlockImg"></div>
                            <div class="carDescriptionMainBlockDesc">Тип кузова</div>
                            <div class="carDescriptionMainBlockMain">Седан</div>
                        </div>
                        <div class="carDescriptionMainBlock">
                            <div class="carDescriptionMainBlockImg"></div>
                            <div class="carDescriptionMainBlockDesc">Тип кузова</div>
                            <div class="carDescriptionMainBlockMain">Седан</div>
                        </div>
                        <div class="carDescriptionMainBlock">
                            <div class="carDescriptionMainBlockImg"></div>
                            <div class="carDescriptionMainBlockDesc">Тип кузова</div>
                            <div class="carDescriptionMainBlockMain">Седан</div>
                        </div>
                        <div class="carDescriptionMainBlock">
                            <div class="carDescriptionMainBlockImg"></div>
                            <div class="carDescriptionMainBlockDesc">Тип кузова</div>
                            <div class="carDescriptionMainBlockMain">Седан</div>
                        </div>
                    </div>

                    <div class="carDescriptionAdd">
                        <div class="carDescriptionAddMain">Дополнительно</div>

                        <div class="carDescriptionAddContent">
                            <div class="carDescriptionAddBlock">Детское кресло</div>
                            <div class="carDescriptionAddBlock">Крепление для лыж</div>
                            <div class="carDescriptionAddBlock">За пределы города</div>
                        </div>
                        

                    </div>

                </div>

                <div class="aboutCar">
                    <h4>Подробнее</h4>
                    <p class="aboutCarText">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>

                <div class="carMap">
                    <div class="carMapContent">
                        <h4>Местонахождение транспорта</h4>
                        <p class="mapHint">г. Санкт-Петербург, м. Невский проспект</p>
                        <div class="mapContent"></div>
                    </div>
                    
                </div>

                <div class="ratingSystem">

                    <div class="ownerRating">
                        <h4>Собственник</h4>
                        <div class="rateImg"></div>
                        <div class="rateName">ФИО</div>
                        <div class="rateRating"></div>
                    </div>

                    <div class="rates">
                        <h4>Отзывы</h4>
                        <div class="ratesContent">

                            <div class="rateBlock">
                                <div class="rateBlockImg"></div>
                                <div class="rateBlockName">Имя Фамилия</div>
                                <div class="rateBlockDate">20 сентября, 2020</div>
                                <div class="rateBlockText">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
                                <div class="rateBlockRating"></div>
                            </div>

                            <div class="rateBlock">
                                <div class="rateBlockImg"></div>
                                <div class="rateBlockName">Имя Фамилия</div>
                                <div class="rateBlockDate">20 сентября, 2020</div>
                                <div class="rateBlockText">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
                                <div class="rateBlockRating"></div>
                            </div>

                            <div class="rateBlock">
                                <div class="rateBlockImg"></div>
                                <div class="rateBlockName">Имя Фамилия</div>
                                <div class="rateBlockDate">20 сентября, 2020</div>
                                <div class="rateBlockText">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
                                <div class="rateBlockRating"></div>
                            </div>

                            <div class="rateBlock">
                                <div class="rateBlockImg"></div>
                                <div class="rateBlockName">Имя Фамилия</div>
                                <div class="rateBlockDate">20 сентября, 2020</div>
                                <div class="rateBlockText">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
                                <div class="rateBlockRating"></div>
                            </div>

                        </div>
                        <div class="moreRates"><p>Показать больше отзывов &nbsp; <i class="fas fa-chevron-down"></i></p></div>
                    </div>

                </div>

            </div>

            <div id="swiperHints">
                <h4>Похожие</h4>

                <div class="swiper-container">
                    <!-- Additional required wrapper -->
                    <div class="swiper-wrapper">
                        <!-- Slides -->
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