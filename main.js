//  get html element
let next_btn = document.querySelector(".next-track");
let playpause_btn = document.querySelector(".playpause-track");

// songs list 
var songs = [
  "Aaj Phir Hate Story 2 128 Kbps.mp3",
  "Ae Dil Hai Mushkil Title Track Pritam 128 Kbps.mp3",
  "Nashe Si Chadh Gayi.mp3",
  "Sunny Sunny Yaariyan 320 Kbps.mp3"
];

// 

var isPlaying = false;
var myAudio;
var index=0;

function main (track_index){
    myAudio = new Audio(songs[track_index])
    myAudio.load();
    myAudio.play()

}
// main(3);


// play and pause function 
function playpauseTrack() {
    //   isPlaying ? myAudio.pause() : myAudio.play();
    if (isPlaying){
        myAudio.pause();
        playpause_btn.innerHTML = '<i class="fa fa-play-circle fa-5x"></i>';
        
    }else{
        myAudio.play();
        playpause_btn.innerHTML = '<i class="fa fa-pause-circle fa-5x"></i>';
    }
};

myAudio.onplaying = function() {
  isPlaying = true;
};
myAudio.onpause = function() {
  isPlaying = false;
};


function nextTrack(){
    index+=1;
    main(index);
}



