const onKeyPressValidatePassword = e => {
    const regex = /[a-zA-Z0-9!?-_]/;
    if(!e.key.match(regex)){
        e.preventDefault();
    }
}

const onKeyPressLetters = e => {
    const regex = /[a-zA-Z áéíóúÁÉÍÓÚÑñ]/;
    if(!e.key.match(regex)){
        e.preventDefault();
    }
}

const onKeyPressLettersAndNumbers = e => {
    const regex = /[a-zA-Z áéíóúÁÉÍÓÚÑñ0-9]/;
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

const onKeyPressValidatePhone = e => {
    const regex = /[0-9-]/;
    if(!e.key.match(regex)){
        e.preventDefault();
    }
}
const onKeyPressValidateNumbers = e => {
    const regex = /[0-9]/;
    if(!e.key.match(regex)){
        e.preventDefault();
    }
}
const onKeyPressValidateDate = e => {
    const regex = /[0-9/]/;

    if(!e.key.match(regex)){
        e.preventDefault();
    } else {
        if (e.target.value.match(/^\d{2}$/) !== null) {
            e.target.value = e.target.value + '/';
        }
    }
}

module.exports = {
    onKeyPressValidatePassword,
    onKeyPressValidateEmail,
    onKeyPressLetters,
    onKeyPressLettersAndNumbers,
    onKeyPressValidatePhone,
    onKeyPressValidateNumbers,
    onKeyPressValidateDate
}