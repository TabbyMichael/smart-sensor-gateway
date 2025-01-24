import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertTriangle, Bell, Search } from "lucide-react";
import { Input } from "@/components/ui/input";

const alertHistory = [
  {
    id: 1,
    device: "Temperature Sensor 1",
    type: "critical",
    message: "Temperature exceeds threshold: 35°C",
    timestamp: "2024-02-10T10:30:00",
    resolved: true,
  },
  {
    id: 2,
    device: "Humidity Sensor 2",
    type: "warning",
    message: "Humidity level above normal: 80%",
    timestamp: "2024-02-09T15:45:00",
    resolved: true,
  },
];

const AlertHistory = () => {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Alert History</h1>
      <div className="relative">
        <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-500" />
        <Input placeholder="Search alerts..." className="pl-8" />
      </div>
      <div className="grid gap-4">
        {alertHistory.map((alert) => (
          <Card key={alert.id}>
            <CardHeader className="flex flex-row items-center space-y-0">
              <CardTitle className="flex items-center gap-2">
                {alert.type === "critical" ? (
                  <AlertTriangle className="text-gray-400" />
                ) : (
                  <Bell className="text-gray-400" />
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
                <span className="text-sm text-green-500">Resolved</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default AlertHistory;