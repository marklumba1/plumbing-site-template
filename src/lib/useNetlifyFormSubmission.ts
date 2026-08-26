import { useState } from 'react'
import type { FormEventHandler } from 'react'

type UseNetlifyFormSubmissionOptions = {
  errorMessage?: string
  openSuccessModalOnSubmit?: boolean
}

export function useNetlifyFormSubmission(options?: UseNetlifyFormSubmissionOptions) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccessOpen, setIsSuccessOpen] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault()
    setSubmitError(null)
    setIsSubmitting(true)

    const form = event.currentTarget

    const formData = new FormData(form)
    const encoded = new URLSearchParams()

    formData.forEach((value, key) => {
      if (typeof value === 'string') {
        encoded.append(key, value)
      }
    })

    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encoded.toString(),
      })

      if (!response.ok) {
        throw new Error('Failed to submit form')
      }

      form.reset()
      if (options?.openSuccessModalOnSubmit !== false) {
        setIsSuccessOpen(true)
      }
    } catch {
      setSubmitError(options?.errorMessage ?? 'Submission failed. Please try again or call us directly.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return {
    isSubmitting,
    isSuccessOpen,
    submitError,
    handleSubmit,
    closeSuccessModal: () => setIsSuccessOpen(false),
  }
}
