let speak = document.querySelector(".speck")
let stop = document.querySelector(".stop")
let data = document.querySelector(".container")
let instruction = document.querySelector(".instruction")

let speechRecognition = window.webkitSpeechRecognition || window.speechRecognition
let sr = new speechRecognition()
sr.continuous = true;
sr.interimResults = true

speak.addEventListener("click", (e) => {
    e.preventDefault();
    sr.start();
    instruction.innerHTML = "Voice Recognition is Now ON"
})

stop.addEventListener("click", (e) => {
    e.preventDefault();
    sr.stop();
    instruction.innerHTML = "Voice Recognition is OFF"
})

sr.onresult = res => {
    let text = Array.from(res.results)
        .map(r => r[0])
        .map(txt => txt.transcript)
        .join("")
    data.value = text
}

