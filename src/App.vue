<!-- App.vue -->

<template>
  <div>
    <SideBar />
    <router-view />
  </div>
</template>

<script>
import SideBar from './components/SideBar.vue';

export default {
  name: 'App',
  components: {
    SideBar,
  },
};
</script>

<style scoped>
</style>
