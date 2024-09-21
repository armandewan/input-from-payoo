document.getElementById('amount-added')
.addEventListener('click',function(event){
    
event.preventDefault();

const addAmount = document.getElementById("add-amount").value;
const addAmountNumber= parseFloat(addAmount);

const inputPin = document.getElementById("input-pin").value;

// console.log(addAmount,inputPin);




if(inputPin === "1234"){
    const showAmount = document.getElementById("show-amount").innerText;
     const showAmountNumber = parseFloat(showAmount);

    const totalAmount = showAmountNumber + addAmountNumber;
    console.log(totalAmount);

    document.getElementById('show-amount').innerText = totalAmount;



}
else{
    alert('please try again');
    
}



// const showAmount = document.getElementById('show-amount');
// console.log('show this',showAmount);

})