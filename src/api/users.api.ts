import { apiClient } from './client';

export const getProfile = async (): Promise<any> => {
    try {
        const response = await apiClient.get<any[]>('profile/detail');
        return response.data;
    } catch (e) {
        console.log('getProfile :::: ', e);
    }
};