import { useState } from 'react'
import { GradientButton } from '@/components/ui/gradient-button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { motion } from 'framer-motion'

export function ConsultationForm() {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the data to your backend
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full max-w-md mx-auto p-6 rounded-2xl border border-gray-200 dark:border-gray-800 bg-white/50 dark:bg-black/50 backdrop-blur-sm"
    >
      <h3 className="text-2xl font-semibold mb-4">Request Consultation</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full"
          />
        </div>
        <div>
          <Textarea
            placeholder="How can we help you?"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            className="w-full min-h-[100px]"
          />
        </div>
        <GradientButton type="submit" className="w-full">
          {submitted ? 'Thank you!' : 'Send Request'}
        </GradientButton>
      </form>
    </motion.div>
  )
} 