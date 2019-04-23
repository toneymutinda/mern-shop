const Validator = require('validator');
const isEmpty = require('is-empty');

const validateProductInput = (data) => {
    let errors = {};

    // let's convert all empty fields to empty strings
    // coz isEmpty package only works with strings
    data.name = !isEmpty(data.name) ? data.name : "";
    data.title = !isEmpty(data.title) ? data.title : "";
    data.brand = !isEmpty(data.brand) ? data.brand : "";
    data.sales_price = !isEmpty(data.sales_price) ? data.sales_price : "";
    data.description = !isEmpty(data.description) ? data.description : "";
    data.quantity = !isEmpty(data.quantity) ? data.quantity : "";

    
    if (Validator.isEmpty(data.name)) {
        errors.name = "The name field is required";
    }
    
    if (Validator.isEmpty(data.title)) {
        errors.title = "The title field is required";
    }

    if (Validator.isEmpty(data.brand)) {
        errors.brand = "The brand field is required";
    }

    if (Validator.isEmpty(data.sales_price)) {
        errors.sales_price = "The sales price field is required";
    } else if (!Validator.isFloat(data.sales_price)) {
        errors.sales_price = "The sales price field must be a float";
    }

    if (Validator.isEmpty(data.description)) {
        errors.description = "The description field is required";
    }

    if (Validator.isEmpty(data.quantity)) {
        errors.quantity = "The quantity field is required";
    } else if (!Validator.isInt(data.quantity)) {
        errors.quantity = "The quantity field must be an integer";
    }

    return {
        errors,
        isValid: isEmpty(errors)
    }
}

module.exports = validateProductInput;