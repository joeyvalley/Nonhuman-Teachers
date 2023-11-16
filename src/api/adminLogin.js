import api from './apiConfig'

export default async function adminLogin(username, password) {
  try {
    const res = await api.post("/login/", { "username": username, "password": password });
    const { token } = res.data;
    if (token) {
      sessionStorage.setItem('authToken', token);
      const results = await getPendingReports(token);
      return { "pending": results, "authenticated": true };
    } else {
      return { "pending": [], "authenticated": false };
    }
  } catch (error) {
    return { "pending": [], "authenticated": false };
  }
}

async function getPendingReports(token) {
  try {
    const response = await api.get("/pending-reports", {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching pending reports:', error);
  }
}