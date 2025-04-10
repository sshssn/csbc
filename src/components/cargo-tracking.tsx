'use client';

import { useState, useEffect, useCallback } from 'react';
import Layout from "@/components/layout";
import { Package, Search, CheckCircle, Clock, Truck, Ship, Plane } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { GradientTracing } from '@/components/ui/gradient-tracing';

interface TrackingHistoryItem {
  status: string;
  date: string;
  location: string;
}

interface Shipment {
  trackingNumber: string;
  status: 'delivered' | 'in-transit' | 'processing';
  origin: string;
  destination: string;
  estimatedDelivery: string;
  deliveredDate?: string;
  lastUpdated: string;
  currentLocation?: string;
  transportMode: 'road' | 'air' | 'sea';
  trackingHistory: TrackingHistoryItem[];
}

const mockShipments: Record<string, Shipment> = {
  'EK123456789': {
    trackingNumber: 'EK123456789',
    status: 'in-transit',
    origin: 'Dubai, UAE',
    destination: 'London, UK',
    estimatedDelivery: '2024-03-25',
    lastUpdated: '2024-03-20 14:30',
    currentLocation: 'Istanbul, Turkey',
    transportMode: 'road',
    trackingHistory: [
      {
        status: 'Package received',
        date: '2024-03-18 09:00',
        location: 'Dubai, UAE'
      },
      {
        status: 'In transit',
        date: '2024-03-19 12:00',
        location: 'Dubai, UAE'
      },
      {
        status: 'Arrived at hub',
        date: '2024-03-20 14:30',
        location: 'Istanbul, Turkey'
      }
    ]
  },
  'EK987654321': {
    trackingNumber: 'EK987654321',
    status: 'delivered',
    origin: 'Singapore',
    destination: 'New York, USA',
    estimatedDelivery: '2024-03-15',
    deliveredDate: '2024-03-14 16:45',
    lastUpdated: '2024-03-14 16:45',
    transportMode: 'air',
    trackingHistory: [
      {
        status: 'Package received',
        date: '2024-03-10 10:00',
        location: 'Singapore'
      },
      {
        status: 'In transit',
        date: '2024-03-11 15:30',
        location: 'Singapore'
      },
      {
        status: 'Arrived at destination',
        date: '2024-03-14 14:00',
        location: 'New York, USA'
      },
      {
        status: 'Delivered',
        date: '2024-03-14 16:45',
        location: 'New York, USA'
      }
    ]
  },
  'EK567891234': {
    trackingNumber: 'EK567891234',
    status: 'processing',
    origin: 'Shanghai, China',
    destination: 'Rotterdam, Netherlands',
    estimatedDelivery: '2024-04-05',
    lastUpdated: '2024-03-20 08:15',
    transportMode: 'sea',
    trackingHistory: [
      {
        status: 'Package received',
        date: '2024-03-18 09:00',
        location: 'Shanghai, China'
      },
      {
        status: 'Processing',
        date: '2024-03-20 08:15',
        location: 'Shanghai, China'
      }
    ]
  }
};

interface CargoTrackingProps {
  trackingNumber: string;
}

