import { apiClient } from './client';

export const getProfile = async (): Promise<any[]> => {
    const response = await apiClient.get<any[]>('profile/detail');
    return response.data;
};