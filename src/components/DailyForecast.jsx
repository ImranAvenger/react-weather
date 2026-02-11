import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

export default function DailyForecast({ daily }) {
  const items = daily.time.map((day, i) => ({
    day,
    min: Math.round(daily.temperature_2m_min[i]),
    max: Math.round(daily.temperature_2m_max[i]),
  }));

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="lg:col-span-1"
    >
      <Card className="h-full bg-card/70 backdrop-blur">
        <CardHeader>
          <CardTitle>📅 দৈনিক পূর্বাভাস</CardTitle>
        </CardHeader>
        <CardContent>
          <motion.ul
            initial="hidden"
            animate="show"
            variants={{
              hidden: { opacity: 0 },
              show: { opacity: 1, transition: { staggerChildren: 0.06 } },
            }}
            className="space-y-3"
          >
            {items.map(item => (
              <motion.li
                key={item.day}
                variants={{
                  hidden: { opacity: 0, y: 6 },
                  show: { opacity: 1, y: 0 },
                }}
                className="flex items-center justify-between rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm"
              >
                <span className="text-muted-foreground">{item.day}</span>
                <span className="font-medium">
                  {item.min}°C - {item.max}°C
                </span>
              </motion.li>
            ))}
          </motion.ul>
        </CardContent>
      </Card>
    </motion.div>
  );
}
