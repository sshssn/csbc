'use client'

import { useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Layout from "@/components/layout";
import { Package, Search, CheckCircle, Clock, Truck, Ship, Plane } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { GradientTracing } from '@/components/ui/gradient-tracing';
import { CargoTracking } from '@/components/cargo-tracking';
import { withSuspense } from '@/components/with-suspense';

// Define proper types for tracking history
interface TrackingHistoryItem {
  date: string;
  location: string;
  status: string;
}

interface Shipment {
  status: string;
  origin: string;
  destination: string;
  estimatedDelivery?: string;
  deliveredDate?: string;
  currentLocation?: string;
  transportMode: string;
  lastUpdated: string;
  trackingHistory: TrackingHistoryItem[];
}

// Mock shipment data for demo purposes
const mockShipments = {
  'EK123456789': {
    status: 'in-transit',
    origin: 'Dubai, UAE',
    destination: 'Riyadh, Saudi Arabia',
    estimatedDelivery: '2023-12-15',
    currentLocation: 'Abu Dhabi Border Crossing',
    transportMode: 'road',
    lastUpdated: '2023-12-10 14:30 GST',
    trackingHistory: [
      { date: '2023-12-10 14:30 GST', location: 'Abu Dhabi Border Crossing', status: 'In Transit' },
      { date: '2023-12-09 11:15 GST', location: 'Dubai Sorting Center', status: 'Processed' },
      { date: '2023-12-08 09:45 GST', location: 'Dubai Warehouse', status: 'Shipment Received' },
    ]
  },
  'EK987654321': {
    status: 'delivered',
    origin: 'Jeddah, Saudi Arabia',
    destination: 'Dubai, UAE',
    deliveredDate: '2023-12-07 16:45 GST',
    transportMode: 'air',
    lastUpdated: '2023-12-07 16:45 GST',
    trackingHistory: [
      { date: '2023-12-07 16:45 GST', location: 'Dubai Business Bay', status: 'Delivered' },
      { date: '2023-12-07 09:30 GST', location: 'Dubai Local Delivery', status: 'Out for Delivery' },
      { date: '2023-12-06 22:15 GST', location: 'Dubai International Airport', status: 'Arrived at Destination' },
      { date: '2023-12-06 19:45 GST', location: 'In Flight', status: 'In Transit' },
      { date: '2023-12-06 18:20 GST', location: 'Jeddah Airport', status: 'Departed Origin' },
      { date: '2023-12-05 14:10 GST', location: 'Jeddah Warehouse', status: 'Processed' },
    ]
  },
  'EK567891234': {
    status: 'processing',
    origin: 'Dubai, UAE',
    destination: 'Doha, Qatar',
    estimatedDelivery: '2023-12-18',
    currentLocation: 'Dubai Warehouse',
    transportMode: 'sea',
    lastUpdated: '2023-12-11 10:15 GST',
    trackingHistory: [
      { date: '2023-12-11 10:15 GST', location: 'Dubai Warehouse', status: 'Processing' },
      { date: '2023-12-10 16:30 GST', location: 'Dubai Warehouse', status: 'Shipment Received' },
    ]
  }
};

function CargoTrackingContent() {
  const searchParams = useSearchParams();
  const trackingNumber = searchParams.get('trackingNumber') || '';

  return <CargoTracking trackingNumber={trackingNumber} />;
}

export default withSuspense(CargoTrackingContent); 