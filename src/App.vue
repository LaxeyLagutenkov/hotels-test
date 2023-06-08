<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import NavigationBar from '@/components/NavigationBar.vue'
</script>

<template>
  <div class="container">
    <header>
      <NavigationBar />
    </header>

    <main>
      <RouterView />
    </main>
  </div>
</template>

<style scoped>

</style>
