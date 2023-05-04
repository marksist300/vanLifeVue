import type { VanData } from "../config/types";

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
