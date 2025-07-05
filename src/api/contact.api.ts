import { apiClient } from './client';

export const sendMessage = async (payload: any): Promise<any> => {
    try {
        const response = await apiClient.post<any[]>(`contact/message`, payload);
        return response.data;
    } catch (e) {
        console.log('sendMessage :::: ', e);
    }
};