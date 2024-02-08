<!-- App.vue -->

<template>
  <div>
    <SideBar />
  </div>
</template>

<script>
import SideBar from './components/SideBar.vue';
// import DashPage from './views/DashPage.vue';

export default {
  name: 'App',
  components: {
    SideBar,
    // DashPage,
  },
  created() {
    // Redirect to /dashpage route when the component is created
    this.$router.push('/dashpage');
  }
};
</script>

<style scoped>
</style>
