"use client";
import { useState } from "react";
import { Card } from "../components/card";
import { Button } from "../components/button";

export default function ROICalculator() {
  const [revenue, setRevenue] = useState<number | "">("");
  const [traffic, setTraffic] = useState<number | "">("");
  const [conversionRate, setConversionRate] = useState<number | "">("");
  const [potentialGrowth, setPotentialGrowth] = useState<number | null>(null);

  const calculateROI = () => {
    if (!revenue || !traffic || !conversionRate) return;
    const currentSales = (traffic * conversionRate) / 100;
    const improvedSales = currentSales * 1.2; // Assuming a 20% improvement with Jinn
    const addedRevenue = (improvedSales - currentSales) * (revenue / currentSales);
    setPotentialGrowth(Math.round(addedRevenue));
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <Card>
        <h2 className="text-xl font-bold mb-4">Jinn ROI Calculator</h2>
        <p className="text-gray-600 mb-4">Estimate how much more you could earn using Jinn!</p>
        <input
          type="number"
          placeholder="Monthly Revenue (INR)"
          value={revenue}
          onChange={(e) => setRevenue(Number(e.target.value))}
          className="mb-2 p-2 border rounded w-full"
        />
        <input
          type="number"
          placeholder="Monthly Traffic"
          value={traffic}
          onChange={(e) => setTraffic(Number(e.target.value))}
          className="mb-2 p-2 border rounded w-full"
        />
        <input
          type="number"
          placeholder="Conversion Rate (%)"
          value={conversionRate}
          onChange={(e) => setConversionRate(Number(e.target.value))}
          className="mb-4 p-2 border rounded w-full"
        />
        <Button onClick={calculateROI} className="w-full">
          Calculate Potential Growth
        </Button>
        {potentialGrowth !== null && (
          <p className="mt-4 text-lg font-semibold text-green-600">
            Potential Additional Revenue: ₹{potentialGrowth}
          </p>
        )}
      </Card>
    </div>
  );
}
