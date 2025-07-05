import { apiClient } from './client';

export const getProjects = async (payload: any): Promise<any> => {
    try {
        const response = await apiClient.post<any[]>(`projects/list`, payload);
        return response.data;
    } catch (e) {
        console.log('getProjects :::: ', e);
    }
};