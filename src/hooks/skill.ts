import { useQuery } from '@tanstack/react-query';
import { getSkills } from '../api/skills.api';

export const useGetSkills = (profileId: any) => {
    return useQuery({
        queryKey: ['getSkills', profileId],
        queryFn: () => getSkills(profileId),
        enabled: !!profileId,
    });
};
