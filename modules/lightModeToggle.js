export const lightMode = (listOfTd) => {
    document.querySelector(".calculator").classList.toggle("calculator-light");
    document.querySelectorAll(".btn").forEach((element) => {
        element.classList.toggle("btn-light");
    });
    document.querySelector(".result").classList.toggle("result-light");
    document.querySelector(".input-container").classList.toggle("input-light");
    document.querySelectorAll("table").forEach((element) => {
        element.classList.toggle("table-light");
    });
    listOfTd.forEach((element) => {
        element.classList.toggle("td-light");
    });
    document.querySelector(".history").classList.toggle("history-light");
    document.querySelector("h1").classList.toggle("h1-light");
    document.querySelector("ul").classList.toggle("ul-light");
}