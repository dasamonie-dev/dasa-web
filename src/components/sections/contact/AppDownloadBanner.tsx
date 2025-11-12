export const AppDownloadBanner = () => {
  return (
    <div className='w-full bg-linear-to-r from-accent via-[#0a4a5f] to-[#0e6b4a] rounded-2xl p-6 md:p-8 text-white'>
      <div className='flex flex-col items-start text-center gap-4'>
        <h3 className='text-xl md:text-2xl font-bold text-left'>
          Don't Miss Out
          <br />
          Get the App!
        </h3>
        <button className='cursor-pointer px-6 py-3 bg-[#95F476] text-accent rounded-full font-medium hover:bg-[#95F476]/90 transition-colors'>
          Chat us
        </button>
      </div>
    </div>
  );
};
