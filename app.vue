<script setup lang="ts">
import Body from './components/Body/Body.vue'
import type { IPlaces } from './types/types'
const places = ref<IPlaces[]>([])
const addPlace = (data: any): void => {
  places.value.push(data)
}
</script>

<template>
  <Body>
    <Header />
    <Cards @place-data="addPlace" />
    <div v-for="(place, idx) in places" :key="idx">
      <WeatherCards :place="place" />
    </div>
  </Body>
</template>

