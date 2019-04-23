const Validator = require('validator');
const isEmpty = require('is-empty');

const validateRegisterInput = (data) => {
    let errors = {};

    // let's convert all empty fields to empty strings
    // coz isEmpty package only works with strings
    data.name = !isEmpty(data.name) ? data.name : "";
    data.email = !isEmpty(data.email) ? data.email : "";
    data.password = !isEmpty(data.password) ? data.password : "";
    data.password_confirmation = !isEmpty(data.password_confirmation) ? data.password_confirmation : "";

    // name validation rules
    if (Validator.isEmpty(data.name)) {
        errors.name = "The name field is required";
    }

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
    if (Validator.isEmpty(data.password_confirmation)) {
        errors.password_confirmation = "The password confirmation field is required";
    }
    if (!Validator.isLength(data.password, { min: 6 })) {
        errors.password = "The password field must be atleast 6 characters";
    }
    if (!Validator.equals(data.password, data.password_confirmation)) {
        errors.password_confirmation = "The passwords must match";
    }

    return {
        errors,
        isValid: isEmpty(errors)
    }
}

module.exports = validateRegisterInput;