import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

export default function HourlyForecast({ hourly }) {
  const items = hourly.time.slice(0, 12).map((time, i) => ({
    time: time.split("T")[1],
    temp: Math.round(hourly.temperature_2m[i]),
  }));

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.1 }}
      className="lg:col-span-1"
    >
      <Card className="h-full bg-card/70 backdrop-blur">
        <CardHeader>
          <CardTitle>🕒 ঘণ্টাভিত্তিক পূর্বাভাস</CardTitle>
        </CardHeader>
        <CardContent>
          <motion.ul
            initial="hidden"
            animate="show"
            variants={{
              hidden: { opacity: 0 },
              show: { opacity: 1, transition: { staggerChildren: 0.05 } },
            }}
            className="grid gap-3 sm:grid-cols-2"
          >
            {items.map(item => (
              <motion.li
                key={item.time}
                variants={{
                  hidden: { opacity: 0, y: 6 },
                  show: { opacity: 1, y: 0 },
                }}
                className="flex items-center justify-between rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm"
              >
                <span className="text-muted-foreground">{item.time}</span>
                <span className="font-medium">{item.temp}°C</span>
              </motion.li>
            ))}
          </motion.ul>
        </CardContent>
      </Card>
    </motion.div>
  );
}
