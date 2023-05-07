import { reactive, toRefs } from "vue";

import type { VanData, State } from "../config/types";

export const getVanData = async (
  url: string
): Promise<VanData | VanData[] | undefined> => {
  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.vans) {
      return data.vans;
    } else {
      throw new Error("Failed to fetch van data");
    }
  } catch (error) {
    console.error(error);
  }
};

export const useFetch = async <T>(url: string) => {
  const state: State<T> = reactive({
    isLoading: true,
    isError: false,
    error: "",
    data: null,
  });

  const fetchdata = async () => {
    state.isLoading = true;
    try {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(response.statusText);
      }

      state.data = await response.json();
    } catch (error) {
      const typedError = error as Error;
      state.isError = true;
      state.error = typedError.message;
    } finally {
      state.isLoading = false;
    }
  };
  await fetchdata();
  return {
    ...toRefs(state),
  };
};
