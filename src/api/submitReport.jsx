import api from './apiConfig'

export async function submitReport(details) {
  console.log(details);
  const res = await api.post('/reports/', details)
  return res.data;
}