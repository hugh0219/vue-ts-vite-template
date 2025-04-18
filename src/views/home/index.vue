<script setup lang="ts">
  import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="../../assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
    <RouterLink to="/agents-talk">Go to Agents Talk</RouterLink>
  </div>
  <div class="icons">
    <div class="icon">
      <el-icon><ChatRound /></el-icon>
    </div>
  </div>
  <HelloWorld msg="Vite + Vue" />
</template>
<style lang="scss" scoped>
  .icons {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 50px;
    background: rgba(0, 0, 0, 0.3);
    .icon {
      color: red;
    }
  }
  .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
  .logo.vue:hover {
    filter: drop-shadow(0 0 2em #42b883aa);
  }
</style>
