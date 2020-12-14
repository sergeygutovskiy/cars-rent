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
                    <div id="navLogoImage"><img src="assets/all/logoMain.png" alt="" srcset=""></div>
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
                <div id="navLogoImage"><img src="assets/all/logoMain.png" alt="" srcset=""></div>
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
                <h1>Joy</h1>
            </div>
            <div class="soldTextContent grey">
                <p>— это онлайн-сервис, предоставляющий возможность выбора транспорта, отвечающего вашим ожиданиям, и гибкие условия аренды. Joy помогает владельцам зарабатывать на собственном транспорте, сдавая его на выгодных для вас условиях.</p>
            </div>
        </div>
        <div id="aboutBlock">
            <div id="aboutPluses">
                <div class="aboutPlusesBlock">
                    <div class="aboutPlusesBlockLogo"><img src="assets/about/1.svg" /></div>
                    <div class="aboutPlusesBlockMain">Безопасная сделка</div>
                    <div class="aboutPlusesBlockText">Наша служба безопасности тщательно проверяет каждого потенциального арендатора и владельца транспорта с помощью подробных профилей и подтвержденных отзывов.</div>
                </div>
                <div class="aboutPlusesBlock">
                    <div class="aboutPlusesBlockLogo"><img src="assets/about/2.svg" /></div>
                    <div class="aboutPlusesBlockMain">Полный контроль над сделкой</div>
                    <div class="aboutPlusesBlockText">Наш сервис предоставляет вам возможность выбора арендатора. Вы можете управлять заявками на аренду вашего транспортного средства, только вы определяете сдавать ли его в аренду.</div>
                </div>
                <div class="aboutPlusesBlock">
                    <div class="aboutPlusesBlockLogo"><img src="assets/about/3.svg" /></div>
                    <div class="aboutPlusesBlockMain">Помощь & Поддержка</div>
                    <div class="aboutPlusesBlockText">Наша служба поддержки всегда готова ответить на интересующие вас вопросы, помочь при возникновении ошибок, чтобы упростить вам работу с сервисом.</div>
                </div>
                <div class="aboutPlusesBlock">
                    <div class="aboutPlusesBlockLogo"><img src="assets/about/4.svg" id="dollarLogo" /></div>
                    <div class="aboutPlusesBlockMain">Гибкий источник дохода</div>
                    <div class="aboutPlusesBlockText">Наш сервис помогает владельцам автомобилей зарабатывать на собственных автомобилях, сдавая их на выгодных для вас условиях.</div>
                </div>
            </div>
        </div>
        <div id="howAllWorks">
            <h3>Как это работает?</h3>
            <div id="howAllWorksButtons">
                <div class="allBlocksHelpButton jsOrintiedButtons howAllWorksButton activeHowAllWorksButton">Арендатору</div>
                <div class="allBlocksHelpButton jsOrintiedButtons howAllWorksButton">Владельцу</div>
            </div>
            <div id="howAllWorksExampleBlockContainer">
                <div class="howAllWorksExampleBlock">
                    <div class="exampleAllWorks">
                        <div class="exampleNumber">1</div>
                        <div class="exampleMain">Выберите параметры поиска</div>
                        <div class="exampleText">Задавайте параметры для упрощения выбора желаемого транспорта из многообразия возможных вариантов. </div>
                    </div>
                    <div class="exampleAllWorks">
                        <div class="exampleNumber">2</div>
                        <div class="exampleMain">Выберите транспорт</div>
                        <div class="exampleText">Изучите список предложенного транспорта и выберите тот, который лучше всего подходит именно для вас.</div>
                    </div>
                    <div class="exampleAllWorks">
                        <div class="exampleNumber">3</div>
                        <div class="exampleMain">Забронируйте транспорт</div>
                        <div class="exampleText">После того, как вы найдете подходящий транспорт, заполните заявку на аренду. После отправки заявка будет направлена владельцу транспорта на одобрение.</div>
                    </div>
                    <div class="exampleAllWorks">
                        <div class="exampleNumber">4</div>
                        <div class="exampleMain">Обсудите условия аренды</div>
                        <div class="exampleText">После одобрения заявки вы сможете обсудить условия аренды с владельцем напрямую, используя чат в личном кабинете.</div>
                    </div>
                    <div class="exampleAllWorks">
                        <div class="exampleNumber">5</div>
                        <div class="exampleMain">Заключайте сделку</div>
                        <div class="exampleText">Прежде чем использовать транспорт, вы и его владелец должны подписать договор аренды, в котором вы соглашаетесь с условиями использования транспорта.</div>
                    </div>
                    <!-- <div class="exampleAllWorks">
                        <div class="exampleNumber">6</div>
                        <div class="exampleMain">Арендатору</div>
                        <div class="exampleText">Lorem ipsum dolor sit amet, consectetur adipiscing</div>
                    </div> -->
                </div>
                <div class="howAllWorksExampleBlock notDisplayExmapleBlock">
                    <div class="exampleAllWorks">
                        <div class="exampleNumber">1</div>
                        <div class="exampleMain">Добавляйте свой транспорт</div>
                        <div class="exampleText">Заполняйте анкету о своем транспорте. Указывая более подробную информацию о вашем транспортном средстве вы можете повлиять на его популярность у арендаторов.</div>
                    </div>
                    <div class="exampleAllWorks">
                        <div class="exampleNumber">2</div>
                        <div class="exampleMain">Устанавливайте условия аренды</div>
                        <div class="exampleText">Определите необходимые требования к арендатору. Вы можете назначить стоимость аренды и подбирать тарифные планы для привлечения клиентов.</div>
                    </div>
                    <div class="exampleAllWorks">
                        <div class="exampleNumber">3</div>
                        <div class="exampleMain">Получайте заявки</div>
                        <div class="exampleText">После размещения объявления ваш транспорт станет доступным на сайте. Когда пользователь отправит заявку на аренду вашего транспорта, вы сможете рассмотреть её (одобрить/отклонить).</div>
                    </div>
                    <div class="exampleAllWorks">
                        <div class="exampleNumber">4</div>
                        <div class="exampleMain">Обсудите условия аренды</div>
                        <div class="exampleText">После одобрения заявки вы сможете обсудить условия аренды с арендатором напрямую, используя чат в личном кабинете.</div>
                    </div>
                    <div class="exampleAllWorks">
                        <div class="exampleNumber">5</div>
                        <div class="exampleMain">Заключайте сделку</div>
                        <div class="exampleText">Прежде чем использовать транспорт, вы и арендатор должны подписать договор аренды, в котором вы соглашаетесь с условиями предоставления транспорта.</div>
                    </div>
                    <!-- <div class="exampleAllWorks">
                        <div class="exampleNumber">6</div>
                        <div class="exampleMain">Собственнику</div>
                        <div class="exampleText">Lorem ipsum dolor sit amet, consectetur adipiscing</div>
                    </div> -->
                </div>
                <div class="animatedButton blue"><div class="animatedButtonEnter"></div><p>Перейти к подбору транспорта</p></div>
            </div>
        </div>
        <div id="questions">
            <div id="popularQuestions">
                <h3>Популярные вопросы</h3>
                <div id="howAllWorksButtons">
                <div class="allBlocksHelpButton questionsJSButtons howAllWorksButton activeHowAllWorksButton">Арендатору</div>
                <div class="allBlocksHelpButton questionsJSButtons howAllWorksButton">Владельцу</div>
            </div>
                <!-- <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p> -->
            </div>

            <div id="questionsAnimationMainBlock">
                <div id="questionsContent" class="forQuestionsBlock">
                    <div class="question">
                        <p class="questionMain">Какие требования к Арендатору?</p>
                        <p class="questionIcon">+</p>
                    </div>
                    <div class="reversedBlock questionTextContainer">
                        <div class="questionText">Для пользования сервисом Арендатор должен соответствовать следующим требованиям:
                            <ul>
                                <li>возраст Арендатора составляет не менее 18 лет;</li>
                                <li>арендатор обладает правом на управление транспортным средством и имеет в наличии необходимый комплект документов для подтверждения.</li>
                            </ul>
                        </div>
                    </div>
                    <div class="question">
                        <p class="questionMain">Как и куда вернуть транспорт после аренды?</p>
                        <p class="questionIcon">+</p>
                        <!-- <p class="questionText">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p> -->
                    </div>
                    <div class="reversedBlock questionTextContainer">
                        <p class="questionText">Место, дату и время возврата транспорта после окончания срока аренды Вы уточняете с Арендатором напрямую, используя чат в личном кабинете.</p>
                    </div>
                    <div class="question">
                        <p class="questionMain">Что делать в случае ДТП?</p>
                        <p class="questionIcon">+</p>
                        <!-- <p class="questionText">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p> -->
                    </div>
                    <div class="reversedBlock questionTextContainer">
                        <p class="questionText">В случае наступления ДТП Арендатор сообщает об этом в органы ГИБДД и одновременно информирует о наступлении ДТП Владельцу по обговоренным каналам связи. Арендатор получает в органах ГИБДД необходимые документы: справку о ДТП, копию протокола. Арендатор передаёт их (подлинные экземпляры) Владельцу транспортного средства. Арендатор обязуется участвовать во всех мероприятиях, предусмотренных ПДД, при необходимости.</p>
                    </div>
                    <div class="question">
                        <p class="questionMain">Кто оплачивает штрафы ГИБДД за нарушения ПДД?</p>
                        <p class="questionIcon">+</p>
                        <!-- <p class="questionText">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p> -->
                    </div>
                    <div class="questionTextContainer">
                        <p class="questionText">Арендатор обязуется должным образом и в полном объёме соблюдать ПДД РФ. В случае нарушения ПДД Арендатор должен нести полную ответственность: оплачивать из личных средств сумм штрафов (в полном объеме), выписанных за период, совпадающий с периодом аренды транспорта по условиям договора об аренде.</p>
                    </div>

                    <div class="question">
                        <p class="questionMain">Информация о коронавирусе (COVID-19) для Арендаторов</p>
                        <p class="questionIcon">+</p>
                        <!-- <p class="questionText">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p> -->
                    </div>
                    <div class="questionTextContainer">
                        <p class="questionText">В связи с распространением коронавирусной инфекции мы просим Вас соблюдать меры, предусмотренные для защиты себя и окружающих. Используйте маску для лица, при встрече с Владельцем, поездке с пассажиром. Пользуйтесь антисептическим гелем и дезинфицирующими салфетками. Перед началом аренды очистите и продезинфицируйте транспортное средство, обращая особое внимание на поверхности, к которым часто прикасаются. Повторите процедуры после завершения использования транспортного средства. Оставайтесь дома, если заболели. Если Вы плохо себя чувствуете, отмените предстоящую аренду и оставайтесь дома.</p>
                    </div>
                    <div class="question">
                        <p class="questionMain">Возможны ли дополнительные водители при аренде?</p>
                        <p class="questionIcon">+</p>
                        <!-- <p class="questionText">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p> -->
                    </div>
                    <div class="questionTextContainer">
                        <p class="questionText">При желании использовать арендованное транспортное средство не только Вами лично, но и вашими знакомыми или родственниками в качестве второго водителя, Вы должны обговорить данную возможность с Владельцем транспорта напрямую на стадии заключения договора об аренде. Если Владелец одобрит возможность использования своего транспорта несколькими водителями, то необходимо будет предоставить комплект документов дополнительных водителей и указать их данные в документах о передачи прав пользования транспортным средством. Важно, чтобы дополнительные водители соответствовали требованиям, установленным для арендаторов.</p>
                    </div>
                    <div class="question">
                        <p class="questionMain">Как продлить сроки аренды?</p>
                        <p class="questionIcon">+</p>
                        <!-- <p class="questionText">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p> -->
                    </div>
                    <div class="questionTextContainer">
                        <p class="questionText">При желании продлить сроки аренды, Вы должны отправить запрос на продление Владельцу транспортного средства. Ваш запрос должен быть подтвержден Владельцем до окончания аренды. Сроки аренды будут изменены только в том случае, если Владелец одобрит ваш запрос. Если владелец не подтверждает продление сроков аренды, Вы должны соблюдать первоначально запланированные даты и вернуть транспортное средство в ранее установленные сроки.</p>
                    </div>
                    <div class="question">
                        <p class="questionMain">Как происходит отмена аренды?</p>
                        <p class="questionIcon">+</p>
                        <!-- <p class="questionText">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p> -->
                    </div>
                    <div class="questionTextContainer">
                        <p class="questionText">При желании отменить аренду транспортного средства Вам необходимо сообщить о своем решении Владельцу. Во избежание споров между сторонами о возврате средств (части средств) рекомендуем договориться о выплатах на стадии составления договора и задокументировать их. В общем случае за отмену аренды: за 48 часов и более до начала аренды Вам может быть возвращена полная стоимость аренды; менее чем за 48 часов до начала аренды Вам может быть возвращена половина стоимости аренды; после начала аренды никакая стоимость не может быть возвращена. Исключения составляет отмена по решению или вине Владельца, тогда Вам будут полностью возвращены средства.</p>
                    </div>
                    <div class="question">
                        <p class="questionMain">Каким возвращать транспорт после аренды?</p>
                        <p class="questionIcon">+</p>
                        <!-- <p class="questionText">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p> -->
                    </div>
                    <div class="questionTextContainer">
                        <p class="questionText">После использования арендованного транспорта Вы должны вернуть его Владельцу в том же состоянии, что и до начала аренды. Если вы получили полностью заправленное транспортное средство, то и вернуть его необходимо с тем же количеством топлива.</p>
                    </div>
                </div>

                <div id="questionsContent" class="forQuestionsBlock notDisplayedForQuestionBlock">
                    <div class="question">
                        <p class="questionMain">Какие требования к Владельцу?</p>
                        <p class="questionIcon">+</p>
                    </div>
                    <div class="reversedBlock questionTextContainer">
                        <div class="questionText">Для пользования сервисом Владелец должен соответствовать следующим требованиям:
                            <ul>
                                <li>возраст Владельца составляет не менее 18 лет;</li>
                                <li>владелец обладает полномочиями на сдачу ТС в аренду: ТС является собственностью Владельца, либо же Владелец имеет признаваемое положениями действующего Законодательства РФ право, указанное в имеющейся в наличии доверенности или ином документе, сдавать имеющееся в его распоряжении ТС в аренду;</li>
                                <li>владелец имеет в наличии полный комплект документов, необходимый для подтверждения прав на владение ТС в соответствии с положениями законодательства РФ.</li>
                            </ul>
                        </div>
                    </div>
                    <div class="question">
                        <p class="questionMain">Какие требования к транспорту для сдачи в аренду?</p>
                        <p class="questionIcon">+</p>
                    </div>
                    <div class="reversedBlock questionTextContainer">
                        <div class="questionText">Транспорт, размещаемый на сервисе для аренды, должен соответствовать следующим требованиям:
                            <ul>
                                <li>транспортное средство должно быть вашей собственностью, либо Вы должны иметь полномочия на его использование (предоставление в аренду), также вам необходимо иметь полный комплект документов, подтверждающий ваши права;</li>
                                <li>транспортное средство должно соответствовать требованиям законодательства РФ, а также не состоять в розыске или под арестом;</li>
                                <li>транспортное средство должно быть технически исправно.</li>
                            </ul>
                            Автомобиль, предоставляемый для сдачи в аренду, должен соответствовать следующим требованиям:
                            <ul>
                                <li>возраст автомобиля не превышает 15 лет;</li>
                                <li>пробег автомобиля не превышает 200 000 км.</li>
                            </ul>
                        </div>
                    </div>
                    <div class="question">
                        <p class="questionMain">Где я могу забрать транспорт после аренды?</p>
                        <p class="questionIcon">+</p>
                        <!-- <p class="questionText">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p> -->
                    </div>
                    <div class="questionTextContainer">
                        <p class="questionText">Место, дату и время возврата транспорта после окончания срока аренды Вы уточняете с Арендатором напрямую, используя чат в личном кабинете.</p>
                    </div>
                    <div class="question">
                        <p class="questionMain">Что делать, если мне на почту пришел штраф за нарушение ПДД моим автомобилем, когда он находился в аренде?</p>
                        <p class="questionIcon">+</p>
                        <!-- <p class="questionText">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p> -->
                    </div>
                    <div class="questionTextContainer">
                        <p class="questionText">Согласно законодательству РФ к административной ответственности привлекается лицо совершившее проступок. Владелец транспортного средства имеет право обжаловать выписанный штраф, если он докажет, что в момент фиксации совершения правонарушения транспортное средство находилось под управлением другого лица. Доказательствами, подтверждающими факт нахождения транспортного средства в пользовании другого лица, могут являться: доверенность на право управления транспортным средством другим лицом, договор аренды транспортного средства, показания свидетелей или лица, непосредственно управлявшего транспортным средством в момент фиксации административного правонарушения. Если нахождение транспортного средства под управлением другого лица в момент фиксации правонарушения доказано, то согласно порядку обжалования, Владельцу предоставляется требование отменить постановление.</p>
                    </div>
                    <div class="question">
                        <p class="questionMain">Информация о коронавирусе (COVID-19) для Владельцев</p>
                        <p class="questionIcon">+</p>
                        <!-- <p class="questionText">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p> -->
                    </div>
                    <div class="questionTextContainer">
                        <p class="questionText">В связи с распространением коронавирусной инфекции мы просим Владельцев транспортных средств соблюдать меры по очистке и дезинфекции транспортного средства, чтобы обезопасить себя и арендаторов. Оставляйте в сдаваемом в аренду транспорте дезинфицирующие салфетки или другие антисептические средства, чтобы водители могли использовать их. Указывайте арендаторам на необходимость соблюдения мер по защите себя и окружающих. Очищайте и дезинфицируйте свой транспорт, уделяя особое внимание к часто касающимся поверхностям. При чистке транспорта используйте маску для лица и перчатки для дополнительной защиты.</p>
                    </div>
                </div>
            </div>
        </div>
       
        <div id="allBlocksHelp">
            <div class="allBlocksHelpButton">Я владелец</div>
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