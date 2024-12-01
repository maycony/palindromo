function palindromo(text) {
    if (text === text.split('').reverse().join('')) {
        return `A palvra ${text} é um palindromo.`
    } else {
        return `A palavra ${text} não é um palindromo.`
    }
}


console.log(palindromo('ola'))