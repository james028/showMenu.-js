 function showMenu() {
     var aside = document.getElementById("asideProductsMenu").classList;
     var mainpage = document.getElementById("mainpageArea").classList;
     var overlay = document.getElementById("overlayMainpageArea").classList;
     var showCloseMenu = document.getElementById("showProductsButton").classList;
     if (aside.contains("hideMenu")) {
        aside.remove("hideMenu");
        overlay.add("overlayOn");
        showCloseMenu.add("showCloseMenu");
     } else {
        aside.add("hideMenu");
        overlay.remove("overlayOn");
        showCloseMenu.remove("showCloseMenu");
     }
     if (aside.contains("showMenu")) {
        aside.remove("showMenu");
        overlay.remove("overlayOn");
     } else {
        aside.add("showMenu");
        overlay.add("overlayOn");
     }
     if (mainpage.contains("moveMainpageArea")) {
        mainpage.remove("moveMainpageArea");
     } else {
        mainpage.add("moveMainpageArea");
     }
    }
</script>

<script>
    var acc = document.getElementsByClassName("sidebarTaxonomyCollapse");
    var i;
    for (i = 0; i < acc.length; i++) {
        acc[i].onclick = function(){
            this.classList.toggle("active");
            /* Toggle between hiding and showing the active panel */
            var showPanel = this.nextElementSibling;
            if (showPanel.style.display === "block") {
                showPanel.style.display = "none";
            } else {
                showPanel.style.display = "block";
            }
            if (showPanel.style.maxHeight){
                showPanel.style.maxHeight = null;
            } else {
                showPanel.style.maxHeight = showPanel.scrollHeight + "px";
            }
        }
    }
</script>