<script setup lang="ts">
import HotelsFilter from '@/components/HotelsFilter.vue'
import {useHotelsFilter} from "@/composables/useHotelsFilter";

const { destinations, loading } = useHotelsFilter();
</script>

<template>
  <div class="home-view">
    <h1 class="home-view__title">Booking filter</h1>
    <HotelsFilter :destinations-filter="destinations" />
  </div>
</template>

<style lang="scss" scoped>
.home-view {
  display: flex;
  flex-direction: column;

  &__title {
    display: flex;
    justify-content: center;
    margin-bottom: 24px;
  }
}
</style>