var successMessage = document.getElementById("success-message"); 
// p element containing success message, hidden by default

var submitBtn = document.getElementById("submit-btn"); 
// form submit button

var formNameInput = document.getElementById("form-name"); 
// form name input element


submitBtn.addEventListener("click", function(){

    event.preventDefault(); 
    // stops page from refreshing when submit button clicked

    // debugging etc start
    console.log("submit pressed!")

    console.log(formNameInput.value);
    // debugging etc finish

    successMessage.classList.remove("success-hidden");

    successMessage.setAttribute("aria-hidden", "false");

  
});

