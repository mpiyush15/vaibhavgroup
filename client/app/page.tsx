"use client";
import { useEffect, useState } from "react";
import { fetchData } from "../utils/connection"; // Adjust the import path as necessary



export default function Home() {
  const [, setData] = useState([]);

  useEffect(() => {
    fetchData("/api/auth/hello")
      .then((res) => setData(res)) 
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <h1>Hello, World!</h1>
   
    </div>
  );
}
