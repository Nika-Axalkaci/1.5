const hidel = document.querySelector("#hide")
const textel = document.querySelector("#text")

hidel.addEventListener("click", ()=>{
  textel.style.display = "none";
})

const divEl = document.createElement("div")
const h2El = document.createElement("h2")
const aEl = document.createElement("a")
const textEl = document.createTextNode("Go to Profile")
const textEl2 = document.createTextNode("Gandalf")

h2El.appendChild(textEl2)
aEl.appendChild(textEl)
aEl.setAttribute("href","#")
divEl.setAttribute("id","card")
divEl.append(h2El,aEl)
document.body.append(divEl)