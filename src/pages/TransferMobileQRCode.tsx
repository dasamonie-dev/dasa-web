import { useSearchParams } from 'react-router-dom'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FiCopy, FiCheck, FiSmartphone } from 'react-icons/fi'

export const TransferMobileQRCode = () => {
  const [searchParams] = useSearchParams()
  const [copied, setCopied] = useState(false)

  const accountNumber = (searchParams.get('accountNumber') || '').trim()
  const accountName = (searchParams.get('accountName') || '').trim()
  const bankName = (searchParams.get('bankName') || '').trim()

  const isValidAccountNumber = /^\d{10}$/.test(accountNumber)

  // Deep link back into the app — same params forwarded
  const deepLink = `dasamonie://transfer?${searchParams.toString()}`

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(accountNumber)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // Fallback for older browsers
      const el = document.createElement('input')
      el.value = accountNumber
      document.body.appendChild(el)
      el.select()
      document.execCommand('copy')
      document.body.removeChild(el)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  // No params, or a malformed/tampered account number — not a real QR scan
  if (!isValidAccountNumber) {
    return (
      <main className='min-h-[70vh] flex flex-col items-center justify-center font-nunito bg-hero px-4 sm:px-6 lg:px-8 text-center'>
        <h1 className='text-accent font-extrabold text-4xl sm:text-5xl tracking-tight'>
          Account not found
        </h1>
        <p className='mt-4 text-accent/80 sm:text-lg max-w-md'>
          This link doesn't contain a valid account number. If you were given a
          QR code, please scan it again.
        </p>
        <div className='mt-8 flex flex-col sm:flex-row gap-4'>
          <Link
            to='/'
            className='px-6 py-3 rounded-full bg-accent text-white font-medium hover:bg-accent/80 transition-colors'
          >
            Go Home
          </Link>
          <Link
            to='/contact'
            className='px-6 py-3 rounded-full bg-menu text-accent font-medium hover:bg-menu/80 transition-colors'
          >
            Contact Support
          </Link>
        </div>
      </main>
    )
  }

  return (
    <main className='min-h-[70vh] flex flex-col items-center justify-center font-nunito py-4 sm:py-6 bg-hero px-4 sm:px-6 lg:px-8'>
      <div className='w-full max-w-sm bg-white rounded-3xl shadow-xl p-8 flex flex-col items-center gap-6'>
        {/* Brand */}
        <span className='text-accent font-extrabold text-2xl tracking-tight'>
          Dasamonie
        </span>

        {/* Instruction */}
        <p className='text-accent/60 text-sm text-center'>
          Send money to this account
        </p>

        {/* Account details */}
        <div className='w-full flex flex-col items-center gap-1'>
          <span className='text-accent/50 text-xs uppercase tracking-widest'>
            Account Number
          </span>
          <span className='text-accent font-extrabold text-4xl tracking-widest'>
            {accountNumber}
          </span>
        </div>

        {(accountName || bankName) && (
          <div className='w-full flex flex-col gap-2'>
            {accountName && (
              <div className='flex items-center justify-between gap-4 text-sm'>
                <span className='text-accent/50 uppercase tracking-wide text-xs shrink-0'>
                  Account Name
                </span>
                <span className='text-accent font-semibold text-right'>
                  {accountName}
                </span>
              </div>
            )}
            {bankName && (
              <div className='flex items-center justify-between gap-4 text-sm'>
                <span className='text-accent/50 uppercase tracking-wide text-xs shrink-0'>
                  Bank
                </span>
                <span className='text-accent font-semibold text-right'>
                  {bankName}
                </span>
              </div>
            )}
          </div>
        )}

        <div className='w-full h-px bg-gray-100' />

        {/* Copy button */}
        <button
          onClick={handleCopy}
          className={`w-full py-4 rounded-full font-bold text-base transition-colors flex items-center justify-center gap-2 ${
            copied
              ? 'bg-green-600 text-white'
              : 'bg-accent text-white hover:bg-accent/80'
          }`}
        >
          {copied ? (
            <>
              <FiCheck className='w-5 h-5' aria-hidden='true' />
              Copied!
            </>
          ) : (
            <>
              <FiCopy className='w-5 h-5' aria-hidden='true' />
              Copy Account Number
            </>
          )}
        </button>

        {/* Open in app */}
        <a
          href={deepLink}
          className='w-full py-4 rounded-full font-bold text-base text-center bg-menu text-black hover:bg-menu/80 transition-colors flex items-center justify-center gap-2'
        >
          <FiSmartphone className='w-5 h-5' aria-hidden='true' />
          Open in Dasamonie App
        </a>

        {/* Store links */}
        <p className='text-accent/40 text-xs text-center'>
          Don't have the app?{' '}
          <Link to='/get-app' className='underline hover:text-accent/60'>
            Get the Dasamonie App
          </Link>
        </p>
      </div>
    </main>
  )
}

export default TransferMobileQRCode
