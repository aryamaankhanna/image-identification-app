function preload() {
img = loadImage('https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdnb.artstation.com%2Fp%2Fassets%2Fimages%2Fimages%2F005%2F146%2F227%2Flarge%2Fpawel-somogyi-pikachu.jpg%3F1488825042&imgrefurl=https%3A%2F%2Fwww.artstation.com%2Fartwork%2FgKRJK&tbnid=ToDZ-I-ZiuKTAM&vet=12ahUKEwjkt_21uKvxAhWwnEsFHWdvBe0QMygdegUIARClAg..i&docid=4hGTACemS0sc_M&w=1920&h=1354&q=sketch&ved=2ahUKEwjkt_21uKvxAhWwnEsFHWdvBe0QMygdegUIARClAg');

}
function setup() {
canvas = createCanvas(300, 300);
canvas.center();
classifier = ml5.imageClassifier('Mobilenet',modelLoaded);
}

function draw() {
    image(img, 0, 0, 300, 300);
    classifier.classify(video, gotResult);
}

function gotResult(error, results) {
if (error) {
 console.error(error);
}else {
console.log(results);
document.getElementById("label").innerHTML = results[0].label;
document.getElementById("confidence").innerHTML = results[0].confidence;

}
}
