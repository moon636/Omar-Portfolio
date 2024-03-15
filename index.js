const leftArrow = document.getElementById("left-arr")
const rightArrow = document.getElementById("right-arr")

const video1 = document.getElementById("video-1")
const video2 = document.getElementById("video-2")
const video3 = document.getElementById("video-3")
const video4 = document.getElementById("video-4")
const video5 = document.getElementById("video-5")


leftArrow.onclick = function() {


    video2.style.left = "-30%"
    video3.style.left = "0"
    video4.style.left = "32.5%"
    video5.style.right = "0"

    video3.style.width = "31%"
    video3.style.height = "80%"
    video3.style.top = "10%"

    video4.style.width = "35%"
    video4.style.height = "100%"
    video4.style.top = "0%"   

    video3.style.zIndex = 75
};
