export interface returnVanData {
  vans: VanData[];
}

export interface VanData {
  description: string;
  id: string;
  imageUrl: string;
  name: string;
  price: number;
  type: string;
}

export interface State<T> {
  isLoading: boolean;
  isError: boolean;
  error: string;
  data: T | null;
}
