const toggleBtn = document.querySelector(".sidebar-toggle");
const sidebar = document.querySelector(".sidebar");
const closeBtn = document.querySelector(".close-btn");

toggleBtn.addEventListener("click", function() {
   /* if(sidebar.classList.contains("show-sidebar")) {
        sidebar.classList.remove;
    }
    else {
        sidebar.classList.add("show-sidebar")
    } */
    sidebar.classList.toggle("show-sidebar");
})