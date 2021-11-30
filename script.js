console.log("Welcome to spotify");
//variables of Events
let songIndex=0;
let audioElement=new Audio('songs/1.mp3');
let audioElement1=new Audio('songs/2.mp3');
let masterPlay=document.getElementById('masterPlay');
let myProgressBar=document.getElementById('myProgressBar');
let forward=document.getElementById('forward');
let gif=document.getElementById('gif');
let songItems=Array.from(document.getElementsByClassName('songItem'));

let songs=[
    { songName:"warriyo -Mortals",filepath:"songs/1.mp3",coverpath:"covers/1.jpg"},
    {songName:"cielo -Huma -HUma",filepath:"songs/2.mp3",coverpath:"covers/2.jpg"},
    {songName:"Deaf Kev-Invincible",filepath:"songs/3.mp3",coverpath:"covers/3.jpg"},
   {songName:"Different Heaven",filepath:"songs/4.mp3",coverpath:"covers/4.jpg"},
    {songName:"janji -Heroes-Tonight-feat",filepath:"songs/5.mp3",coverpath:"covers/5.jpg"},
    {songName:"Salam-e-Ishq",filepath:"songs/6.mp3", coverpath:"covers/6.jpg"},
   { songName:"Salam-e-Ishq",filepath:"songs/7.mp3", coverpath:"covers/7.jpg"},
       { songName:"Salam-e-Ishq",filepath:"songs/8.mp3", coverpath:"covers/8.jpg"},
       { songName:"Salam-e-Ishq",filepath:"songs/9.mp3",coverpath:"covers/9.jpg"},
       { songName:"Salam-e-Ishq",filepath:"songs/10.mp3",coverpath:"covers/10.jpg"},
 //      { songName:"Salam-e-Ishq",filepath:"songs/8.mp3",coverpath:"covers/1.jpg"},
      
]
songItems.forEach((element,i)=>{ 
    console.log(element,i);
    element.getElementsByClassName("songName")[0].innerText=songs[i].songName;
    element.getElementsByTagName("img")[0].src=songs[i].coverpath;
})


 //audioElement.play();
//Handle play/pause click
masterPlay.addEventListener('click',()=>
{
    if(audioElement.paused || audioElement.currentTime<=0)
    {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
       gif.style.opacity=1;
    }
    else 
    {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity=0;
    }
})
forward.addEventListener('click',()=>
{
    if(songIndex<songs.length)
    {
         songIndex+=1;
         this.masterPlay();
    }
       

})
 //Listen to event 
 audioElement.addEventListener('timeupdate', ()=>
 {
      //console.log('timeupdate');
      //update SeekBar
      progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
     
      myProgressBar.value=progress;
 })
 myProgressBar.addEventListener('change',()=>
 {
     audioElement.currentTime=((myProgressBar.value)/100)*audioElement.duration;
 })