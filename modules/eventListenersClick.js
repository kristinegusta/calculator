//quicker way for this than giving classes to all little components?
export const clickEventListeners = (listOfTd, result, inputDisplay, ul) => {
    for (const td of listOfTd) {
        td.addEventListener("click", (event) => {
            if (td.classList.contains("C")) {
                inputDisplay.textContent = "";
                result.textContent = "0";
            } else if (td.classList.contains("backspace")) {
                inputDisplay.textContent = inputDisplay.textContent.substring(
                    0,
                    inputDisplay.textContent.length - 1
                );
            } else if (td.classList.contains("pi")) {
                inputDisplay.textContent = inputDisplay.textContent + Math.PI.toFixed(3);
            } else if (td.classList.contains("sqroot")) {
                result.textContent = Math.sqrt(Number(inputDisplay.textContent));
            } else if (td.classList.contains("sin")) {
                result.textContent = Math.sin(Number(inputDisplay.textContent));
            } else if (td.classList.contains("cos")) {
                result.textContent = Math.cos(Number(inputDisplay.textContent));
            } else if (td.classList.contains("tan")) {
                result.textContent = Math.tan(Number(inputDisplay.textContent));
            } else if (td.classList.contains("calculate")) {
                function computeResult(str) {
                    return Function("return " + str)();
                }
                let newResult = computeResult(inputDisplay.textContent);
                result.textContent = newResult;
                if (ul.childElementCount < 5) {
                    ul.insertAdjacentHTML(
                        "beforeend",
                        `<li>${inputDisplay.textContent} = ${newResult}`
                    );
                } else {
                    ul.removeChild(ul.getElementsByTagName("li")[0]);
                    ul.insertAdjacentHTML(
                        "beforeend",
                        `<li>${inputDisplay.textContent} = ${newResult}`
                    );
                }
            } else {
                if (Number(result.textContent) > 0) {
                    //fix the input once there has been a calculation
                    inputDisplay.textContent = "";
                    result.textContent = "";
                }
                inputDisplay.textContent = inputDisplay.textContent + td.textContent;
            }
        });
    }
}