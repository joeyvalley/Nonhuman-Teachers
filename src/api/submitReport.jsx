import api from './apiConfig'

export async function submitReport(details) {
  const res = await api.post('/', details)
  return res.data;
}