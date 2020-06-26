function getNumber(num) {
    var result = document.getElementById("result")
    result.value += num;
}

function resultclear() {
    var result = document.getElementById("result")
    result.value = ""
}

function giveresult() {
    var result = document.getElementById("result")
    result.value = eval(result.value)
}

function square() {
    var result = document.getElementById("result")
    var square = document.getElementById('square')
    square = 2
    square = result * square
}