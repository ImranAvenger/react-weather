export default function DailyForecast({ daily }) {
  return (
    <div>
      <h2>📅 দৈনিক পূর্বাভাস</h2>
      <ul>
        {daily.time.map((day, i) => (
          <li key={day}>
            {day} → 🌡️ {daily.temperature_2m_min[i]}°C - {daily.temperature_2m_max[i]}°C
          </li>
        ))}
      </ul>
    </div>
  );
}
