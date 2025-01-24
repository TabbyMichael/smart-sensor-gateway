import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Device } from "@/services/mockData";
import { LineChart, Line, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts";
import { Switch } from "@/components/ui/switch";
import { useState } from "react";
import { motion } from "framer-motion";
import { Activity, ThermometerSun, Droplets, Gauge } from "lucide-react";

interface DeviceCardProps {
  device: Device;
  historicalData: any[];
}

export function DeviceCard({ device, historicalData }: DeviceCardProps) {
  const [isOn, setIsOn] = useState(device.metrics.power ?? false);

  const getMetricIcon = (metric: string) => {
    switch (metric) {
      case "temperature":
        return <ThermometerSun className="h-4 w-4 text-iot-blue" />;
      case "humidity":
        return <Droplets className="h-4 w-4 text-iot-teal" />;
      case "pressure":
        return <Gauge className="h-4 w-4 text-iot-warning" />;
      default:
        return <Activity className="h-4 w-4 text-iot-blue" />;
    }
  };

  const renderMetricValue = (metric: string, value: number | boolean | undefined) => {
    if (typeof value === "boolean") {
      return (
        <div className="flex items-center space-x-2">
          <Switch
            checked={value}
            onCheckedChange={(checked) => setIsOn(checked)}
          />
          <span className={value ? "text-iot-success" : "text-iot-error"}>
            {value ? "ON" : "OFF"}
          </span>
        </div>
      );
    }
    
    if (typeof value === "number") {
      return (
        <span className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
          {value.toFixed(1)}
          {metric === "temperature" && "°C"}
          {metric === "humidity" && "%"}
          {metric === "pressure" && " hPa"}
        </span>
      );
    }
    
    return null;
  };

  const getMetricData = () => {
    const metric = Object.keys(device.metrics)[0];
    return historicalData.map((data: any) => ({
      time: new Date(data.lastUpdate).toLocaleTimeString(),
      value: data.metrics[metric],
    }));
  };

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <Card className="w-full backdrop-blur-sm bg-card/80 border-muted/20 shadow-lg">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium flex items-center gap-2">
            {device.name}
            <span
              className={`inline-flex h-2 w-2 rounded-full ${
                device.status === "online" 
                  ? "bg-iot-success animate-pulse" 
                  : "bg-iot-error"
              }`}
            />
          </CardTitle>
          <span className="text-xs text-muted-foreground">
            Last update: {new Date(device.lastUpdate).toLocaleTimeString()}
          </span>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {Object.entries(device.metrics).map(([metric, value]) => (
              <motion.div
                key={metric}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                className="space-y-2"
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm capitalize text-muted-foreground flex items-center gap-2">
                    {getMetricIcon(metric)}
                    {metric}
                  </span>
                  {renderMetricValue(metric, value)}
                </div>
                {typeof value === "number" && (
                  <div className="h-[100px] mt-2">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={getMetricData()}>
                        <XAxis
                          dataKey="time"
                          stroke="#888888"
                          fontSize={12}
                          tickLine={false}
                          axisLine={false}
                        />
                        <YAxis
                          stroke="#888888"
                          fontSize={12}
                          tickLine={false}
                          axisLine={false}
                          tickFormatter={(value) => `${value}`}
                        />
                        <Tooltip
                          contentStyle={{
                            background: "hsl(var(--card))",
                            border: "1px solid hsl(var(--border))",
                            borderRadius: "var(--radius)",
                          }}
                        />
                        <Line
                          type="monotone"
                          dataKey="value"
                          stroke="hsl(var(--primary))"
                          strokeWidth={2}
                          dot={false}
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}