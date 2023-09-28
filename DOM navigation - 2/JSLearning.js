"use strict";

// document - точка входа для начала всех операций с DOM.
const htmlElement = document.documentElement;
const headElement = document.head;
const bodyElement = document.body;

// // Свойства, рассмотренные в преведущей лекции, достаточно хороши, когда элементы расположены рядом.
// // В этой лекции будет рассмотрен вариант, когда элементы располагаются не в удобном положении для использования свойств.

// // Получение элемента по id:
// const someElement = document.getElementById("first_classContainer__text");
// console.log(someElement); // div#first_classContainer__text.classContainer__text
// // Также есть просто переменная с именем указаным в id:
// console.log(first_classContainer__text); // div#first_classContainer__text.classContainer__text
// // Резельтат этих двух способов одинаковый.
// // Также есть важная оговорка, что если объявлена переменная в скрипте с именем id, то она будет иметь больший приоритет,
// // чем узел c именем указанным в id.
// // Второй способ получения узла по id используется в основном для поддержки и предпочтительнее использовать именно ПЕРВЫЙ СПОСОБ с методом.
// // Метод указанный в первом способе можно использовать только через document, а не какой-то случайный элемент!

// // Одним из самых универсальных методов поиска является anyElem.querySelectorAll(cssSelector);
// // Данный метод возвращает все элементы, удовлетворяющие заданому CSS-селектору.
// console.log(bodyElement.querySelectorAll("h1"));

// // anyElem.querySelector(cssSelector) вернет первый элемент соответствующий селектору указаному в атрибуте метода,
// // Можно сказать он отработает как anyElem.querySelectorAll(cssSelector)[0];

// // Метод anyElem.closest(cssSelector) ищет ближайшего предка элемента удовлетворяющего указаному css селектору.
// console.log(first_classContainer__text.closest("html")); // <html>...</html>
// // Другими словами, метод closest поднимается вверх от элемента и проверяет каждого из родителей.
// // Если он соответствует селектору, поиск прекращается. Метод возвращает либо предка, либо null, если такой элемент не найден.

// // Существуют методы вида getElement(s)By...(), сейчас они являются более историческими.
// // Вот некоторые из них:
// // 1) anyElem.getElementByTagName(tag);
// // 2) anyElem.getElementByClassName(.class);
// // 3) anyElem.getElementByTagName(name); //один из самых редких в использовании.
// // Все методы данного семейства возвращают живую коллекцию, которая отображает ВСЕГДА текущее состояние документа

// // querySelectorAll возвращает статическую коллекцию, это похоже на фиксированный массив элементов.

// // ------------------------------------------------------------- ИТОГ: -------------------------------------------------------------------------
// // Есть 6 основных методов поиска элементов в DOM:
// // querySelector
// // querySelectorAll
// // getElementById
// // getElementsByName
// // getElementsByTagName
// // getElementsByClassName

// // Безусловно, наиболее часто используемыми в настоящее время являются методы querySelector и querySelectorAll,
// // но и методы getElement(s)By* могут быть полезны в отдельных случаях, а также встречаются в старом коде.
// // ---------------------------------------------------------------------------------------------------------------------------------------------
