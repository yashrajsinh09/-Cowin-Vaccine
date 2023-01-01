const isValidName = function (y) {
    return (/^[a-zA-Z]+(([a-zA-Z ])?[a-zA-Z]*)*$/).test(y)
}

// ==> Validation for phone
const isValidphone = function (phone) {
    return (/^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[6789]\d{9}$/).test(phone);
}
   
// ==> Validation for age
var isValidAge = function (age) {
    return (/^\S[0-9]{0,3}$/).test(age)
}

// ==> Validation for Pincode
const isValidpin = function (pincode) {
    return (/^[1-9][0-9]{5}$/).test(pincode)
}

// ==> Validation for AdharNumber
const isValidAdhar = function (adhar) {
    return (/^[2-9]{1}[0-9]{3}\\s[0-9]{4}\\s[0-9]{4}$/).test(adhar)
}

// ==> Validation for password
const isValidpassword = function (pass) {
    return (/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&])[a-zA-Z0-9@#$%&]{8,15}$/).test(pass);
}


module.exports = { isValidName, isValidphone, isValidAge, isValidpin, isValidAdhar, isValidpassword }