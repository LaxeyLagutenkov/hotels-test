import { useRouter, useRoute } from "vue-router";
import { onMounted } from "vue";
import { storeToRefs } from "pinia";
import { useHotelsStore, type HotelsParams } from "@/stores/hotelsStore";

export const useHotels = () => {
    const route = useRoute();
    const router = useRouter();
    const hotelsStore = useHotelsStore();

    const { filteredHotels, loading } = storeToRefs(hotelsStore);
    const { fetchHotels } = hotelsStore;

    const handleClick = () => {
        router.push('/');
    }

    onMounted(async () => {
        const params = route.query as HotelsParams;
        await fetchHotels(params);
    });

    return {
        filteredHotels,
        loading,
        handleClick
    }
}

