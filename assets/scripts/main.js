// main.js
var volumeSlider = document.getElementById("volume-slider");
var volumeNumber = document.getElementById("volume-number");
var volumeImg = document.getElementById("volume-image");
var hornSound = document.getElementById("horn-sound");
var radioAirHorn = document.getElementById("radio-air-horn");
var radioCarhorn = document.getElementById("radio-car-horn");
var radioParyHorn = document.getElementById("radio-party-horn");
var radioForm = document.getElementById("party-horn-form");
var hornButton = document.getElementById("honk-btn");

volumeSlider.addEventListener("input", sliderVolume);
volumeNumber.addEventListener("change",textVolume);
radioAirHorn.addEventListener("input", diffSounds);
radioCarhorn.addEventListener("input", diffSounds);
radioParyHorn.addEventListener("input", diffSounds);
radioForm.addEventListener("submit", playSound);
radioForm.addEventListener("submit", function(event){
    event.preventDefault()
  });


function textVolume()
{
    volumeSlider.value = volumeNumber.value;
    hornSound.volume = volumeNumber.value / 100;
    volumeChanged();

}

function sliderVolume()
{
    volumeNumber.value = volumeSlider.value;
    hornSound.volume = volumeNumber.value / 100;
    volumeChanged();
}

function volumeChanged()
{
    if(volumeSlider.value >= 67)
    {
        volumeImg.src = './assets/media/icons/volume-level-3.svg';
        hornButton.disabled = false;
    }
    else if(volumeSlider.value >= 34)
    {
        volumeImg.src = './assets/media/icons/volume-level-2.svg';
        hornButton.disabled = false;
    }
    else if(volumeSlider.value >= 1)
    {
        volumeImg.src = './assets/media/icons/volume-level-1.svg';
        hornButton.disabled = false;
    }
    else
    {
        volumeImg.src = './assets/media/icons/volume-level-0.svg';
        hornButton.disabled = true;
    }

}

function diffSounds()
{
    if(radioAirHorn.checked)
    {
        hornSound.src = './assets/media/audio/air-horn.mp3';
    }
    else if(radioCarhorn.checked)
    {
        hornSound.src = './assets/media/audio/car-horn.mp3';
    }
    else
    {
        hornSound.src = './assets/media/audio/party-horn.mp3';
    }
}
function playSound()
{
    console.log("play");
    hornSound.play();

}
// TODO
