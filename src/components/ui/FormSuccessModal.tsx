type FormSuccessModalProps = {
  isOpen: boolean
  title: string
  message: string
  buttonLabel?: string
  onClose: () => void
}

export function FormSuccessModal({
  isOpen,
  title,
  message,
  buttonLabel = 'Close',
  onClose,
}: FormSuccessModalProps) {
  if (!isOpen) {
    return null
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/55 p-4" role="dialog" aria-modal="true" aria-label={title}>
      <div className="w-full max-w-md rounded-2xl border border-slate-200 bg-white p-6 shadow-xl">
        <p className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--theme-primary-700)]">Request Received</p>
        <h3 className="mt-2 text-2xl font-black tracking-tight text-slate-900">{title}</h3>
        <p className="mt-3 text-sm leading-7 text-slate-700">{message}</p>
        <button
          type="button"
          onClick={onClose}
          className="interactive-btn mt-5 inline-flex w-full items-center justify-center rounded-full bg-[var(--theme-primary-600)] px-4 py-2.5 text-sm font-semibold text-white hover:bg-[var(--theme-primary-500)]"
        >
          {buttonLabel}
        </button>
      </div>
    </div>
  )
}
