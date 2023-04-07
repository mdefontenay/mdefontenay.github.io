function averageThreeNumbers(a, b, c) {
    let sum = a+b+c;
    sum = Math.round(sum / 3);
    return sum;
}

function createSentence(num, noun) {
    return "On average, a Berkeley student has " + num + " " + noun + "s.";
}

function getRandomNum(max) {
    let a = Math.random()*max;
    return a;
}

let x = Math.round(getRandomNum(20))
let y = Math.round(getRandomNum(10))
let z = Math.round(getRandomNum(13))

let avg = averageThreeNumbers(x, y, z)

let sentence = createSentence(avg, "rabbit")

console.log(sentence);