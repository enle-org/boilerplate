import { http } from './client';

// sample authentication api request
export const registrationRequest = async credentials =>
  await http.post('/auth/register', credentials);
