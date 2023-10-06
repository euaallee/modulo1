function invertStr(str){
    var splitStr = str.split("");
    var reverseStr = splitStr.reverse();
    var joinStr = reverseStr.join("");

    return joinStr;
}

const inverter = invertStr("Inverter");
console.log(inverter);
