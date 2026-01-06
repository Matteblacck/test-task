import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://api.coingecko.com/api/v3",
  timeout: 10000,
  headers: {
    Accept: "application/json",
  },
});

export type NftItem = {
    id: string;
    name: string;
  };

export const nftAPI = {
async getNftList(): Promise<NftItem[]> {
    const response = await axiosInstance.get<NftItem[]>("/nfts/list");

    return response.data;
},
};