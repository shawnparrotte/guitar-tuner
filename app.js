var tuning = {
  active: ["E1", "A1", "D2", "G2", "B2", "E3"],
  estandard: ["E1", "A1", "D2", "G2", "B2", "E3"],
  ebstandard: ["Eb1", "Ab1", "Db2", "Gb2", "Bb2", "Eb3"],
  dstandard: ["D1", "G1", "C2", "F2", "A2", "D3"],
  dbstandard: ["Db1", "Gb1", "B1", "E2", "Ab2", "Db3"],
  cstandard: ["C1", "F1", "Bb1", "Eb2", "G2", "C3"],
  dropd: ["D1", "A1", "D2", "G2", "B2", "E3"],
  dropdb: ["Db1", "Ab1", "Db2", "Gb2", "Bb2", "Eb3"],
  dropc: ["C1", "G1", "C2", "F2", "A2", "D3"],
  doubledropd: ["D1", "A1", "D2", "G2", "B2", "D3"],
  dadgad: ["D1", "A1", "D2", "G2", "A2", "D3"],
  fifthsc: ["C1", "G1", "D2", "A2", "E3", "B3"],
  fifthsg: ["G2", "D1", "A1", "E2", "B2", "Gb3"],
  fourths: ["E1", "A1", "D2", "G2", "C3", "F3"],
  majorthirds: ["E1", "Ab1", "C2", "E2", "Ab2", "C3"],
  minorthirds: ["C2", "Eb2", "Gb2", "A2", "C3", "Eb3"],
  augfourths: ["C1", "Gb1", "C2", "Gb2", "C3", "Gb3"],
  opena: ["E1", "A1", "Db2", "E2", "A2", "E3"],
  openc: ["C2", "E2", "G2", "C3", "E3", "G3"],
  opend: ["D1", "A1", "D2", "Gb2", "A2", "D3"],
  opene: ["E1", "B1", "E2", "Ab2", "B2", "E3"],
  openf: ["C1", "F1", "C2", "F2", "A2", "C3"],
  openg: ["D1", "G1", "D2", "G2", "B2", "D3"]
}

$(".string-area").mouseenter(function(){
  $(this).prev().css("border", "2px solid red")
}).mouseleave(function(){
  $(this).prev().css("border", "2px solid lightgray")
})

$(".string-area").on("click tap", function(){
  $(".sound").remove();
  if( $(this).attr('id')==="string-area-1" ){
    createjs.Sound.play("E1");
  }
  if( $(this).attr('id')==="string-area-2" ){
    createjs.Sound.play("A1");
    //$(this).children().html("<embed class='sound' src='./guitar-notes/"+ tuning.active[1] +".mp3' hidden='true' autostart='true' loop='false' >");
  }
  if( $(this).attr('id')==="string-area-3" ){
    createjs.Sound.play("D1");
    //$(this).children().html("<embed class='sound' src='./guitar-notes/"+ tuning.active[2] +".mp3' hidden='true' autostart='true' loop='false' >");
  }
  if( $(this).attr('id')==="string-area-4" ){
    createjs.Sound.play("G1");
    //$(this).children().html("<embed class='sound' src='./guitar-notes/"+ tuning.active[3] +".mp3' hidden='true' autostart='true' loop='false' >");
  }
  if( $(this).attr('id')==="string-area-5" ){
    createjs.Sound.play("B1");
    //$(this).children().html("<embed class='sound' src='./guitar-notes/"+ tuning.active[4] +".mp3' hidden='true' autostart='true' loop='false' >");
  }
  if( $(this).attr('id')==="string-area-6" ){
    createjs.Sound.play("E2");
    //$(this).children().html("<embed class='sound' src='./guitar-notes/"+ tuning.active[5] +".mp3' hidden='true' autostart='true' loop='false' >");
  }
})


$("#tunings").change(function(){
  var now = $(this).val();
  tuning.active = tuning[now];
  
  createjs.Sound.registerSound("guitar-notes/"+tuning.active[0]+".mp3", "E1");
  createjs.Sound.registerSound("guitar-notes/"+tuning.active[1]+".mp3", "A1");
  createjs.Sound.registerSound("guitar-notes/"+tuning.active[2]+".mp3", "D1");
  createjs.Sound.registerSound("guitar-notes/"+tuning.active[3]+".mp3", "G1");
  createjs.Sound.registerSound("guitar-notes/"+tuning.active[4]+".mp3", "B1");
  createjs.Sound.registerSound("guitar-notes/"+tuning.active[5]+".mp3", "E2");
});

$(window).resize(function(){
  setFretboard();
})


function setFretboard(){

  var f_left = ($(window).width()/2) - 85,
      f_m = $(window).width()/2 - 10,
      s_1 = f_left + 8,
      s_2 = f_left + 38,
      s_3 = f_left + 68,
      s_4 = f_left + 98,
      s_5 = f_left + 128,
      s_6 = f_left + 158,
      t = $(window).width()/2 - 125;

  $("#fretboard").css("left", f_left);
  $("#string-1").css("left", s_1);
  $("#string-2").css("left", s_2);
  $("#string-3").css("left", s_3);
  $("#string-4").css("left", s_4);
  $("#string-5").css("left", s_5);
  $("#string-6").css("left", s_6);
  $(".fret").css("left", f_left);
  $(".fret-marker").css("left", f_m);

  $("#string-area-1").css("left", s_1-14);
  $("#string-area-2").css("left", s_2-14);
  $("#string-area-3").css("left", s_3-14);
  $("#string-area-4").css("left", s_4-14);
  $("#string-area-5").css("left", s_5-14);
  $("#string-area-6").css("left", s_6-14);

  $("#tunings").css("left", t);

  return
}

function initAudioPlayer(){
  audio = new Audio();
  audio.src = "guitar-notes/E1.mp3";
  audio.play();
}

$(document).ready(function(){

  setFretboard();

  setTimeout(function(){
    $("#fadeboard").fadeOut("slow");
  }, 200)

});
