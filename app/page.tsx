'use client'
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          console.log(latitude, longitude);
        },
        (error) => {
          console.error("Error fetching geolocation", error);
        }
      );
    }
  }, []);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      Hello
    </main>
  );
}
