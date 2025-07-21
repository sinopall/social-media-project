'use client';

import Image from 'next/image';

function Hero() {
  return (
    <div className="relative min-h-screen w-full">
      <header className="grid min-h-[49rem] bg-black px-8 w-full">
        <div className="container mx-auto mt-32 grid h-full grid-cols-1 place-items-center lg:mt-14 lg:grid-cols-2">
          <div className="col-span-1">
            <h1 className="mb-4 text-4xl font-extrabold text-white md:text-5xl lg:text-6xl">
              Your Perfect <br /> Learning App
            </h1>
            <p className="mb-7 text-lg text-white md:pr-16 xl:pr-28">
              Our app is here to empower you on your quest for knowledge,
              anytime and anywhere.
            </p>
            <h6 className="mb-4 text-base font-semibold text-white uppercase tracking-wide">
              Get the app
            </h6>
            <div className="flex flex-col gap-2 md:mb-2 md:w-10/12 md:flex-row">
              <a
                href="#"
                className="flex items-center justify-center gap-3 rounded-lg bg-white px-6 py-3 text-black font-semibold shadow hover:bg-gray-100 transition"
              >
                <Image
                  width={24}
                  height={24}
                  src="/logos/logo-apple.png"
                  alt="apple"
                  className="w-6 h-6"
                />
                App Store
              </a>
              <a
                href="#"
                className="flex items-center justify-center gap-3 rounded-lg bg-white px-6 py-3 text-black font-semibold shadow hover:bg-gray-100 transition"
              >
                <Image
                  width={24}
                  height={24}
                  src="/logos/logo-google.png"
                  alt="google"
                  className="w-6 h-6"
                />
                Google Play
              </a>
            </div>
          </div>
          <Image
            width={470}
            height={576}
            src="/image/iphones.png"
            alt="team work"
            className="col-span-1 my-20 h-full max-h-[30rem] -translate-y-32 md:max-h-[36rem] lg:my-0 lg:ml-auto lg:max-h-[40rem] lg:translate-y-0"
          />
        </div>
      </header>
      <div className="mx-8 lg:mx-16 -mt-24 rounded-xl bg-white p-5 md:p-14 shadow-md">
        <div>
          <h3 className="mb-3 text-2xl font-bold text-black">Learning App</h3>
          <p className="font-normal text-gray-500 lg:w-5/12">
            Download our app to dive into a vast library of courses, tutorials,
            and study materials on a wide range of subjects - from programming
            and language learning to personal development and beyond
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
