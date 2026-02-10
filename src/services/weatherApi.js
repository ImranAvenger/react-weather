const BASE_URL = "https://api.open-meteo.com/v1/forecast";

export async function getWeather(lat, lon) {
  const url = `${BASE_URL}?latitude=${lat}&longitude=${lon}&hourly=temperature_2m,weathercode&daily=temperature_2m_max,temperature_2m_min&timezone=auto`;

  const res = await fetch(url);
  if (!res.ok) {
    throw new Error("Weather data আনতে সমস্যা হয়েছে");
  }

  return res.json();
}
