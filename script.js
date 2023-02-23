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

let cel1 = 0;
let cel2 = 0;
let cel3 = 0;
let cel4 = 0;
let cel5 = 0;
let cel6 = 0;
let cel7 = 0;
let cel8 = 0;
let cel9 = 0;

let count = 0;

cells1.addEventListener("click", () => {
    if (count % 2 && cell1 == true) {
        cells1.textContent = "✖";
        count++;
        cel1 = 1;
        console.log(cel1);
        cell1 = false;
    } if (cell1 == true) {
        cells1.textContent = "O";
        count++;
        cel1 = 2;
        cell1 = false;
    }
    if (cel1 == 2 && cel2 == 2 && cel3 == 2) {
        alert("O win");
    } if (cel1 == 1 && cel2 == 1 && cel3 == 1) {
        alert("✖ win");
    } if (cel4 == 2 && cel5 == 2 && cel6 == 2) {
        alert("O win");
    } if (cel4 == 1 && cel5 == 1 && cel6 == 1) {
        alert("✖ win");
    } if (cel7 == 2 && cel8 == 2 && cel9 == 2) {
        alert("O win");
    } if (cel7 == 1 && cel8 == 1 && cel9 == 1) {
        alert("✖ win");
    } if (cel1 == 2 && cel4 == 2 && cel7 == 2) {
        alert("O win");
    } if (cel1 == 1 && cel4 == 1 && cel7 == 1) {
        alert("✖ win");
    } if (cel2 == 2 && cel5 == 2 && cel8 == 2) {
        alert("O win");
    } if (cel2 == 1 && cel5 == 1 && cel8 == 1) {
        alert("✖ win");
    } if (cel3 == 2 && cel6 == 2 && cel9 == 2) {
        alert("O win");
    } if (cel3 == 1 && cel6 == 1 && cel9 == 1) {
        alert("✖ win");
    } if (cel1 == 2 && cel5 == 2 && cel9 == 2) {
        alert("O win");
    } if (cel1 == 1 && cel5 == 1 && cel9 == 1) {
        alert("✖ win");
    } if (cel3 == 2 && cel5 == 2 && cel7 == 2) {
        alert("O win");
    } if (cel3 == 1 && cel5 == 1 && cel7 == 1) {
        alert("✖ win");
    }
})

cells2.addEventListener("click", () => {
    if (count % 2 && cell2 == true) {
        cells2.textContent = "✖";
        count++;
        cel2 = 1;
        cell2 = false;
    } if (cell2 == true) {
        cells2.textContent = "O";
        count++;
        cel2 = 2;
        cell2 = false;
    }
    if (cel1 == 2 && cel2 == 2 && cel3 == 2) {
        alert("O win");
    } if (cel1 == 1 && cel2 == 1 && cel3 == 1) {
        alert("✖ win");
    } if (cel4 == 2 && cel5 == 2 && cel6 == 2) {
        alert("O win");
    } if (cel4 == 1 && cel5 == 1 && cel6 == 1) {
        alert("✖ win");
    } if (cel7 == 2 && cel8 == 2 && cel9 == 2) {
        alert("O win");
    } if (cel7 == 1 && cel8 == 1 && cel9 == 1) {
        alert("✖ win");
    } if (cel1 == 2 && cel4 == 2 && cel7 == 2) {
        alert("O win");
    } if (cel1 == 1 && cel4 == 1 && cel7 == 1) {
        alert("✖ win");
    } if (cel2 == 2 && cel5 == 2 && cel8 == 2) {
        alert("O win");
    } if (cel2 == 1 && cel5 == 1 && cel8 == 1) {
        alert("✖ win");
    } if (cel3 == 2 && cel6 == 2 && cel9 == 2) {
        alert("O win");
    } if (cel3 == 1 && cel6 == 1 && cel9 == 1) {
        alert("✖ win");
    } if (cel1 == 2 && cel5 == 2 && cel9 == 2) {
        alert("O win");
    } if (cel1 == 1 && cel5 == 1 && cel9 == 1) {
        alert("✖ win");
    } if (cel3 == 2 && cel5 == 2 && cel7 == 2) {
        alert("O win");
    } if (cel3 == 1 && cel5 == 1 && cel7 == 1) {
        alert("✖ win");
    }
})

