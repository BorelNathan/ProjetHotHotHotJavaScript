function ActualliserPseudo(){
  var pseudo = document.getElementById("Pseudo").value;
  var bouton = document.getElementById("Connection");
  console.log(pseudo + " boutton cliquer");
  if(pseudo != ""){
    if(bouton.style.display === "block"){
      console.log("debug");
      document.getElementById("login").innerHTML = pseudo;
      document.getElementById("Connection").style.display = "none";
      document.getElementById("Deconnection").style.display = "block";
      document.getElementById("login").value = "";
    }
  }
  else{
    alert('Rentrer un pseudo valide');
  }
}

function Deconnection(){
  document.getElementById("login").innerHTML = "Mon Compte";
  document.getElementById("Connection").style.display = "block";
  document.getElementById("Deconnection").style.display = "none";
}


window.onload = function test(){
    
    document.getElementById("Connection").style.display = "block";
    document.getElementById("Deconnection").style.display = "none";
}

/*

window.onload = function DisplayDiv() {

        console.log("display div call");
        document.getElementById("Connection").style.display = "block";
        document.getElementById("Deconnection").style.display = "none";
        document.getElementById("divdetest1").style.display = "block";
        document.getElementById("divdetest2").style.display = "none";
        document.getElementById("divdetest3").style.display = "none";
        var buttons = document.getElementsByClassName("active");
        var buttonsCount = buttons.length;
        for (var i = 0; i <= buttonsCount-1; i++){
          buttons[i].onclick = function(e){
                    console.log(this.id);
        if(this.id == "btn1"){
          var x = document.getElementById("divdetest1");
          var y = document.getElementById("divdetest2");
          var z = document.getElementById("divdetest3");
          if(z.style.display === "block"){
            z.style.display = "none";
            if(y.style.display === "block"){
              y.style.display = "none";
              if(x.style.display === "none"){
                x.style.display = "block";
              }
            }
            else{
              if(y.style.display === "none"){
                if(x.style.display === "none"){
                  x.style.display = "block";
                }
              }
            }
          }
          else{
            if(y.style.display === "block"){
              y.style.display = "none";
              if(x.style.display === "none"){
                x.style.display = "block";
              }
              else{
                x.style.display = "block";
              }
            }
            else{
              x.style.display = "block";
            }
          }


          /*
          if(z.style.visibility === "visible"){
            z.style.visibility = "hidden";
            if(y.style.visibility === "visible"){
              y.style.visibility = "hidden";
              if (x.style.visibility === "hidden") {
                x.style.visibility = "visible";
              }
            }
            else {
                if(y.style.visibility === "hidden"){
                  if (x.style.visibility === "hidden") {
                    x.style.visibility = "visible";
                  }
                }
            }
          }
          else{
              if(y.style.visibility === "visible"){
                y.style.visibility = "hidden";
                if (x.style.visibility === "hidden") {
                  x.style.visibility = "visible";
                }
                else{
                  x.style.visibility = "visible";
                }
              }
            }

        }


        if(this.id == "btn2"){
          var x = document.getElementById("divdetest2");
          var y = document.getElementById("divdetest1");
          var z = document.getElementById("divdetest3");
          if(z.style.display === "block"){
            z.style.display = "none";
            if(y.style.display === "block"){
              y.style.display = "none";
              if(x.style.display === "none"){
                x.style.display = "block";
              }
            }
            else{
              if(y.style.display === "none"){
                if(x.style.display === "none"){
                  x.style.display = "block";
                }
              }
            }
          }
          else{
            if(y.style.display === "block"){
              y.style.display = "none";
              if(x.style.display === "none"){
                x.style.display = "block";
              }
              else{
                x.style.display = "block";
                console.log("call3");
              }
            }
            else{
              x.style.display = "block";
              console.log("call2");
            }
          }
        }
        if(this.id == "btn3"){
          var x = document.getElementById("divdetest3");
          var y = document.getElementById("divdetest2");
          var z = document.getElementById("divdetest1");
          if(z.style.display === "block"){
            z.style.display = "none";
            if(y.style.display === "block"){
              y.style.display = "none";
              if(x.style.display === "none"){
                x.style.display = "block";
              }
            }
            else{
              if(y.style.display === "none"){
                if(x.style.display === "none"){
                  x.style.display = "block";
                }
              }
            }
          }
          else{
            if(y.style.display === "block"){
              y.style.display = "none";
              if(x.style.display === "none"){
                x.style.display = "block";
              }
              else{
                x.style.display = "block";
              }
            }
            else{
              x.style.display = "block";
            }
          }
        }

      }
    };
}
*/
