import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Bell, Mail, MessageSquare } from "lucide-react";

const AlertSettings = () => {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Alert Settings</h1>
      
      <Card>
        <CardHeader>
          <CardTitle>Notification Channels</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <span>Email Notifications</span>
            </div>
            <Switch />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <MessageSquare className="h-4 w-4" />
              <span>SMS Notifications</span>
            </div>
            <Switch />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Bell className="h-4 w-4" />
              <span>Push Notifications</span>
            </div>
            <Switch />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Alert Thresholds</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <label className="text-sm text-gray-500">Temperature Threshold (°C)</label>
            <Input type="number" defaultValue="30" />
          </div>
          <div>
            <label className="text-sm text-gray-500">Humidity Threshold (%)</label>
            <Input type="number" defaultValue="75" />
          </div>
          <Button>Save Thresholds</Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default AlertSettings;