import { onMounted } from "vue";
import { useDestinationStore } from "@/stores/destinationStore";
import { storeToRefs } from "pinia";

export const useHotelsFilter = () => {
    const destinationStore = useDestinationStore();
    const { destinations, loading } = storeToRefs(destinationStore);

    onMounted(async () => {
        await destinationStore.fetchDestinations();
    })

    return {
        destinations,
        loading
    }
}