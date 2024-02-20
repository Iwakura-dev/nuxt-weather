<script lang="ts" setup>
import type { IPlaces, ISearchTerm } from '../../types/types'
import { handleSearch } from '../../utils/handleSearch'
const config = useRuntimeConfig()
const emit = defineEmits(['place-data'])
const searchTerm: ISearchTerm = reactive({
  query: '',
  timeout: null,
  data: null
})

const getWeather = async (
  token: string,
  id: number,
  searchTerm: ISearchTerm
) => {
  try {
    const { data } = await useFetch<IPlaces>(
      `http://api.weatherapi.com/v1/forecast.json?key=${token}&q=id:${id}&days=3&aqi=no&alerts=no`
    )
    const dataInfo = data.value
    emit('place-data', dataInfo)
    searchTerm.query = ''
    searchTerm.data = null
  } catch (error) {
    if (error instanceof Error) {
      console.error('Error', error.message)
    }
  }
}
</script>
<template>
  <!-- Building cards for the input -->
  <div class="relative flex flex-col justify-center overflow-hidden sm:py-12">
    <div class="relative px-6 pb-8 pt-2 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10">
      <div class="mx-auto max-w-md">
        <div class="space-y-6 py-8 text-base leading-7">
          <h2 class="font-raleway text-3xl text-center">Weather App</h2>
          <form class="flex justify-center">
            <input v-model="searchTerm.query" @input="handleSearch(config.public.weatherToken, searchTerm)"
              class="bg-transparent px-3 py-2 border-2 border-zinc-500 rounded-xl outline-none text-xl font-raleway"
              type="text" placeholder="Search for a place" />
          </form>
        </div>
        <div v-if="searchTerm.data !== null">
          <div v-for="place in searchTerm.data" :key="place.id">
            <button
              class="text-md font-raleway px-3 my-2 w-full text-center hover:text-orange-300 hover:transition-colors duration-150"
              @click="getWeather(config.public.weatherToken, place.id, searchTerm)">
              {{ place.name }}, {{ place.region }}, {{ place.country }}
            </button>
          </div>
        </div>
        <div v-else>No data...</div>
      </div>
    </div>
  </div>
</template>