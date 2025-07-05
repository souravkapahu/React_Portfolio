import { useQuery } from '@tanstack/react-query';
import { getProjects } from '../api/projects.api';

export const useGetProjects = (data: any) => {
    return useQuery({
        queryKey: ['getProjects', data?.user],
        queryFn: () => getProjects(data),
        enabled: !!data?.user,
    });
};
