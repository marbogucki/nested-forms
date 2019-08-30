export interface User {
  cities: City[];
}

export interface City {
  id: number;
  city: string;
  nested: Address[];
}

export interface  Address {
  id: number;
  address: string;
}
