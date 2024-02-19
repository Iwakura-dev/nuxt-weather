<script setup>
import SwitchTheme from '../UI/SwitchTheme/SwitchTheme.vue'
</script>

<template>
  <header class="fixed w-full z-20 p-4 backdrop-blur-md shadow-xl dark:bg-zinc-900">
    <div class="flex justify-between mx-auto max-w-full">
      <div class="flex items-center gap-10">
        <h1 class="text-2xl font-raleway font-bold ">Iwakura</h1>
        <nav class="flex gap-3 ">
          <RouterLink to="/">
            <span class="text-md font-raleway hover:text-orange-600 transition-colors duration-100 ">
              <Icon name="uil:home" />
              Home
            </span>
          </RouterLink>
          <RouterLink to="/">
            <span class="text-md font-raleway hover:text-orange-600 transition-colors duration-100 ">
              <Icon name="uil:github" />
              Github
            </span>
          </RouterLink>
        </nav>
      </div>
      <SwitchTheme />
    </div>
  </header>
</template>
