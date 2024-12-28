import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <div className="flex flex-col justify-center items-center text-white h-[42vh] gap-4 px-4 md:px-0">
        <div className="font-bold flex gap-4 md:gap-5 md:text-5xl justify-center items-center text-3xl sm: text-xl sm: mt-6 ">
          Kya Aap Meri Help Karoge ?? 🥹
        </div>
        <p className="lg: text-center lg:text-xl sm:text-sm ">
          “Udhaari: Jab Paisa Nahi, Toh Dosti Se Chhoti Si Madad!” 😆💸
        </p>
        <p className="text-center md:text-left sm: hidden">
          &quot;Bharosa karo aapka dost aapki udhari ek din zarur wapas karega
          agar uspe paisa aaya toh &quot; 😂
        </p>
        <div className="mt-6 flex flex-col sm:flex-row gap-4">
          <button
            type="button"
            className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            START NOW
          </button>
          <button
            type="button"
            className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            READ MORE
          </button>
        </div>
      </div>

      {/* Separator */}
      <div className="bg-white h-1 opacity-10"></div>

      {/* Your fans Can buy you a Chai */}
      <h1 className="lg:text-2xl text-center mt-12 text-white font-bold sm:text-md">
        Pehchano Kon hai apka Sachha Dost 😤
      </h1>
      <section className="py-10 sm:py-16 lg:py-24">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 text-center  gap-y-8 lg:grid-cols-3 sm:gap-12">
            <div>
              <div className="flex items-center justify-center sm: w-20 sm: h-20 lg:w-40 lg:h-40 bg-gray-500 mx-auto rounded-full overflow-hidden">
                <Image
                  className="h-[80%] object-cover"
                  src="/man.gif"
                  width={160}
                  height={160}
                  alt="avatar"
                />
              </div>
              <h3 className="mt-8 sm:text-md font-semibold text-white">
                Karo Yogdan, Bano Hero
              </h3>
              <p className="mt-4 sm: text-sm  text-gray-300">
                Tumhare helper ke paas bhi option hoga tumhe contribute karne
                ka. Kahi ye na boldein: “Hum toh helper hain, lekin helper ke
                saath sponsor bhi hain!” 😂
              </p>
            </div>

            <div>
              <div className="flex items-center justify-center sm: w-20 sm: h-20 lg:w-40 lg:h-40 mx-auto rounded-full overflow-hidden">
                <Image
                  className="h-[100%] object-cover"
                  src="/coin.gif"
                  width={160}
                  height={160}
                  alt="avatar"
                />
              </div>
              <h3 className="mt-8 text-md font-semibold text-white">
                Madad ke Mazboot Kandhe
              </h3>
              <p className="mt-4 text-sm text-gray-300">
                Tumhare ‘helpers’ tumhare saath milke kaam karenge—matlab ab
                project ka bojh sirf tumhare kandhon par nahi, sab milke
                uthayenge. Ekdum team wali feel aayegi! 👬👭
              </p>
            </div>

            <div>
              <div className="flex items-center justify-center sm: w-20 sm: h-20 lg:w-40 lg:h-40 bg-gray-400 mx-auto rounded-full overflow-hidden">
                <Image
                  className="h-[100%] object-cover"
                  src="/group.gif"
                  width={160}
                  height={160}
                  alt="avatar"
                />
              </div>
              <h3 className="mt-8 text-md font-semibold text-white">
                Sathi Hath Badhana
              </h3>
              <p className="mt-4 text-sm text-gray-300">
                Dusre creators ko invite karo, aur milkar ek zabardast chai
                party machao! Ek ki chhoti udhaari, dusre ki badi madad! ☕
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
