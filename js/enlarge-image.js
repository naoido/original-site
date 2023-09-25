!function() {
    document.querySelectorAll("img").forEach(d => {
        d.addEventListener("click", () => {
            newDiv = document.createElement("div")
            newDiv.classList.add("enlarge-box")

            newImg = document.createElement("img")
            newImg.src = d.src
            newImg.classList.add("enlarge")
            newDiv.appendChild(newImg)

            itv = setInterval(() => {
                newDiv.style.opacity = 1
                clearInterval(itv)
            }, 1)
            document.body.prepend(newDiv)

            // remove
            newDiv.addEventListener("click", () => {
                newDiv.style.opacity = 0
                itv = setInterval(() => {
                    newDiv.remove()
                    clearInterval(itv)
                }, 400)
            })
        })
    })
}()