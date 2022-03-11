function ActualliserPseudo(){
  var pseudo = document.querySelector("#Pseudo").value;
  var bouton = document.querySelector("#Connection");
  console.log(pseudo + " boutton cliquer");
  if(pseudo != ""){
    if(bouton.style.display === "block"){

      var a = document.querySelector("#index");
      //var link = document.createTextNode("Page Principale");
      var href1 = 'index.html?'+ pseudo;
      a.setAttribute('href', href1);
      a.innerHTML = "Page Principale";
      var b = document.querySelector("#doc");
      var href2 = 'documentation.html?' + pseudo;
      b.setAttribute('href', href2);
      b.innerHTML = "Documentation";
      //a.appendChild(link);
      //a.title = "Page Principale";
      //a.href = "index.html?" + pseudo;
      //var div = document.getElementById("barredenav");
      //console.log(div);


      console.log("debug");
      document.querySelector("#login").innerHTML = pseudo;
      document.querySelector("#Connection").style.display = "none";
      document.querySelector("#Deconnection").style.display = "block";
      document.querySelector("#login").value = "";
    }
  }
  else{
    alert('Rentrer un pseudo valide');
  }
}

function Deconnection(){
  document.querySelector("#Pseudo").value = "";
  document.querySelector("#login").innerHTML = "Mon Compte";

  var a = document.querySelector("#index");
  var href1 = 'index.html';
  a.setAttribute('href', href1)
  a.innerHTML = "Page Principale";

  var b = document.querySelector("#doc");
  var href2 = 'documentation.html';
  b.setAttribute('href', href2);
  b.innerHTML = "Documentation";

  var c = document.querySelector("#login");
  var href3 = 'login.html';
  c.setAttribute('href', href3);
  c.innerHTML = "Mon Compte";

  document.querySelector("#Connection").style.display = "block";
  document.querySelector("#Deconnection").style.display = "none";
  document.querySelector("#login").value = "";
}


window.onload = function AffichageParDefaut(){
  var pseudo = location.search.substring(1);
  console.log(pseudo);
  if(document.URL.includes("index.html")){
    var pseudo = location.search.substring(1);
    if(pseudo != ""){
      console.log(pseudo);
      var a = document.querySelector("#login");
      var href1 = 'login.html?' + pseudo;
      a.setAttribute('href', href1);
      a.innerHTML = pseudo;
      var b = document.querySelector("#doc");
      var href2 = 'documentation.html?' + pseudo;
      b.setAttribute('href', href2);
      b.innerHTML = "Documentation";
      var c = document.querySelector("#self");
      var href3 = 'index.html?' + pseudo;
      c.setAttribute('href', href3);
      c.innerHTML = "Page Principale";

    }
    else{
      document.querySelector("#login").innerHTML = "Mon Compte";
    }
  }
  else if(document.URL.includes("login.html")){
    if(pseudo != ""){
      console.log("ouai sa rentre dans la boucle");

      document.querySelector("#Connection").style.display = "none";
      document.querySelector("#Deconnection").style.display = "block";

      document.querySelector("#login").innerHTML = pseudo;
      let a = document.querySelector("#index");
      var href1 = 'index.html?' + pseudo;
      a.setAttribute('href', href1);
      a.innerHTML = "Page Principale";
      let b = document.querySelector("#doc");
      var href2 = 'documentation.html?' + pseudo;
      b.setAttribute('href', href2);
      b.innerHTML = "Documentation";
      var c = document.querySelector("#login");
      var href3 = 'login.html?' + pseudo;
      c.setAttribute('href', href3);
      c.innerHTML = pseudo;
    }
    else{
      document.querySelector("#login").innerHTML = "Mon Compte";
      document.querySelector("#Connection").style.display = "block";
      document.querySelector("#Deconnection").style.display = "none";
    }

  }
  else if(document.URL.includes("documentation.html")){
    if(pseudo != ""){
      let a = document.querySelector("#index");
      var href1 = 'index.html?' + pseudo;
      a.setAttribute('href', href1);
      a.innerHTML = "Page Principale";
      let b = document.querySelector("#login");
      var href2 = 'login.html?' + pseudo;
      b.setAttribute('href', href2);
      b.innerHTML = pseudo;
      var c = document.querySelector("#self");
      var href3 = 'documentation.html?' + pseudo;
      c.setAttribute('href', href3);
      c.innerHTML = "Documentation";
    }
    else{
      document.querySelector("#login").innerHTML = "Mon Compte";
    }
  }
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
