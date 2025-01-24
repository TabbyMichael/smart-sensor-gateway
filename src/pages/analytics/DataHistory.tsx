import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const data = [
  { id: 1, device: "Temperature Sensor 1", value: "24°C", timestamp: "2024-03-20 10:30:00" },
  { id: 2, device: "Humidity Sensor 1", value: "45%", timestamp: "2024-03-20 10:29:00" },
  { id: 3, device: "Motion Sensor 1", value: "Active", timestamp: "2024-03-20 10:28:00" },
  { id: 4, device: "Temperature Sensor 2", value: "22°C", timestamp: "2024-03-20 10:27:00" },
  { id: 5, device: "Humidity Sensor 2", value: "48%", timestamp: "2024-03-20 10:26:00" },
];

const DataHistory = () => {
  return (
    <div className="p-8 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Data History</h1>
          <p className="text-muted-foreground">View and analyze historical data</p>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Historical Data</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Device</TableHead>
                <TableHead>Value</TableHead>
                <TableHead>Timestamp</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {data.map((row) => (
                <TableRow key={row.id}>
                  <TableCell>{row.device}</TableCell>
                  <TableCell>{row.value}</TableCell>
                  <TableCell>{row.timestamp}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default DataHistory;