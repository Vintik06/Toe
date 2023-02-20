let cells1 = document.getElementById("cells1");
let cells2 = document.getElementById("cells2");
let cells3 = document.getElementById("cells3");
let cells4 = document.getElementById("cells4");
let cells5 = document.getElementById("cells5");
let cells6 = document.getElementById("cells6");
let cells7 = document.getElementById("cells7");
let cells8 = document.getElementById("cells8");
let cells9 = document.getElementById("cells9");

let cell1 = true;
let cell2 = true;
let cell3 = true;
let cell4 = true;
let cell5 = true;
let cell6 = true;
let cell7 = true;
let cell8 = true;
let cell9 = true;

let count = 0;

cells1.addEventListener("click", () => {
    if (count % 2 && cell1 == true) {
        cells1.textContent = "✖";
        count++;
        cell1 = false;
    } if (cell1 == true) {
        cells1.textContent = "O";
        count++;
        cell1 = false;
    }
})

cells2.addEventListener("click", () => {
    if (count % 2 && cell2 == true) {
        cells2.textContent = "✖";
        count++;
        cell2 = false;
    } if (cell2 == true) {
        cells2.textContent = "O";
        count++;
        cell2 = false;
    }
})

cells3.addEventListener("click", () => {
    if (count % 2 && cell3 == true) {
        cells3.textContent = "✖";
        count++;
        cell3 = false;
    } if (cell3 == true) {
        cells3.textContent = "O";
        count++;
        cell3 = false;
    }
})

cells4.addEventListener("click", () => {
    if (count % 2 && cell4 == true) {
        cells4.textContent = "✖";
        count++;
        cell4 = false;
    } if (cell4 == true) {
        cells4.textContent = "O";
        count++;
        cell4 = false;
    }
})

cells5.addEventListener("click", () => {
    if (count % 2 && cell5 == true) {
        cells5.textContent = "✖";
        count++;
        cell5 = false;
    } if (cell5 == true) {
        cells5.textContent = "O";
        count++;
        cell5 = false;
    }
})

cells6.addEventListener("click", () => {
    if (count % 2 && cell6 == true) {
        cells6.textContent = "✖";
        count++;
        cell6 = false;
    } if (cell6 == true) {
        cells6.textContent = "O";
        count++;
        cell6 = false;
    }
})

cells7.addEventListener("click", () => {
    if (count % 2 && cell7 == true) {
        cells7.textContent = "✖";
        count++;
        cell7 = false;
    } if (cell7 == true) {
        cells7.textContent = "O";
        count++;
        cell7 = false;
    }
})

cells8.addEventListener("click", () => {
    if (count % 2 && cell8 == true) {
        cells8.textContent = "✖";
        count++; 
        cell8 = false;
    } if (cell8 == true) {
        cells8.textContent = "O";
        count++;
        cell8 = false;
    }
})

cells9.addEventListener("click", () => {
    if (count % 2 && cell9 == true) {
        cells9.textContent = "✖";
        count++;
        cell9 = false;
    } if (cell9 == true) {
        cells9.textContent = "O";
        count++;
        cell9 = false;
    }
})