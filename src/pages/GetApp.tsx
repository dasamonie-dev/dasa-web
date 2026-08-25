import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { FaApple, FaGooglePlay } from 'react-icons/fa6'
import { Logo } from '../components/ui/Logo'
import { StoreButtons } from '../components/ui/StoreButtons'
import { Badge } from '../components/ui/Badge'
import { ReferralCodeModal } from '../components/ui/ReferralCodeModal'
import phone from '../assets/heroBannerSection/herobannermobilephone.svg'
import checkmark from '../assets/heroBannerSection/checkmark.svg'
import {
  ANDROID_STORE_URL,
  ANDROID_MARKET_URL,
  IOS_STORE_URL,
  APP_REDIRECT_DELAY_MS,
  detectPlatform,
  type Platform,
} from '../lib/appStore'

export const GetApp = () => {
  const [platform] = useState<Platform>(detectPlatform)
  const [searchParams] = useSearchParams()
  const referralCode = searchParams.get('ref')
  const [showReferralModal, setShowReferralModal] = useState(() =>
    Boolean(referralCode),
  )

  const storeUrl = platform === 'ios' ? IOS_STORE_URL : ANDROID_STORE_URL
  const storeName = platform === 'ios' ? 'the App Store' : 'Google Play'
  const StoreIcon = platform === 'ios' ? FaApple : FaGooglePlay

  useEffect(() => {
    if (showReferralModal) return
    if (platform === 'other') return

    if (platform === 'android') {
      window.location.href = ANDROID_MARKET_URL
    }

    const timer = setTimeout(() => {
      if (!document.hidden) {
        window.location.replace(storeUrl)
      }
    }, APP_REDIRECT_DELAY_MS)
    return () => clearTimeout(timer)
  }, [platform, storeUrl, showReferralModal])

  return (
    <>
      {showReferralModal && referralCode && (
        <ReferralCodeModal
          code={referralCode}
          onContinue={() => setShowReferralModal(false)}
        />
      )}

      {platform === 'other' ? (
        <main className='bg-hero font-nunito'>
          <div className='mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 py-14 lg:py-20'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
              <div className='flex flex-col items-center lg:items-start text-center lg:text-left'>
                <Badge>Available on Android &amp; iOS</Badge>

                <h1 className='mt-5 font-extrabold text-accent leading-tight text-3xl sm:text-4xl lg:text-5xl'>
                  Get the Dasamonie app
                </h1>

                <p className='mt-4 text-accent/70 sm:text-lg max-w-md'>
                  Send, save, and grow — all from your pocket. Choose your
                  platform below to get started.
                </p>

                <StoreButtons size='lg' className='mt-8' />
              </div>

              <div className='flex justify-center'>
                <img
                  src={phone}
                  alt='Dasamonie app on a phone'
                  className='w-[280px] sm:w-[340px] drop-shadow-xl'
                />
              </div>
            </div>
          </div>
        </main>
      ) : (
        <main className='min-h-[70vh] flex flex-col items-center justify-center font-nunito bg-hero px-4 sm:px-6 lg:px-8 py-10'>
          <div className='relative'>
            <img
              src={phone}
              alt='Dasamonie app on a phone'
              className='w-40 sm:w-48 drop-shadow-xl'
            />
            <span className='absolute -right-2 top-2 bg-menu rounded-full shadow-md p-1'>
              <img
                src={checkmark}
                alt=''
                className='w-5 h-5'
                aria-hidden='true'
              />
            </span>
          </div>

          <div className='w-full max-w-sm bg-white rounded-3xl shadow-xl p-8 mt-6 flex flex-col items-center gap-5 text-center'>
            <Logo showText={false} to='' className='w-10 h-10' />

            <div className='flex flex-col items-center gap-3'>
              <StoreIcon className='w-9 h-9 text-accent' aria-hidden='true' />
              <p className='text-accent font-semibold'>
                Taking you to {storeName}…
              </p>
              <p className='text-accent/60 text-sm'>
                If nothing happens, tap the button below.
              </p>
            </div>

            <a
              href={storeUrl}
              className='w-full py-4 rounded-full font-bold text-base text-center bg-accent text-white hover:bg-accent/80 transition-colors'
            >
              Continue to {storeName}
            </a>
          </div>
        </main>
      )}
    </>
  )
}

export default GetApp
