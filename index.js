const para = document.querySelector("p");
const addBtn = document.querySelector(".add");
const removeBtn = document.querySelector(".remove");
const list = document.querySelector(".list");
const li = document.querySelectorAll("li");
const input = document.querySelector(".text-input");
const nav = document.querySelector("nav");
const btn3 = document.querySelector(".btn3");
const colorInput = document.querySelector("#color");
const colorInput2 = document.querySelector("#color2");
const body = document.querySelector("body");
const h1 = document.querySelector("h1");

const countryGroup = document.querySelector(".country-group");

const select = document.getElementById('select');

// const allColorInputs =
// document.querySelectorAll(".color");

// let tags = ["template literals", "javascript", "es6"];
// let html = '';
// for (let x of tags) {
//   html = html + `<li>${x}</li>`;
// }

// list.innerHTML = html;

let max = 10;
let random;
function getRandomNumber() {
  random = Math.floor(Math.random() * max);
}
// let inp;
// input.addEventListener("keyup", (e) => {
//   inp = e.target.value;
// })

// removeBtn.addEventListener("click", () => {
//   getRandomNumber();
//   if (!inp || inp >= max) {
//       console.log(`Please input a number or check if your number is equal to or greater than ${max}!!!`)
//   } else {
//     if (parseInt(inp) === random) {
//       console.log(`You guessed correctly, The correct number is ${random}`)
//     } else {
//       console.log(`Your guess is wrong, The correct number is ${random}`);
//     }
//   }
// })

// let color1, color2;
// function changeBackground() {
//     colorInput.addEventListener("change", (e) => {
//         color1 = e.target.value;
//         body.style.background = "linear-gradient(" + color1 + "," + " " + color2 + ")";
//         body.style.backgroundRepeat = "no-repeat";
//     })

//     colorInput2.addEventListener("change", (e) => {
//         color2 = e.target.value;
//         body.style.background = "linear-gradient(" + color1 + "," + " " + color2 + ")";
//         body.style.backgroundRepeat = "no-repeat";
//     })
// }

// // changeBackground();

// h1.innerHTML = `<span>Hekkkdkdkd</span>`

// function changeBackground() {
//   allColorInputs.forEach((input) => {
//     input.addEventListener("change", (e) => {
//       color1 = allColorInputs[0].value; color2 = allColorInputs[1].value;
//       body.style.background = `linear-gradient(${color1}, ${color2})`;
//       body.style.backgroundRepeat = "no-repeat";
//       body.style.color = "white";
//     });
//   });
// };

// let a = 7;
// let b = 9;
// let c = 4;

// changeBackground();

// // btn.onclick = function () {
// //     para.textContent = "New paragragh content!"
// // }

// // addBtn.addEventListener("click", function () {
// //     // console.log(para.getAttribute("class"))
// //     // if (para.innerText.includes("Lorem")) {
// //     //     console.log("YES!")
// //     // } else (
// //     //     console.log("NO!")
// //     // )

// //     // para.classList.toggle("style1")
// //     // console.log(li[0].previousElementSibling);
// //     // for (let i = 0; i < li.length; i++) {
// //     //     li[i].style.fontSize = "50px";
// //     // }

// //     nav.classList.toggle("open-nav");

// //     // para.textContent = "New paragragh content!"
// //     //   li[0].textContent = "How are you?";
// // });

// // console.log(li)

// addBtn.addEventListener("click", add);
// // removeBtn.addEventListener("click", remove);

// function add() {
//   let value = input.value;
//   let li = document.createElement("li");
//   li.textContent = value;
//   li.classList.add("li");
//   list.appendChild(li);
//   input.value = "";
//   console.log(li);
// }

// // function remove() {
// //     let l;
// //     for (let i = 0; i < li.length; i++) {
// //         // l = li[li.length-1]
// //        ul.remove();
// //     }
// //     console.log(l)
// // }

// addBtn.addEventListener("click", function () {
//   nav.classList.toggle("open-nav");
// });

// btn3.addEventListener("click", () => {
//   alert("Clicked!!!");
// });

// console.log(nav.classList);

const fetchCountries = () => {
  fetch("https://restcountries.com/v3.1/all")
    .then((response) => response.json())
    .then((res) => {
      getCountries(res);
      filterCountries(res);
      filterByRegion(res)
    })
    .catch((error) => {
      console.log(error);
    });

  const getCountries = (countries) => {
    let content = "";
    countries
      .sort((a, b) => {
        let x = a.name.official.toLowerCase();
        let y = b.name.official.toLowerCase();
        if (x < y) {
          return -1;
        }
        if (x > y) {
          return 1;
        }
        return 0;
      })
      .forEach((country) => {
        content += `
          <div class="country">
            <img src=${country.flags.png} >
            <p>Name: ${country.name.official}</p>
            <p>Region: ${country.region}</p>
            <p>Population: ${country.population.toLocaleString()}</p>
          </div>
      `;
      });
    countryGroup.innerHTML = content;
  };

  const filterCountries = (countries) => {
    input.addEventListener("keyup", (e) => {
      let filteredCountries = countries.filter((country) =>
        country.name.official
          .toLowerCase()
          .includes(e.target.value.toLowerCase())

          ||

          country.region
          .toLowerCase()
          .includes(e.target.value.toLowerCase())
      );
      getCountries(filteredCountries);
    });
    select.addEventListener('change', (e) => {
      let filteredCountries = countries.filter((country) =>
          country.region
            .toLowerCase()
            .includes(e.target.value.toLowerCase())
        );
        getCountries(filteredCountries);
    })
  };

  const filterByRegion = (countries) => {
    let regions = [];
    countries.forEach(country => {
      if (!regions.includes(country.region)) {
        regions.push(country.region);
      }
    })

    let content = '<option value="">Filter by region</option>';
    regions.forEach(region => {
      console.log(region);
      content += `
        <option value="${region}">${region}</option>
      `
    })
    select.innerHTML = content;
  }
};

fetchCountries();
