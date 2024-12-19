/* eslint-disable @typescript-eslint/no-explicit-any */
import { create } from "zustand";
import axios from "axios";

type CityType = {
  id: string;
  name: string;
};

type DistrictType = {
  id: string;
  name: string;
};

type WardType = {
  id: string;
  name: string;
};

interface LocationState {
  cities: CityType[];
  districts: DistrictType[];
  wards: WardType[];
  city: { id: string; name: string };
  district: { id: string; name: string };
  ward: { id: string; name: string };
  isLoading: boolean;
  fetchCities: () => Promise<void>;
  fetchDistricts: (cityId: string) => Promise<void>;
  fetchWards: (districtId: string) => Promise<void>;
  setCity: (city: { id: string; name: string }) => void;
  setDistrict: (district: { id: string; name: string }) => void;
  setWard: (ward: { id: string; name: string }) => void;
}

const useLocationStore = create<LocationState>((set) => ({
  cities: [],
  districts: [],
  wards: [],
  city: { id: "", name: "" },
  district: { id: "", name: "" },
  ward: { id: "", name: "" },
  isLoading: false,
  fetchCities: async () => {
    set({ isLoading: true });
    try {
      const res = await axios.get("https://esgoo.net/api-tinhthanh/1/0.htm");
      set({ cities: res.data.data, isLoading: false });
    } catch (err) {
      console.error("Error fetching cities:", err);
      set({ isLoading: false });
    }
  },
  fetchDistricts: async (cityId) => {
    set({ isLoading: true, districts: [], wards: [] });
    try {
      const res = await axios.get(
        `https://esgoo.net/api-tinhthanh/2/${cityId}.htm`
      );
      const districts = res.data.data.map((district: any) => ({
        id: district.id,
        name: district.full_name, // Map "full_name" thành "name"
      }));
      set({ districts, isLoading: false });
    } catch (err) {
      console.error("Error fetching districts:", err);
      set({ isLoading: false });
    }
  },
  fetchWards: async (districtId) => {
    set({ isLoading: true, wards: [] });
    try {
      const res = await axios.get(
        `https://esgoo.net/api-tinhthanh/3/${districtId}.htm`
      );
      const wards = res.data.data.map((ward: any) => ({
        id: ward.id,
        name: ward.full_name, // Map "full_name" thành "name"
      }));
      set({ wards, isLoading: false });
    } catch (err) {
      console.error("Error fetching wards:", err);
      set({ isLoading: false });
    }
  },
  setCity: (city) => set({ city }),
  setDistrict: (district) => set({ district }),
  setWard: (ward) => set({ ward }),
}));

export default useLocationStore;