cells3.addEventListener("click", () => {
    if (count % 2 && cell3 == true) {
        cells3.textContent = "✖";
        count++;
        cel3 = 1;
        cell3 = false;
    } if (cell3 == true) {
        cells3.textContent = "O";
        count++;
        cel3 = 2;
        cell3 = false;
    }
    if (cel1 == 2 && cel2 == 2 && cel3 == 2) {
        alert("O win");
    } if (cel1 == 1 && cel2 == 1 && cel3 == 1) {
        alert("✖ win");
    } if (cel4 == 2 && cel5 == 2 && cel6 == 2) {
        alert("O win");
    } if (cel4 == 1 && cel5 == 1 && cel6 == 1) {
        alert("✖ win");
    } if (cel7 == 2 && cel8 == 2 && cel9 == 2) {
        alert("O win");
    } if (cel7 == 1 && cel8 == 1 && cel9 == 1) {
        alert("✖ win");
    } if (cel1 == 2 && cel4 == 2 && cel7 == 2) {
        alert("O win");
    } if (cel1 == 1 && cel4 == 1 && cel7 == 1) {
        alert("✖ win");
    } if (cel2 == 2 && cel5 == 2 && cel8 == 2) {
        alert("O win");
    } if (cel2 == 1 && cel5 == 1 && cel8 == 1) {
        alert("✖ win");
    } if (cel3 == 2 && cel6 == 2 && cel9 == 2) {
        alert("O win");
    } if (cel3 == 1 && cel6 == 1 && cel9 == 1) {
        alert("✖ win");
    } if (cel1 == 2 && cel5 == 2 && cel9 == 2) {
        alert("O win");
    } if (cel1 == 1 && cel5 == 1 && cel9 == 1) {
        alert("✖ win");
    } if (cel3 == 2 && cel5 == 2 && cel7 == 2) {
        alert("O win");
    } if (cel3 == 1 && cel5 == 1 && cel7 == 1) {
        alert("✖ win");
    }
})

cells4.addEventListener("click", () => {
    if (count % 2 && cell4 == true) {
        cells4.textContent = "✖";
        count++;
        cel4 = 1;
        cell4 = false;
    } if (cell4 == true) {
        cells4.textContent = "O";
        count++;
        cel4 = 2;
        cell4 = false;
    }
    if (cel1 == 2 && cel2 == 2 && cel3 == 2) {
        alert("O win");
    } if (cel1 == 1 && cel2 == 1 && cel3 == 1) {
        alert("✖ win");
    } if (cel4 == 2 && cel5 == 2 && cel6 == 2) {
        alert("O win");
    } if (cel4 == 1 && cel5 == 1 && cel6 == 1) {
        alert("✖ win");
    } if (cel7 == 2 && cel8 == 2 && cel9 == 2) {
        alert("O win");
    } if (cel7 == 1 && cel8 == 1 && cel9 == 1) {
        alert("✖ win");
    } if (cel1 == 2 && cel4 == 2 && cel7 == 2) {
        alert("O win");
    } if (cel1 == 1 && cel4 == 1 && cel7 == 1) {
        alert("✖ win");
    } if (cel2 == 2 && cel5 == 2 && cel8 == 2) {
        alert("O win");
    } if (cel2 == 1 && cel5 == 1 && cel8 == 1) {
        alert("✖ win");
    } if (cel3 == 2 && cel6 == 2 && cel9 == 2) {
        alert("O win");
    } if (cel3 == 1 && cel6 == 1 && cel9 == 1) {
        alert("✖ win");
    } if (cel1 == 2 && cel5 == 2 && cel9 == 2) {
        alert("O win");
    } if (cel1 == 1 && cel5 == 1 && cel9 == 1) {
        alert("✖ win");
    } if (cel3 == 2 && cel5 == 2 && cel7 == 2) {
        alert("O win");
    } if (cel3 == 1 && cel5 == 1 && cel7 == 1) {
        alert("✖ win");
    }
})

