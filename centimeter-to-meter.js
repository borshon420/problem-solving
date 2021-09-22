function centimeterToMeter(centimeter) {
    var result = centimeter / 100;
    return result;
}

var totalMeter = centimeterToMeter(1000);
console.log(totalMeter);