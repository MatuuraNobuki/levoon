<template>
  <Button label="API呼び出し" @click="$emit('click')" severity="success" />
</template>

<script setup lang="ts">
import Button from 'primevue/button';
defineEmits(['click'])
</script>
