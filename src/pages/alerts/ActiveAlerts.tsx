import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertTriangle, Bell, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const alerts = [
  {
    id: 1,
    device: "Temperature Sensor 1",
    type: "critical",
    message: "Temperature exceeds threshold: 35°C",
    timestamp: new Date().toISOString(),
  },
  {
    id: 2,
    device: "Humidity Sensor 2",
    type: "warning",
    message: "Humidity level above normal: 80%",
    timestamp: new Date().toISOString(),
  },
];

const ActiveAlerts = () => {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Active Alerts</h1>
      <div className="grid gap-4">
        {alerts.map((alert) => (
          <Card key={alert.id}>
            <CardHeader className="flex flex-row items-center space-y-0">
              <CardTitle className="flex items-center gap-2">
                {alert.type === "critical" ? (
                  <AlertTriangle className="text-red-500" />
                ) : (
                  <Bell className="text-yellow-500" />
                )}
                {alert.device}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-2">{alert.message}</p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">
                  {new Date(alert.timestamp).toLocaleString()}
                </span>
                <Button variant="outline" size="sm">
                  <CheckCircle className="mr-2 h-4 w-4" />
                  Acknowledge
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ActiveAlerts;