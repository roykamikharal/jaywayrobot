import { REGEX_CONFIG } from "./regex.config"

export const VALIDATION_CONFIG = {
    required: "Field is required",
    minLength: {
        value: 1,
        message: "Field must have at least 1 character",
    },
    maxLength: {
        value: 300,
        message: "Field must have maximum 300 characters",
    },
    maxLengthShortText: {
        value: 140,
        message: "Field must have maximum 140 characters",
    },
    maxLengthTest: {
        value: 5000,
        message: "Field must have maximum 5000 characters",
    },
    minLengthPassword: {
        value: 8,
        message: "Password must have at least 8 characters",
    },
    maxLengthPassword: {
        value: 30,
        message: "Password must have maximum 30 characters",
    },
    email: {
        value: REGEX_CONFIG.email,
        message: "Field must be a valid email",
    },
    zip: {
        value: REGEX_CONFIG.zip,
        message: "Field must be a valid zip",
    },
    notJustSpaces: {
        value: REGEX_CONFIG.notJustSpaces,
        message: "Field must not be a only spaces",
    },
    withComma:{
        value: REGEX_CONFIG.regexWithComma,
        message: "Please Follow pattern (2,4,N)",
    },
    validInstruction:{
        value: REGEX_CONFIG.onlyAcceptInstructions,
        message: "Please only apply words RFL.",
    },

    tel: data => {
        data = data.replace(/[^\d+]/g, "")

        return (
            !data ||
            REGEX_CONFIG.tel.test(data) ||
            "Field must be a valid Phone number"
        )
    },
    username: {
        value: REGEX_CONFIG.username,
        message:
            "Username must be from 4 to 100 characters long and can contain only numbers, letters and these symbols: `-`, `_`, `.`",
    },

    minAmount: {
        value: 1,
        message: "Minimum amount is $1",
    },
    code: {
        value: REGEX_CONFIG.code,
        message: "Code must be 6 Digit",
    },
}
