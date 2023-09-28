"use strict";

// Как найти?…

// 1 - Таблицу с id="age-table".
// 2 - Все элементы label внутри этой таблицы (их три).
// 3 - Первый td в этой таблице (со словом «Age»).
// 4 - Форму form с именем name="search".
// 5 - Первый input в этой форме.
// 6 - Последний input в этой форме.

// Номер 1:
const ageTable = document.getElementById("age-table");
console.log(ageTable); // table#age-table

// Номер 2:
console.log(ageTable.querySelectorAll("label")); // NodeList(3) [label, label, label]

// Номер 3:
console.log(ageTable.querySelector("td")); // td

// Номер 4:
const searchForm = document.getElementsByName("search")[0];
console.log(searchForm); // form

// Номер 5:
console.log(searchForm.querySelector("input")); // <input type="text" name="search">

// Номер 6:
const searchFormInputs = searchForm.querySelectorAll("input");
console.log(searchFormInputs[searchFormInputs.length - 1]); // <input type="submit" name="Search!">
