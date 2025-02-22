'use client'

import  React, {useState } from "react";
import { Form } from "radix-ui";

/**
 * TODO: Email Form Implementation
 * 1. Add form state management
 *    - Loading state during submission
 *    - Success/Error messages
 *    - Form validation
 * 
 * 2. Update subscribe button styling
 *    - Match site theme
 *    - Add hover effects
 *    - Add loading animation
 * 
 * 3. Get API credentials from Beehiiv
 *    - Generate API key
 *    - Get publication ID
 *    - Add to environment variables
 * 
 * 4. Test the subscription flow
 *    - Test with valid email
 *    - Test with invalid email
 *    - Test error handling
 *    - Test success flow
 * 
 * 5. Create welcome email automation
 *    - Set up welcome email template in Beehiiv
 *    - Configure automation triggers
 *    - Test welcome email flow
 */

const EmailForm = (props) => {
    const [email, setEmail] = useState('')
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
    const [message, setMessage] = useState('')

    const {title, page} = props

    const customField =  [{"name": "page","value": page}]
  
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setStatus('loading')
    
        try {
          const res = await fetch('/api/subscribe', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email,"custom_fields": customField }),
          })
    
          const data = await res.json()
    
          if (!res.ok) {
            throw new Error(data.error || 'Failed to subscribe')
          }
    
          setStatus('success')
          setMessage('Thanks for subscribing!')
          setEmail('')
        } catch (error) {
          setStatus('error')
          setMessage(error.message || 'Something went wrong')
        }
      }

    return (
	<Form.Root className="mt-8 w-[260px]" onSubmit={handleSubmit}>
		<div className="flex flex-col space-y-1">
          <label htmlFor="email" className="text-sm font-medium text-gray-700 dark:text-gray-200">
            {title || 'Join my newsletter'}
          </label>
          <div className="flex space-x-[6px]">

          <input
            id="email"
            name="email"
            type="email"
            placeholder="you@example.com"
            required
            className="flex-1 rounded-md border border-gray-300 px-4 py-2 dark:border-gray-700 dark:bg-gray-800"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={status === 'loading'}
          />
        <Form.Submit asChild>
            <button
            type="submit"
            disabled={status === 'loading'}
            className="rounded-md bg-black px-4 py-2 text-white transition-colors hover:bg-gray-800 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-white dark:text-black dark:hover:bg-gray-200"
            >
            {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
            </button>
        </Form.Submit>
        </div>
        </div>

        {message && (
          <p className={`text-sm ${status === 'error' ? 'text-red-500' : 'text-green-500'}`}>
            {message}
          </p>
        )}
	</Form.Root>
    )
};

export default EmailForm;
