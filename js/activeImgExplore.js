let btnExplore = document.querySelector(".img-icon")

let imgExplore = document.querySelectorAll(".explore-content__place1")

console.log(imgExplore);

for(let i=0; i< imgExplore.length; i++) {
    let dem = imgExplore[i]
    btnExplore.addEventListener("mouseenter", function() {
        // Hành động khi con trỏ chuột di chuyển vào phần tử HTML
        dem.classList.remove("img-hidden")
    })

    btnExplore.addEventListener("mouseleave", function() {
        // Hành động khi con trỏ chuột rời khỏi phần tử HTML
        dem.classList.add("img-hidden")
      });
}


