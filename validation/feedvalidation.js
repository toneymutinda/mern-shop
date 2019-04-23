const Validator = require('validator');
const isEmpty = require('is-empty');

const validateFeedInput = (data) => {
    let errors = {};

    // let's convert all empty fields to empty strings
    // coz isEmpty package only works with strings
    data.channel = !isEmpty(data.channel) ? data.channel : "";

    if (Validator.isEmpty(data.channel)) {
        errors.channel = "The channel field is required";
    } else if (data.channel !== "google") {
        errors.channel = "The channel must be google";
    }

    return {
        errors,
        isValid: isEmpty(errors)
    }
}

module.exports = validateFeedInput;