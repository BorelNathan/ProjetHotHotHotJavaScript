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

    var statut = document.getElementById("statut");
    let p = document.createElement('p');
    p.setAttribute('id','pstatut');
    p.innerText = "Statut : En attente !";
    statut.appendChild(p);

    var datas = document.getElementById("datas");
        let div1 = document.createElement('div');
        div1.setAttribute("id","interieur");
        div1.style.float = 'left';
        div1.style.width = '50%';
        div1.style.minHeight = '632px';
        div1.style.backgroundImage = 'url(https://www.domo-blog.fr/wp-content/uploads/2017/04/domotique-jardin-exterieur-990x521.jpg)';
        div1.style.backgroundSize = 'cover';
            let pint = document.createElement('p')
            pint.setAttribute('id','pinterieur');
            pint.innerText = "Valeur : ??? °C"
            pint.style.fontSize = '70px';
            pint.style.color = 'White';
            pint.style.textShadow = "black 0.1em 0.1em 0.2em";
        div1.appendChild(pint);
    datas.appendChild(div1);

        let div2 = document.createElement('div');
        div2.setAttribute("id","exterieur");
        div2.style.float = 'left';
        div2.style.width = '50%';
        div2.style.minHeight = '632px';
        div2.style.backgroundImage = 'url(https://3dms.fr/wp-content/uploads/2016/04/perspective-interieure-sobre-et-lumineuse.jpg)';
        div2.style.backgroundSize = 'cover';
            let pext = document.createElement('p')
            pext.setAttribute('id','pexterieur');
            pext.style.fontSize = '70px';
            pext.style.color = 'White';
            pext.style.textShadow = "black 0.1em 0.1em 0.2em";
            pext.innerText = "Valeur : ??? °C"
        div2.appendChild(pext);
    datas.appendChild(div2);

    var puseless = document.createElement('p');
    puseless.setAttribute("id","useless");
    datas.appendChild(puseless);

    C_Onglet = new C_Onglet;
    C_Onglet.temp.onclick = function() {C_Onglet.ongletChange(0)};
    C_Onglet.histo.onclick = function() {C_Onglet.ongletChange(1)};
    if (data != 0 && data != 1){
        var data = 0;
    };
    C_Onglet.ongletChange(0)


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


var socket = new WebSocket("wss://ws.hothothot.dog:9502");

socket.onerror = function() {
    let p = document.getElementById('pstatut');
    p.innerText = "Statut : Il y a un problème !";
    let pint = document.getElementById('pinterieur');
    pint.innerText = "Valeur : ??? °C"
    let pext = document.getElementById('pexterieur');
    pext.innerText = "Valeur : ??? °C"

}

localStorage.setItem("minInt",0);
localStorage.setItem("minExt",0);
localStorage.setItem("maxInt",0);
localStorage.setItem("maxExt",0);

