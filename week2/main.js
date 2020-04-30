function display(answer) {
    document.getElementById("answer").innerHTML = answer;
}

function add() {
    var num1 = parseInt(document.getElementById("num1").value);
    var num2 = 0;
    for (let i = 0; i <= num1; i++)
    {
        num2 += i;
    }
    //document.getElementById("answer").innerHTML = num2;
    display(num2);
}

const mul = () => {
    var num1 = parseInt(document.getElementById("num1").value);
    var num2 = 1;
    for (let i = 1; i <= num1; i++)
    {
        num2 *= i;
    }
    //document.getElementById("answer").innerHTML = num2;
    display(num2);
} 

const div = function() {
    var num1 = parseFloat(document.getElementById("num1").value);
    for (let i = num1; i >= 2; i--)
    {
        num1 /= i - 1;
    }
    //document.getElementById("answer").innerHTML = num1;
    display(num1);
}