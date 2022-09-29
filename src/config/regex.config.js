export const REGEX_CONFIG = {
    email: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    zip: /^\d{5}$|^\d{5}-\d{4}$/,
    code: /^\d{6}$/,
    tel: /^\+[\d]{11,12}$/,
    username: /^[-a-zA-Z0-9_.]{4,100}$/,
    notJustSpaces: /.*[^\s].*/,
    regexWithComma:/^[0-9](,[0-9])(,[NE]){0,2}$/,
    onlyAcceptInstructions:/^([RFL]){0,100}$/
}
