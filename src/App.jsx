import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { getWeather } from "./services/weatherApi";
import CurrentWeather from "./components/CurrentWeather";
import HourlyForecast from "./components/HourlyForecast";
import DailyForecast from "./components/DailyForecast";
import { Badge } from "./components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "./components/ui/card";
import { Separator } from "./components/ui/separator";

function App() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    getWeather(23.71, 90.41) // Dhaka
      .then(data => {
        setWeather(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
        <div className="container py-16">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="bg-card/70 backdrop-blur">
              <CardHeader>
                <CardTitle>লোড হচ্ছে...</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                আবহাওয়ার তথ্য আনা হচ্ছে
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
        <div className="container py-16">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="border-destructive/40 bg-card/70 backdrop-blur">
              <CardHeader>
                <CardTitle className="text-destructive">ত্রুটি</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">{error}</CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <div className="container py-10">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-4"
        >
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">
                February 11, 2026
              </p>
              <h1 className="text-3xl font-semibold sm:text-4xl">🌦️ Weather App</h1>
            </div>
            <Badge variant="secondary" className="text-sm">
              Dhaka, BD
            </Badge>
          </div>
          <Separator className="bg-white/10" />
        </motion.div>

        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          <CurrentWeather hourly={weather.hourly} />
          <HourlyForecast hourly={weather.hourly} />
          <DailyForecast daily={weather.daily} />
        </div>
      </div>
    </div>
  );
}

export default App;
