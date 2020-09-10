$(document).ready(function() {
    var tomBeat = document.getElementById("tAudio");
  
    $("#tom").mousedown(function() {
      tomBeat.currentTime = 0;
      tomBeat.play();
    });
  
    
  
    var clapBeat = document.getElementById("cAudio");
  
    $("#clap").mousedown(function() {
      clapBeat.currentTime = 0;
      clapBeat.play();
    });
  
    
  
    var kickBeat = document.getElementById("kAudio");
  
    $("#kick").mousedown(function() {
      kickBeat.currentTime = 0;
      kickBeat.play();
    });
  
    
  
    var openhatBeat = document.getElementById("oAudio");
  
    $("#openhat").mousedown(function() {
      openhatBeat.currentTime = 0;
      openhatBeat.play();
    });
  
   
  
    var boomBeat = document.getElementById("bAudio");
  
    $("#boom").mousedown(function() {
      boomBeat.currentTime = 0;
      boomBeat.play();
    });
  
    
  
    var rideBeat = document.getElementById("rAudio");
  
    $("#ride").mousedown(function() {
      rideBeat.currentTime = 0;
      rideBeat.play();
    });
  
    
  
    var snareBeat = document.getElementById("sAudio");
  
    $("#snare").mousedown(function() {
      snareBeat.currentTime = 0;
      snareBeat.play();
    });
  });
  