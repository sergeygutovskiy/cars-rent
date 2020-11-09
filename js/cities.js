window.addEventListener('DOMContentLoaded', () => {

    let cities =  
[
    {
      "region": "Москва и Московская обл.",
      "city": "Москва"
    },
    
    {
      "region": "Санкт-Петербург и область",
      "city": "Санкт-Петербург"
    },

   {
      "region": "Новосибирская обл.",
      "city": "Новосибирск"
    },
 
    {
      "region": "Свердловская обл.",
      "city": "Екатеринбург"
    },

    {
      "region": "Татарстан",
      "city": "Казань"
    },

   {
      "region": "Ростовская обл.",
      "city": "Ростов-на-Дону"
    },

    {
      "region": "Адыгея",
      "city": "Майкоп"
    },
    {
      "region": "Алтайский край",
      "city": "Барнаул"
    },


    {
      "region": "Амурская обл.",
      "city": "Благовещенск (Амурская обл.)"
    },
 
    {
      "region": "Архангельская обл.",
      "city": "Архангельск"
    },
 
    {
      "region": "Астраханская обл.",
      "city": "Астрахань"
    },
  
    {
      "region": "Башкортостан(Башкирия)",
      "city": "Уфа"
    },

    {
      "region": "Белгородская обл.",
      "city": "Белгород"
    },
 
    {
      "region": "Брянская обл.",
      "city": "Брянск"
    },
 
    {
      "region": "Бурятия",
      "city": "Улан-Удэ"
    },
 

    {
      "region": "Владимирская обл.",
      "city": "Владимир"
    },
 
 
    {
      "region": "Волгоградская обл.",
      "city": "Волгоград"
    },
 
    {
      "region": "Вологодская обл.",
      "city": "Вологда"
    },
 
    {
      "region": "Воронежская обл.",
      "city": "Воронеж"
    },
  
    {
      "region": "Дагестан",
      "city": "Махачкала"
    },
  
    {
      "region": "Еврейская обл.",
      "city": "Биробиджан"
    },
 
    {
      "region": "Ивановская обл.",
      "city": "Иваново"
    },
  
    {
      "region": "Иркутская обл.",
      "city": "Иркутск"
    },
  
    {
      "region": "Кабардино-Балкария",
      "city": "Нальчик"
    },
 
    {
      "region": "Калининградская обл.",
      "city": "Калининград"
    },
  
    {
      "region": "Калмыкия",
      "city": "Элиста"
    },
 
    {
      "region": "Калужская обл.",
      "city": "Калуга"
    },
 
    {
      "region": "Камчатская обл.",
      "city": "Петропавловск-Камчатский"
    },
  
    {
      "region": "Карелия",
      "city": "Петрозаводск"
    },
 
    {
      "region": "Кемеровская обл.",
      "city": "Кемерово"
    },
   
    {
      "region": "Кировская обл.",
      "city": "Киров"
    },

    {
      "region": "Коми",
      "city": "Сыктывкар"
    },
 
    {
      "region": "Костромская обл.",
      "city": "Кострома"
    },
 
    {
      "region": "Краснодарский край",
      "city": "Краснодар"
    },

    {
      "region": "Красноярский край",
      "city": "Красноярск"
    },
 
    {
      "region": "Курганская обл.",
      "city": "Курган"
    },
 
    {
      "region": "Курская обл.",
      "city": "Курск"
    },
   
    {
      "region": "Липецкая обл.",
      "city": "Липецк"
    },
 
    {
      "region": "Магаданская обл.",
      "city": "Магадан"
    },
  
    {
      "region": "Марий Эл",
      "city": "Йошкар-Ола"
    },
 
    {
      "region": "Мордовия",
      "city": "Саранск"
    },

    {
      "region": "Мурманская обл.",
      "city": "Мурманск"
    },

    {
      "region": "Нижегородская (Горьковская)",
      "city": "Нижний Новгород"
    },

    {
      "region": "Новгородская обл.",
      "city": "Великий Новгород"
    },
 
 
    {
      "region": "Омская обл.",
      "city": "Омск"
    },
    {
      "region": "Оренбургская обл.",
      "city": "Оренбург"
    },
    {
      "region": "Орловская обл.",
      "city": "Орел"
    },
    {
      "region": "Пензенская обл.",
      "city": "Пенза"
    },
    {
      "region": "Пермская обл.",
      "city": "Пермь"
    },

    {
      "region": "Приморский край",
      "city": "Владивосток"
    },
  
    {
      "region": "Псковская обл.",
      "city": "Псков"
    },


 

    {
      "region": "Рязанская обл.",
      "city": "Рязань"
    },
 
    {
      "region": "Самарская обл.",
      "city": "Самара"
    },

    {
      "region": "Саратовская обл.",
      "city": "Саратов"
    },

    {
      "region": "Саха (Якутия)",
      "city": "Якутск"
    },
    {
      "region": "Сахалин",
      "city": "Южно-Сахалинск"
    },


    {
      "region": "Северная Осетия",
      "city": "Владикавказ"
    },

 
    {
      "region": "Ставропольский край",
      "city": "Ставрополь"
    },

    {
      "region": "Тамбовская обл.",
      "city": "Тамбов"
    },

 

    {
      "region": "Тверская обл.",
      "city": "Тверь"
    },


    {
      "region": "Томская обл.",
      "city": "Томск"
    },

    {
      "region": "Тува (Тувинская Респ.)",
      "city": "Кызыл"
    },

    {
      "region": "Тульская обл.",
      "city": "Тула"
    },

    {
      "region": "Тюменская обл.",
      "city": "Тюмень"
    },


    {
      "region": "Удмуртия",
      "city": "Ижевск"
    },
  

    {
      "region": "Ульяновская обл.",
      "city": "Ульяновск"
    },

    {
      "region": "Уральская обл.",
      "city": "Уральск"
    },

    {
      "region": "Хабаровский край",
      "city": "Хабаровск"
    },

    {
      "region": "Хакасия",
      "city": "Абакан"
    },
 
    {
      "region": "Ханты-Мансийский АО",
      "city": "Ханты-Мансийск"
    },

    {
      "region": "Челябинская обл.",
      "city": "Челябинск"
    },
 
    {
      "region": "Чечено-Ингушетия",
      "city": "Грозный"
    },
 

    {
      "region": "Читинская обл.",
      "city": "Чита"
    },


    {
      "region": "Чувашия",
      "city": "Чебоксары"
    },
 
    {
      "region": "Чукотский АО",
      "city": "Анадырь"
    },


    {
      "region": "Ямало-Ненецкий АО",
      "city": "Салехард"
    },
 
    {
      "region": "Ярославская обл.",
      "city": "Ярославль"
    }
  ];















      let parent = document.getElementsByClassName('citiesContentFixer')[0];

    //   let msc = document.createElement('div');
    //   msc.className = 'citiesContentElem';
    //   msc.innerHTML = "Москва";
    //   parent.append(msc);

    //   let spb = document.createElement('div');
    //   spb.className = 'citiesContentElem';
    //   spb.innerHTML = "Санкт-Петербург";
    //   parent.append(spb);

      for (let i = 0; i < cities.length; i++) {
        // if (cities[i].city == "Москва" || cities[i].city == "Санкт-Петербург") continue;
        let div = document.createElement('div');
        div.className = 'citiesContentElem';
        div.innerHTML = cities[i].city;
        parent.append(div);
      }

      let input = document.getElementById('city');

      let citiesNames = document.getElementsByClassName('citiesContentElem');

      try {
        for (let i = 0; i < citiesNames.length; i++) {
            ( () => {
                citiesNames[i].addEventListener('click', () => {
                    input.value = citiesNames[i].innerHTML;
                })
                }
            )();
        }
      } catch (e) {
          console.log(e);
      }



      function filter(val, list){
        let result=[];

        // for (let i = 0; i < list.length; i++)
          list.forEach(i=>{
            //   console.log(i.city)
            if(i.city.toLowerCase().indexOf(val.toLowerCase()) == 0)
              result.push(i.city)
          })
        return result;
      }

      function renderList(_list=[],el=document.body){
        _list.forEach(i=>{
          let new_el = document.createElement('div')
          new_el.className = 'citiesContentElem';
          new_el.innerHTML = i;
          el.appendChild(new_el)
        })

        let citiesNames = document.getElementsByClassName('citiesContentElem');

        try {
            for (let i = 0; i < citiesNames.length; i++) {
                ( () => {
                    citiesNames[i].addEventListener('click', () => {
                        input.value = citiesNames[i].innerHTML;
                    })
                    }
                )();
            }
        } catch (e) {
            console.log(e);
        }
      }



      input.addEventListener('input', (e) => {
          parent.innerHTML = "";

        let tmp = filter(e.target.value, cities);
        // console.log(tmp);
        renderList(tmp, parent)

      });

      input.addEventListener('focus', (e) => {
        document.getElementsByClassName('textInput')[0].classList.add('normalisedActiveState');
      });

      input.addEventListener('blur', (e) => {
        document.getElementsByClassName('textInput')[0].classList.remove('normalisedActiveState');
      });
});