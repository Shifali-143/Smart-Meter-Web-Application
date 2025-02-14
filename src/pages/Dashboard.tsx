import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Logo } from '@/components/Logo';
import { Button } from '@/components/ui/Button';
import { useAuthStore } from '@/store/auth';
import { BarChart, Activity, DollarSign, AlertTriangle } from 'lucide-react';

interface MeterData {
  currentReading: number;
  dailyUsage: number;
  estimatedBill: number;
  alerts: string[];
}

export const Dashboard: React.FC = () => {
  const [meterData, setMeterData] = useState<MeterData>({
    currentReading: 0,
    dailyUsage: 0,
    estimatedBill: 0,
    alerts: [],
  });
  
  const { user, logout } = useAuthStore();
  const navigate = useNavigate();

  useEffect(() => {
    // TODO: Implement actual API call
    // Simulated data for demonstration
    setMeterData({
      currentReading: 45.67,
      dailyUsage: 12.5,
      estimatedBill: 89.99,
      alerts: ['Unusual usage detected yesterday', 'Peak hours approaching'],
    });
  }, []);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Logo />
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-600">Welcome, {user?.email}</span>
            <Button variant="outline" onClick={handleLogout}>
              Logout
            </Button>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-medium text-gray-900">Current Reading</h3>
              <Activity className="w-6 h-6 text-blue-600" />
            </div>
            <p className="text-3xl font-bold text-gray-900">{meterData.currentReading} kWh</p>
            <p className="text-sm text-gray-500 mt-2">Last updated: Just now</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-medium text-gray-900">Daily Usage</h3>
              <BarChart className="w-6 h-6 text-blue-600" />
            </div>
            <p className="text-3xl font-bold text-gray-900">{meterData.dailyUsage} kWh</p>
            <p className="text-sm text-gray-500 mt-2">Average for this week</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-medium text-gray-900">Estimated Bill</h3>
              <DollarSign className="w-6 h-6 text-blue-600" />
            </div>
            <p className="text-3xl font-bold text-gray-900">${meterData.estimatedBill}</p>
            <p className="text-sm text-gray-500 mt-2">This month's projection</p>
          </div>
        </div>

        {meterData.alerts.length > 0 && (
          <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
            <div className="flex items-center gap-2 mb-4">
              <AlertTriangle className="w-6 h-6 text-yellow-600" />
              <h3 className="text-lg font-medium text-gray-900">Alerts</h3>
            </div>
            <ul className="space-y-2">
              {meterData.alerts.map((alert, index) => (
                <li
                  key={index}
                  className="flex items-center gap-2 text-sm text-gray-600 bg-yellow-50 p-3 rounded-md"
                >
                  <span>{alert}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Usage History</h3>
          <div className="h-64 flex items-center justify-center text-gray-500">
            Chart component will be implemented here
          </div>
        </div>
      </main>
    </div>
  );
};