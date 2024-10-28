function fst(first){
     if(first==1){
          turn=1
     }
     else if(first==2){
          turn=0
     }
     var st=document.getElementById("st")
     st.textContent=""
}    
var turn;
function xo(input) {
    var rc011 = document.getElementById(input);
    if(rc011.textContent=="" && xod()==0){
        if(turn==0){
        rc011.textContent="O"
        turn =1;
        }
        else{
          rc011.textContent="X"
          turn=0;
     }
    }
    var win=document.getElementById("win")
    if(xod()=="X"){
          win.textContent="X wins"
    }
    else if(xod()=="O"){
          win.textContent="O wins"
    }
    else if(xod()=="d"){
          win.textContent="Draw"
    }
}
function xod(){
     var a=document.getElementById("1")
     var b=document.getElementById("2")
     var c=document.getElementById("3")
     var d=document.getElementById("4")
     var e=document.getElementById("5")
     var f=document.getElementById("6")
     var g=document.getElementById("7") 
     var h=document.getElementById("8")
     var i=document.getElementById("9")
     if (a.textContent === b.textContent && a.textContent=== c.textContent) {
          return a.textContent
     }
     if (a.textContent === d.textContent && a.textContent=== g.textContent) {
          return (a.textContent)
     }
     else if (g.textContent === h.textContent && g.textContent=== i.textContent) {
          return (g.textContent)
     }
     else if (c.textContent === f.textContent && c.textContent=== i.textContent) {
          return (c.textContent)
     }
     else if (a.textContent === e.textContent && a.textContent=== i.textContent) {
          return (a.textContent)
     }
     else if (c.textContent === e.textContent && c.textContent=== g.textContent) {
          return (c.textContent)
     }
     else if (b.textContent === e.textContent && b.textContent=== h.textContent) {
          return (b.textContent)
     }
     else if (d.textContent === e.textContent && d.textContent=== f.textContent) {
          return (d.textContent)
     }
     else if(a.textContent != ""&&b.textContent != ""&&c.textContent != ""&&d.textContent != ""&&e.textContent != ""&&f.textContent != ""&&g.textContent != ""&&h.textContent != ""&&i.textContent != ""){
          return "d"
     }

     return 0
}
function clearr(){
     var clr1=document.getElementById("1")
     var clr2=document.getElementById("2")
     var clr3=document.getElementById("3")
     var clr4=document.getElementById("4")
     var clr5=document.getElementById("5")
     var clr6=document.getElementById("6")
     var clr7=document.getElementById("7")
     var clr8=document.getElementById("8")
     var clr9=document.getElementById("9")
     clr1.textContent=""
     clr2.textContent=""
     clr3.textContent=""
     clr4.textContent=""
     clr5.textContent=""
     clr6.textContent=""
     clr7.textContent=""
     clr8.textContent=""
     clr9.textContent=""
     turn=1
     var win=document.getElementById("win")
     win.textContent=""
     var stt=document.getElementById("st")
     stt.innerHTML='<p id="st">Choose 1st player:<button id="X" onclick="fst(1)">X</button><button id="O" onclick="fst(2)">O</button></p>'

 }