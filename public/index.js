//all the audio tags stored in variables
let clapSound = document.getElementById("clap-sound")
let hihatSound = document.getElementById("hihat-sound")
let kickSound = document.getElementById("kick-sound")
let openhatSound = document.getElementById("openhat-sound")
let boomSound = document.getElementById("boom-sound")
let rideSound = document.getElementById("ride-sound")
let snareSound = document.getElementById("snare-sound")
let tomSound = document.getElementById("tom-sound")
let tinkSound = document.getElementById("tink-sound")

// Play drum by keyboard press

window.addEventListener("keypress", () => {
    if(event.key == "a"){ clapper() }
    else if(event.key == "s"){ hihatter() }
    else if(event.key == "d"){ kicker() }
    else if(event.key == "f"){ openhatter() }
    else if(event.key == "g"){ boomer() }
    else if(event.key == "h"){ rider() }
    else if(event.key == "j"){ snarer() }
    else if(event.key == "k"){ tommer() }
    else if(event.key == "l"){ tinker() }
})



// Play music by mouse click (each button calls the function onclick)
//list of functions that play each sound file

const clapper = () =>{
    clapSound.play()
}

const hihatter = () =>{
    hihatSound.play()
}

const kicker = () =>{
    kickSound.play()
}

const openhatter = () =>{
    openhatSound.play()
}

const boomer = () =>{
    boomSound.play()
}

const rider = () =>{
    rideSound.play()
}

const snarer = () =>{
    snareSound.play()
}

const tommer = () =>{
    tomSound.play()
}

const tinker = () =>{
    tinkSound.play()
}
