Webcam.set({
    width:355,
    height:305,
    image_format: 'png',
    png_quality:90
});

camera = document.getElementById("camera");

Webcam.attach( '#camera' );

function take_snapshot()
{
    
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="captured_image"src="'+data_uri+'"/>';
    });
}

console.log('ml5 version:', ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/hxbd074E3/model.json',modelLoaded);

function modelLoaded() {
    console.log('Model Loaded!');
}