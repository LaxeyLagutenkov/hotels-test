import { defineStore } from "pinia";
import { ref, computed, type Ref } from "vue";
import { type Hotel } from "@/types/Hotel";

export type HotelsParams = {
    destination: string,
    personCount: string,
    dateStart: string,
    dateEnd: string
}

export const useHotelsStore = defineStore("hotelsStore", () => {
    const hotels: Ref<Hotel[]> = ref([]);
    const loading: Ref<boolean> = ref(false);
    const filteredHotels = computed(() => {
        return [...hotels.value].sort((a, b) => {
            return a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1;
        });
    });

    const fetchHotels = async (params: HotelsParams) => {
        loading.value = true;
        try {
            const response = await fetch(`http://localhost:5000/hotels?city=${params.destination}`);
            hotels.value = await response.json();
        } catch (err) {
            console.error((err as Error)?.message);
        } finally {
            loading.value = false;
        }
    }

    return { hotels, loading, filteredHotels, fetchHotels }
})