ymaps.ready(init);


function init(){
    var myMap = new ymaps.Map("map", {
    center: [55.831054, 37.629914],
    zoom: 15
    }, {
        // Ограничим область карты.
        restrictMapArea: [[55.843203, 37.608155], [55.821900, 37.654070]]
    });


let dict = new Map()

s = `55.828597, 37.633898 - Павильон №1 Центральный
    55.828658, 37.631372 - Павильон №2 Роботостанция
    55.833215, 37.639273 - Павильон №3
    55.828571, 37.630271 - Павильон №4 Киргизия
    55.828795, 37.629741 - Павильон №5 Музей городского хозяйства Москвы
    55.829248, 37.629515 - Павильон №6 Абхазия
    55.827618, 37.626831 - Павильон №7 СоюзМультПарк
    55.828901, 37.627329 - Павильон №8 Музей Шоколада
    55.829058, 37.628353 - Павильон №9 Театр Сказок
    55.829610, 37.629885 - Павильон №10 Молдова
    55.830189, 37.629172 - Павильон №11 Казахстан
    55.830464, 37.628103 - Павильон №12 Выстовочный центр профсоюзов
    55.830965, 37.628057 - Павильон №13 Музей востока
    55.831258, 37.627594 - Павильон №14 Азербайджан
    55.831623, 37.626751 - Павильон №15 Олимпийский музей России
    55.830588, 37.622842 - Павильон №16
    55.83139002596469, 37.62394802243661 - Павильон №17
    55.832001, 37.625600 - Павильон №18 Республика Беларусь
    55.82978948099202, 37.63413911690507 - Павильон №19 Атом
    55.832930, 37.621981 - Павильон №20 Центральный дом автоспорта
    55.832339, 37.620527 - Павильон №21 Терракотовая армия
    55.832246, 37.616524 - Павильон №22 Скалолазный центр BigWall
    55.832679310391214, 37.618330181518665 - Павильон №23 Москвариум
    55.833646, 37.619598 - Павильон №25 Музей нефти
    55.834311, 37.621792 - Павильон №26 Музей транспорта москвы
    55.834543, 37.612878 - Павильон №27 Физкультура и спорт
    55.836402, 37.616403 - Павильон №28 Пчеловодство
    55.835757, 37.618333 - Павильон №29 Цветоводство
    55.835067, 37.618713 - Павильон №30 Биотехнологии
    55.834917, 37.619811 - Павильон №31
    55.835363, 37.622372 - Павильон №33
    55.835205, 37.621512 - Павильон №34 Космонавтика и авиация
    55.838386, 37.614374 - Павильон №35 Главтабак
    55.839526, 37.616807 - Павильон №36 Музей кино
    55.839898, 37.619466 - Павильон №37 Птицеводство
    55.839619, 37.621633 - Павильон №38 БизнесТехноград
    50.37771167514502, 30.47954489822687 - Павильон №39
    55.838105, 37.620409 - Павильон №40 Школа пекарей
    55.838100, 37.622533 - Павильон №41 Центр национальных конных традиций
    55.838254, 37.623297 - Павильон №42 Центр национальных конных традиций
    55.838000, 37.624311 - Павильон №43 Центр национальных конных традиций
    55.840654, 37.625377 - Павильон №44 Кролиководство
    55.83093040264688, 37.62987681159166 - Павильон №45 Выставка достижений народного хозяйства
    55.838284, 37.628112 - Павильон №46 Экономика и организация АПК
    55.837388, 37.624123 - Павильон №47 Дом ремёсел
    55.837182, 37.622574 - Павильон №48 Главпиво
    55.837754, 37.620654 - Павильон №49
    55.83306645203748, 37.62195794983833 - Павильон №50 Молочная промышленность
    55.837159, 37.619332 - Павильон №51 Мясная промышленность
    55.836851891413986, 37.62075514807103 - Павильон №53-54 Музей гаража особого назначения
    55.835205, 37.623317 - Павильон №55 Электрификация
    55.83411663014175, 37.62599510758938 - Павильон №57
    55.832771, 37.627083 - Павильон №58 Центр словянской письменности слово
    55.833257026062455, 37.628186121712 - Павильон №59 Зерно
    55.833977, 37.628159 - Павильон №60 Потребительская кооперация
    55.834503, 37.628535 - Павильон №61 Центросоюз
    55.835234, 37.627515 - Павильон №62 Международный центр балета
    55.8350491103692, 37.632305567484664 - Павильон №63 Техноград
    55.832684, 37.629473 - Павильон №64 Выстовочный комплекс РЖД
    55.831706, 37.632138 - Павильон №66 Узбекистан
    55.831079, 37.632509 - Павильон №67 Карелия
    55.830888, 37.633546 - Павильон №68 Армения
    55.82940496009966, 37.61976473309128 - Павильон №70 Москва
    55.82989956733449, 37.63440582907952 - Павильон №71 Атомная энергия
    55.830555, 37.638251 - Павильон №75 Экспоцентр`
arr = s.split('\n');
for (let i = 0; i < arr.length; i++) {
    let elem = arr[i].split(' - ');
    let coords = [parseFloat(elem[0].split(', ')[0]), parseFloat(elem[0].split(', ')[1])]
    dict.set(elem[1], coords);
}

document.getElementById('placesofinterest').onclick = function () {
    for (var [key, value] of dict){
         myMap.geoObjects.add(new ymaps.Placemark([value[0], value[1]], {
            balloonContent: '<strong>' + key + '</strong>'
        }, {
            preset: 'islands#dotIcon',
            iconColor: '#' + (Math.random().toString(16) + '000000').substring(2,8).toUpperCase()
        }))
    }
}





    let clickcount = 0;

    document.getElementById('newRoute').onclick = function () {
        if (clickcount < 1) {
        let ul = document.createElement('ul');
        ul.className = "newpoint";
        ul.id = "newpoint";
        ul.innerHTML = `
                <input class="pnt1" maxlength="30" type="text" placeholder="Введите пункт 1" name="pnt1" id="pnt1">
                <input class="pnt2" maxlength="30" type="text" size="60" placeholder="Введите пункт 2" name="pnt2" id="pnt2">
                <img class="addpointbtn" id="addpointbtn" src="/static/images/add.png">
                <img class="deletepointbtn" id="deletepointbtn" src="/static/images/delete.png">
                <button class="addroutebtn" name="addroutebtn" id="addroutebtn">Построить маршрут</button>
                `;

        newRoute.after(ul);
        clickcount = clickcount + 1;
        }
    let pointcounts = 2;

    document.getElementById('addpointbtn').onclick = function () {
        if (pointcounts < 6) {
            pointcounts = pointcounts + 1;
            let ul = document.createElement('input');
            ul.className = "pnt2";
            ul.placeholder = "Введите пункт " + String(pointcounts);
            ul.type="text";
            ul.maxlength = "30";
            ul.id = "pnt" + String(pointcounts);
            console.log(pointcounts);
            document.getElementById("pnt" + String(pointcounts - 1)).after(ul);
            }
        }

        document.getElementById('deletepointbtn').onclick = function () {
        if (pointcounts > 2) {
            document.getElementById("newpoint").removeChild(document.getElementById("pnt" + String(pointcounts)));
            pointcounts = pointcounts - 1;
            }
        }



        document.getElementById('addroutebtn').onclick = function () {

            coordsarr = [];
            for (let i = 1; i <= pointcounts; i++){
                next = document.getElementById("pnt" + String(i)).value;
                coordsarr.push([dict.get(next)[0], dict.get(next)[1]])
                console.log(dict.get(next)[0], dict.get(next)[1])
            }
            let pnt1 = document.getElementById('pnt1').value;
            let pnt2 = document.getElementById('pnt2').value;
            console.log(dict.get(pnt1)[0], dict.get(pnt1)[1])
        // Задаём точки мультимаршрута.
        var pointA = [dict.get(pnt1)[0], dict.get(pnt1)[1]],
            pointB = [dict.get(pnt2)[0], dict.get(pnt2)[1]],

            /**
             * Создаем мультимаршрут.
             * @see https://api.yandex.ru/maps/doc/jsapi/2.1/ref/reference/multiRouter.MultiRoute.xml
             */
            multiRoute = new ymaps.multiRouter.MultiRoute({
                referencePoints: coordsarr,
                params: {
                    //Тип маршрутизации - пешеходная маршрутизация.
                    routingMode: 'pedestrian'
                }
            }, {
                // Автоматически устанавливать границы карты так, чтобы маршрут был виден целиком.
                boundsAutoApply: true
            });
        // Добавляем мультимаршрут на карту.
        myMap.geoObjects.add(multiRoute);
    }
        }


    document.getElementById('routeone').onclick = function () {
        // Задаём точки мультимаршрута.
        var pointA = [55.824231, 37.638901],
            pointB = [55.826271, 37.637578],
            multiRoute = new ymaps.multiRouter.MultiRoute({
                referencePoints: [
                    pointA,
                    pointB
                ],
                params: {
                    routingMode: 'pedestrian'
                }
            }, {
                boundsAutoApply: true
            });
        myMap.geoObjects.add(multiRoute);
    }
    document.getElementById('routetwo').onclick = function () {
        // Задаём точки мультимаршрута.
        var pointA = [55.826271, 37.637578],
            pointB = [55.830473, 37.630806],
            multiRoute = new ymaps.multiRouter.MultiRoute({
                referencePoints: [
                    pointA,
                    pointB
                ],
                params: {
                    routingMode: 'pedestrian'
                }
            }, {
                boundsAutoApply: true
            });
        myMap.geoObjects.add(multiRoute);
    }
    document.getElementById('routethree').onclick = function () {
        // Задаём точки мультимаршрута.
        var pointA = [55.826271, 37.637578],
            pointB = [55.835044, 37.621723],
            multiRoute = new ymaps.multiRouter.MultiRoute({
                referencePoints: [
                    pointA,
                    pointB
                ],
                params: {
                    routingMode: 'pedestrian'
                }
            }, {
                boundsAutoApply: true
            });
        myMap.geoObjects.add(multiRoute);
    }
}



let a = navigator.userAgent;