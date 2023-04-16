// // console.log('Hello world!')
// window.addEventListener("DOMContentLoaded", function () {
//     console.log(document.querySelector(".block"));
//     console.log(document.querySelectorAll(".text"));
//     document.querySelector(".text").style.color = "blue";
//     document.querySelector(".text").style.backgroundColor = "grey";
//     // document.querySelector("#text").classList.toggle("alert"); // -> turn on or off
//     // document.querySelector("#text").classList.add("alert");
//     // document.querySelector("#text").classList.remove("alert");
//     document.querySelectorAll(".text").forEach(function (element) {
//         element.classList.toggle("alert");
//     })
//     console.log(document.getElementsByTagName("p"))
// });

window.addEventListener("DOMContentLoaded", function () {
    document.querySelector("#burger").addEventListener("click", function () {
        document.querySelector("#menu").classList.toggle("is-active");
    });

    document.querySelectorAll(".text").forEach(function (element) {
        element.addEventListener("click", function (event) {
            // console.log(event)
            event.target.classList.toggle("alert");
        });
    });
});
