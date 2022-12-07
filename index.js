const para = document.querySelector("p");
const addBtn = document.querySelector(".add");
const removeBtn = document.querySelector(".remove");
const list = document.querySelector(".list");
const li = document.querySelectorAll("li");
const input = document.querySelector("input");
const nav = document.querySelector("nav");

// btn.onclick = function () {
//     para.textContent = "New paragragh content!"
// }

// addBtn.addEventListener("click", function () {
//     // console.log(para.getAttribute("class"))
//     // if (para.innerText.includes("Lorem")) {
//     //     console.log("YES!")
//     // } else (
//     //     console.log("NO!")
//     // )

//     // para.classList.toggle("style1")
//     // console.log(li[0].previousElementSibling);
//     // for (let i = 0; i < li.length; i++) {
//     //     li[i].style.fontSize = "50px";
//     // }

//     nav.classList.toggle("open-nav");
    

//     // para.textContent = "New paragragh content!"
//     //   li[0].textContent = "How are you?";
// });

// console.log(li)

addBtn.addEventListener("click", add);
// removeBtn.addEventListener("click", remove);

function add() {
    let value = input.value;
    let li = document.createElement("li");
    li.textContent = value;
    li.classList.add("li");
    list.appendChild(li);
    input.value = "";
    console.log(li)
}

// function remove() {
//     let l;
//     for (let i = 0; i < li.length; i++) {
//         // l = li[li.length-1]
//        ul.remove();
//     }
//     console.log(l)
// }

addBtn.addEventListener("click", function() {
    nav.classList.toggle("open-nav");
})



console.log(nav.classList)