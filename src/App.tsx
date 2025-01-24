import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import PerformanceMetrics from "./pages/analytics/PerformanceMetrics";
import DeviceUsage from "./pages/analytics/DeviceUsage";
import DataHistory from "./pages/analytics/DataHistory";
import ActiveAlerts from "./pages/alerts/ActiveAlerts";
import AlertHistory from "./pages/alerts/AlertHistory";
import AlertSettings from "./pages/alerts/AlertSettings";
import UserManagement from "./pages/settings/UserManagement";
import Security from "./pages/settings/Security";
import Network from "./pages/settings/Network";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/analytics/performance" element={<PerformanceMetrics />} />
          <Route path="/analytics/usage" element={<DeviceUsage />} />
          <Route path="/analytics/history" element={<DataHistory />} />
          <Route path="/alerts/active" element={<ActiveAlerts />} />
          <Route path="/alerts/history" element={<AlertHistory />} />
          <Route path="/alerts/settings" element={<AlertSettings />} />
          <Route path="/settings/users" element={<UserManagement />} />
          <Route path="/settings/security" element={<Security />} />
          <Route path="/settings/network" element={<Network />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;