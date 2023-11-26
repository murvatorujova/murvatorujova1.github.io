let p=document.querySelectorAll("p");
const intro=document.querySelectorAll("introduction");


p.forEach((item, index) => {
    item.style.animation = `moveup 2s ease-in-out forwards ${index / 7}s`;

    item.addEventListener("animationend", () => {
        intro.forEach((item, index) => {
            item.style.animation = `moveup 1s ease-in-out forwards ${index / 10}s`;
        
        
    })
})
})

