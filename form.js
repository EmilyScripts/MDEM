var successMessage = document.getElementById("success-message"); 
var nameError = document.getElementById('name-error');
var emailError = document.getElementById('email-error');
var messageError = document.getElementById('message-error');
// p element containing success message, hidden by default

var submitBtn = document.getElementById("submit-btn"); 
// form submit button

var formNameInput = document.getElementById("name"); 
// form name input element
var emailInput = document.getElementById('email');

var messageInput = document.getElementById('message');



submitBtn.addEventListener("click", function(){

    // Clear error messages
    nameError.classList.add('success-hidden');
    nameError.setAttribute('aria-hidden', 'true');

    emailError.classList.add('success-hidden');
    emailError.setAttribute('aria-hidden', 'true');

    messageError.classList.add('success-hidden');
    messageError.setAttribute('aria-hidden', 'true');

    var formNameInputValue = formNameInput.value;
    var emailInputValue = emailInput.value;
    var messageInputValue = messageInput.value;

    event.preventDefault(); 
    // stops page from refreshing when submit button clicked

    // debugging etc start
    console.log("submit pressed!")

    console.log(formNameInput.value);
    // debugging etc finish

    

    if (!formNameInputValue) {
        nameError.classList.remove('success-hidden');
        nameError.setAttribute('aria-hidden', 'false');
    }

    if (!emailInputValue) {
        emailError.classList.remove('success-hidden');
        emailError.setAttribute('aria-hidden', 'false');
    }

    if (!messageInputValue) {
        messageError.classList.remove('success-hidden');
        messageError.setAttribute('aria-hidden', 'false');
    }

    if (formNameInputValue && emailInputValue && messageInputValue) {
    
        successMessage.classList.remove("success-hidden");
        successMessage.setAttribute("aria-hidden", "false");
    }
  
});

