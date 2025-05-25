<template>
  <div class="app-container">
    <header class="app-header">
      <AppHeader />
    </header>

    <main class="app-main">
      <MainContent />
    </main>

    <footer class="app-footer">
      <AppFooter />
    </footer>
  </div>
</template>

<script setup lang="ts">
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'
import MainContent from './components/MainContent.vue'
</script>

<style>
@media (orientation: portrait) {
  body {
    margin: 0
  }

  .app-main {
    width: 100vw;
  }
}
.app-container {
  height: 100vh;
  display: grid;
  grid-template-rows: 5rem 1fr 5rem;
}

.app-header {
  background: white;
  z-index: 10;
  padding: 0 1rem;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.app-main {
  background-color: rgb(232, 232, 232);
  min-width:70vw;
  margin: 0 auto;
  box-sizing: border-box;
}

.app-footer {
  background: white;
  text-align: center;
  padding: 1rem;
  box-shadow: 0 -2px 4px rgba(0,0,0,0.1);
  z-index: 10;
}
</style>
