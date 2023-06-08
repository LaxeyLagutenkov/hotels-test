import { defineStore } from "pinia";
import { ref, type Ref } from "vue";
import { type Destination } from "@/types/Destination";

export const useDestinationStore = defineStore("destinationStore", () => {
    const destinations: Ref<Destination[]> = ref([]);
    const loading: Ref<boolean> = ref(false);

    const fetchDestinations = async () => {
        loading.value = true;
        try {
            const response = await fetch("http://localhost:5000/destinations");
            destinations.value = await response.json();
        } catch (err) {
            console.error((err as Error)?.message);
        } finally {
            loading.value = false;
        }
    }

    return { destinations, loading, fetchDestinations }
})