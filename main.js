Webcam.attach("#A")
Webcam.set({width:230,height:230,image_format:"png",png_quality:90})
function onC(){
    Webcam.snap(function(data){
        document.getElementById("B").innerHTML='<img id="selfie" src=" '+data+' "/>'
    })
}
var Model=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/G9SROHSqU/model.json',cargar_modelo);
function cargar_modelo(){
console.log("el modelo cargado")
}
function anC(){
    Foto=document.getElementById("selfie")
    Model.classify(Foto, gotResult); 
}
function gotResult(error,results){
if(error){
    console.log(error)
}
else{
    console.log(results)
    document.getElementById("BB").innerHTML=results[0].label;
    document.getElementById("CC").innerHTML=results[0].confidence;

}
}