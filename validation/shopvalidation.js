const Validator = require('validator');
const isEmpty = require('is-empty');

const validateShopInput = (data) => {
    let errors = {};

    // let's convert all empty fields to empty strings
    // coz isEmpty package only works with strings
    data.store_name = !isEmpty(data.store_name) ? data.store_name : "";
    data.store_url = !isEmpty(data.store_url) ? data.store_url : "";
    data.currency = !isEmpty(data.currency) ? data.currency : "";

    
    if (Validator.isEmpty(data.store_name)) {
        errors.store_name = "The store name field is required";
    }
    
    if (Validator.isEmpty(data.store_url)) {
        errors.store_url = "The store url field is required";
    }

    if (Validator.isEmpty(data.currency)) {
        errors.currency = "The currency field is required";
    }

    return {
        errors,
        isValid: isEmpty(errors)
    }
}

module.exports = validateShopInput;