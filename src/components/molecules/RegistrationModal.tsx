export default function RegistrationModal({ onClose }: { onClose: () => void }) {
  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
        style={{ background: "rgba(0,0,0,0.7)", backdropFilter: "blur(6px)" }}
        onClick={(e) => e.target === e.currentTarget && onClose()}
      >
        <div
          className="relative w-full bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col"
          style={{ maxWidth: 680, maxHeight: "90vh" }}
        >
          {/* Modal header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-[#f0ebf8] shrink-0">
            <div>
              <h3 className="text-base font-extrabold text-[#1a1a2e]">
                Apply for the Next Cohort
              </h3>
              <p className="text-xs text-[#888] mt-0.5">
                AI for Businesses Programme — Limited to 25 participants
              </p>
            </div>
            <button
              onClick={onClose}
              className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-[#f3e8ff] text-[#888] hover:text-[#71286F] transition-colors duration-200 shrink-0"
              aria-label="Close"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M3 3l10 10M13 3L3 13"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>

          {/* Google Form iframe */}
          <div className="flex-1 overflow-y-auto">
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLScKTfMAkANZmZdJZ8aAS7-FCXl6skZ6uK84uWdDhpCH0F3lAw/viewform?embedded=true"
              width="100%"
              height="2434"
              frameBorder="0"
              marginHeight={0}
              marginWidth={0}
              title="AI for Businesses Registration Form"
              className="w-full"
            >
              Loading…
            </iframe>
          </div>
        </div>
      </div>
    </>
  );
}