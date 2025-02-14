import React from 'react';
import { Link } from 'react-router-dom';
import { Logo } from '@/components/Logo';
import { Button } from '@/components/ui/Button';
import { Activity, BarChart3, Shield } from 'lucide-react';

export const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Logo />
          <div className="flex gap-4">
            <Link to="/login">
              <Button variant="outline">Login</Button>
            </Link>
            <Link to="/register">
              <Button>Get Started</Button>
            </Link>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-6xl">
            Monitor Your Energy Usage
            <br />
            <span className="text-blue-600">In Real Time</span>
          </h1>
          <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
            Take control of your electricity consumption with our smart meter solution.
            Get detailed insights, real-time monitoring, and cost-saving recommendations.
          </p>
          <div className="mt-10">
            <Link to="/register">
              <Button size="lg">Start Monitoring Today</Button>
            </Link>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <Activity className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Real-Time Monitoring</h3>
            <p className="text-gray-600">
              Track your energy consumption in real-time with accurate measurements
              and instant updates.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <BarChart3 className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Usage Analytics</h3>
            <p className="text-gray-600">
              Get detailed insights into your consumption patterns and identify
              opportunities to save.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <Shield className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Secure Platform</h3>
            <p className="text-gray-600">
              Your data is protected with enterprise-grade security and encryption
              protocols.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};