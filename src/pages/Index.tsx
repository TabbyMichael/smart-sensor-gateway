import { useEffect, useState } from "react";
import { Device, generateMockData } from "@/services/mockData";
import { DeviceCard } from "@/components/DeviceCard";
import { DashboardSidebar } from "@/components/DashboardSidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { motion } from "framer-motion";
import { useToast } from "@/components/ui/use-toast";

const Index = () => {
  const [devices, setDevices] = useState<Device[]>([]);
  const [historicalData, setHistoricalData] = useState<{ [key: string]: any[] }>({});
  const { toast } = useToast();

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

    toast({
      title: "Dashboard Initialized",
      description: "Real-time monitoring active",
    });

    // Set up interval for real-time updates
    const interval = setInterval(() => {
      const newData = generateMockData();
      setDevices(newData);
      
      // Update historical data
      setHistoricalData((prev) => {
        const updated = { ...prev };
        newData.forEach((device) => {
          updated[device.id] = [...(prev[device.id] || []), device].slice(-20);
        });
        return updated;
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-gradient-to-br from-background to-secondary/20">
        <DashboardSidebar />
        <main className="flex-1 p-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-between mb-8"
          >
            <div>
              <h1 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                IoT Dashboard
              </h1>
              <p className="text-muted-foreground mt-2">
                Monitor and control your IoT devices in real-time
              </p>
            </div>
            <SidebarTrigger />
          </motion.div>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          >
            {devices.map((device, index) => (
              <motion.div
                key={device.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <DeviceCard
                  device={device}
                  historicalData={historicalData[device.id] || []}
                />
              </motion.div>
            ))}
          </motion.div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Index;