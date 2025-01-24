import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
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
      { title: "Performance Metrics", url: "#", icon: ChartBar },
      { title: "Device Usage", url: "#", icon: ChartLine },
      { title: "Data History", url: "#", icon: Database },
    ],
  },
  {
    title: "Alerts",
    icon: AlertTriangle,
    url: "#",
    subItems: [
      { title: "Active Alerts", url: "#", icon: Bell },
      { title: "Alert History", url: "#", icon: AlertTriangle },
      { title: "Alert Settings", url: "#", icon: Settings },
    ],
  },
  {
    title: "Settings",
    icon: Settings,
    url: "#",
    subItems: [
      { title: "User Management", url: "#", icon: Users },
      { title: "Security", url: "#", icon: Shield },
      { title: "Network", url: "#", icon: Network },
    ],
  },
];

export function DashboardSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>IoT Dashboard</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon className="h-4 w-4" />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                  {item.subItems && (
                    <SidebarMenuSub>
                      {item.subItems.map((subItem) => (
                        <SidebarMenuSubItem key={subItem.title}>
                          <SidebarMenuSubButton asChild>
                            <a href={subItem.url}>
                              <subItem.icon className="h-4 w-4" />
                              <span>{subItem.title}</span>
                            </a>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                      ))}
                    </SidebarMenuSub>
                  )}
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}