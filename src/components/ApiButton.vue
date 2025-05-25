<template>
  <button @click="$emit('click')">API 呼び出し</button>
</template>

<script setup lang="ts">
defineEmits(['click'])
</script>