cells5.addEventListener("click", () => {
    if (count % 2 && cell5 == true) {
        cells5.textContent = "✖";
        count++;
        cel5 = 1;
        cell5 = false;
    } if (cell5 == true) {
        cells5.textContent = "O";
        count++;
        cel5 = 2;
        cell5 = false;
    }
    if (cel1 == 2 && cel2 == 2 && cel3 == 2) {
        alert("O win");
    } if (cel1 == 1 && cel2 == 1 && cel3 == 1) {
        alert("✖ win");
    } if (cel4 == 2 && cel5 == 2 && cel6 == 2) {
        alert("O win");
    } if (cel4 == 1 && cel5 == 1 && cel6 == 1) {
        alert("✖ win");
    } if (cel7 == 2 && cel8 == 2 && cel9 == 2) {
        alert("O win");
    } if (cel7 == 1 && cel8 == 1 && cel9 == 1) {
        alert("✖ win");
    } if (cel1 == 2 && cel4 == 2 && cel7 == 2) {
        alert("O win");
    } if (cel1 == 1 && cel4 == 1 && cel7 == 1) {
        alert("✖ win");
    } if (cel2 == 2 && cel5 == 2 && cel8 == 2) {
        alert("O win");
    } if (cel2 == 1 && cel5 == 1 && cel8 == 1) {
        alert("✖ win");
    } if (cel3 == 2 && cel6 == 2 && cel9 == 2) {
        alert("O win");
    } if (cel3 == 1 && cel6 == 1 && cel9 == 1) {
        alert("✖ win");
    } if (cel1 == 2 && cel5 == 2 && cel9 == 2) {
        alert("O win");
    } if (cel1 == 1 && cel5 == 1 && cel9 == 1) {
        alert("✖ win");
    } if (cel3 == 2 && cel5 == 2 && cel7 == 2) {
        alert("O win");
    } if (cel3 == 1 && cel5 == 1 && cel7 == 1) {
        alert("✖ win");
    }
})

cells6.addEventListener("click", () => {
    if (count % 2 && cell6 == true) {
        cells6.textContent = "✖";
        count++;
        cel6 = 1;
        cell6 = false;
    } if (cell6 == true) {
        cells6.textContent = "O";
        count++;
        cel6 = 2;
        cell6 = false;
    }
    if (cel1 == 2 && cel2 == 2 && cel3 == 2) {
        alert("O win");
    } if (cel1 == 1 && cel2 == 1 && cel3 == 1) {
        alert("✖ win");
    } if (cel4 == 2 && cel5 == 2 && cel6 == 2) {
        alert("O win");
    } if (cel4 == 1 && cel5 == 1 && cel6 == 1) {
        alert("✖ win");
    } if (cel7 == 2 && cel8 == 2 && cel9 == 2) {
        alert("O win");
    } if (cel7 == 1 && cel8 == 1 && cel9 == 1) {
        alert("✖ win");
    } if (cel1 == 2 && cel4 == 2 && cel7 == 2) {
        alert("O win");
    } if (cel1 == 1 && cel4 == 1 && cel7 == 1) {
        alert("✖ win");
    } if (cel2 == 2 && cel5 == 2 && cel8 == 2) {
        alert("O win");
    } if (cel2 == 1 && cel5 == 1 && cel8 == 1) {
        alert("✖ win");
    } if (cel3 == 2 && cel6 == 2 && cel9 == 2) {
        alert("O win");
    } if (cel3 == 1 && cel6 == 1 && cel9 == 1) {
        alert("✖ win");
    } if (cel1 == 2 && cel5 == 2 && cel9 == 2) {
        alert("O win");
    } if (cel1 == 1 && cel5 == 1 && cel9 == 1) {
        alert("✖ win");
    } if (cel3 == 2 && cel5 == 2 && cel7 == 2) {
        alert("O win");
    } if (cel3 == 1 && cel5 == 1 && cel7 == 1) {
        alert("✖ win");
    }
})

cells7.addEventListener("click", () => {
    if (count % 2 && cell7 == true) {
        cells7.textContent = "✖";
        count++;
        cel7 = 1;
        cell7 = false;
    } if (cell7 == true) {
        cells7.textContent = "O";
        count++;
        cel7 = 2;
        cell7 = false;
    }
    if (cel1 == 2 && cel2 == 2 && cel3 == 2) {
        alert("O win");
    } if (cel1 == 1 && cel2 == 1 && cel3 == 1) {
        alert("✖ win");
    } if (cel4 == 2 && cel5 == 2 && cel6 == 2) {
        alert("O win");
    } if (cel4 == 1 && cel5 == 1 && cel6 == 1) {
        alert("✖ win");
    } if (cel7 == 2 && cel8 == 2 && cel9 == 2) {
        alert("O win");
    } if (cel7 == 1 && cel8 == 1 && cel9 == 1) {
        alert("✖ win");
    } if (cel1 == 2 && cel4 == 2 && cel7 == 2) {
        alert("O win");
    } if (cel1 == 1 && cel4 == 1 && cel7 == 1) {
        alert("✖ win");
    } if (cel2 == 2 && cel5 == 2 && cel8 == 2) {
        alert("O win");
    } if (cel2 == 1 && cel5 == 1 && cel8 == 1) {
        alert("✖ win");
    } if (cel3 == 2 && cel6 == 2 && cel9 == 2) {
        alert("O win");
    } if (cel3 == 1 && cel6 == 1 && cel9 == 1) {
        alert("✖ win");
    } if (cel1 == 2 && cel5 == 2 && cel9 == 2) {
        alert("O win");
    } if (cel1 == 1 && cel5 == 1 && cel9 == 1) {
        alert("✖ win");
    } if (cel3 == 2 && cel5 == 2 && cel7 == 2) {
        alert("O win");
    } if (cel3 == 1 && cel5 == 1 && cel7 == 1) {
        alert("✖ win");
    }
})

