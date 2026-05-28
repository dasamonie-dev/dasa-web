// src/components/sections/staffRegistration/StaffRegistrationForm.tsx
import { useEffect, useRef, useState, useCallback } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

// ── Types ────────────────────────────────────────────────────────────────────

type Position = 'State Manager' | 'Marketer' | 'Field Agent';

interface FormData {
  fullName: string;
  position: Position | '';
  phoneNumber: string;
  email: string;
  state: string;
  lga: string;
  residentialAddress: string;
  nin: string;
  bankName: string;
  accountNumber: string;
  nextOfKinName: string;
  nextOfKinPhone: string;
  date: string;
  indemnityAccepted: boolean;
}

type FormErrors = Partial<Record<keyof FormData | 'signature', string>>;

interface ToastState {
  message: string;
  type: 'success' | 'error' | '';
  visible: boolean;
}

// ── Helpers ──────────────────────────────────────────────────────────────────

const today = new Date().toLocaleDateString('en-NG', {
  day: '2-digit',
  month: 'long',
  year: 'numeric',
});

const INITIAL_FORM: FormData = {
  fullName: '',
  position: '',
  phoneNumber: '',
  email: '',
  state: '',
  lga: '',
  residentialAddress: '',
  nin: '',
  bankName: '',
  accountNumber: '',
  nextOfKinName: '',
  nextOfKinPhone: '',
  date: today,
  indemnityAccepted: false,
};

const POSITIONS: Position[] = ['State Manager', 'Marketer', 'Field Agent'];

// ── Sub-components ────────────────────────────────────────────────────────────

interface FieldProps {
  label: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
  className?: string;
}

const Field = ({ label, required, error, children, className = '' }: FieldProps) => (
  <div className={`flex flex-col gap-1.5 ${className}`}>
    <label className='text-[0.82rem] font-medium text-[#122548] tracking-wide'>
      {label}
      {required && <span className='text-green-600 ml-0.5'>*</span>}
    </label>
    {children}
    {error && (
      <span className='text-[0.76rem] text-red-500 animate-[fadeIn_.2s_ease]'>
        {error}
      </span>
    )}
  </div>
);

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  hasError?: boolean;
}

const Input = ({ hasError, className = '', ...props }: InputProps) => (
  <input
    className={`
      border-[1.5px] rounded-[10px] px-3.5 py-2.5 text-[0.9rem] text-[#1a2b45]
      bg-[#fafcff] outline-none font-nunito w-full
      transition-all duration-200
      focus:border-green-500 focus:bg-white focus:ring-2 focus:ring-green-500/10
      placeholder:text-gray-400
      ${hasError
        ? 'border-red-400 focus:border-red-400 focus:ring-red-400/10'
        : 'border-[#d0dce8]'
      }
      ${className}
    `}
    {...props}
  />
);

interface SectionHeaderProps {
  children: React.ReactNode;
  delay?: number;
}

const SectionHeader = ({ children, delay = 0 }: SectionHeaderProps) => (
  <div
    className='flex items-center gap-3 mb-5'
    data-aos='fade-right'
    data-aos-delay={delay}
  >
    <span className='text-[0.7rem] font-semibold tracking-[0.12em] uppercase text-green-700'>
      {children}
    </span>
    <div className='flex-1 h-px bg-gradient-to-r from-[#d0dce8] to-transparent' />
  </div>
);

// ── Main Component ────────────────────────────────────────────────────────────

