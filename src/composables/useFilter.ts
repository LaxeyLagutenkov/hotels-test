import { ref, computed, type Ref } from "vue";
import { ElMessage } from "element-plus";
import { useRouter } from "vue-router";

export const useFilter = () => {
    const router = useRouter();

    const destination: Ref<string> = ref('');
    const personCount: Ref<number> = ref(1);
    const dates: Ref<[string, string] | []> = ref([]);
    const dateDisable = (value: any) => {
        const currentTime = new Date(new Date().setHours(0,0,0,0)).getTime();
        return new Date(value).getTime() < currentTime;
    }

    const correctDestination = computed(() => {
        return !!destination.value;
    })

    const correctDates = computed(() => {
        return !!dates.value.length;
    })

    const openErrorMessage = (message: string) => {
        ElMessage.error(message);
    }

    const handleClick = () => {
        if (!correctDestination.value) {
            openErrorMessage("Choose your destination");
            return;
        }
        if (!correctDates.value) {
            openErrorMessage("Choose а booking date");
            return;
        }

        router.push({
            path: '/hotels',
            query: {
                destination: destination.value,
                personCount: String(personCount.value),
                dateStart: dates.value[0],
                dateEnd: dates.value[1]
            }
        });
    }

    return {
        destination,
        personCount,
        dates,
        dateDisable,
        handleClick
    }
}