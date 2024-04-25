// print knig algaritmi;
let inp = document.getElementById("inp");
let write1 = document.getElementById("write1");
let write2 = document.getElementById("write2");
let btn = document.getElementById("clickButton");

let juftArr = [];
let toqArr2 = [];
let bookArr1 = [];
let bookArr2 = [];
let unShiftToq = [];

function clicko() {
  write1.innerText = "";
  write2.innerText = "";

  if (inp.value % 4 != 0) {
    alert("please insert valid count that dividable 4");
    return;
  }

  //  write1.innerHTML+=`<p>salom</p>`

  for (let i = 0; i <= inp.value; i++) {
    if (i % 2 == 0) {
      juftArr.unshift(i);
    } else {
      toqArr2.push(i);
      unShiftToq.unshift(i);
    }
  }

  assistant();
  assistant2();
}

function assistant(params) {
  for (let i = 0; i < juftArr.length - 1; i++) {
    if (i % 2 == 0) {
      bookArr1.push(juftArr[i / 2]);
    } else {
      bookArr1.push(i);
    }
  }
  console.log(bookArr1);
  bookArr1.map((item, index) => {
    write1.innerHTML += `<p>${item + ","}</p>`;
  });
}

function assistant2(params) {
  for (let i = 2; i < toqArr2.length + 2; i++) {
    if (i % 2 == 0) {
      bookArr2.push(i);
    } else {
      bookArr2.push(unShiftToq[(i - 3) / 2]);
    }
  }

  console.log(bookArr2);
  bookArr2.map((item, index) => {
    write2.innerHTML += `<p>${item + ","}</p>`;
  });

  inp.value = "";

  juftArr = [];
  toqArr2 = [];
  unShiftToq = [];
  bookArr1 = [];
  bookArr2 = [];
}
