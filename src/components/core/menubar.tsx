export function MenuBar() {
  const menus = [
    {
      title: 'Menu 1',
      icon: 'icon',
    },
    {
      title: 'My Card',
      icon: 'icon',
    },
    {
      title: 'My Bits',
      icon: 'icon',
    },
    {
      title: 'Chat us',
      icon: 'icon',
    },
  ];
  return (
    <div className="relative w-full">
      <div className="absolute inset-x-0 bottom-0 bg-[#47176E] h-[100px]"></div>
      <div className="relative w-full px-4">
        <div className="grid grid-cols-4 h-[120px]">
          <div
            className="flex items-center justify-center h-full w-full rounded-t-xl p-1"
            style={{
              background: `linear-gradient(rgb(250, 92, 164) 0.81%, rgb(103, 40, 153) 29.38%)`,
            }}
          >
            <div className="flex flex-col items-center justify-center gap-1 bg-[#672899] rounded-t-xl h-full w-full">
              <svg
                width={36}
                height={25}
                viewBox="0 0 36 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ width: '34.64px', height: '24.24px' }}
                preserveAspectRatio="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M2.47151 0C1.43486 0 0.594482 0.840375 0.594482 1.87703V22.3679C0.594482 23.4046 1.43485 24.2449 2.47151 24.2449H33.3531C34.3897 24.2449 35.2301 23.4046 35.2301 22.3679V1.87703C35.2301 0.840374 34.3897 0 33.3531 0H2.47151ZM11.3874 16.7369H4.8178V20.491H11.3874V16.7369Z"
                  fill="#DAD7D4"
                />
              </svg>
              <p
                style={{
                  width: '78.34px',
                  height: '18.97px',
                  fontSize: '16.518590927124023px',
                  fontWeight: 900,
                  textAlign: 'center',
                  color: '#dad7d4',
                }}
              >
                MY CARD
              </p>
            </div>
          </div>

          <div
            className="flex items-center justify-center h-full w-full rounded-t-xl p-1"
            style={{
              background: `linear-gradient(rgb(250, 92, 164) 0.81%, rgb(103, 40, 153) 29.38%)`,
            }}
          >
            <div className="flex flex-col items-center justify-center gap-1 bg-[#672899] rounded-t-xl h-full w-full">
              <svg
                width={36}
                height={25}
                viewBox="0 0 36 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ width: '34.64px', height: '24.24px' }}
                preserveAspectRatio="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M2.47151 0C1.43486 0 0.594482 0.840375 0.594482 1.87703V22.3679C0.594482 23.4046 1.43485 24.2449 2.47151 24.2449H33.3531C34.3897 24.2449 35.2301 23.4046 35.2301 22.3679V1.87703C35.2301 0.840374 34.3897 0 33.3531 0H2.47151ZM11.3874 16.7369H4.8178V20.491H11.3874V16.7369Z"
                  fill="#DAD7D4"
                />
              </svg>
              <p
                style={{
                  width: '78.34px',
                  height: '18.97px',
                  fontSize: '16.518590927124023px',
                  fontWeight: 900,
                  textAlign: 'center',
                  color: '#dad7d4',
                }}
              >
                MY CARD
              </p>
            </div>
          </div>

          <div
            className="flex items-center justify-center h-full w-full rounded-t-xl p-1"
            style={{
              background: `linear-gradient(rgb(250, 92, 164) 0.81%, rgb(103, 40, 153) 29.38%)`,
            }}
          >
            <div className="flex flex-col items-center justify-center gap-1 bg-[#672899] rounded-t-xl h-full w-full">
              <svg
                width={30}
                height={30}
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ width: 30, height: 30 }}
                preserveAspectRatio="none"
              >
                <circle cx={15} cy={15} r="13.5" stroke="#4C1379" stroke-width={3} />
                <path
                  d="M16.7857 6V5.5H16.2857H13.7143H13.2143V6V8.57143V9.07143H13.7143H16.2857H16.7857V8.57143V6ZM21.9286 8.57139V8.07139H21.4286H18.8572H18.3572V8.57139V11.1428V11.6428H18.8572H21.4286H21.9286V11.1428V8.57139ZM11.6429 8.57139V8.07139H11.1429H8.57143H8.07143V8.57139V11.1428V11.6428H8.57143H11.1429H11.6429V11.1428V8.57139ZM21.9286 18.4756V17.9756H21.4286H18.8572H18.3572V18.4756V21.0471V21.5471H18.8572H21.4286H21.9286V21.0471V18.4756ZM11.6429 18.4756V17.9756H11.1429H8.57143H8.07143V18.4756V21.0471V21.5471H8.57143H11.1429H11.6429V21.0471V18.4756ZM16.7857 11.1429V10.6429H16.2857H13.7143H13.2143V11.1429V13.2143L11.1429 13.2143L10.6428 13.2143V13.7143V16.2857V16.7857H11.1428H13.2143V18.8571V19.3571H13.7143H16.2857H16.7857V18.8571V16.7857H18.8572H19.3572V16.2857V13.7143V13.2143L18.8572 13.2143L16.7857 13.2143V11.1429ZM16.7857 21.4288V20.9288H16.2857H13.7143H13.2143V21.4288V24.0002V24.5002H13.7143H16.2857H16.7857V24.0002V21.4288ZM24 16.7857H24.5V16.2857V13.7143V13.2143H24H21.4286H20.9286V13.7143V16.2857V16.7857H21.4286H24ZM8.57143 16.7857H9.07143V16.2857V13.7143V13.2143H8.57143H6H5.5V13.7143V16.2857V16.7857H6H8.57143Z"
                  fill="#4C1379"
                  stroke="#4C1379"
                />
              </svg>
              <p
                style={{
                  width: '79.99px',
                  height: '18.97px',
                  fontSize: '16.518590927124023px',
                  fontWeight: 900,
                  textAlign: 'center',
                  color: '#4c1379',
                }}
              >
                MY BITS
              </p>
            </div>
          </div>

          <div
            className="flex items-center justify-center h-full w-full rounded-t-xl p-1"
            style={{
              background: `linear-gradient(rgb(250, 92, 164) 0.81%, rgb(103, 40, 153) 29.38%)`,
            }}
          >
            <div className="flex flex-col items-center justify-center gap-1 bg-[#672899] rounded-t-xl h-full w-full">
              <svg
                width={33}
                height={29}
                viewBox="0 0 33 29"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
              >
                <rect
                  x="0.63562"
                  y="5.2041"
                  width="31.5645"
                  height="23.2042"
                  rx="7.55597"
                  fill="#4C1379"
                />
                <rect
                  x="5.04327"
                  y="0.369873"
                  width="6.92631"
                  height="9.27706"
                  rx="3.14832"
                  fill="#4C1379"
                />
                <rect
                  x="20.7849"
                  y="0.369873"
                  width="6.92631"
                  height="9.27706"
                  rx="3.14832"
                  fill="#4C1379"
                />
              </svg>
              <p
                style={{
                  width: '79.99px',
                  height: '18.97px',
                  fontSize: '16.518590927124023px',
                  fontWeight: 900,
                  textAlign: 'center',
                  color: '#4c1379',
                }}
              >
                CHAT US
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
