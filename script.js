//Give an event listener to the button. toggle light class  on click
const btn = document.querySelector(".btn")
const listOfTd = document.querySelectorAll("td")
const inputDisplay = document.querySelector("p")
const result = document.querySelector(".result")

btn.addEventListener('click',(event) => {
document.querySelector(".calculator").classList.toggle("calculator-light")
document.querySelector(".btn").classList.toggle("btn-light")
document.querySelector(".result").classList.toggle("result-light")
document.querySelector(".input-container").classList.toggle("input-light")
document.querySelector("table").classList.toggle("table-light")
listOfTd.forEach(element => {
    element.classList.toggle("td-light")
});
})

//Give event listeners to the TD that need to be displayed in the InputDisplay (aka everything except DELETE and Result)

for (const td of listOfTd) {
    td.addEventListener('click',(event) => {
        if(td.classList.contains("C")){
            inputDisplay.textContent = ""
            result.textContent = "0"
        }
        else if(td.classList.contains("backspace")){
            inputDisplay.textContent = inputDisplay.textContent.substring(0, inputDisplay.textContent.length - 1);
        }
        else if(td.classList.contains("calculate")){
            function computeResult(str){
                return Function('return ' + str)()
              }
            let newResult = computeResult(inputDisplay.textContent)
            result.textContent = newResult
        }
        else {
            inputDisplay.textContent = inputDisplay.textContent + td.textContent
        }
    })
}

document.body.addEventListener('keyup',(event) => {
    if(event.code==="Enter"){
        function computeResult(str){
            return Function('return ' + str)()
          }
        let newResult = computeResult(inputDisplay.textContent)
        result.textContent = newResult
    }
    else if(event.code==="Backspace"){
        inputDisplay.textContent = inputDisplay.textContent.substring(0, inputDisplay.textContent.length - 1);
    }
    else if(isFinite(event.key) || event.code==="Digit9" || event.code==="Digit0" || event.code==="Slash" || event.code==="Slash"  || event.code==="Equal" || event.code==="Minus") {
        inputDisplay.textContent = inputDisplay.textContent + event.key
    }
})