//Give an event listener to the button. toggle light class  on click
const btn = document.querySelector(".btn")
const listOfTd = document.querySelectorAll("td")
const inputDisplay = document.querySelector("p")
const result = document.querySelector(".result")
const ul = document.querySelector("ul")

//quicker way for this ?
btn.addEventListener('click',(event) => {
document.querySelector(".calculator").classList.toggle("calculator-light")
document.querySelectorAll(".btn").forEach(element => {
    element.classList.toggle("btn-light")
})
document.querySelector(".result").classList.toggle("result-light")
document.querySelector(".input-container").classList.toggle("input-light")
document.querySelector("table").classList.toggle("table-light")
listOfTd.forEach(element => {
    element.classList.toggle("td-light")
});
document.querySelector(".history").classList.toggle("history-light")
document.querySelector("h1").classList.toggle("h1-light")
document.querySelector("ul").classList.toggle("ul-light")
})
//Add event listener to the trash button to clear the list 
const clearListBtn = document.querySelector(".trash")
clearListBtn.addEventListener('click', (event) => {
    ul.innerHTML = ""
})
//Give event listeners to the TD 

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
            if(ul.childElementCount<5){
                ul.insertAdjacentHTML('beforeend', `<li>${inputDisplay.textContent} = ${newResult}`)
            }
            else{
                ul.removeChild((ul.getElementsByTagName('li')[0]))
                ul.insertAdjacentHTML('beforeend', `<li>${inputDisplay.textContent} = ${newResult}`)
            }
            
        }
        else {
            if(Number(result.textContent)>0){
                //fix the input once there has been a calculation
                inputDisplay.textContent = ""
                result.textContent = ""
            }
                inputDisplay.textContent = inputDisplay.textContent + td.textContent
            
        }
    })
}
// The same event listeners to keyboard buttons
document.body.addEventListener('keyup',(event) => {
    if(event.code==="Enter"){
        function computeResult(str){
            return Function('return ' + str)()
          }
        let newResult = computeResult(inputDisplay.textContent)
        result.textContent = newResult
        ul.insertAdjacentHTML('beforeend', `<li>${inputDisplay.textContent} = ${newResult}`)
    }
    else if(event.code==="Backspace"){
        inputDisplay.textContent = inputDisplay.textContent.substring(0, inputDisplay.textContent.length - 1);
    }
    else if(isFinite(event.key) || event.code==="Digit9" || event.code==="Digit0" || event.code==="Slash" || event.code==="Slash"  || event.code==="Equal" || event.code==="Minus") {
        inputDisplay.textContent = inputDisplay.textContent + event.key
    }
})

//Push computed results as li items in ul