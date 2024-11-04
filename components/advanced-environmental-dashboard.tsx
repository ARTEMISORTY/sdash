/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  CalendarIcon,
  LeafIcon,
  BoltIcon,
  RecycleIcon,
  TrashIcon,
  DropletIcon,
  DownloadIcon,
  MenuIcon,
  XIcon,
  MapPinIcon,
  FactoryIcon,
  ZapIcon,
  ArrowRightIcon,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  AreaChart,
  Area,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  ScatterChart,
  Scatter,
} from "recharts";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

class DataStore {
  static kpiData = {
    energyUsage: [
      {
        month: "Jan",
        actual: 150,
        target: 140,
        projection: 155,
        renewable: 90,
        nonRenewable: 60,
      },
      {
        month: "Feb",
        actual: 140,
        target: 135,
        projection: 145,
        renewable: 85,
        nonRenewable: 55,
      },
      {
        month: "Mar",
        actual: 130,
        target: 130,
        projection: 135,
        renewable: 80,
        nonRenewable: 50,
      },
      {
        month: "Apr",
        actual: 120,
        target: 125,
        projection: 125,
        renewable: 75,
        nonRenewable: 45,
      },
      {
        month: "May",
        actual: 110,
        target: 120,
        projection: 115,
        renewable: 70,
        nonRenewable: 40,
      },
      {
        month: "Jun",
        actual: 100,
        target: 115,
        projection: 105,
        renewable: 65,
        nonRenewable: 35,
      },
    ],
    energySourceBreakdown: [
      { source: "Solar", percentage: 40 },
      { source: "Wind", percentage: 30 },
      { source: "Hydro", percentage: 15 },
      { source: "Natural Gas", percentage: 10 },
      { source: "Coal", percentage: 5 },
    ],
    wasteManagement: [
      {
        month: "Jan",
        recyclable: 45,
        compostable: 30,
        landfill: 25,
        hazardous: 5,
        electronic: 10,
      },
      {
        month: "Feb",
        recyclable: 48,
        compostable: 32,
        landfill: 20,
        hazardous: 4,
        electronic: 12,
      },
      {
        month: "Mar",
        recyclable: 50,
        compostable: 35,
        landfill: 15,
        hazardous: 3,
        electronic: 11,
      },
      {
        month: "Apr",
        recyclable: 55,
        compostable: 33,
        landfill: 12,
        hazardous: 3,
        electronic: 13,
      },
      {
        month: "May",
        recyclable: 58,
        compostable: 34,
        landfill: 8,
        hazardous: 2,
        electronic: 12,
      },
      {
        month: "Jun",
        recyclable: 60,
        compostable: 35,
        landfill: 5,
        hazardous: 1,
        electronic: 14,
      },
    ],
    wasteDistribution: [
      { type: "Recyclable", value: 60 },
      { type: "Compostable", value: 35 },
      { type: "Landfill", value: 5 },
      { type: "Hazardous", value: 1 },
      { type: "Electronic", value: 14 },
    ],
    recyclingEfficiency: [
      { material: "Paper", efficiency: 85 },
      { material: "Plastic", efficiency: 70 },
      { material: "Glass", efficiency: 90 },
      { material: "Metal", efficiency: 95 },
      { material: "Electronics", efficiency: 60 },
    ],
    scrapManagement: [
      { month: "Jan", steel: 20, aluminum: 15, copper: 10, other: 5 },
      { month: "Feb", steel: 22, aluminum: 14, copper: 12, other: 4 },
      { month: "Mar", steel: 25, aluminum: 13, copper: 11, other: 3 },
      { month: "Apr", steel: 23, aluminum: 12, copper: 13, other: 4 },
      { month: "May", steel: 26, aluminum: 11, copper: 12, other: 3 },
      { month: "Jun", steel: 28, aluminum: 10, copper: 14, other: 2 },
    ],
    scrapMetalTypes: [
      { type: "Steel", value: 28 },
      { type: "Aluminum", value: 10 },
      { type: "Copper", value: 14 },
      { type: "Other", value: 2 },
    ],
    scrapRecyclingRate: [
      { metal: "Steel", rate: 95 },
      { metal: "Aluminum", rate: 90 },
      { metal: "Copper", rate: 88 },
      { metal: "Other", rate: 75 },
    ],
    greenhouseGasEmissions: [
      { month: "Jan", direct: 100, indirect: 150, total: 250 },
      { month: "Feb", direct: 95, indirect: 145, total: 240 },
      { month: "Mar", direct: 90, indirect: 140, total: 230 },
      { month: "Apr", direct: 85, indirect: 135, total: 220 },
      { month: "May", direct: 80, indirect: 130, total: 210 },
      { month: "Jun", direct: 75, indirect: 125, total: 200 },
    ],
    emissionsSources: [
      { source: "Manufacturing", value: 40 },
      { source: "Transportation", value: 25 },
      { source: "Office Operations", value: 15 },
      { source: "Waste Management", value: 10 },
      { source: "Other", value: 10 },
    ],
    electricityUtilization: [
      { department: "Production", usage: 500, efficiency: 85 },
      { department: "Office", usage: 200, efficiency: 75 },
      { department: "Warehouse", usage: 300, efficiency: 80 },
      { department: "R&D", usage: 150, efficiency: 90 },
      { department: "Cafeteria", usage: 100, efficiency: 70 },
    ],
    electricityTrends: [
      { month: "Jan", usage: 1200, target: 1300 },
      { month: "Feb", usage: 1180, target: 1250 },
      { month: "Mar", usage: 1150, target: 1200 },
      { month: "Apr", usage: 1100, target: 1150 },
      { month: "May", usage: 1050, target: 1100 },
      { month: "Jun", usage: 1000, target: 1050 },
    ],
    waterUsage: [
      { month: "Jan", usage: 1000, recycled: 200, target: 950 },
      { month: "Feb", usage: 950, recycled: 220, target: 900 },
      { month: "Mar", usage: 900, recycled: 240, target: 850 },
      { month: "Apr", usage: 850, recycled: 260, target: 800 },
      { month: "May", usage: 800, recycled: 280, target: 750 },
      { month: "Jun", usage: 750, recycled: 300, target: 700 },
    ],
    waterUsageByProcess: [
      { process: "Cooling", usage: 40 },
      { process: "Cleaning", usage: 25 },
      { process: "Production", usage: 20 },
      { process: "Landscaping", usage: 10 },
      { process: "Other", usage: 5 },
    ],
    carbonFootprint: [
      { category: "Energy", value: 40 },
      { category: "Transportation", value: 25 },
      { category: "Waste", value: 15 },
      { category: "Water", value: 10 },
      { category: "Other", value: 10 },
    ],
    carbonOffsetProjects: [
      { project: "Reforestation", offset: 30 },
      { project: "Renewable Energy", offset: 25 },
      { project: "Energy Efficiency", offset: 20 },
      { project: "Methane Capture", offset: 15 },
      { project: "Other", offset: 10 },
    ],
    sustainabilityScore: [
      { category: "Energy Efficiency", score: 8 },
      { category: "Waste Reduction", score: 7 },
      { category: "Water Conservation", score: 6 },
      { category: "Carbon Footprint", score: 7 },
      { category: "Sustainable Sourcing", score: 8 },
      { category: "Employee Engagement", score: 9 },
    ],
  };

