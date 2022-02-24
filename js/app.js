function updateProductNumber(product, price, isIncreasing) {
    const productInput = document.getElementById(product + '-number');
    let productNumber = productInput.value;

    if (isIncreasing == true) {
        productNumber = parseInt(productNumber) + 1;

    }
    else if (productNumber > 0) {
        productNumber = parseInt(productNumber) - 1;

    }
    productInput.value = productNumber;
    const productTotal = document.getElementById(product + '-total');
    productTotal.innerText = productNumber * price;
    //calculatorTotal function Call
    calculatorTotal();
}
function getInputValue(product) {
    const phoneInput = document.getElementById(product + '-number');
    let phoneNumber = parseInt(phoneInput.value);
    return phoneNumber;
}
function calculatorTotal() {
    const phoneTotal = getInputValue('phone') * 1219;
    const caseTotal = getInputValue('case') * 59;
    const subTotal = phoneTotal + caseTotal;
    const tax = subTotal / 10;
    const total = subTotal + tax;
    document.getElementById('subtotal-taka').innerText = subTotal;
    document.getElementById('tax-amount').innerText = tax;
    document.getElementById('total').innerText = total;

    // console.log(subTotal)
}

document.getElementById('phone-plase').addEventListener('click', function () {

    updateProductNumber('phone', 1219, true);
});
document.getElementById('phone-mines').addEventListener('click', function () {

    updateProductNumber('phone', 1219, false);
});

document.getElementById('case-plase').addEventListener('click', function () {

    updateProductNumber('case', 59, true);
});
document.getElementById('case-mines').addEventListener('click', function () {

    updateProductNumber('case', 59, false);
});

