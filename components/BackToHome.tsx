import Link from 'next/link';

export function BackToHome() {
  return (
    <Link 
      href="/" 
      className="fixed top-6 left-6 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:text-primary px-4 py-2 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 flex items-center gap-2 text-sm font-medium"
    >
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="16" 
        height="16" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
        className="transition-transform duration-300 group-hover:-translate-x-1"
      >
        <path d="M19 12H5M12 19l-7-7 7-7"/>
      </svg>
      Ana Sayfaya Dön
    </Link>
  );
} 