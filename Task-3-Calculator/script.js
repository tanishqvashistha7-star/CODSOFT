// Select display
let display = document.getElementById("display");

// Select all buttons
let buttons = document.querySelectorAll("button");

// Variable to store input
let currentInput = "";

// Loop through buttons
buttons.forEach(button => {

    // Add event listener
    button.addEventListener("click", () => {

        let value = button.innerText;

        // Clear display
        if (value === "C") {
            currentInput = "";
            display.value = "";

        }

        // Calculate result
        else if (value === "=") {

            try {
                currentInput = eval(currentInput);
                display.value = currentInput;
            }

            catch {
                display.value = "Error";
            }

        }

        // Add values to display
        else {
            currentInput += value;
            display.value = currentInput;
        }

    });

});