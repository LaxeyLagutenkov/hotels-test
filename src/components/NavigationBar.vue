<script setup lang="ts">
import { RouterLink } from "vue-router";

type NavigationItem = {
  path: string,
  name: string
}

const navigationItems: NavigationItem[] = [
  {
    path: "/",
    name: "Home"
  },
  {
    path: "/about",
    name: "About"
  }
];
</script>

<template>
  <nav class="navigation">
    <RouterLink
      v-for="item in navigationItems"
      :key="item.name"
      class="navigation__item"
      :to="item.path"
    >
      {{ item.name }}
    </RouterLink>
  </nav>
</template>

<style lang="scss" scoped>
.navigation {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 50px;
  background: #0088c3;
  box-shadow: 0 0 4px 4px rgba(0, 0, 0, 0.15);

  &__item {
    margin-right: 12px;
    font-size: 16px;
    font-weight: 400;
    line-height: 16px;
    color: white;

    &:last-child {
      margin-right: 0;
    }

    &:hover {
      color: #ccc;
    }
  }
}
</style>