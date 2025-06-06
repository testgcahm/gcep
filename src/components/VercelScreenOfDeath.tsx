// VercelScreenOfDeath.tsx
import React from 'react';

const VercelScreenOfDeath: React.FC<{ message?: string }> = ({ message }) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#f8fafc] to-[#e5e7eb] text-[#222] px-4">
      <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center max-w-lg w-full border border-gray-200">
        <svg
          data-testid="geist-icon"
          viewBox="0 0 16 16"
          fill="white"
          xmlns="http://www.w3.org/2000/svg"
          className='w-16 h-16 mb-6 text-current'
        >
          <g clipPath="url(#clip0_872_3186)">
            <circle
              cx="8"
              cy="8"
              r="7.25"
              fill="currentColor"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8 4.5L11.5 10.625H4.5L8 4.5Z"
              fill="var(--ds-gray-100)"
            />
          </g>
          <defs>
            <clipPath id="clip0_872_3186">
              <rect width="16" height="16" fill="white" />
            </clipPath>
          </defs>
        </svg>
        <h1 className="text-2xl font-extrabold mb-2 tracking-tight">Cloud Storage Limit Reached</h1>
        <p className="mb-4 text-center text-gray-700">
          {message || 'Your request could not be completed because the cloud storage limit for this project has been reached.'}
        </p>
        <div className="w-full mb-4">
          <div className="font-semibold mb-1 text-gray-900">Troubleshooting Steps</div>
          <ul className="list-disc list-inside text-left text-sm text-gray-700 space-y-1">
            <li>Try again in a few minutes.</li>
            <li>If you are the site owner:
              <ul className="ml-5 list-[circle] space-y-1">
                <li>Check your <a href="https://vercel.com/dashboard" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Vercel dashboard</a> for storage usage and upgrade your plan if needed.</li>
                <li>Remove unused files or assets from your cloud storage.</li>
                <li>Contact <a href="https://vercel.com/support" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Vercel Support</a> for further assistance.</li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="text-xs text-gray-400 mt-2">Error Reference: <span className="font-mono">CloudStorage</span></div>
      </div>
    </div>
  );
};

export default VercelScreenOfDeath;
