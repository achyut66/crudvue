
<template>
<!-- new sidebar can be added in here -->
  <body id="body-pd">
    <header class="header" id="header">
        <div class="header_toggle"> <i class='bx bx-menu' id="header-toggle"></i> </div>
        <div class="header_img"> <img src="https://i.imgur.com/hczKIze.jpg" alt=""> </div>
    </header>
    <div class="l-navbar" id="nav-bar">
        <nav class="nav">
            <div> 
            <router-link to="/homepage" class="nav_logo"> <i class='bx bx-layer nav_logo-icon'></i>
            <span class="nav_logo-name">Company Name (CN)</span></router-link>
            <hr class="hr">
            <div class="nav_list"> 
            <router-link to="/dashpage" class="nav_link active"> 
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

    <div class="height-100 bg-light">
        <router-view />
    </div>
    </body>
</template>

<script src="../script/main">

</script>

<style src="../css/style.css">

</style>