socket.onopen = function(event) {

    console.log("Connexion établie");

    document.getElementById("statut").innerHTML = "Statut : Connexion établie";


    socket.send("coucou !");


    var pext = document.getElementById('pexterieur');
    var pint = document.getElementById('pinterieur');
    var p = document.getElementById("useless");
    var tableint = document.getElementById("int");
    var tableext = document.getElementById("ext");
    var tabMinMax = document.getElementById("minmax").getElementsByTagName("td");
    console.log(tabMinMax[2].innerHTML);
    socket.onmessage = function(event) {
        console.log(event.data);
        var datas = document.getElementById("datas");
        //localStorage.setItem('data',tab);

        

        //tab[compteur] = data;
        //compteur++;
        if (event.data === ""){
            document.getElementById("statut").innerHTML = "Statut : Aucune donnée transmise pour le moment !";
        }
        else{
            document.getElementById("statut").innerHTML = "Statut : Donnée transmise !";
            var data = JSON.parse(event.data);
            console.log(data.capteurs['0'].Valeur);
            var a = "Valeur : " + data.capteurs['0'].Valeur + "°C";
            console.log(a);
            var b = "Valeur : " + data.capteurs['1'].Valeur + "°C";
            pint.innerHTML = a;
            pext.innerText = b;

            
            let trInt = document.createElement('tr');
            let tdTypeInt = document.createElement('td');
            let tdValeurInt = document.createElement('td');
            let tdTimestampInt = document.createElement('td');

            tdTypeInt.innerHTML = data.capteurs['0'].type;
            tdValeurInt.innerHTML = data.capteurs['0'].Valeur + " °C";
            var dateInt = new Date(data.capteurs['0'].Timestamp * 1000)
            tdTimestampInt.innerHTML = dateInt;
            trInt.appendChild(tdTypeInt);
            trInt.appendChild(tdValeurInt);
            trInt.appendChild(tdTimestampInt);
            tableint.appendChild(trInt);

            let trExt = document.createElement('tr');
            let tdTypeExt = document.createElement('td');
            let tdValeurExt = document.createElement('td');
            let tdTimestampExt = document.createElement('td');

            tdTypeExt.innerHTML = data.capteurs['1'].type;
            tdValeurExt.innerHTML = data.capteurs['1'].Valeur + " °C";
            var dateExt = new Date(data.capteurs['1'].Timestamp * 1000)
            tdTimestampExt.innerHTML = dateExt;
            trExt.appendChild(tdTypeExt);
            trExt.appendChild(tdValeurExt);
            trExt.appendChild(tdTimestampExt);
            tableext.appendChild(trExt);
            console.log(localStorage.getItem("minInt"));
            console.log(localStorage.getItem("maxInt"));
            console.log(localStorage.getItem("minExt"));
            console.log(localStorage.getItem("maxExt"));
            
            if (localStorage.getItem("minInt") == 0 || localStorage.getItem("minExt") == 0 || localStorage.getItem("maxExt") == 0 || localStorage.getItem("maxInt") == 0){
                tabMinMax[4].innerHTML = data.capteurs['0'].Valeur + " °C";
                localStorage.setItem("maxInt",data.capteurs['0'].Valeur);
                tabMinMax[2].innerHTML = data.capteurs['0'].Valeur + " °C";
                localStorage.setItem("minInt",data.capteurs['0'].Valeur);
                tabMinMax[9].innerHTML = data.capteurs['1'].Valeur + " °C";
                localStorage.setItem("maxExt",data.capteurs['1'].Valeur);
                tabMinMax[7].innerHTML = data.capteurs['1'].Valeur + " °C";
                localStorage.setItem("minExt",data.capteurs['1'].Valeur);
                console.log(1)
            }
            if(data.capteurs['0'].Valeur > localStorage.getItem("maxInt")){
                tabMinMax[4].innerHTML = data.capteurs['0'].Valeur + " °C";
                localStorage.setItem("maxInt",data.capteurs['0'].Valeur);
                console.log(2)
            }
            else if(data.capteurs['0'].Valeur < localStorage.getItem("minInt")){
                tabMinMax[2].innerHTML = data.capteurs['0'].Valeur + " °C";
                localStorage.setItem("minInt",data.capteurs['0'].Valeur);
                console.log(3)
            }           
            if(data.capteurs['1'].Valeur > localStorage.getItem("maxExt")){
                tabMinMax[9].innerHTML = data.capteurs['1'].Valeur + " °C";
                localStorage.setItem("maxExt",data.capteurs['1'].Valeur);
                console.log(4)
            }
            else if(data.capteurs['1'].Valeur < localStorage.getItem("minExt")){
                tabMinMax[7].innerHTML = data.capteurs['1'].Valeur + " °C";
                localStorage.setItem("minExt",data.capteurs['1'].Valeur);
                console.log(5)
            }       
        }
    }

}

class C_Onglet{
    constructor(){
        this.histo = document.getElementById("histo")
        this.temp = document.getElementById("temp");
    }

    ongletChange(data){
        if (data == 0){
            document.getElementById("Historique").style.display = "none";
            document.getElementById("température").style.display = "";
        }
        else{
            document.getElementById("température").style.display = "none";
            document.getElementById("Historique").style.display = "";
        }
    }
}
