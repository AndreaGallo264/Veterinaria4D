const onKeyPressValidatePassword = e => {
    const regex = /[a-zA-Z0-9!?-_]/;
    if(!e.key.match(regex)){
        e.preventDefault();
    }
}

const onKeyPressLetters = e => {
    const regex = /[a-zA-Z0-9 ]/;
    if(!e.key.match(regex)){
        e.preventDefault();
    }
}

const onKeyPressLettersAndNumbers = e => {
    const regex = /[a-zA-Z0-9 ]/;
    if(!e.key.match(regex)){
        e.preventDefault();
    }
}

const onKeyPressValidateEmail = e => {
    const regex = /[a-zA-Z0-9!@.?-_]/;
    if(!e.key.match(regex)){
        e.preventDefault();
    }
}

module.exports = {
    onKeyPressValidatePassword,
    onKeyPressValidateEmail,
    onKeyPressLetters,
    onKeyPressLettersAndNumbers
}