import React from 'react';

interface ChatIconProps {
  className?: string;
  size?: number;
}

export default function ChatIcon({ className = '', size = 32 }: ChatIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <circle cx="24" cy="24" r="24" fill="#25D366" />
      <path
        d="M34 22.5C34 17.2533 29.5228 13 24 13C18.4772 13 14 17.2533 14 22.5C14 25.0793 15.1346 27.4035 16.9576 29.0724L16 34L21.1644 32.1289C22.0613 32.3738 23.0134 32.5 24 32.5C29.5228 32.5 34 28.2467 34 22.5Z"
        fill="white"
      />
      <circle cx="20" cy="22.5" r="1.5" fill="#25D366" />
      <circle cx="24" cy="22.5" r="1.5" fill="#25D366" />
      <circle cx="28" cy="22.5" r="1.5" fill="#25D366" />
    </svg>
  );
}