export const StaffRegistrationForm = () => {
  const [form, setForm] = useState<FormData>(INITIAL_FORM);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [toast, setToast] = useState<ToastState>({ message: '', type: '', visible: false });

  // Canvas refs
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const drawingRef = useRef(false);
  const hasSigRef = useRef(false);

  // AOS init
  useEffect(() => {
    AOS.init({ duration: 800, once: true, easing: 'ease-in-out', offset: 60 });
    AOS.refresh();
  }, []);

  // ── Toast ────────────────────────────────────────────────────────────────
  const showToast = useCallback((message: string, type: 'success' | 'error') => {
    setToast({ message, type, visible: true });
    setTimeout(() => setToast(t => ({ ...t, visible: false })), 4000);
  }, []);

  // ── Canvas setup ─────────────────────────────────────────────────────────
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = 140;
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas.parentElement!);
    return () => ro.disconnect();
  }, []);

  const getCanvasPos = (
    e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>
  ) => {
    const canvas = canvasRef.current!;
    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;
    if ('touches' in e) {
      return {
        x: (e.touches[0].clientX - rect.left) * scaleX,
        y: (e.touches[0].clientY - rect.top) * scaleY,
      };
    }
    return {
      x: (e.clientX - rect.left) * scaleX,
      y: (e.clientY - rect.top) * scaleY,
    };
  };

  const startDraw = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    drawingRef.current = true;
    const ctx = canvasRef.current?.getContext('2d');
    if (!ctx) return;
    const { x, y } = getCanvasPos(e);
    ctx.beginPath();
    ctx.moveTo(x, y);
  };

  const draw = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    if (!drawingRef.current) return;
    const ctx = canvasRef.current?.getContext('2d');
    if (!ctx) return;
    const { x, y } = getCanvasPos(e);
    ctx.lineTo(x, y);
    ctx.strokeStyle = '#0b1f3a';
    ctx.lineWidth = 2;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.stroke();
    hasSigRef.current = true;
    if (errors.signature) setErrors(prev => ({ ...prev, signature: undefined }));
  };

  const endDraw = () => { drawingRef.current = false; };

  const clearSig = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    canvas.getContext('2d')?.clearRect(0, 0, canvas.width, canvas.height);
    hasSigRef.current = false;
  };

  // ── Field handlers ────────────────────────────────────────────────────────
  const handleChange = (field: keyof FormData) => (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setForm(prev => ({ ...prev, [field]: e.target.value }));
    if (errors[field]) setErrors(prev => ({ ...prev, [field]: undefined }));
  };

  // ── Validation ────────────────────────────────────────────────────────────
  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!form.fullName.trim())           newErrors.fullName = 'Full name is required';
    if (!form.position)                   newErrors.position = 'Please select a position';
    if (!form.phoneNumber.trim())         newErrors.phoneNumber = 'Phone number is required';
    if (!form.email.trim())               newErrors.email = 'Email address is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
                                          newErrors.email = 'Enter a valid email address';
    if (!form.state.trim())               newErrors.state = 'State is required';
    if (!form.lga.trim())                 newErrors.lga = 'LGA is required';
    if (!form.residentialAddress.trim())  newErrors.residentialAddress = 'Residential address is required';
    if (!form.nin.trim())                 newErrors.nin = 'NIN is required';
    else if (!/^\d{11}$/.test(form.nin))  newErrors.nin = 'NIN must be exactly 11 digits';
    if (!form.bankName.trim())            newErrors.bankName = 'Bank name is required';
    if (!form.accountNumber.trim())       newErrors.accountNumber = 'Account number is required';
    else if (!/^\d{10}$/.test(form.accountNumber))
                                          newErrors.accountNumber = 'Account number must be 10 digits';
    if (!form.nextOfKinName.trim())       newErrors.nextOfKinName = 'Next of kin name is required';
    if (!form.nextOfKinPhone.trim())      newErrors.nextOfKinPhone = 'Next of kin phone is required';
    if (!form.indemnityAccepted)          newErrors.indemnityAccepted = 'You must accept the declaration to proceed';
    if (!hasSigRef.current)              newErrors.signature = 'Please provide your signature';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // ── Submit ────────────────────────────────────────────────────────────────
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) {
      showToast('Please fix the highlighted fields.', 'error');
      return;
    }

    setSubmitting(true);
    try {
      const body = {
        ...form,
        signature: canvasRef.current?.toDataURL('image/png') ?? '',
      };

      console.log('body,', body);

      const res = await fetch(
        'https://dev-staging-apis.dasafoxx.com/auth/api/account-manager/staff/register',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(body),
        }
      );

      if (res.ok) {
        showToast('Registration submitted successfully!', 'success');
        setForm(INITIAL_FORM);
        clearSig();
      } else {
        const errData = await res.json().catch(() => ({}));
        showToast(
          (errData as { message?: string }).message ?? 'Submission failed. Please try again.',
          'error'
        );
      }
    } catch {
      showToast('Network error. Check your connection and retry.', 'error');
    } finally {
      setSubmitting(false);
    }
  };

  // ── Render ────────────────────────────────────────────────────────────────
  return (
    <section className='bg-[#eef6ee] font-nunito min-h-screen'>
      {/* Hero banner */}
      <div className='bg-footer text-white px-4 sm:px-6 lg:px-8 pt-10 pb-12 text-center relative overflow-hidden'>
        <div className='absolute inset-0 pointer-events-none'
          style={{
            background:
              'radial-gradient(ellipse 60% 80% at 50% -10%, rgba(76,175,80,.18) 0%, transparent 70%)',
          }}
        />
        <div
          className='inline-block bg-white/10 border border-white/20 text-blue-200 text-[0.75rem] font-medium
                     tracking-widest uppercase px-4 py-1.5 rounded-full mb-4'
          data-aos='fade-down'
        >
          Internal · Staff Only
        </div>
        <h1
          className='font-extrabold text-3xl sm:text-4xl lg:text-5xl leading-tight mb-3'
          data-aos='fade-up'
          data-aos-delay={100}
        >
          Staff Registration Form
        </h1>
        <p
          className='text-[#9bb5d4] text-[0.95rem] max-w-md mx-auto leading-relaxed'
          data-aos='fade-up'
          data-aos-delay={200}
        >
          Complete all fields carefully. Your information is handled securely
          and used solely for onboarding purposes.
        </p>
      </div>

      {/* Card */}
      <div className='max-w-3xl mx-auto px-4 sm:px-6 py-10'>
        <form
          onSubmit={handleSubmit}
          noValidate
          className='bg-white rounded-2xl shadow-[0_4px_24px_rgba(11,31,58,.10)] overflow-hidden'
        >
          {/* ── Personal Information ── */}
          <div className='px-6 sm:px-10 py-8 border-b border-[#eef2f7]'>
            <SectionHeader delay={50}>Personal Information</SectionHeader>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5'>
              <Field label='Full Name' required error={errors.fullName}>
                <Input
                  placeholder='e.g. Amaka Okonkwo'
                  value={form.fullName}
                  onChange={handleChange('fullName')}
                  hasError={!!errors.fullName}
                  data-aos='fade-up'
                  data-aos-delay={100}
                />
              </Field>
              <Field label='Phone Number' required error={errors.phoneNumber}>
                <Input
                  type='tel'
                  placeholder='e.g. 08012345678'
                  value={form.phoneNumber}
                  onChange={handleChange('phoneNumber')}
                  hasError={!!errors.phoneNumber}
                  data-aos='fade-up'
                  data-aos-delay={150}
                />
              </Field>
            </div>
            <Field label='Email Address' required error={errors.email}>
              <Input
                type='email'
                placeholder='yourname@email.com'
                value={form.email}
                onChange={handleChange('email')}
                hasError={!!errors.email}
                data-aos='fade-up'
                data-aos-delay={200}
              />
            </Field>
          </div>

          {/* ── Role & Position ── */}
          <div className='px-6 sm:px-10 py-8 border-b border-[#eef2f7]'>
            <SectionHeader delay={100}>Role & Position</SectionHeader>
            <Field label='Position' required error={errors.position}>
              <div className='flex flex-wrap gap-3' data-aos='fade-up' data-aos-delay={150}>
                {POSITIONS.map(pos => (
                  <label
                    key={pos}
                    className={`
                      flex items-center gap-2.5 cursor-pointer px-4 py-2.5 rounded-[10px]
                      border-[1.5px] text-[0.88rem] transition-all duration-200 select-none
                      ${form.position === pos
                        ? 'border-green-500 bg-green-50 text-[#0b1f3a] font-medium'
                        : 'border-[#d0dce8] text-[#1a2b45] hover:border-green-300'
                      }
                    `}
                  >
                    <input
                      type='radio'
                      name='position'
                      value={pos}
                      checked={form.position === pos}
                      onChange={() => {
                        setForm(prev => ({ ...prev, position: pos }));
                        if (errors.position) setErrors(prev => ({ ...prev, position: undefined }));
                      }}
                      className='accent-green-600 w-4 h-4'
                    />
                    {pos}
                  </label>
                ))}
              </div>
            </Field>
          </div>

          {/* ── Location Details ── */}
          <div className='px-6 sm:px-10 py-8 border-b border-[#eef2f7]'>
            <SectionHeader delay={100}>Location Details</SectionHeader>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5'>
              <Field label='State' required error={errors.state}>
                <Input
                  placeholder='e.g. Lagos'
                  value={form.state}
                  onChange={handleChange('state')}
                  hasError={!!errors.state}
                  data-aos='fade-up'
                  data-aos-delay={100}
                />
              </Field>
              <Field label='LGA' required error={errors.lga}>
                <Input
                  placeholder='e.g. Ikeja'
                  value={form.lga}
                  onChange={handleChange('lga')}
                  hasError={!!errors.lga}
                  data-aos='fade-up'
                  data-aos-delay={150}
                />
              </Field>
            </div>
            <Field label='Residential Address' required error={errors.residentialAddress}>
              <Input
                placeholder='House number, street, city'
                value={form.residentialAddress}
                onChange={handleChange('residentialAddress')}
                hasError={!!errors.residentialAddress}
                data-aos='fade-up'
                data-aos-delay={200}
              />
            </Field>
          </div>

          {/* ── Identity & Banking ── */}
          <div className='px-6 sm:px-10 py-8 border-b border-[#eef2f7]'>
            <SectionHeader delay={100}>Identity & Banking</SectionHeader>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5'>
              <Field label='NIN' required error={errors.nin}>
                <Input
                  placeholder='11-digit NIN'
                  value={form.nin}
                  onChange={handleChange('nin')}
                  hasError={!!errors.nin}
                  maxLength={11}
                  data-aos='fade-up'
                  data-aos-delay={100}
                />
              </Field>
              <Field label='Bank Name' required error={errors.bankName}>
                <Input
                  placeholder='e.g. GTBank'
                  value={form.bankName}
                  onChange={handleChange('bankName')}
                  hasError={!!errors.bankName}
                  data-aos='fade-up'
                  data-aos-delay={150}
                />
              </Field>
            </div>
            <Field label='Account Number' required error={errors.accountNumber}>
              <Input
                placeholder='10-digit account number'
                value={form.accountNumber}
                onChange={handleChange('accountNumber')}
                hasError={!!errors.accountNumber}
                maxLength={10}
                data-aos='fade-up'
                data-aos-delay={200}
              />
            </Field>
          </div>

          {/* ── Next of Kin ── */}
          <div className='px-6 sm:px-10 py-8 border-b border-[#eef2f7]'>
            <SectionHeader delay={100}>Next of Kin</SectionHeader>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-5'>
              <Field label='Next of Kin Name' required error={errors.nextOfKinName}>
                <Input
                  placeholder='Full name'
                  value={form.nextOfKinName}
                  onChange={handleChange('nextOfKinName')}
                  hasError={!!errors.nextOfKinName}
                  data-aos='fade-up'
                  data-aos-delay={100}
                />
              </Field>
              <Field label='Next of Kin Phone' required error={errors.nextOfKinPhone}>
                <Input
                  type='tel'
                  placeholder='e.g. 08012345678'
                  value={form.nextOfKinPhone}
                  onChange={handleChange('nextOfKinPhone')}
                  hasError={!!errors.nextOfKinPhone}
                  data-aos='fade-up'
                  data-aos-delay={150}
                />
              </Field>
            </div>
          </div>

          {/* ── Indemnity & Declaration ── */}
          <div className='px-6 sm:px-10 py-8 border-b border-[#eef2f7]'>
            <SectionHeader delay={100}>Indemnity & Declaration</SectionHeader>

            {/* Declaration text box */}
            <div
              className='bg-[#f5f8fb] border border-[#d0dce8] rounded-xl p-5 text-[0.85rem] text-[#374f6b] leading-relaxed space-y-3 mb-5'
              data-aos='fade-up'
              data-aos-delay={100}
            >
              <p>
                I,{' '}
                <span className='font-semibold text-[#0b1f3a]'>
                  {form.fullName.trim() || '________________________'}
                </span>
                , hereby agree to represent Dasamonie professionally and ethically at all times.
              </p>
              <p>
                I understand that I am solely responsible for any unlawful, fraudulent,
                misleading, unauthorized, or criminal act committed by me during the course
                of my engagement with Dasamonie. I agree to indemnify and hold Dasamonie,
                its directors, officers, employees, and partners harmless from any claims,
                losses, damages, liabilities, penalties, or legal actions arising from my
                personal misconduct, negligence, breach of policy, or violation of any
                applicable law.
              </p>
              <p>
                I further confirm that I will comply with all Dasamonie policies, regulatory
                requirements, and lawful instructions. Any violation may result in immediate
                termination of my engagement and possible legal action.
              </p>
            </div>

            {/* Acceptance checkbox */}
            <label
              className={`
                flex items-start gap-3 cursor-pointer p-4 rounded-xl border-[1.5px]
                transition-all duration-200 select-none
                ${form.indemnityAccepted
                  ? 'border-green-500 bg-green-50'
                  : errors.indemnityAccepted
                    ? 'border-red-400 bg-red-50/30'
                    : 'border-[#d0dce8] hover:border-green-300 bg-[#fafcff]'
                }
              `}
              data-aos='fade-up'
              data-aos-delay={150}
            >
              <div className='mt-0.5 flex-shrink-0'>
                <input
                  type='checkbox'
                  checked={form.indemnityAccepted}
                  onChange={e => {
                    setForm(prev => ({ ...prev, indemnityAccepted: e.target.checked }));
                    if (errors.indemnityAccepted)
                      setErrors(prev => ({ ...prev, indemnityAccepted: undefined }));
                  }}
                  className='accent-green-600 w-4 h-4'
                />
              </div>
              <span className='text-[0.85rem] text-[#1a2b45] leading-relaxed'>
                I have read, understood, and agree to the indemnity declaration above. I
                confirm that the information provided in this form is accurate and complete.
              </span>
            </label>
            {errors.indemnityAccepted && (
              <span className='text-[0.76rem] text-red-500 mt-1.5 block animate-[fadeIn_.2s_ease]'>
                {errors.indemnityAccepted}
              </span>
            )}
          </div>

          {/* ── Signature & Date ── */}
          <div className='px-6 sm:px-10 py-8 border-b border-[#eef2f7]'>
            <SectionHeader delay={100}>Signature & Date</SectionHeader>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-5'>
              {/* Signature pad */}
              <Field label='Signature' required error={errors.signature}>
                <div
                  className={`
                    border-[1.5px] rounded-[10px] bg-[#fafcff] overflow-hidden
                    transition-colors duration-200
                    ${errors.signature ? 'border-red-400' : 'border-[#d0dce8] focus-within:border-green-500'}
                  `}
                  data-aos='fade-up'
                  data-aos-delay={100}
                >
                  <canvas
                    ref={canvasRef}
                    className='block w-full h-[140px] cursor-crosshair touch-none'
                    onMouseDown={startDraw}
                    onMouseMove={draw}
                    onMouseUp={endDraw}
                    onMouseLeave={endDraw}
                    onTouchStart={e => { e.preventDefault(); startDraw(e); }}
                    onTouchMove={e => { e.preventDefault(); draw(e); }}
                    onTouchEnd={endDraw}
                  />
                  <div className='flex justify-end px-3 py-1.5 bg-[#f5f8fb] border-t border-[#d0dce8]'>
                    <button
                      type='button'
                      onClick={clearSig}
                      className='text-[0.75rem] text-[#6b7f9a] hover:text-red-500 hover:bg-red-50
                                 px-2.5 py-1 rounded-md transition-colors duration-200'
                    >
                      ✕ Clear
                    </button>
                  </div>
                </div>
              </Field>

              {/* Date (read-only) */}
              <Field label='Date' required>
                <Input
                  value={form.date}
                  readOnly
                  className='bg-[#f5f8fb] cursor-default'
                  data-aos='fade-up'
                  data-aos-delay={150}
                />
              </Field>
            </div>
          </div>

          {/* ── Footer / Submit ── */}
          <div className='px-6 sm:px-10 py-8 bg-[#eef6ee] flex flex-col items-center gap-4'>
            <button
              type='submit'
              disabled={submitting}
              className='
                bg-footer text-white font-bold text-[0.95rem] rounded-xl
                px-14 py-4 w-full max-w-sm
                transition-all duration-200
                hover:bg-[#1a3261] hover:shadow-[0_6px_20px_rgba(11,31,58,.25)] hover:-translate-y-px
                active:translate-y-0
                disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none
                flex items-center justify-center gap-2
              '
            >
              {submitting ? (
                <>
                  <svg
                    className='animate-spin w-5 h-5'
                    viewBox='0 0 24 24'
                    fill='none'
                  >
                    <circle className='opacity-25' cx='12' cy='12' r='10'
                      stroke='currentColor' strokeWidth='4' />
                    <path className='opacity-75' fill='currentColor'
                      d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z' />
                  </svg>
                  Submitting…
                </>
              ) : (
                'Submit Registration'
              )}
            </button>
            <p className='text-[0.78rem] text-[#6b7f9a] text-center leading-relaxed'>
              🔒 Your data is encrypted and stored securely in compliance with
              Dasamonie's data policy.
            </p>
          </div>
        </form>
      </div>

      {/* ── Toast ── */}
      <div
        className={`
          fixed bottom-7 left-1/2 -translate-x-1/2 z-50
          flex items-center gap-2.5 px-6 py-3.5 rounded-xl shadow-xl
          text-white text-[0.88rem] font-medium whitespace-nowrap
          transition-all duration-300 pointer-events-none
          ${toast.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
          ${toast.type === 'success' ? 'bg-green-800' : toast.type === 'error' ? 'bg-red-700' : 'bg-footer'}
        `}
      >
        {toast.message}
      </div>
    </section>
  );
};

export default StaffRegistrationForm;