  static COLORS = [
    "#00C49F",
    "#FFBB28",
    "#FF8042",
    "#0088FE",
    "#8884D8",
    "#82ca9d",
  ];
}
interface DateRangePickerProps {
  startDate: string;
  endDate: string;
  onStartDateChange: (date: string) => void;
  onEndDateChange: (date: string) => void;
}

function DateRangePicker({
  startDate,
  endDate,
  onStartDateChange,
  onEndDateChange,
}: DateRangePickerProps) {
  return (
    <div className="flex items-center space-x-2">
      <div className="flex items-center space-x-2">
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Input
            type="date"
            id="start-date"
            value={startDate}
            onChange={(e) => onStartDateChange(e.target.value)}
          />
        </div>
        <div className="text-center">
          <ArrowRightIcon className="h-5 w-5" />
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Input
            type="date"
            id="end-date"
            value={endDate}
            onChange={(e) => onEndDateChange(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}

export function AdvancedEnvironmentalDashboardComponent() {
  const [activeTab, setActiveTab] = useState("overview");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState("All Locations");
  const [startDate, setStartDate] = useState("2023-01-01");
  const [endDate, setEndDate] = useState("2023-06-30");
  const [energyThreshold, setEnergyThreshold] = useState([0, 200]);

  const toggleSidebar = useCallback(() => setSidebarOpen((prev) => !prev), []);

  const exportData = useCallback((format: any) => {
    console.log(`Exporting data in ${format} format`);
  }, []);

  const filterDataByThreshold = useCallback((data: any[], threshold: number[]) => {
    return data.filter(
      (item: { actual: number; }) => item.actual >= threshold[0] && item.actual <= threshold[1]
    );
  }, []);

  const filteredEnergyData = filterDataByThreshold(DataStore.kpiData.energyUsage, energyThreshold);

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <AnimatePresence>
        {sidebarOpen && (
          <motion.div
            initial={{ x: -300 }}
            animate={{ x: 0 }}
            exit={{ x: -300 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg"
          >
            <div className="p-4">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-green-600">
                  EcoMetrics Pro
                </h2>
                <Button variant="ghost" size="icon" onClick={toggleSidebar}>
                  <XIcon className="h-6 w-6" />
                </Button>
              </div>
              <nav className="space-y-2">
                <Button
                  variant="ghost"
                  className="w-full justify-start"
                  onClick={() => setActiveTab("overview")}
                >
                  <LeafIcon className="mr-2 h-4 w-4" />
                  Overview
                </Button>
                <Button
                  variant="ghost"
                  className="w-full justify-start"
                  onClick={() => setActiveTab("energy")}
                >
                  <BoltIcon className="mr-2 h-4 w-4" />
                  Energy
                </Button>
                <Button
                  variant="ghost"
                  className="w-full justify-start"
                  onClick={() => setActiveTab("waste")}
                >
                  <RecycleIcon className="mr-2 h-4 w-4" />
                  Waste
                </Button>
                <Button
                  variant="ghost"
                  className="w-full justify-start"
                  onClick={() => setActiveTab("scrap")}
                >
                  <FactoryIcon className="mr-2 h-4 w-4" />
                  Scrap Management
                </Button>
                <Button
                  variant="ghost"
                  className="w-full justify-start"
                  onClick={() => setActiveTab("ghg")}
                >
                  <LeafIcon className="mr-2 h-4 w-4" />
                  Greenhouse Gas
                </Button>
                <Button
                  variant="ghost"
                  className="w-full justify-start"
                  onClick={() => setActiveTab("electricity")}
                >
                  <ZapIcon className="mr-2 h-4 w-4" />
                  Electricity
                </Button>
                <Button
                  variant="ghost"
                  className="w-full justify-start"
                  onClick={() => setActiveTab("water")}
                >
                  <DropletIcon className="mr-2 h-4 w-4" />
                  Water
                </Button>
                <Button
                  variant="ghost"
                  className="w-full justify-start"
                  onClick={() => setActiveTab("carbon")}
                >
                  <LeafIcon className="mr-2 h-4 w-4" />
                  Carbon Footprint
                </Button>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main content */}
      <div className="flex-1 overflow-auto">
        {/* Header */}
        <header className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
            <div className="flex items-center">
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleSidebar}
                className="mr-4"
              >
                <MenuIcon className="h-6 w-6" />
              </Button>
              <h1 className="text-2xl font-semibold text-gray-900">
                Environmental Dashboard
              </h1>
            </div>
            <div className="flex items-center space-x-4">
              <Select
                value={selectedLocation}
                onValueChange={setSelectedLocation}
              >
                <SelectTrigger className="w-[180px]">
                  <MapPinIcon className="mr-2 h-4 w-4" />
                  <SelectValue placeholder="Select location" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="All Locations">All Locations</SelectItem>
                  <SelectItem value="North America">North America</SelectItem>
                  <SelectItem value="Europe">Europe</SelectItem>
                  <SelectItem value="Asia">Asia</SelectItem>
                </SelectContent>
              </Select>
              <DateRangePicker
                startDate={startDate}
                endDate={endDate}
                onStartDateChange={setStartDate}
                onEndDateChange={setEndDate}
              />
              <Select onValueChange={exportData}>
                <SelectTrigger className="w-[180px]">
                  <DownloadIcon className="mr-2 h-4 w-4" />
                  <SelectValue placeholder="Export Data" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="pdf">Export as PDF</SelectItem>
                  <SelectItem value="ppt">Export as PowerPoint</SelectItem>
                  <SelectItem value="excel">Export Data to Excel</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </header>

        {/* Dashboard content */}
        <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <Tabs
            value={activeTab}
            onValueChange={setActiveTab}
            className="space-y-4"
          >
            <TabsContent value="overview" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Sustainability Overview</CardTitle>
                  <CardDescription>
                    Key performance indicators across all areas
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-sm font-medium">
                          Overall Sustainability Score
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center justify-between">
                          <Progress value={78} className="w-2/3" />
                          <span className="text-2xl font-bold text-green-600">
                            78%
                          </span>
                        </div>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-sm font-medium">
                          Energy Efficiency
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center justify-between">
                          <Progress value={85} className="w-2/3" />
                          <span className="text-2xl font-bold text-green-600">
                            85%
                          </span>
                        </div>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-sm font-medium">
                          Waste Reduction
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center justify-between">
                          <Progress value={72} className="w-2/3" />
                          <span className="text-2xl font-bold text-green-600">
                            72%
                          </span>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Sustainability Radar</CardTitle>
                  <CardDescription>
                    Comprehensive view of sustainability performance
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-auto">
                    <ChartContainer
                      config={{
                        score: {
                          label: "Score",
                          color: "hsl(var(--chart-1))",
                        },
                      }}
                    >
                      <ResponsiveContainer width="100%" height="100%">
                        <RadarChart
                          cx="50%"
                          cy="50%"
                          outerRadius="80%"
                          data={DataStore.kpiData.sustainabilityScore}
                        >
                          <PolarGrid />
                          <PolarAngleAxis dataKey="category" />
                          <PolarRadiusAxis angle={30} domain={[0, 10]} />
                          <Radar
                            name="Score"
                            dataKey="score"
                            stroke="var(--color-score)"
                            fill="var(--color-score)"
                            fillOpacity={0.6}
                          />
                          <ChartTooltip content={<ChartTooltipContent />} />
                          <Legend />
                        </RadarChart>
                      </ResponsiveContainer>
                    </ChartContainer>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            {/* Repeat similar changes for other tabs, using DataStore.kpiData */}
            {/* For brevity, other tabs are not displayed here */}
          </Tabs>
        </main>
      </div>
    </div>
  );
}
