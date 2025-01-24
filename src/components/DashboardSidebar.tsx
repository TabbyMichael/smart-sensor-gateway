import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import {
  Home,
  ChartLine,
  ChartBar,
  Database,
  AlertTriangle,
  Bell,
  Settings,
  Users,
  Shield,
  Network,
} from "lucide-react";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

const menuItems = [
  {
    title: "Dashboard",
    icon: Home,
    url: "/",
  },
  {
    title: "Analytics",
    icon: ChartLine,
    url: "#",
    subItems: [
      { title: "Performance Metrics", url: "/analytics/performance", icon: ChartBar },
      { title: "Device Usage", url: "/analytics/usage", icon: ChartLine },
      { title: "Data History", url: "/analytics/history", icon: Database },
    ],
  },
  {
    title: "Alerts",
    icon: AlertTriangle,
    url: "#",
    subItems: [
      { title: "Active Alerts", url: "/alerts/active", icon: Bell },
      { title: "Alert History", url: "/alerts/history", icon: AlertTriangle },
      { title: "Alert Settings", url: "/alerts/settings", icon: Settings },
    ],
  },
  {
    title: "Settings",
    icon: Settings,
    url: "#",
    subItems: [
      { title: "User Management", url: "/settings/users", icon: Users },
      { title: "Security", url: "/settings/security", icon: Shield },
      { title: "Network", url: "/settings/network", icon: Network },
    ],
  },
];

export function DashboardSidebar() {
  const location = useLocation();

  const isActive = (url: string) => location.pathname === url;

  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <SidebarGroupLabel className="text-lg font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              IoT Dashboard
            </SidebarGroupLabel>
          </motion.div>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <SidebarMenuItem>
                    <SidebarMenuButton
                      asChild
                      className={isActive(item.url) ? "bg-accent" : ""}
                    >
                      <a href={item.url} className="group">
                        <item.icon className="h-4 w-4 transition-colors group-hover:text-primary" />
                        <span>{item.title}</span>
                      </a>
                    </SidebarMenuButton>
                    {item.subItems && (
                      <SidebarMenuSub>
                        {item.subItems.map((subItem) => (
                          <SidebarMenuSubItem key={subItem.title}>
                            <SidebarMenuSubButton
                              asChild
                              className={isActive(subItem.url) ? "bg-accent" : ""}
                            >
                              <a href={subItem.url} className="group">
                                <subItem.icon className="h-4 w-4 transition-colors group-hover:text-primary" />
                                <span>{subItem.title}</span>
                              </a>
                            </SidebarMenuSubButton>
                          </SidebarMenuSubItem>
                        ))}
                      </SidebarMenuSub>
                    )}
                  </SidebarMenuItem>
                </motion.div>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}