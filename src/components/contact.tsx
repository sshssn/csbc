import React from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Card } from '@/components/ui/card'
import { 
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem
} from '@/components/ui/select'

export default function Contact() {
    return (
        <Card className="p-6">
            <div className="space-y-8">
                <div>
                    <h3 className="text-2xl font-bold">Request Consultation</h3>
                    <p className="text-gray-500 dark:text-gray-400 mt-2">
                        Fill out the form below and one of our logistics specialists will get back to you shortly.
                    </p>
                </div>
                <form className="space-y-6">
                    <div className="space-y-4">
                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                            <div className="space-y-2">
                                <Label htmlFor="first-name">First name</Label>
                                <Input id="first-name" placeholder="Enter your first name" />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="last-name">Last name</Label>
                                <Input id="last-name" placeholder="Enter your last name" />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="email">Email</Label>
                            <Input id="email" type="email" placeholder="Enter your email" />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="phone">Phone</Label>
                            <Input id="phone" type="tel" placeholder="Enter your phone number" />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="service">Service Interested In</Label>
                            <Select>
                                <SelectTrigger>
                                    <SelectValue placeholder="Select a service" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="cargo">Cargo & Freight Forwarding</SelectItem>
                                    <SelectItem value="storage">Storage & Warehousing</SelectItem>
                                    <SelectItem value="military">Military & Defense Logistics</SelectItem>
                                    <SelectItem value="exhibitions">Exhibitions & Events Logistics</SelectItem>
                                    <SelectItem value="special">Special & Mega Projects</SelectItem>
                                    <SelectItem value="charter">Charter Flight Services</SelectItem>
                                    <SelectItem value="luxury-cars">Luxury Cars Shipments</SelectItem>
                                    <SelectItem value="other">Other</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="message">Message</Label>
                            <Textarea id="message" placeholder="Please provide details about your logistics needs" />
                        </div>
                    </div>
                    <Button type="submit" className="w-full">
                        Send Message
                    </Button>
                </form>
                <div className="mt-8 text-center text-sm text-gray-500">
                    <p>By submitting this form, you agree to our <a href="#" className="text-primary underline">terms of service</a> and <a href="#" className="text-primary underline">privacy policy</a>.</p>
                </div>
            </div>
        </Card>
    )
}