export function CargoTracking({ trackingNumber: initialTrackingNumber }: CargoTrackingProps) {
  const [trackingNumber, setTrackingNumber] = useState(initialTrackingNumber);
  const [shipment, setShipment] = useState<Shipment | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [searchAttempted, setSearchAttempted] = useState(false);

  // Immediately track the shipment if an initial tracking number is provided
  useEffect(() => {
    if (initialTrackingNumber) {
      handleTracking();
    }
  }, [initialTrackingNumber]);

  const handleTracking = useCallback(() => {
    if (!trackingNumber.trim()) {
      setError('Please enter a tracking number');
      return;
    }

    setLoading(true);
    setError('');
    setSearchAttempted(true);

    // Simulate API call with a timeout
    // Using a shorter timeout to improve perceived performance
    setTimeout(() => {
      const result = mockShipments[trackingNumber as keyof typeof mockShipments];
      if (result) {
        setShipment(result);
        setError('');
      } else {
        setShipment(null);
        setError('Tracking number not found. Please verify and try again.');
      }
      setLoading(false);
    }, 800); // Reduced from 1500ms to 800ms for faster response
  }, [trackingNumber]);

  // Handle Enter key press in the input field
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleTracking();
    }
  };

  const getStatusIcon = (transportMode: string) => {
    switch (transportMode) {
      case 'road':
        return <Truck className="h-6 w-6 text-blue-500" />;
      case 'air':
        return <Plane className="h-6 w-6 text-blue-500" />;
      case 'sea':
        return <Ship className="h-6 w-6 text-blue-500" />;
      default:
        return <Package className="h-6 w-6 text-blue-500" />;
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'delivered':
        return (
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
            <CheckCircle className="h-4 w-4 mr-1" /> Delivered
          </span>
        );
      case 'in-transit':
        return (
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
            <Truck className="h-4 w-4 mr-1" /> In Transit
          </span>
        );
      case 'processing':
        return (
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-yellow-100 text-yellow-800">
            <Clock className="h-4 w-4 mr-1" /> Processing
          </span>
        );
      default:
        return (
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-800">
            <Package className="h-4 w-4 mr-1" /> Unknown
          </span>
        );
    }
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12 md:py-24">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6 text-center">Cargo Tracking</h1>
        <p className="text-base md:text-lg text-center max-w-3xl mx-auto mb-8 md:mb-16">
          Track your shipment in real-time with EK360 Cargo&apos;s advanced tracking system. 
          Enter your tracking number to get detailed information about your cargo.
        </p>

        <div className="max-w-3xl mx-auto">
          <Card className="p-4 md:p-6 mb-6 md:mb-8 shadow-md">
            <div className="flex flex-col md:flex-row gap-3 md:gap-4">
              <div className="relative flex-grow">
                <Input
                  placeholder="Enter your tracking number (e.g., EK123456789)"
                  value={trackingNumber}
                  onChange={(e) => setTrackingNumber(e.target.value)}
                  onKeyPress={handleKeyPress}
                  className="pl-10 h-12 w-full"
                  aria-label="Tracking number input"
                />
                <Package className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              </div>
              <Button 
                onClick={handleTracking} 
                className="h-12 px-6"
                disabled={loading}
                aria-label="Track shipment"
              >
                {loading ? (
                  <span className="flex items-center">
                    <GradientTracing 
                      width={20} 
                      height={20}
                    />
                    <span className="ml-2">Tracking...</span>
                  </span>
                ) : (
                  <span className="flex items-center">
                    <Search className="h-5 w-5 mr-2" />
                    Track Shipment
                  </span>
                )}
              </Button>
            </div>

            {error && (
              <div className="mt-4 p-3 bg-red-50 text-red-700 rounded-md text-sm">
                {error}
              </div>
            )}

            <div className="mt-4 md:mt-6 text-sm text-gray-500">
              <p>For demo purposes, try one of these tracking numbers:</p>
              <ul className="mt-2 list-disc pl-5 space-y-1">
                <li><code className="bg-gray-100 px-1 py-0.5 rounded">EK123456789</code> - In Transit (Road)</li>
                <li><code className="bg-gray-100 px-1 py-0.5 rounded">EK987654321</code> - Delivered (Air)</li>
                <li><code className="bg-gray-100 px-1 py-0.5 rounded">EK567891234</code> - Processing (Sea)</li>
              </ul>
            </div>
          </Card>

          {loading && (
            <div className="flex justify-center my-12">
              <GradientTracing width={40} height={40} />
            </div>
          )}

          {!loading && searchAttempted && !shipment && !error && (
            <Card className="p-6 text-center">
              <Package className="h-12 w-12 mx-auto text-gray-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">No Results Found</h3>
              <p className="text-gray-500">We couldn't find any shipment with this tracking number. Please verify and try again.</p>
            </Card>
          )}

          {!loading && shipment && (
            <Card className="p-4 md:p-6 shadow-md">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-4 md:mb-6">
                <h2 className="text-xl md:text-2xl font-bold flex items-center">
                  {getStatusIcon(shipment.transportMode)}
                  <span className="ml-2">Shipment Details</span>
                </h2>
                {getStatusBadge(shipment.status)}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 mb-4 md:mb-6">
                <div>
                  <h3 className="text-sm text-gray-500 mb-1">Origin</h3>
                  <p className="font-medium">{shipment.origin}</p>
                </div>
                <div>
                  <h3 className="text-sm text-gray-500 mb-1">Destination</h3>
                  <p className="font-medium">{shipment.destination}</p>
                </div>
                <div>
                  <h3 className="text-sm text-gray-500 mb-1">
                    {shipment.status === 'delivered' ? 'Delivered Date' : 'Estimated Delivery'}
                  </h3>
                  <p className="font-medium">
                    {shipment.status === 'delivered' ? shipment.deliveredDate : shipment.estimatedDelivery}
                  </p>
                </div>
                <div>
                  <h3 className="text-sm text-gray-500 mb-1">Last Updated</h3>
                  <p className="font-medium">{shipment.lastUpdated}</p>
                </div>
                {shipment.currentLocation && (
                  <div className="md:col-span-2">
                    <h3 className="text-sm text-gray-500 mb-1">Current Location</h3>
                    <p className="font-medium">{shipment.currentLocation}</p>
                  </div>
                )}
              </div>

              <h3 className="font-bold mb-3 border-b pb-2">Tracking History</h3>
              <div className="space-y-3 md:space-y-4">
                {shipment.trackingHistory.map((event: TrackingHistoryItem, index: number) => (
                  <div key={index} className="flex items-start">
                    <div className="mt-1 mr-3 h-4 w-4 rounded-full bg-blue-500"></div>
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:justify-between">
                        <p className="font-medium">{event.status}</p>
                        <p className="text-sm text-gray-500">{event.date}</p>
                      </div>
                      <p className="text-sm">{event.location}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          )}
        </div>
      </div>
    </Layout>
  );
} 