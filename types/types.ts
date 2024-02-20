export interface IWeather {
  id: number;
  name: string;
  country: string;
  region: string;
  lon?: number | bigint;
  lat?: number | bigint;
  url?: string;
}

export interface ISearchTerm {
  query: string;
  timeout: number | null;
  data: IWeather[] | null;
}

interface ILocation {
  country: string;
  lat: number;
  localtime: Date;
  localtime_epoch?: bigint;
  lon: number;
  name: string;
  region: string;
  tz_id?: string;
}
interface ICurrent {
  cloud: number;
  condition: {
    icon: string;
  };
  temp_c: number;
  temp_f: number;
}

export interface IPlaces {
  location: ILocation;
  current: ICurrent;
}
export interface IDay {
  date: Date;
  day: {
    maxtemp_c: number;
  };
  condition: {
    icon: string;
  };
}
