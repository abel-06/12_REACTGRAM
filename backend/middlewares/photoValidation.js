const {body} = require("express-validator")

const photoInsertValidation = () => {
    return [
        body("title")
        .not()
        .equals("undefined")
        .withMessage("o título é obrigatório.")
        .isString()
        .withMessage("o título é obrigatório.")
        .isLength({min: 3})
        .withMessage("o título é obrigatório precisa ter no minimo 3 caracteres."),
        body("image").custom((value, {req}) => {
            if(!req.file) {
                throw new Error("A imagem é obrigatória.")
            }
            return true;
        }),
    ];
};

const photoUpdateValidation = () => {
    return [
        body("title")
        .optional()
        .isString()
        .withMessage("O título é obrigatório.")
        .isLength({min: 3})
        .withMessage("o título é obrigatório precisa ter no minimo 3 caracteres."),
    ];
};

const commentValidation = () => {
    return [
        body("comment").isString().withMessage("O comentario é obrigatório."),
    ];
};



module.exports = {
    photoInsertValidation,
    photoUpdateValidation,
    commentValidation,
};