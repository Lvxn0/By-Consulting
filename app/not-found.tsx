import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center text-center h-screen font-sans">
      <style>
        {`
          body {
            color: #000;
            background: #fff;
            margin: 0;
          }
          .next-error-h1 {
            border-right: 1px solid rgba(0, 0, 0, 0.3);
          }
          @media (prefers-color-scheme: dark) {
            body {
              color: #fff;
              background: #000;
            }
            .next-error-h1 {
              border-right: 1px solid rgba(255, 255, 255, 0.3);
            }
          }
        `}
      </style>

      <div className="flex items-center">
        <h1 className="next-error-h1 text-[24px] font-medium leading-[49px] pr-[23px]">
          404
        </h1>
        <h2 className="text-sm font-normal leading-[49px] pl-[23px] m-0">
          This page could not be found.
        </h2>
      </div>

      <Link
        href="/"
        className="relative inline-block text-sm font-medium group overflow-hidden py-1 mt-4"
      >
        <span className="relative z-10 text-white">Return Home</span>
        <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-white origin-center scale-x-100 group-hover:scale-x-0 transition-transform duration-500 ease-in-out" />
      </Link>
    </div>
  );
}
