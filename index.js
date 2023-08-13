// var hd=document.getElementById("hd")
// console.log(hd)
// var cont=document.querySelector("#cont")
// console.log(cont)
// var hd02=document.createElement("h2")
// console.log(hd02)
// cont.appendChild(hd02)
// hd02.textContent="Add a new item here !!!!"
// hd02.id="hd2"
//hd02.style.cssText="color: red; background: yellow; border: 1px solid #000"
// function addStyle()
// addStyle()


// var usrInpt=document.getElementById("user__input")

// function addInput(e){
    // e.preventDefult();
    // console.log(usrInpt.value)
    // var newEl=document.createElement("h3")
    // newEl.textContent=usrInpt.value
   // cont.appendChild(newEl)
// }
// setTimeout(ddInput, 10000)
//var addButton=document.getElementById("add")
// console.log(addButton)
// addButton.addEventListener("click", addInput)


// project plan
var msgList=[];
var confirmedMsgs=[];
let msggAll=[];
var item=[];


    



function collectUserInput(){
    var userInput=document.getElementById("user__input")
    console.log(userInput)
    var addBut=document.getElementById("add")
    console.log(addBut)
    addBut.addEventListener("click", function(e){
        e.preventDefault();
        var msg = userInput.value
        console.log(userInput.value);
       //  items.push(userInput.value)
       var msgCont=document.getElementById("app__cont");
    // msgCont.textContent= msg;
    var item=document.createElement('li');

    if((msg !== "") && (!msgList.includes(msg))){
        // 
        msgList.push(msg);
        console.log(msgList);
    
        var list=document.createElement('ul');
        // var msgStyled=`<span class="num">${(msgList.indexOf(msg) + 1)}</span><span>${date()}</span>
        // <h4 class="txt">${msg}</h4><span class="close">x</span><span class="ok">ok</span>`;
        // item.innerHTML= msgStyled;
        let msgg= new MassegeGenerator((msgList.indexOf(msg) + 1), `${getDate()}`, `${getTime()}`, msg )
        msggAll.push(msgg);
        item.innerHTML=msgg.generateElement();
        console.log(msggAll)
        // item.classList.add('item__ok');
        // list.classList.add("list")
        list.appendChild(item)
        msgCont.appendChild(list); 
        confirm()
        removeItem()
        // ok(msg);  
        // close();    
    }else if(msg === ""){
        var error=document.createElement('div');
        error.textContent= "Please Write Something To Be Added";
        error.classList.add("item__err");
        var errorCont=document.getElementById('app__cont');
        errorCont.appendChild(err);
    }
        
    
    

})
} 
//cell function
collectUserInput()
console.log(items)


// create fun to add item number

 
  function itemNumber(arr){
    
    for(item of arr ){
        console.log(arr.indexOf(item) + 1)
    }
    var res=arr.indexOf(item) + 1
    return res
   
}


// create a function to get date
function getDate(){
    var today= new Date();
    var month=today.getMonth()+ 1;
    var year=today.getFullYear();
    var date=today.getDate();
    
    var currentDate=`${date}/${month}/${year}`;
    return currentDate;
}

// time
//function getTime(){
  //  var date = new Date()
    //var hours=date.getHours()
    //var minutes=date.getMinutes()
    //var seconds=date.getSeconds()
    // console.log(`${hours}-${minutes}-${seconds}`)

    function getTime(){
        var date=new Date()
        var hrs=(date.getHours() < 10)? `0${date.getHours()}`:date.getHours()
        var mins=(date.getMinutes() < 10)? `0${date.getMinutes()}`:date.getMinutes()
        var secs=(date.getSeconds() < 10)? `0${date.getSeconds()}`:date.getSeconds()
        console.log(`${hrs}:${mins}:${secs}`)
    }
    getTime()

    // create a function to remove the item
    function removeItem(){
        var butt=document.createElement("button")
        butt.textContent="X"
        var err=document.getElementById("err")
        err.appendChild(butt)
        butt.addEventListener("click", function(){
           
        })

   }
   removeItem()

   // create functionn to confirm item
function confirm(){
    var confirmButt=document.createElement("button")
    confirmButt.textContent="pending.."
    confirmButt.className="cnfrm" 
    var err=document.getElementById("err")
    err.appendChild(confirmButt)
    confirmButt.addEventListener("click", function(){
        console.log("working!!")
        confirmButt.classList.toggle("confirmed")
        confirmButt.classList.contains("confirmed")?confirmButt.textContent="Confirmed":confirmButt.textContent="pending.."

    })

}

confirm()

// create ann alert
// function addReminder(){
   // alert("Hi, you have to visit the gym now!!")
 //}
 // addReminder()

 function MassegeGenerator(msgId, msgDate, msgTime, msgContent){
    this.id=msgId
    this.content=msgContent
    this.date=msgDate
    this.time=msgTime
    this.generate= ()=>{
        console.log(`${msgId}- ${msgDate}>> ${msgContent} ${msgTime}`);
    }
    this.generateElement= ()=>{
        return `<span class="num">${msgId}</span><span>${msgDate} ${msgTime}</span>
        <h4 class="txt">${msgContent}</h4><span class="close">x</span><span class="ok">ok</span>`;
    }
}

 











