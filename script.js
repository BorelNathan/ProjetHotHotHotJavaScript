window.onload = function visibilityDiv() {


        document.getElementById("divdetest1").style.visibility = "visible";
        document.getElementById("divdetest2").style.visibility = "hidden";
        document.getElementById("divdetest3").style.visibility = "hidden";

        var buttons = document.getElementsByTagName('button');
        var buttonsCount = buttons.length;
        for (var i = 0; i <= buttonsCount-1; i += 1) {
          buttons[i].onclick = function(e) {
        if(this.id == "btn1"){
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
        if(this.id == "btn3"){
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

      }
    };

}
