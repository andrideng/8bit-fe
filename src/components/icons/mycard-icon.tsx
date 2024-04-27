import * as React from 'react';

const MyCardIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width={36}
    height={25}
    fill="currentColor"
    {...props}
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M2.47151 0C1.43486 0 0.594482 0.840375 0.594482 1.87703V22.3679C0.594482 23.4046 1.43485 24.2449 2.47151 24.2449H33.3531C34.3897 24.2449 35.2301 23.4046 35.2301 22.3679V1.87703C35.2301 0.840374 34.3897 0 33.3531 0H2.47151ZM11.3874 16.7369H4.8178V20.491H11.3874V16.7369Z"
    />
  </svg>
);

export default MyCardIcon;
