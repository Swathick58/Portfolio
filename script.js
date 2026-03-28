// Typing Effect
const text = "Aspiring Developer | AI Enthusiast";
let i = 0;

function typing() {
    if (i < text.length) {
        document.getElementById("typing").innerHTML += text.charAt(i);
        i++;
        setTimeout(typing, 80);
    }
}
typing();

// Dark Mode Toggle
function toggleMode() {
    document.body.classList.toggle("light");
}