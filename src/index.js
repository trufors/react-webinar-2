import React from 'react';
import ReactDOM from 'react-dom';
import App from './app.js';
import Store from "./store.js";
import {counter} from './utils.js';

const store = new Store({
  items: [
    {code: counter(),  count: 0, title: 'Название элемента'},
    {code: counter(),  count: 0, title: 'Некий объект'},
    {code: counter(),  count: 0, title: 'Заголовок'},
    {code: counter(),  count: 0, title: 'Короткое название'},
    {code: counter(),  count: 0, title: 'Запись'},
    {code: counter(),  count: 0, title: 'Пример выделенной записи'},
    {code: counter(),  count: 0, title: 'Седьмой'},
  ]
});

// Реакция на изменение store - повторный рендер приложения
store.subscribe(() => {
  ReactDOM.render(<App store={store}/>, document.body);
});

// Первый рендер (один раз)
ReactDOM.render(<App store={store}/>, document.body);
