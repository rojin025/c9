function average(x){
    var sum = 0, avg = 0;
    for(var i = 0; i < x.length; i++){
        sum += x[i];
    }
    console.log(sum);
    avg = Math.round(sum / x.length) ;
    return avg;
}

console.log("output 1")
var scores = [1,2,3,4,5,6,7,8,9];
console.log(average(scores));

console.log("output 2")
var scores = [10,2,30,4,5,60,7,8,9];
console.log(average(scores));