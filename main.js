var prediction1 = "";
var prediction2 = "";

Webcam.set({
width:350,
height:300,
image_format: "png",
png_quality:90
});

camera = document.getElementById("web1");

Webcam.attach("#web1")

 function take_snapshot()
{
  Webcam.snap(function(data_uri) {
  document.getElementById("web2").innerHTML = '<img id="image_captured" src="'+data_uri+'">';
  })
}
console.log("ml5 version",ml5.version);

classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/WJ9aA8giy/",modelLoaded);

function modelLoaded()
{
    console.log("model loaded");
}

function check()
{
  img = document.getElementById("image_captured");
  classifier.classify(img, gotresult)
}



function speak()
{
talk = window.speechSynthesis;
speak_data1 = "The first prediction is" + prediction1;
speak_data2 = "My second prediction is" + prediction2;
var speakdata = new SpeechSynthesisUtterance(speak_data1+speak_data2)
talk.speak(speakdata)
}

