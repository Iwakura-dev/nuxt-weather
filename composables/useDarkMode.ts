import { ref } from 'vue';

export function useDarkMode() {
  const isDark = ref(false);

  const enableDarkMode = () => {
    isDark.value = true;
    document.documentElement.classList.add('dark');
  };
  const disableDarkMode = () => {
    isDark.value = false;
    document.documentElement.classList.remove('dark');
  };
  const toggleDarkMode = () => {
    if (isDark.value) {
      disableDarkMode();
    } else {
      enableDarkMode();
    }
  };
  onMounted(() => {
    if (
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches
    ) {
      enableDarkMode();
    }
  });
  onBeforeUnmount(() => {
    disableDarkMode();
  });

  return { isDark, enableDarkMode, disableDarkMode, toggleDarkMode };
}
