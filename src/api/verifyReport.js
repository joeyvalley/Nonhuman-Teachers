import api from './apiConfig'

export default async function verifyReport(method, id) {
  const token = sessionStorage.getItem('authToken');
  try {
    const response = await api.post('/verify-report/', {
      id,
      method,
    }, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
    return response
  } catch (error) {
    console.error('Error submitting verification', error);
    throw error;
  }
}