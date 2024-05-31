import throttle from "lodash.throttle";

const form = document.querySelector(".feedback-form");

form.addEventListener("input", throttle(handlerInput, 500));

const localFeedbackKey = "feedback-form-state";

let email;
let message;
let formInput = {};

function handlerInput(event) {
    
    if (event.target.name === "email") {
        email = event.target.value;
        formInput.email = email;
    } else if (event.target.name === "message") {
        message = event.target.value;
        formInput.message = message;
    }

    localStorage.setItem(localFeedbackKey, JSON.stringify(formInput));
}

form.addEventListener("submit", handlerSubmit);

function handlerSubmit(event) {
    event.preventDefault();
    console.log(formInput);
    formInput = {};
    localStorage.removeItem(localFeedbackKey);
    form.reset();
}

const parsedObject = JSON.parse(localStorage.getItem(localFeedbackKey));

if (!parsedObject) {
    form.elements.email.value = "";
    form.elements.message.value = "";
} else {
    formInput.email = parsedObject.email;
    formInput.message = parsedObject.message;
    form.elements.email.value = parsedObject.email ?? "";
    form.elements.message.value = parsedObject.message ?? "";
};
