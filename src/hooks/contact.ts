import { useMutation } from '@tanstack/react-query';
import { sendMessage } from '../api/contact.api';

export const useContact = () => {
    return useMutation({
        mutationFn: (data: any) => sendMessage(data),
    });
};
