import Image from 'next/image';

export function Loading() {
  return (
    <div className="h-full w-full flex flex-col justify-center items-center">
      <Image
        src="/logo.svg"
        width={120}
        height={120}
        alt="Loading"
        className="animate-pulse duration-1000"
      />
    </div>
  );
}
