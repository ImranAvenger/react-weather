export default function CurrentWeather({ hourly }) {
  const temp = hourly.temperature_2m[0];

  return (
    <div>
      <h2>বর্তমান আবহাওয়া</h2>
      <p>🌡️ তাপমাত্রা: {temp}°C</p>
    </div>
  );
}
