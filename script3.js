const video = document.getElementById("myVideo");
const progress = document.getElementById("progress")

    function playVideo () {
        video.play();
    }
    function pauseVideo () {
        video.pause();
    }
    function minimizeVideo () {
        if(video.style.maxWidth == "400px"){
            video.style.maxWidth = "720px";
        } else{
            video.style.maxWidth = "400px";
        }
    }

    video.addEventListener("timeupdate", () => {
        const percent =
            (video.currentTime / video.duration) * 100;
        progress.value = percent;
    });

    progress.addEventListener("input", () => {
        const waktu =
            (progress.value / 100) * video.duration;
        video.currentTime = waktu;
    });