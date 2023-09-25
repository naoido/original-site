!function(){
    document.querySelectorAll(".split").forEach(d => {
        inner = "";
        d.innerText.split("").forEach(s => {
            inner += `<span>${s}</span>`
        })
        d.innerHTML = inner
    })
    veiwInAnimation()
}()