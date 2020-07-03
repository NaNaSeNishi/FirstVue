<template>
  <div class="Home">
    <NavMenu></NavMenu>
    <show></show>
    <news></news>
    <foot></foot>
    <router-view/>
  </div>
</template>

<script>
import NavMenu from '@/components/NavMenu'
import show from '@/components/show'
import news from '@/components/news'
import foot from '@/components/foot'
export default {
  name: "Home",
  components: {NavMenu,show,news,foot}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
