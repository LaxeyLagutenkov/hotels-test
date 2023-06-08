<script lang="ts" setup>
import { useFilter } from "@/composables/useFilter";
import { type Destination } from "@/types/Destination";
import { Search } from "@element-plus/icons-vue";

interface Props {
  destinationsFilter: Destination[]
}
defineProps<Props>()

const { destination, personCount, dates, dateDisable, handleClick } = useFilter();
</script>

<template>
  <form class="hotels-filter">
    <div class="hotels-filter__filter-wrapper">
      <el-select
        v-model="destination"
        class="m-2 hotels-filter__item"
        placeholder="Choose destination"
        :validate-event="true"
      >
        <el-option
          v-for="destination in destinationsFilter"
          :key="destination.id"
          :label="destination.name"
          :value="destination.name"
          class="hotels-filter__destination-option"
        />
      </el-select>
      <el-date-picker
        v-model="dates"
        type="daterange"
        range-separator="To"
        start-placeholder="Start date"
        end-placeholder="End date"
        value-format="YYYY-MM-DD"
        :disabled-date="dateDisable"
        class="hotels-filter__item hotels-filter__date-picker"
      />
      <el-input-number
        v-model="personCount"
        :min="1"
        :max="12"
        class="hotels-filter__item"
      />
    </div>

    <el-button type="primary" :icon="Search" class="hotels-filter__button" @click="handleClick">
      Find hotels
    </el-button>
  </form>
</template>

<style lang="scss" scoped>
.hotels-filter {
  display: flex;
  flex-direction: column;
  width: 1000px;
  padding: 50px;
  border: 1px solid #0088c3;
  border-radius: 5px;

  &__filter-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &:deep(.hotels-filter__date-picker) {
    flex-grow: 0;
    width: 480px;
  }

  &__button {
    width: 240px;
    margin: 24px auto 0;
  }
}
</style>