export default function HourlyForecast({ hourly }) {
  return (
    <div>
      <h2>🕒 ঘণ্টাভিত্তিক পূর্বাভাস</h2>
      <ul>
        {hourly.time.slice(0, 12).map((time, i) => (
          <li key={time}>
            {time.split("T")[1]} — {hourly.temperature_2m[i]}°C
          </li>
        ))}
      </ul>
    </div>
  );
}
