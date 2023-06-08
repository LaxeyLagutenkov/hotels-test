<script setup lang="ts">
import { useHotels } from "@/composables/useHotels";
import { ArrowLeft } from "@element-plus/icons-vue";
import HotelCard from "@/components/HotelCard.vue";

const { filteredHotels, loading, handleClick } = useHotels();
</script>

<template>
  <div class="hotels">
    <h1 class="hotels__title">Hotels</h1>
    <div v-if="filteredHotels.length" class="hotels__hotel-cards">
      <HotelCard
        v-for="hotel in filteredHotels"
        :key="hotel.id"
        :hotel-data="hotel"
        class="hotels__hotel-card"
      />
    </div>

    <div v-else class="hotels__empty-data">
      <p class="hotels__empty-message">
        Sorry, hotels aren't found. Try change your request and find other else.
      </p>
      <el-button
        type="primary"
        :icon="ArrowLeft"
        class="hotels-filter__button"
        @click="handleClick"
      >
        Go to filter page
      </el-button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.hotels {
  &__title {
    display: flex;
    justify-content: center;
    margin-bottom: 24px;
  }

  &__hotel-cards {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    width: 980px;
  }

  &__hotel-card {
    margin-top: 20px;
  }
}
</style>
