
<template>
  <body id="body-pd">
    <header class="header" id="header">
        <div class="header_toggle"> <i class='bx bx-menu' id="header-toggle"></i> </div>
        <div class="header_img"> <img src="https://i.imgur.com/hczKIze.jpg" alt=""> </div>
    </header>
    <div class="l-navbar" id="nav-bar">
        <nav class="nav">
            <div> 
            <router-link to="/" class="nav_logo"> <i class='bx bx-layer nav_logo-icon'></i>
            <span class="nav_logo-name">Company Name (CN)</span></router-link>
            <hr class="hr">
            <div class="nav_list"> 
            <router-link to="/homepage" class="nav_link active"> 
            <i class="bx bx-grid-alt nav_icon"></i>
            <span class="nav_name">Dashboard</span> </router-link>
            <router-link to="/bannerpage" class="nav_link"> 
            <i class='bx bx-message-square-detail nav_icon'></i> 
            <span class="nav_name">Banners</span> </router-link>
            <router-link to="/productpage" class="nav_link"> 
            <i class='bx bx-user nav_icon'></i> 
            <span class="nav_name">Products</span> </router-link> 
            <router-link to="/bookmarkpage" class="nav_link"> 
            <i class='bx bx-bookmark nav_icon'></i> 
            <span class="nav_name">Bookmark</span> </router-link> 
            <router-link to="/filespage" class="nav_link"> 
            <i class='bx bx-folder nav_icon'></i> 
            <span class="nav_name">Files</span> </router-link> 
            <router-link to="/statpage" class="nav_link"> 
            <i class='bx bx-bar-chart-alt-2 nav_icon'></i> 
            <span class="nav_name">Stats</span> </router-link> 
            </div>
            </div> 
            <a href="#" class="nav_link"> <i class='bx bx-log-out nav_icon'></i> <span class="nav_name">SignOut</span> </a>
        </nav>
    </div>
    
    <!--Container Main start-->
    <div class="height-100 bg-light">
        <HomePage />
        <router-view />
    </div>
    
    <!--Container Main end-->
    </body>
</template>

<script>
export default {
};
document.addEventListener("DOMContentLoaded", function() {
   
const showNavbar = (toggleId, navId, bodyId, headerId) =>{
const toggle = document.getElementById(toggleId),
nav = document.getElementById(navId),
bodypd = document.getElementById(bodyId),
headerpd = document.getElementById(headerId)

// Validate that all variables exist
if(toggle && nav && bodypd && headerpd){
toggle.addEventListener('click', ()=>{
// show navbar
nav.classList.toggle('show')
// change icon
toggle.classList.toggle('bx-x')
// add padding to body
bodypd.classList.toggle('body-pd')
// add padding to header
headerpd.classList.toggle('body-pd')
})
}
}

showNavbar('header-toggle','nav-bar','body-pd','header')

/*===== LINK ACTIVE =====*/
const linkColor = document.querySelectorAll('.nav_link')

function colorLink(){
if(linkColor){
linkColor.forEach(l=> l.classList.remove('active'))
this.classList.add('active')
}
}
linkColor.forEach(l=> l.addEventListener('click', colorLink))

 // Your code to run since DOM is loaded and ready
});

</script>

<style src="../css/style.css">

</style>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css">