<template>
  <main class="layout-container">
    <div class="reqArea">
      メイン
    </div>
  </main>
</template>

<script setup lang="ts">

</script>

<style scoped>
.layout-container {
  display: grid;
  grid-template-columns: 20% 1fr;
  margin: 1rem;
  gap: 1rem
}

.genaratedImage {
  height: 50vh;
}

.results {
  display: flex;
  width: 100%;
  justify-content: end;
}

.api-response-card {
  width: 100%;
  text-align: left;
}

pre {
  background: #f9f9f9;
  padding: 1rem;
  border-radius: 6px;
  overflow-x: auto;
  word-break: break-word;
  width: 100%;
}

@media (orientation: portrait) {
  .layout-container {
    grid-template-columns: 1fr;
    grid-template-rows: 3rem 1fr;
    gap: 1rem
  }

  .genaratedImage {
    width: 100%;
    height: auto;
  }
}
</style>
