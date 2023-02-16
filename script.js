const express = require("express");
// const https = require("https");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({extended : true}));
app.use(express.static("public"));

app.get("/",function(req,res){
    res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req,res){

    let input_text = req.body.input;
    // const url= "https://script.google.com/macros/s/AKfycbwQ8n-kgYi3fSLHzCW50TMTuYzcf9ps3sCV37FZkGmqsFI6_GbO8a4n-YaXwtzjqyN6/exec";
    
    if(input_text.includes("electric") || input_text.includes("shock") || input_text.includes("current") || input_text.includes("high voltage") || input_text.includes("Electric burn") || input_text.includes("Arc burn") || input_text.includes("Lightining burn") || input_text.includes("power")){
        res.sendFile(__dirname + "/Elec_Shock.html");
        // console.log("YAah! right");
    }
    else if(input_text.includes("chest pain") || input_text.includes("dizziness") || input_text.includes("sweating") || input_text.includes("nausea") || input_text.includes("shortness of breath") || input_text.includes("Jaw pain") || input_text.includes("back pain") || input_text.includes("cardiac arrest") || input_text.includes("heart pain") || input_text.includes("heart")){
        res.sendFile(__dirname + "/heart_attack.html");
        // console.log("YAah! right");
    }
    else if(input_text.includes("confusion") || input_text.includes("inability to talk") || input_text.includes("noisy breathing") || input_text.includes("loss of consciouness") || input_text.includes("choking") || input_text.includes("food stuck")){
        res.sendFile(__dirname + "/chocking.html");
        // console.log("YAah! right");
    }
    else if(input_text.includes("trouble speaking") || input_text.includes("weakness ") || input_text.includes("paralysis") || input_text.includes("problem seeing") || input_text.includes("severe headache") || input_text.includes("problem walking") || input_text.includes("stroke")){
        res.sendFile(__dirname + "/stroke.html");
        // console.log("YAah! right");
    }
    else if(input_text.includes("shaking") || input_text.includes("dry mouth") || input_text.includes("breath lessness") || input_text.includes("feeling confusion") || input_text.includes("panic attack")){
        res.sendFile(__dirname + "/panic_attack.html");
        // console.log("YAah! right");
    }
    else if(input_text.includes("bone") || input_text.includes("broken")  || input_text.includes("swealling") || input_text.includes("break") || input_text.includes("fracture") || input_text.includes("bluish")){
        res.sendFile(__dirname + "/fracture.html");
        // console.log("YAah! right");
    }
    else if(input_text.includes("water") || input_text.includes("sea") || input_text.includes("drowning") || input_text.includes("river") || input_text.includes("pond") || input_text.includes("swimming") || input_text.includes("pool") || input_text.includes("sink") || input_text.includes("sinking") || input_text.includes("sank") || input_text.includes("drown") || input_text.includes("drowned")){
        res.sendFile(__dirname + "/near_drowning.html");
        // console.log("YAah! right");
    }
    else if(input_text.includes("cut") || input_text.includes("bleeding") || input_text.includes("knife") || input_text.includes("blood flowing") || input_text.includes("blade") ){
        res.sendFile(__dirname + "/cut.html");
        // console.log("YAah! right");
    }
    else if(input_text.includes("stomach ache") || input_text.includes("poision") || input_text.includes("poisoning") || input_text.includes("blue lip") || input_text.includes("vomiting") || input_text.includes("diarrhea") || input_text.includes("rashes in skin") ){
        res.sendFile(__dirname + "/poisoning.html");
        // console.log("YAah! right");
    }
    
    else{
        console.log("Sorry! Can't Find Your Problem Please use the First-aid Brochure");
    }

    // res.send("<a href = 'http://localhost:3000/'><button> Restart </button></a>");
});


app.listen(3000, function(){
    console.log("The server is running at port 3000");
});