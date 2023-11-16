import api from './apiConfig'

export async function getReports() {
  try {
    const res = await api.get("/reports/");
    return res.data;
  } catch (error) {
    console.error("Error fetching reports:", error);
    throw error; // or return an error indicator, depending on your use case
  }
}