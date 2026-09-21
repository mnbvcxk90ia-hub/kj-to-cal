/* =========================================================
   kJ TO CALCULATOR
   JavaScript
   ========================================================= */


/* =========================================================
   ELEMENTS
   ========================================================= */

const converterForm = document.getElementById("converterForm");

const kjInput = document.getElementById("kjInput");

const calResult = document.getElementById("calResult");

const resultSummary = document.getElementById("resultSummary");

const resetButton = document.getElementById("resetButton");

const yearElement = document.getElementById("year");


/* =========================================================
   CONVERSION CONSTANT
   ========================================================= */

/*
   1 kilocalorie = 4.184 kilojoules

   Therefore:

   Calories = kJ / 4.184
*/

const KJ_PER_CALORIE = 4.184;


/* =========================================================
   FORMAT NUMBER
   ========================================================= */

function formatNumber(number) {

    /*
       Show up to 6 decimal places.

       Unnecessary zeros are removed automatically.
    */

    return Number(number.toFixed(6)).toString();

}


/* =========================================================
   CONVERT kJ TO CALORIES
   ========================================================= */

function convertKjToCalories(kj) {

    return kj / KJ_PER_CALORIE;

}


/* =========================================================
   UPDATE RESULT
   ========================================================= */

function updateResult() {

    const kjValue = parseFloat(kjInput.value);


    /*
       Check whether the input is a valid number.
    */

    if (
        Number.isNaN(kjValue) ||
        kjValue < 0
    ) {

        calResult.textContent = "0";

        resultSummary.textContent =
            "Enter a valid kilojoule value.";

        return;

    }


    /*
       Perform conversion.
    */

    const calories = convertKjToCalories(kjValue);


    /*
       Format values for display.
    */

    const formattedKj = formatNumber(kjValue);

    const formattedCalories = formatNumber(calories);


    /*
       Update result card.
    */

    calResult.textContent = formattedCalories;

    resultSummary.textContent =
        `${formattedKj} kJ = ${formattedCalories} Calories`;

}


/* =========================================================
   FORM SUBMIT
   ========================================================= */

converterForm.addEventListener("submit", function(event) {

    /*
       Prevent page reload.
    */

    event.preventDefault();


    /*
       Calculate result.
    */

    updateResult();

});


/* =========================================================
   LIVE CALCULATION
   ========================================================= */

kjInput.addEventListener("input", function() {

    /*
       Calculate automatically while the user
       changes the input value.
    */

    if (kjInput.value !== "") {

        updateResult();

    }

});


/* =========================================================
   RESET BUTTON
   ========================================================= */

resetButton.addEventListener("click", function() {

    /*
       Restore default value.
    */

    kjInput.value = "100";


    /*
       Update calculator result.
    */

    updateResult();


    /*
       Put cursor back into input.
    */

    kjInput.focus();

});


/* =========================================================
   CURRENT YEAR
   ========================================================= */

if (yearElement) {

    yearElement.textContent =
        new Date().getFullYear();

}


/* =========================================================
   INITIAL CALCULATION
   ========================================================= */

updateResult();
