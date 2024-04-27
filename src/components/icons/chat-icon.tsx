import * as React from 'react';

const ChatIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width={33}
    height={29}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="none"
    {...props}
  >
    <rect x="0.63562" y="5.2041" width="31.5645" height="23.2042" rx="7.55597" fill="currentColor" />
    <rect x="5.04327" y="0.369873" width="6.92631" height="9.27706" rx="3.14832" fill="currentColor" />
    <rect x="20.7849" y="0.369873" width="6.92631" height="9.27706" rx="3.14832" fill="currentColor" />
  </svg>
);

export default ChatIcon;
