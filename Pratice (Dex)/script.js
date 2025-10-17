function closeMenu() {
        document.getElementById("sub-header").style.left = "-2000px";
        document.getElementById("close-nav").style.display = "none"
      }
      function showMenu(){
        document.getElementById("sub-header").style.left = "0"
        document.getElementById("close-nav").style.display = "block"
        document.getElementById("close-nav").style.width = "235px"
      }