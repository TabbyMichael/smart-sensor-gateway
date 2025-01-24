import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Network as NetworkIcon, Wifi, Activity } from "lucide-react";

const Network = () => {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Network Settings</h1>
      
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <NetworkIcon className="h-4 w-4" />
            MQTT Broker Settings
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <label className="text-sm text-gray-500">Broker URL</label>
            <Input defaultValue="mqtt://localhost:1883" />
          </div>
          <div>
            <label className="text-sm text-gray-500">Username</label>
            <Input />
          </div>
          <div>
            <label className="text-sm text-gray-500">Password</label>
            <Input type="password" />
          </div>
          <Button>Save MQTT Settings</Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Wifi className="h-4 w-4" />
            Network Status
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span>Connection Status</span>
              <span className="text-green-500">Connected</span>
            </div>
            <div className="flex justify-between items-center">
              <span>Latency</span>
              <span>45ms</span>
            </div>
            <div className="flex justify-between items-center">
              <span>Packet Loss</span>
              <span>0.1%</span>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Activity className="h-4 w-4" />
            Network Diagnostics
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Button variant="outline" className="w-full">Run Network Test</Button>
          <div className="text-sm text-gray-600">
            Last test run: 2 hours ago - All systems operational
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Network;