// client/utils/fetchData.js

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL?.replace(/\/$/, "") || "http://localhost:5050/api";

export async function fetchData(endpoint) {
  // Ensure endpoint starts with a single slash
  const cleanEndpoint = endpoint.startsWith("/") ? endpoint : `/${endpoint}`;
  const url = `${API_BASE_URL}${cleanEndpoint}`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Fetch failed with status ${response.status}`);
    }

    const data = await response.json();
    console.log(`Data fetched successfully: ${JSON.stringify(data)}`);
    return data;
  } catch (error) {
    console.error("Fetch Error:", error.message);
    throw error;
  }
}