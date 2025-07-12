// client/utils/fetchData.js

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:5050/api";

export async function fetchData(endpoint) {
  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`);

    if (!response.ok) {
      throw new Error(`Fetch failed with status ${response.status}`);
    }

    const data = await response.json();
    console.log(`Data fetched successfully: ${JSON.stringify(data)}`); // Log the fetched data
    return data;
    

  } catch (error) {
    console.error("Fetch Error:", error.message);
    throw error;
  }
}