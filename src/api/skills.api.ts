import { apiClient } from './client';

export const getSkills = async (params: any): Promise<any> => {
    try {
        const response = await apiClient.get<any[]>(`skills/list/${params}`);
        return response.data;
    } catch (e) {
        console.log('getSkills :::: ', e);
    }
};