// var list=document.getElementById("todolist")
// var OL=document.getElementById("list-container")

function add(){
    var list=document.getElementById("todolist")
    var OL=document.getElementById("list-container")
    var listitem=document.createElement("li")
    listitem.innerHTML=list.value +"<button class='addbtn' onclick='cancel(event)'>✖</button>"+"<button class='addbtn' onclick='complete(event)'>✔</button>"
    console.log(listitem.textContent)
    OL.append(listitem)
    
}
function cancel(event){
    event.target.parentElement.remove()
}
function complete(event) {
        var listitem = event.target.parentElement
        listitem.style.backgroundColor="#90EE90"//#00FF00 "#32de84""#00FF00"
        listitem.style.color="white"
        listitem.style.transition = '1.5s'
    }
function time(){
    var span=document.getElementById("date-time")
    var date=new Date()
    var hour=date.getHours()
    var minutes=date.getMinutes()
    var seconds=date.getSeconds()
    var session="AM"
    if(hour>12){
        hour=hour-12
        session="PM"
    }
    var day=date.getUTCDay()
    switch(day){
        case 0:
            day = "Sunday"
            break;
        case 1:
            day = "Monday"
            break;
        case 2:
             day = "Tuesday"
            break;
        case 3:
            day = "Wednesday"
            break;
        case 4:
            day = "Thursday"
            break;
        case 5:
            day = "Friday"
            break;
        case 6:
            day = "Saturday"
            break;
    }
    hour=hour<10?"0"+hour:hour
    minutes=minutes<10?"0"+minutes:minutes
    seconds=seconds<10?"0"+seconds:seconds
    span.textContent=day+":"+hour +":"+ minutes +":"+ seconds+":"+session
}

setInterval(time,1000)
