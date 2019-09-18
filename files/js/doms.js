//let flag = false;

    let songOne = document.getElementById('song1');
    let songTwo = document.getElementById('song2');
    let songThree = document.getElementById('song3');
    let turnOff = document.getElementById('turnOff-button');
    let playPauseButton = document.getElementById('playPauseButton');
    let timeInfo = document.getElementById("time");
    let musicDuration = document.getElementById("duration");
    let vynilPickup = document.getElementById("tonarm");
    let vynilRecord = document.getElementById("record")

    playPauseButton.addEventListener('click', playPause);
    songOne.addEventListener('click', chooseSong);
    songTwo.addEventListener('click', chooseSong);
    songThree.addEventListener('click', chooseSong);
    turnOff.addEventListener('click', turnOffVynil);

    songTwo.removeEventListener('click', chooseSong);


// function to select a song
    function chooseSong () {

    }

// try to compile with Start/stop
songOne.onclick = function(){
    var audio = document.getElementById("audio1");
    //flag = !flag;
    startPlay();

  // audio.play();

};

songTwo.onclick = function(){
    var audio = document.getElementById("audio2");
    audio.play();
    timeTracker(audio.currentTime);
    durationTracker(audio.duration);
   // audioDuration()
   // audioTimePassed();
};

songThree.onclick = function(){
    var audio = document.getElementById("audio3");
    audio.play();
};


function playPause () {
    audio.play();
  /*  try {
        flag = !flag;
        if (flag) {
            audio.play();
            audio.time();
        } else {
            audio.pause();
        }
    }
    finally {}*/
}

/* For exeptions
function audioDuration(){
    durationTracker(audio.duration)
}
*/

function durationTracker (duration){
    musicDuration.innerText = duration.toFixed(2)+'sec';
}

/* For exeptions
function audioTimePassed() {
    audio.ontimeupdate = () => {
        timeTracker(audio.currentTime);
    }
    //audio.ontimeupdate = () => {}

//timeInfo.innerText = audio.currentTime;
}*/

function timeTracker (currentTime) {
    timeInfo.innerText = currentTime.toFixed(2)+'sec';
}

// realization such as reset
function turnOffVynil() {
   // alert('Stop')
    window.location.reload();
}






