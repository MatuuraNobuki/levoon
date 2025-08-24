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
:root{
  --accent:#18ffc0;
}

.p-button.p-button-primary {
  background-color: var(--accent) ;
  border-color: var(--accent) ;
}

.app-container {
  height: 100vh;
  display: grid;
  grid-template-rows: 3rem 1fr 4rem;
}

.app-header {
  display: flex;
  z-index: 10;
  padding: 1rem;
}

.app-main {
  min-width:70vw;
  margin: 0 auto;
  box-sizing: border-box;
}

.app-footer {
  text-align: center;
  z-index: 10;
}
</style>
