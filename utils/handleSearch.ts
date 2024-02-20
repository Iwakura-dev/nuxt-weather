import type { ISearchTerm, IWeather } from '~/types/types';

export const handleSearch = (token: string, searchTerm: ISearchTerm): void => {
  if (searchTerm.timeout !== null) {
    clearTimeout(searchTerm.timeout);
  }
  searchTerm.timeout = window.setTimeout(async () => {
    if (searchTerm.query !== '') {
      try {
        const { data } = await useFetch<IWeather[]>(
          `http://api.weatherapi.com/v1/search.json?key=${token}&q=${searchTerm.query}`,
          {
            lazy: true,
            server: false
          }
        );
        searchTerm.data = data;
      } catch (error) {
        if (error instanceof Error) {
          console.error('Error', error.message);
        }
      }
    } else {
      searchTerm.data = null;
    }
  }, 500);
};
