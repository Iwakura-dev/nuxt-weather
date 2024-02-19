<script setup lang="ts">
import { useDarkMode } from '~/composables/useDarkMode'

const { isDark, toggleDarkMode } = useDarkMode()
</script>

<template>
  <button class="cursor-ponter rounded-3xl p-1 px-4" @click="toggleDarkMode">
    <div v-if="isDark">
      <Icon name="uil:moon" size="20" />
    </div>
    <div v-else>
      <Icon name="uil:sun" size="20" />
    </div>
  </button>
</template>
