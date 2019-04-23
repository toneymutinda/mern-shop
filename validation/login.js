const Validator = require('validator');
const isEmpty = require('is-empty');

const validateLoginInput = (data) => {
    let errors = {};

    // let's convert all empty fields to empty strings
    // coz isEmpty package only works with strings
    data.email = !isEmpty(data.email) ? data.email : "";
    data.password = !isEmpty(data.password) ? data.password : "";

    // email validation rules
    if (Validator.isEmpty(data.email)) {
        errors.email = "The email field is required";
    } else if (!Validator.isEmail(data.email)) {
        errors.email = "The email provided is invalid";
    }

    // password validation rules
    if (Validator.isEmpty(data.password)) {
        errors.password = "The password field is required";
    }

    return {
        errors,
        isValid: isEmpty(errors)
    }
}

module.exports = validateLoginInput;