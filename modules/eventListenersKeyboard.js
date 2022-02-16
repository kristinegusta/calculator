export const keyboardEvent = (event, inputDisplay, result, ul) => {
    if (event.code === "Enter") {
        function computeResult(str) {
            return Function("return " + str)();
        }
        let newResult = computeResult(inputDisplay.textContent);
        result.textContent = newResult;
        ul.insertAdjacentHTML(
            "beforeend",
            `<li>${inputDisplay.textContent} = ${newResult}`
        );
    } else if (event.code === "Backspace") {
        inputDisplay.textContent = inputDisplay.textContent.substring(
            0,
            inputDisplay.textContent.length - 1
        );
    } else if (
        isFinite(event.key) ||
        event.code === "Digit9" ||
        event.code === "Digit0" ||
        event.code === "Digit8" ||
        event.code === "Slash" ||
        event.code === "Equal" ||
        event.code === "Minus"
    ) {
        inputDisplay.textContent = inputDisplay.textContent + event.key;
    }
}