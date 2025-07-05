import { apiClient } from './client';

export const getSocialHandles = async (profileId: any): Promise<any> => {
    try {
        const response = await apiClient.get<any[]>(`socialhandle/list/${profileId}`);
        return response.data;
    } catch (e) {
        console.log('getSocialHandles :::: ', e);
    }
};