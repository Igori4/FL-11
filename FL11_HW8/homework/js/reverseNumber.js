function reverseNumber(num) {
    const reversed = num.toString().split('').reverse().join('');
    return Math.sign(num) * parseInt(reversed);
}

reverseNumber(-129)
