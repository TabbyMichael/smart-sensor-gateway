import { useEffect, useState } from "react";
import { Device, generateMockData } from "@/services/mockData";
import { DeviceCard } from "@/components/DeviceCard";
import { DashboardSidebar } from "@/components/DashboardSidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

const Index = () => {
  const [devices, setDevices] = useState<Device[]>([]);
  const [historicalData, setHistoricalData] = useState<{ [key: string]: any[] }>({});

  useEffect(() => {
    // Initial data load
    const initialData = generateMockData();
    setDevices(initialData);
    
    // Initialize historical data
    const initialHistory: { [key: string]: any[] } = {};
    initialData.forEach((device) => {
      initialHistory[device.id] = [device];
    });
    setHistoricalData(initialHistory);

    // Set up interval for real-time updates
    const interval = setInterval(() => {
      const newData = generateMockData();
      setDevices(newData);
      
      // Update historical data
      setHistoricalData((prev) => {
        const updated = { ...prev };
        newData.forEach((device) => {
          updated[device.id] = [...(prev[device.id] || []), device].slice(-20); // Keep last 20 readings
        });
        return updated;
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
        <DashboardSidebar />
        <main className="flex-1 p-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">IoT Dashboard</h1>
              <p className="text-muted-foreground">
                Monitor and control your IoT devices
              </p>
            </div>
            <SidebarTrigger />
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {devices.map((device) => (
              <DeviceCard
                key={device.id}
                device={device}
                historicalData={historicalData[device.id] || []}
              />
            ))}
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Index;