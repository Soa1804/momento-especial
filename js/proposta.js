const fugitiveBtn = document.getElementById("fugitive-btn");
const simBtn = document.getElementById("sim-btn");
const questionState = document.getElementById("question-state");
const successState = document.getElementById("success-state");
const proposalContainer = document.getElementById("proposal-container");

function moveButton() {

    if (window.innerWidth <= 480) return;

    const x =
        Math.random() *
        (window.innerWidth - fugitiveBtn.offsetWidth - 40) -
        (window.innerWidth / 2) +
        fugitiveBtn.offsetWidth;

    const y =
        Math.random() *
        (window.innerHeight - fugitiveBtn.offsetHeight - 40) -
        (window.innerHeight / 2) +
        fugitiveBtn.offsetHeight;

    fugitiveBtn.style.transform =
        `translate(${Math.min(Math.max(x, -200), 200)}px,
                   ${Math.min(Math.max(y, -200), 200)}px)`;
}

fugitiveBtn.addEventListener("mouseover", moveButton);
fugitiveBtn.addEventListener("click", moveButton);

simBtn.addEventListener("click", () => {

    questionState.classList.add("hidden-state");

    setTimeout(() => {

        questionState.style.display = "none";

        proposalContainer.classList.remove("glass-panel");

        proposalContainer.style.background = "transparent";
        proposalContainer.style.backdropFilter = "none";
        proposalContainer.style.border = "none";
        proposalContainer.style.boxShadow = "none";

        successState.classList.add("active");

        for (let i = 0; i < 20; i++) {
            createHeart();
        }

    }, 400);

});

function createHeart() {

    const heart = document.createElement("span");

    heart.className =
        "material-symbols-outlined absolute text-primary opacity-60 pointer-events-none z-20";

    heart.innerHTML = "favorite";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.top = "100vh";
    heart.style.fontSize = (Math.random() * 20 + 10) + "px";
    heart.style.transition = `all ${Math.random() * 2 + 3}s linear`;

    document.body.appendChild(heart);

    setTimeout(() => {

        heart.style.top = "-10vh";
        heart.style.left =
            parseFloat(heart.style.left) +
            (Math.random() * 20 - 10) + "vw";

        heart.style.opacity = "0";

    }, 100);

    setTimeout(() => heart.remove(), 5000);

}