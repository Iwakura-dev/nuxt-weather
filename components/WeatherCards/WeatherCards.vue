<script lang="ts" setup>
import type { IPlaces } from '../../types/types'
defineProps<{
  place: IPlaces
}>()
</script>

<template>
  <div class="flex justify-center shadow-lg w-1/4 mx-auto rounded-xl p-10 gap-6 mb-6 relative overflow-hidden">
    <!-- Location and info -->
    <div class="mb-2 flex flex-col items-center">
      <div class="flex items-center justify-center gap-2">
        <h1 class="font-raleway font-bold text-3xl">{{ place.location.name }}</h1>
      </div>
      <!-- Current weather -->
      <div class="text-center flex-1">
        <img :src="place.current.condition.icon" alt="icon" width="200" class="mx-auto -mb-10" />
        <h1 class="font-raleway text-6xl mb-2">{{ Math.round((place.current.temp_c)) }}°</h1>
        <p class="font-raleway text-lg">{{ place.current.condition.text }}</p>
      </div>
      <div v-for="(day, idx) in place.forecast.forecastday" :key="idx">
        <WeatherForecastDay :day="day" />
      </div>
    </div>
  </div>
</template>
