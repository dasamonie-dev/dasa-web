import { useState } from 'react';
import { FiCopy, FiCheck } from 'react-icons/fi';

interface ReferralCodeModalProps {
  code: string;
  onContinue: () => void;
}

export const ReferralCodeModal = ({ code, onContinue }: ReferralCodeModalProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
    } catch {
      const el = document.createElement('input');
      el.value = code;
      document.body.appendChild(el);
      el.select();
      document.execCommand('copy');
      document.body.removeChild(el);
      setCopied(true);
    }
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4 font-nunito'>
      <div className='w-full max-w-sm bg-white rounded-3xl shadow-xl p-8 flex flex-col items-center gap-5 text-center'>
        <span className='text-accent font-extrabold text-2xl tracking-tight'>
          Dasamonie
        </span>

        <div className='flex flex-col items-center gap-1'>
          <p className='text-accent/60 text-sm'>
            You were invited with referral code
          </p>
          <span className='text-accent font-extrabold text-3xl tracking-widest'>
            {code}
          </span>
        </div>

        <p className='text-accent/50 text-xs max-w-[220px]'>
          Copy this code now — you'll need to enter it when you sign up in the
          app.
        </p>

        <button
          type='button'
          onClick={handleCopy}
          className={`w-full py-4 rounded-full font-bold text-base transition-colors flex items-center justify-center gap-2 ${
            copied
              ? 'bg-green-600 text-white'
              : 'bg-accent text-white hover:bg-accent-hover'
          }`}
        >
          {copied ? (
            <FiCheck className='w-5 h-5' />
          ) : (
            <FiCopy className='w-5 h-5' />
          )}
          {copied ? 'Copied!' : 'Copy code'}
        </button>

        <button
          type='button'
          onClick={onContinue}
          className='text-accent/60 text-sm font-medium hover:text-accent transition-colors'
        >
          Continue to app store
        </button>
      </div>
    </div>
  );
};
