const container = document.getElementById("videoContainer");
const video = document.getElementById("myVideo");
const progress = document.getElementById("progress");

let hideTimer;

function showControls() {
    container.classList.add("show-controls");
    clearTimeout(hideTimer);
    hideTimer = setTimeout(() =>{
        container.classList.remove("show-controls");
    },3000);
}

container.addEventListener("mousemove",showControls);
container.addEventListener("touchstart",showControls);

video.addEventListener("timeupdate", () => {
    const value = (video.currentTime / video.duration) * 100;
    progress.value = value;
});

    function playVideo () {
        video.play();
        showControls();
    }

    function pauseVideo () {
        video.pause();
        showControls();
    }
    
    function minimizeVideo () {
        showControls();
        if(video.style.maxWidth == "400px"){
            video.style.maxWidth = "720px";
        } else{
            video.style.maxWidth = "400px";
        }
    }
