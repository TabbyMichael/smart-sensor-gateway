import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { Shield, Key, Lock } from "lucide-react";

const Security = () => {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Security Settings</h1>
      
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Lock className="h-4 w-4" />
            Two-Factor Authentication
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <span>Enable 2FA</span>
            <Switch />
          </div>
          <Button variant="outline">Configure 2FA</Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Key className="h-4 w-4" />
            API Keys
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <span>Active API Keys: 2</span>
            <Button>Generate New Key</Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Shield className="h-4 w-4" />
            Security Logs
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            {[
              "Login attempt from new device - 10 minutes ago",
              "Password changed - 2 days ago",
              "New API key generated - 5 days ago",
            ].map((log, index) => (
              <p key={index} className="text-sm text-gray-600">{log}</p>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Security;