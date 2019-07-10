
function plus() {
    let num1, num2, result;
    num1 = document.getElementById('num1').value;
    num2 = document.getElementById('num2').value;
    result = parseInt(num1)+parseInt(num2);
    document.getElementById('out').innerHTML = result;
}