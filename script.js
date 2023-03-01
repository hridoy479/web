var audio = document.getElementById('audio');
var playPauseBTN = document.getElementById('playPauseBTN')
var count = 0;

function playPause(){
   if(count == 0){
      count = 1;
      audio.play();
      playPauseBTN.innerHTML ="Pause &#9611";
   }else{
      count = 0;
      audio.pause();
      playPauseBTN.innerHTML ="Playmusic &#9658";
   }
}
function stop(){
   playPause()
   audio.pause();
   audio.currentTime = 0;
   playPauseBTN.innerHTML ="Playmusic &#9658";

}




