export interface Device {
  id: string;
  name: string;
  type: "sensor" | "actuator";
  status: "online" | "offline";
  lastUpdate: string;
  metrics: {
    temperature?: number;
    humidity?: number;
    pressure?: number;
    power?: boolean;
  };
}

export const mockDevices: Device[] = [
  {
    id: "sensor-001",
    name: "Temperature Sensor 1",
    type: "sensor",
    status: "online",
    lastUpdate: new Date().toISOString(),
    metrics: {
      temperature: 23.5,
      humidity: 45,
    },
  },
  {
    id: "sensor-002",
    name: "Pressure Sensor 1",
    type: "sensor",
    status: "online",
    lastUpdate: new Date().toISOString(),
    metrics: {
      pressure: 1013,
    },
  },
  {
    id: "actuator-001",
    name: "Smart Switch 1",
    type: "actuator",
    status: "online",
    lastUpdate: new Date().toISOString(),
    metrics: {
      power: true,
    },
  },
];

export function generateMockData() {
  return mockDevices.map((device) => ({
    ...device,
    lastUpdate: new Date().toISOString(),
    metrics: {
      ...device.metrics,
      temperature: device.metrics.temperature
        ? device.metrics.temperature + (Math.random() - 0.5) * 2
        : undefined,
      humidity: device.metrics.humidity
        ? device.metrics.humidity + (Math.random() - 0.5) * 5
        : undefined,
      pressure: device.metrics.pressure
        ? device.metrics.pressure + (Math.random() - 0.5) * 10
        : undefined,
    },
  }));
}