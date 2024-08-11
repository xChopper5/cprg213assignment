/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?
let costPerDay = 0;
let daysCounter = 0;
let totalCost = 0;



/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!
let daysButton = document.querySelectorAll(".blue-hover");
daysButton.forEach(button => {
    button.addEventListener('click', function() {
        if (!button.classList.contains('clicked')) {  
            button.classList.add('clicked');
            daysCounter++; 
            recalculateTotalCost();
        }
        console.log("days counter" + daysCounter);
    });
});





/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.
let clearButton = document.getElementById('clear-button');
function clearDays() {
    daysButton.forEach(button => {
        button.classList.remove('clicked');
    });
    daysCounter = 0;
    totalCost = 0;
    recalculateTotalCost();
    console.log("days cleared" + daysCounter);
}
clearButton.addEventListener('click', clearDays);



/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.
let halfButton = document.getElementById('half');
halfButton.addEventListener('click', function() {
    costPerDay = 20; 
    halfButton.classList.add('clicked');
    fullButton.classList.remove('clicked');
    recalculateTotalCost();
});





// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.
let fullButton = document.getElementById('full');
fullButton.addEventListener('click', function() {
    costPerDay = 35; 
    fullButton.classList.add('clicked');
    halfButton.classList.remove('clicked');
    recalculateTotalCost();
});



/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value
let calculatedCost = document.getElementById('calculated-cost');
function recalculateTotalCost() {
    totalCost = costPerDay * daysCounter;
    calculatedCost.textContent = totalCost;
}
