import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Device 1', usage: 85 },
  { name: 'Device 2', usage: 63 },
  { name: 'Device 3', usage: 92 },
  { name: 'Device 4', usage: 78 },
  { name: 'Device 5', usage: 56 },
];

const DeviceUsage = () => {
  return (
    <div className="p-8 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Device Usage</h1>
          <p className="text-muted-foreground">Track device utilization and patterns</p>
        </div>
      </div>

      <Card className="col-span-3">
        <CardHeader>
          <CardTitle>Device Usage Statistics</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="usage" fill="#00796b" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Active Devices</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12/15</div>
            <p className="text-xs text-muted-foreground">Currently active devices</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Total Runtime</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,248 hours</div>
            <p className="text-xs text-muted-foreground">This month</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DeviceUsage;