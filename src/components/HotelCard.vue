<script setup lang="ts">
import { Star } from "@element-plus/icons-vue";
import { type Hotel } from "@/types/Hotel";

interface Props {
  hotelData: Hotel
}
defineProps<Props>()
</script>

<template>
  <div class="hotel-card">
    <div class="hotel-card__image"> Hotel image</div>
    <h4 class="hotel-card__title">{{ hotelData.name }}</h4>
    <div class="hotel-card__info-wrapper">
      <p class="hotel-card__info-item">{{ hotelData.address }}</p>
      <p class="hotel-card__info-item">{{ hotelData.city }}, {{ hotelData.state }}</p>
      <p class="hotel-card__info-item">{{ hotelData.phone_number }}</p>
      <p class="hotel-card__info-item">
        <el-icon :size="24" color="#a7deff">
          <Star />
        </el-icon>
        <span class="hotel-card__rating">{{ hotelData.hotel_rating }}</span>
      </p>
    </div>
    <el-button type="primary" class="hotel-card__button">Book hotel</el-button>
  </div>
</template>

<style lang="scss" scoped>
.hotel-card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 280px;
  height: 380px;
  padding: 15px;
  border: 1px solid #026894;
  border-radius: 5px;

  &__image {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 280px;
    height: 280px;
    background-color: #a7deff;
    border-radius: 5px;
  }

  &__info-item {
    display: flex;
    align-items: center;
    margin-top: 8px;
  }
  &__rating {
    display: inline-block;
    margin-left: 8px;
  }

  &__button {
    width: 120px;
    margin-top: 16px;
  }
}
</style>