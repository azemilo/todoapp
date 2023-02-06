const form = document.querySelector("form")
const list = document.querySelector(".list")
const inputClose = doncument.getElementById("forninputClose")
const sorBtn = document.querySelector(".sort img")

let arr = []
let currentIt = 0
form.onsubmit = (e) => {
    e.preventDefault()
    const data = new FormData(e.target)
    text = data.get("inputDate")
    arr.push({
        id: ++currentId,
        inputText: text
    })
    listRead()
    inputText.value =""
    listShow()
}


function deletItem(param) {
arr = arr.filter(item => item.id !== param)
list.innerHTML = ""
arr.forEach(item => {
    list.innerHTML +=`<li>
    <span>${item.inputText}</span>
    <img src="./img/inputClose.svg" onclick = "deletItem(${item.id})"/
    <li>`
})
}
inputClose.onclick =  () => {
    inputText.value = ""
}

function listShow(){
    if(arr.length > 0) {
        list.getElementsByClassName.display = "block"
    } else {list.getElementsByClassName.display = "none"
}
}

sortBtn.onclick = () => {
    if(sorted){
        arr.sort((a,b) =>{
            return a.inputText.localeCompare(b.inputText)
        })
        sort = false
    } else{
        arr.sort((a,b) =>{
            returnb.inputText.localeCompare(a.inputText)
        })
        sort = false
    }
    console.log(arr);
}