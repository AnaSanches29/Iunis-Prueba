  /*LOADING*/
document.addEventListener("DOMContentLoaded", function () {
    setTimeout(function () {
        const loader = document.querySelector(".loader");

        loader.classList.add("loader-hidden");

        loader.addEventListener("transitioned", () => {
            documody.removeChild("loader");ent.b
        })
    }, 1000);
});