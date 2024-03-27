import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { getTest } from "@/service/Test";

const TEST_QUERY_KEY = {
    test: ["test"],
};


// test
export const useTestQuery = (params: object) => {
    const queryOptions: UseQueryOptions<unknown, Error, unknown> = {
        queryKey: TEST_QUERY_KEY.test,
        queryFn: async () => {
            const { data } = await getTest(params);
            return data;
        },
    };

    return useQuery(queryOptions);
};
