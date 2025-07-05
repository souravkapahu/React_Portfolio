import { useQuery } from '@tanstack/react-query';
import { getSocialHandles } from '../api/socialHandles.api';

export const useGetSocialHandles = (profileId: any) => {
    return useQuery({
        queryKey: ['getSocialHandles', profileId],
        queryFn: () => getSocialHandles(profileId),
        enabled: !!profileId,
    });
};
