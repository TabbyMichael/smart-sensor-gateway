import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import PerformanceMetrics from "./pages/analytics/PerformanceMetrics";
import DeviceUsage from "./pages/analytics/DeviceUsage";
import DataHistory from "./pages/analytics/DataHistory";

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
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;