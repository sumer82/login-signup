//validation
const joi = require('@hapi/joi');
//reg validation
const registerValidation = data => {
    const schema =joi.object({
        name : joi.string().required(),
        email: joi.string().min(6).required().email(),
        username: joi.string().min(9).required(),
        password: joi.string().min(6).required()
    });
    return schema.validate(data)
};

//login validation 

const loginvalidation = data => {
    const schema =joi.object({
        username: joi.string().min(9).required(),
        password: joi.string().min(6).required()
    });
    return schema.validate(data)
};


module.exports.registerValidation = registerValidation;
module.exports.loginvalidation = loginvalidation;