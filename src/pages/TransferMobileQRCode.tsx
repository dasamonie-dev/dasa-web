import { useSearchParams } from "react-router-dom";
import { useState } from "react";
import { Link } from "react-router-dom";

export const TransferMobileQRCode = () => {
  const [searchParams] = useSearchParams();
  const [copied, setCopied] = useState(false);

  const accountNumber = searchParams.get("accountNumber") || "";
  const accountName   = searchParams.get("accountName")   || "";
  const bankName      = searchParams.get("bankName")       || "";

  // Deep link back into the app — same params forwarded
  const deepLink = `dasamonie://transfer?${searchParams.toString()}`;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(accountNumber);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback for older browsers
      const el = document.createElement("input");
      el.value = accountNumber;
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  // No params — probably a direct visit, not a QR scan
  if (!accountNumber) {
    return (
      <main className="min-h-[70vh] flex flex-col items-center justify-center font-nunito bg-hero px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-accent font-extrabold text-4xl sm:text-5xl tracking-tight">
          No account found
        </h1>
        <p className="mt-4 text-accent/80 sm:text-lg max-w-md">
          This link doesn't contain any account details. If you were given a QR
          code, please scan it again.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <Link
            to="/"
            className="px-6 py-3 rounded-full bg-accent text-white font-medium hover:bg-accent/80 transition-colors"
          >
            Go Home
          </Link>
          <Link
            to="/contact"
            className="px-6 py-3 rounded-full bg-menu text-accent font-medium hover:bg-menu/80 transition-colors"
          >
            Contact Support
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-[70vh] flex flex-col items-center justify-center font-nunito bg-hero px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-sm bg-white rounded-3xl shadow-xl p-8 flex flex-col items-center gap-6">

        {/* Brand */}
        <span className="text-accent font-extrabold text-2xl tracking-tight">
          Dasamonie
        </span>

        {/* Instruction */}
        <p className="text-accent/60 text-sm text-center">
          Send money to this account
        </p>

        {/* Account details */}
        <div className="w-full flex flex-col items-center gap-1">
          <span className="text-accent/50 text-xs uppercase tracking-widest">
            Account Number
          </span>
          <span className="text-accent font-extrabold text-4xl tracking-widest">
            {accountNumber}
          </span>
          {accountName && (
            <span className="text-accent/70 font-semibold text-base mt-1">
              {accountName}
            </span>
          )}
          {bankName && (
            <span className="text-accent/50 text-sm">
              {bankName}
            </span>
          )}
        </div>

        <div className="w-full h-px bg-gray-100" />

        {/* Copy button */}
        <button
          onClick={handleCopy}
          className={`w-full py-4 rounded-full font-bold text-base transition-colors ${
            copied
              ? "bg-green-600 text-white"
              : "bg-accent text-white hover:bg-accent/80"
          }`}
        >
          {copied ? "✓ Copied!" : "📋 Copy Account Number"}
        </button>

        {/* Open in app */}
        <a
          href={deepLink}
          className="w-full py-4 rounded-full font-bold text-base text-center bg-menu text-black hover:bg-menu/80 transition-colors"
        >
          📱 Open in Dasamonie App
        </a>

        {/* Store links */}
        <p className="text-accent/40 text-xs text-center">
          Don't have the app?{" "}
          <a
            href="https://play.google.com/store/apps/details?id=com.dasamonie.digital"
            className="underline hover:text-accent/60"
            >
          
            Android
          </a>
          {" · "}
          <a
            href="https://apps.apple.com/app/dasamonie"
            className="underline hover:text-accent/60"
          >
            iOS
          </a>
        </p>
      </div>
    </main>
  );
};

export default TransferMobileQRCode;