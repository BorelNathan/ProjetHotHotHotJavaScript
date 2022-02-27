window.onload = function visibilityDiv() {


        document.getElementById("divdetest1").style.visibility = "visible";
        document.getElementById("divdetest2").style.visibility = "hidden";
        document.getElementById("divdetest3").style.visibility = "hidden";

        var buttons = document.getElementsByTagName('button');
        var buttonsCount = buttons.length;
        //console.log(buttons.length);
        for (var i = 0; i <= buttonsCount-1; i += 1) {
          //console.log(i);
          buttons[i].onclick = function(e) {
        /*alert(this.id);*/
        console.log(this.id);
        var id = this.id;
        //console.log(id);
        if(id == "btn1"){
          var x = document.getElementById("divdetest1");
          var y = document.getElementById("divdetest2");
          var z = document.getElementById("divdetest3");
          if(z.style.visibility === "visible"){
            z.style.visibility = "hidden";
            if(y.style.visibility === "visible"){
              y.style.visibility = "hidden";
              if (x.style.visibility === "hidden") {
                x.style.visibility = "visible";
              }
              else {
                x.style.visibility = "none";
              }
            }
            else {
                y.style.visibility = "hidden";
                if(y.style.visibility === "hidden"){
                  if (x.style.visibility === "visible") {
                    x.style.visibility = "hidden";
                  }
                  else {
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
            else {
              x.style.visibility = "none";
            }
          }
          else {
              y.style.visibility = "hidden";
              if(y.style.visibility === "hidden"){
                if (x.style.visibility === "visible") {
                  x.style.visibility = "hidden";
                }
                else {
                  x.style.visibility = "visible";
                }
              }
            }
          }
        }
        if(id == "btn2"){
          var x = document.getElementById("divdetest2");
          var y = document.getElementById("divdetest1");
          var z = document.getElementById("divdetest3");
          if(z.style.visibility === "visible"){
            z.style.visibility = "hidden";
            if(y.style.visibility === "visible"){
              y.style.visibility = "hidden";
              if (x.style.visibility === "hidden") {
                x.style.visibility = "visible";
              }
              else {
                x.style.visibility = "none";
              }
            }
            else {
                y.style.visibility = "hidden";
                if(y.style.visibility === "hidden"){
                  if (x.style.visibility === "visible") {
                    x.style.visibility = "hidden";
                  }
                  else {
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
            else {
              x.style.visibility = "none";
            }
          }
          else {
              y.style.visibility = "hidden";
              if(y.style.visibility === "hidden"){
                if (x.style.visibility === "visible") {
                  x.style.visibility = "hidden";
                }
                else {
                  x.style.visibility = "visible";
                }
              }
            }
          }
        }
        if(id == "btn3"){
          var x = document.getElementById("divdetest3");
          var y = document.getElementById("divdetest2");
          var z = document.getElementById("divdetest1");
          if(z.style.visibility === "visible"){
            z.style.visibility = "hidden";
            if(y.style.visibility === "visible"){
              y.style.visibility = "hidden";
              if (x.style.visibility === "hidden") {
                x.style.visibility = "visible";
              }
              else {
                x.style.visibility = "none";
              }
            }
            else {
                y.style.visibility = "hidden";
                if(y.style.visibility === "hidden"){
                  if (x.style.visibility === "visible") {
                    x.style.visibility = "hidden";
                  }
                  else {
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
            else {
              x.style.visibility = "none";
            }
          }
          else {
              y.style.visibility = "hidden";
              if(y.style.visibility === "hidden"){
                if (x.style.visibility === "visible") {
                  x.style.visibility = "hidden";
                }
                else {
                  x.style.visibility = "visible";
                }
              }
            }
          }
          }
        }
    };
  
}
