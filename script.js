var tabs = document.getElementsByClassName("tab")
var buttons = document.getElementsByTagName("button")
function changeTab(event, name){
    for(var tab of tabs){
        tab.classList.remove("block")
        tab.classList.add("invisible")
    }
    document.getElementById(name).classList.remove("invisible")

    for(var button of buttons){
        button.classList.remove("selected")
    }
    event.currentTarget.classList.add("selected")
}
