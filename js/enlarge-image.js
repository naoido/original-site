!function() {
    document.querySelectorAll("img").forEach(d => {
        d.addEventListener("click", () => {
            newDiv = document.createElement("div")
            newDiv.classList.add("enlarge-box")

            newCloseButton = document.createElement("div")
            newCloseButton.classList.add("close-button")

            newImg = document.createElement("div")
            newImg.style.backgroundImage = `url(${d.src})`
            newImg.classList.add("enlarge")
            
            newDiv.appendChild(newCloseButton)
            newDiv.appendChild(newImg)

            setTimeout(() => {
                newDiv.style.opacity = 1
            }, 1)
            document.body.prepend(newDiv)

            // remove
            newDiv.addEventListener("click", () => {
                newDiv.style.opacity = 0
                setTimeout(() => {
                    newDiv.remove()
                }, 400)
            })
        })
    })
}()