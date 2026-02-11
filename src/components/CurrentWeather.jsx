import { motion } from "framer-motion";
import { Badge } from "./ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

export default function CurrentWeather({ hourly }) {
  const temp = Math.round(hourly.temperature_2m[0]);
  const time = hourly.time?.[0]?.split("T")[1] ?? "--:--";

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="lg:col-span-1"
    >
      <Card className="h-full bg-card/70 backdrop-blur">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>বর্তমান আবহাওয়া</CardTitle>
          <Badge variant="outline">Now</Badge>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-end gap-3">
            <p className="text-5xl font-semibold tracking-tight">{temp}°C</p>
            <p className="text-sm text-muted-foreground">সময় {time}</p>
          </div>
          <div className="rounded-lg border border-white/10 bg-white/5 p-4 text-sm text-muted-foreground">
            সূচক: আজকের আবহাওয়ার সারাংশ দ্রুত পরিবর্তিত হতে পারে।
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
