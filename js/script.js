let serial = 0;

// common function
function displayData(nameOfP, priceOfP, quantityOfP, resultOfP) {
    const container = document.getElementById('table-container');
    const tr = document.createElement('tr');
    tr.innerHTML = `
    <td>${serial}</td>
    <td>${nameOfP}</td>
    <td>${priceOfP}</td>
    <td>${quantityOfP}</td>
    <td>${resultOfP}</td>
    `;
    container.appendChild(tr)
}
function disabledButton(id){
    document.getElementById(id).setAttribute('disabled', true)
}
document.getElementById('first-card').addEventListener('click', function(){
    serial += 1;
    const productName = document.getElementById('first-name').innerText;
    const productPrice = document.getElementById('first-Price').innerText;
    const productQuantity = document.getElementById('first-quantity').innerText;
    const priceTotal = parseInt(productPrice)* parseInt(productQuantity) ;

    displayData(productName, productPrice, productQuantity, priceTotal);
    disabledButton('first-card')
});

document.getElementById('second-card').addEventListener('click', function(e){
    serial += 1
    const pName = e.target.parentNode.parentNode.children[0].innerText;
    const pPrice = e.target.parentNode.parentNode.children[2].children[0].innerText;

    const pQuantity= e.target.parentNode.parentNode.children[3].children[0].innerText;

    const sumTotal = parseInt(pPrice) + parseInt(pQuantity);
    displayData(pName, pPrice, pQuantity, sumTotal);
    disabledButton('second-card')
})

// third card
document.getElementById('third-card').addEventListener('click', function(){
    serial += 1;
    const productName = document.getElementById('third-title').innerText;
    const productPrice = document.getElementById('third-Price').innerText;
    const productQuantity = document.getElementById('third-quantity').innerText;
    const priceTotal = parseInt(productPrice) -  parseInt(productQuantity) ;

    displayData(productName, productPrice, productQuantity, priceTotal);
    disabledButton('third-card')
});

//fourth card
document.getElementById('fourth-card').addEventListener('click', function(){
    serial += 1;
    const productName = document.getElementById('fourth-title').innerText;
    const productPrice = document.getElementById('fourth-price').innerText;
    const productQuantity = document.getElementById('fourth-quantity').innerText;
    const priceTotal = parseInt(productPrice) *  parseInt(productQuantity) ;

    displayData(productName, productPrice, productQuantity, priceTotal)
    disabledButton('fourth-card');
});

// last card
document.getElementById('last-card').addEventListener('click', function(){
    serial += 1;
    const productName = document.getElementById('last-title').innerText;
    const productPrice = document.getElementById('first-input').value;
    const productQuantity = document.getElementById('second-input').value;
    if(productPrice =='' || 
    productPrice < 0 || 
    productQuantity == '' || 
    productQuantity <0 || 
    isNaN(productPrice) || 
    isNaN(productQuantity)){
        return alert('Please enter the valid number, please.')
    } 
    const total = parseInt(productPrice) / parseInt(productQuantity);
    displayData(productName, productPrice, productQuantity, total);
    disabledButton('last-card')

})




