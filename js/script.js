"use strict"

// --------BURGER---------
const iconBurger = document.querySelector('.header__burger');
const menuHeader = document.querySelector('.header__menu');
const headerLinks = document.querySelectorAll('.header__link');

if (iconBurger) {
    iconBurger.addEventListener('click', openMenu);
}

if (headerLinks) {
    headerLinks.forEach(headerLink => {
        headerLink.addEventListener('click', closeMenu);
    })

}

function openMenu() {
    document.body.classList.toggle('lock');
    iconBurger.classList.toggle('active');
    menuHeader.classList.toggle('active');
}

function closeMenu() {
    if (iconBurger.classList.contains('active')) {
        document.body.classList.remove('lock');
        iconBurger.classList.remove('active');
        menuHeader.classList.remove('active');
    }
}

// -------phone mask---------
mask('[data-tel-input]');

// Удаляем '+' если больше ничего не введено, чтобы показать placeholder
const phoneInputs = document.querySelectorAll('[data-tel-input]');
phoneInputs.forEach((input) => {
    input.addEventListener('input', () => {
        if (input.value == '+') {
            input.value = '';
        }
    })
    input.addEventListener('blur', () => {
        if (input.value == '+') {
            input.value = '';
        }
    })
});


// ----------------map--------------
var map = null;
var markers = null;


function init() {
    map = new MetaMapsOL.Map('map');
    map.addControls([
        new MetaMapsOL.Control.PanZoomBar()
    ]);
    var ll = new OpenLayers.LonLat(32.0166, 49.4323).transform(map.displayProjection, map.projection);
    // Устанавливаем центр и зум карты
    map.setCenter(ll, 15);
    // Добавляем слой маркеров.
    markers = new MetaMapsOL.Layer.Markers.Movable();
    map.addLayer(markers);
    // Создаём размер, смещение центра и иконку маркера.
    var size = new OpenLayers.Size(32, 32);
    var offset = new OpenLayers.Pixel(-(size.w / 2), -size.h);
    var icon = new OpenLayers.Icon("https://map.meta.ua/i/icons/1_04.png", size, offset);
    // Создаём маркер.
    var marker = new MetaMapsOL.Marker(ll, icon);
    // Устанавливаем значения для попапа и добавляем его на карту.
    marker.popupContent = "Втотой Парковый";
    markers.addMarker(marker);
    marker.createPopup();
    map.addPopup(marker.popup);
}




// ll = new OpenLayers.LonLat(32.016678, 49.431328).transform(map.displayProjection, map.projection);


// // Объявление переменных в глобальной области видимости.
// var map = null;
// var markers = null;

// function init() {
//     // Создаём объект геокодера...
//     var geoCoder = new MetaMapsOL.geoCoder();
//     // ... и запрашиваем координаты по адресу.
//     geoCoder.point('Южный парк', function(ll) {
//         // Создаём объект карты после ответа геокодера.
//         // Это нужно, что бы у карты не "прыгал" зум после ответа геокодера.
//         map = new MetaMapsOL.Map('map');
//         if (ll) {
//             // Если ll не равен false, т.е. адрес найден,
//             // преобразуем полученые координаты в проекцию карты.
//             ll = ll.transform(map.displayProjection, map.projection);
//             // Устанавливаем центр и зум карты
//             map.setCenter(ll, 15);
//             // Добавляем слой маркеров.
//             markers = new MetaMapsOL.Layer.Markers.Movable();
//             map.addLayer(markers);
//             // Создаём размер, смещение центра и иконку маркера.
//             var size = new OpenLayers.Size(32, 32);
//             var offset = new OpenLayers.Pixel(-(size.w / 2), -size.h);
//             var icon = new OpenLayers.Icon("https://map.meta.ua/api/south-park.png", size, offset);
//             // Создаём маркер.
//             var marker = new MetaMapsOL.Marker(ll, icon);
//             // Устанавливаем значения для попапа и добавляем его на карту.
//             marker.popupContent = "TEST";
//             markers.addMarker(marker);
//             marker.createPopup();
//             map.addPopup(marker.popup);
//         }
//     });
// }