cells8.addEventListener("click", () => {
    if (count % 2 && cell8 == true) {
        cells8.textContent = "✖";
        count++; 
        cel8 = 1;
        cell8 = false;
    } if (cell8 == true) {
        cells8.textContent = "O";
        count++;
        cel8 = 2;
        cell8 = false;
    }
    if (cel1 == 2 && cel2 == 2 && cel3 == 2) {
        alert("O win");
    } if (cel1 == 1 && cel2 == 1 && cel3 == 1) {
        alert("✖ win");
    } if (cel4 == 2 && cel5 == 2 && cel6 == 2) {
        alert("O win");
    } if (cel4 == 1 && cel5 == 1 && cel6 == 1) {
        alert("✖ win");
    } if (cel7 == 2 && cel8 == 2 && cel9 == 2) {
        alert("O win");
    } if (cel7 == 1 && cel8 == 1 && cel9 == 1) {
        alert("✖ win");
    } if (cel1 == 2 && cel4 == 2 && cel7 == 2) {
        alert("O win");
    } if (cel1 == 1 && cel4 == 1 && cel7 == 1) {
        alert("✖ win");
    } if (cel2 == 2 && cel5 == 2 && cel8 == 2) {
        alert("O win");
    } if (cel2 == 1 && cel5 == 1 && cel8 == 1) {
        alert("✖ win");
    } if (cel3 == 2 && cel6 == 2 && cel9 == 2) {
        alert("O win");
    } if (cel3 == 1 && cel6 == 1 && cel9 == 1) {
        alert("✖ win");
    } if (cel1 == 2 && cel5 == 2 && cel9 == 2) {
        alert("O win");
    } if (cel1 == 1 && cel5 == 1 && cel9 == 1) {
        alert("✖ win");
    } if (cel3 == 2 && cel5 == 2 && cel7 == 2) {
        alert("O win");
    } if (cel3 == 1 && cel5 == 1 && cel7 == 1) {
        alert("✖ win");
    }
})

cells9.addEventListener("click", () => {
    if (count % 2 && cell9 == true) {
        cells9.textContent = "✖";
        count++;
        cel9 = 1;
        cell9 = false;
    } if (cell9 == true) {
        cells9.textContent = "O";
        count++;
        cel9 = 2;
        cell9 = false;
    }
    if (cel1 == 2 && cel2 == 2 && cel3 == 2) {
        alert("O win");
    } if (cel1 == 1 && cel2 == 1 && cel3 == 1) {
        alert("✖ win");
    } if (cel4 == 2 && cel5 == 2 && cel6 == 2) {
        alert("O win");
    } if (cel4 == 1 && cel5 == 1 && cel6 == 1) {
        alert("✖ win");
    } if (cel7 == 2 && cel8 == 2 && cel9 == 2) {
        alert("O win");
    } if (cel7 == 1 && cel8 == 1 && cel9 == 1) {
        alert("✖ win");
    } if (cel1 == 2 && cel4 == 2 && cel7 == 2) {
        alert("O win");
    } if (cel1 == 1 && cel4 == 1 && cel7 == 1) {
        alert("✖ win");
    } if (cel2 == 2 && cel5 == 2 && cel8 == 2) {
        alert("O win");
    } if (cel2 == 1 && cel5 == 1 && cel8 == 1) {
        alert("✖ win");
    } if (cel3 == 2 && cel6 == 2 && cel9 == 2) {
        alert("O win");
    } if (cel3 == 1 && cel6 == 1 && cel9 == 1) {
        alert("✖ win");
    } if (cel1 == 2 && cel5 == 2 && cel9 == 2) {
        alert("O win");
    } if (cel1 == 1 && cel5 == 1 && cel9 == 1) {
        alert("✖ win");
    } if (cel3 == 2 && cel5 == 2 && cel7 == 2) {
        alert("O win");
    } if (cel3 == 1 && cel5 == 1 && cel7 == 1) {
        alert("✖ win");
    }
})