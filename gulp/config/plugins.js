import replace from "gulp-replace"; // плагин поиска и замены
import plumber from "gulp-plumber"; // плагин который помогает обработать возникающие ошибки 
import notify from "gulp-notify"; // плагин выводящий сообщения подсказки
import browsersync from "browser-sync"; // Плагин локального сервера автообновляет страницу
import newer from "gulp-newer"; // Плагин проверяет действительно ли обновилась картинка
import ifPlugin from "gulp-if"; // Плагин условного ветвления


// создаём объект который будем экспортировать и в него будем собирать общие плагины
export const plugins = {
    replace: replace,
    plumber: plumber, // плагин который помогает обработать возникающие ошибки 
    notify: notify, // плагин выводящий сообщения
    browsersync: browsersync,
    newer: newer,
    if: ifPlugin,
};