import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Device } from "@/services/mockData";
import { LineChart, Line, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts";
import { Switch } from "@/components/ui/switch";
import { useState } from "react";

interface DeviceCardProps {
  device: Device;
  historicalData: any[];
}

export function DeviceCard({ device, historicalData }: DeviceCardProps) {
  const [isOn, setIsOn] = useState(device.metrics.power ?? false);

  const renderMetricValue = (metric: string, value: number | boolean | undefined) => {
    if (typeof value === "boolean") {
      return (
        <div className="flex items-center space-x-2">
          <Switch
            checked={value}
            onCheckedChange={(checked) => setIsOn(checked)}
          />
          <span>{value ? "ON" : "OFF"}</span>
        </div>
      );
    }
    
    if (typeof value === "number") {
      return (
        <span className="text-2xl font-bold">
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
    <Card className="w-full">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">
          {device.name}
          <span
            className={`ml-2 inline-block h-2 w-2 rounded-full ${
              device.status === "online" ? "bg-iot-success" : "bg-iot-error"
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
            <div key={metric} className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm capitalize text-muted-foreground">
                  {metric}
                </span>
                {renderMetricValue(metric, value)}
              </div>
              {typeof value === "number" && (
                <div className="h-[100px]">
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
                      <Tooltip />
                      <Line
                        type="monotone"
                        dataKey="value"
                        stroke="#1a73e8"
                        strokeWidth={2}
                        dot={false}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              )}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}