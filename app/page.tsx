"use client"
import Image from "next/image";
import { motion } from "motion/react"
import { ArrowLeft, RedoDot, Stamp } from "lucide-react";
import { Inter, Nixie_One, Poppins } from "next/font/google";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
})

const nixie = Nixie_One({
  variable: "--font-nixie",
  subsets: ["latin"],
  weight: ["400"]
})

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"]
})

const progressParent = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.05 }
  }
};

const progressChild = {
  hidden: { opacity: 0, y: 8, scale: 0.75 },
  show: { opacity: 1, y: 0, scale: 1 }
};


export default function Home() {
  return (
    <main className="w-full h-full justify-center items-center flex bg-[#E6E7EB]">
      {/* ticket */}
      <div className="md:w-100 w-full md:h-[87%] h-full bg-[#F8F9FD] text-black p-4 relative">
        <div className="w-full flex justify-between items-center cursor-pointer">
          <div className="p-2 rounded-full bg-white">
            <ArrowLeft />
          </div>

          <p className={`${inter.className} font-semibold text-[1.25rem]`}>Payment Status</p>

          <div className="p-2 rounded-full bg-white cursor-pointer">
            <RedoDot />
          </div>
        </div>

        <div className="w-full h-fit relative mt-14">
          <div className="w-full h-24 bg-[#333333] rounded-[0.8rem] shadow-2xl p-4">
            <div className="w-full h-[1.21rem] rounded-full bg-[#030617]"></div>
          </div>
          <div className="absolute bg-white h-4 w-full blur-3xl top-0 left-0 " />

          <motion.div initial={{ height: 0, opacity: 0, y: -12 }}
            animate={{ height: "auto", opacity: 1, y: 0 }}
            transition={{ type: "spring", duration: 0.9, bounce: 0.18 }}
            className="
              absolute bg-white 
              md:w-[87.5%] w-[calc(100%-2.8rem)]
              left-1/2 -translate-x-1/2
              top-6
              rounded-md shadow-xl pt-2 px-4 
              /* height behavior */
              md:min-h-[33.9rem] 
              md:max-h-[calc(100%-4rem)]
              min-h-112
              max-h-[75svh]
            ">
            <div className="max-h-full min-[380px]:overflow-visible overflow-y-scroll pr-1 min-[380px]:pb-4 pb-24 no-scroll">
              <p
                className={`${inter.className} font-semibold text-center my-0 py-0`}
              >
                <span className="inline-block w-full h-0.5 bg-position-[8px_2px] bg-[linear-gradient(to_right,#000_50%,transparent_0)] bg-size-[10px_2px] animate-[dash_1.2s_linear_infinite]" />
              </p>
              <p className={`${nixie.className} text-center md:text-[1rem] text-[0.85rem] font-medium py-0 my-0`}>Trip Invoice - Japan Summer 2025</p>
              <p
                className={`${inter.className} font-semibold text-center my-0 py-0`}
              >
                <span className="inline-block w-full h-0.5 bg-position-[8px_2px] bg-[linear-gradient(to_right,#000_50%,transparent_0)] bg-size-[10px_2px] animate-[dash_1.2s_linear_infinite]" />
              </p>

              <div className="flex items-center justify-between my-2">
                <p className={`text-[#495562] ${poppins.className}`}>Total</p>
                <p className={`text-[#040718] font-semibold ${poppins.className}`}>$30,000</p>
              </div>

              <div className="flex items-center justify-between mb-2">
                <p className={`text-[#495562] ${poppins.className}`}>Per Person</p>
                <p className={`text-[#040718] font-semibold ${poppins.className}`}>$6,000</p>
              </div>

              <div className="w-full border-b-[0.2px] border-[#efefef]" />

              <div className="w-full h-fit overflow-hidden relative">
                <div className="w-full flex justify-between items-center border-b-[0.2px] border-[#E3E4E8] py-2">
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full shadow-md overflow-hidden flex justify-center items-center relative">
                      <Image src="/avatar/you.webp" alt="you" height={200} width={100} quality={75} className="w-6 h-6 object-cover" />
                    </div>
                    <p className="ml-4 text-[0.75rem]">You</p>
                  </div>
                  <div className="flex items-center gap-x-2 rounded-xl border-[0.2px] border-[#E3E4E8] px-2 py-1">
                    <Image src="/icon/paid.svg" alt="paid" height={200} width={200} className="w-4 h-4 object-contain" />
                    <p className="text-[#555965] font-medium text-[0.75rem]">Paid</p>
                  </div>
                </div>

                <div className="w-full flex justify-between items-center border-b-[0.2px] border-[#E3E4E8] py-2">
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full shadow-md overflow-hidden flex justify-center items-center relative">
                      <Image src="/avatar/olabode.webp" alt="olabode" height={200} width={100} quality={75} className="w-6 h-6 object-cover" />
                    </div>
                    <p className="ml-4 text-[0.75rem]">Olabode</p>
                  </div>
                  <div className="flex items-center gap-x-2 rounded-xl border-[0.2px] border-[#E3E4E8] px-2 py-1">
                    <Image src="/icon/paid.svg" alt="paid" height={200} width={200} className="w-4 h-4 object-contain" />
                    <p className="text-[#555965] font-medium text-[0.75rem]">Paid</p>
                  </div>
                </div>

                <div className="w-full flex justify-between items-center border-b-[0.2px] border-[#E3E4E8] py-2">
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full shadow-md overflow-hidden flex justify-center items-center relative">
                      <Image src="/avatar/lukmon.webp" alt="lukmon" height={200} width={100} quality={75} className="w-6 h-6 object-cover" />
                    </div>
                    <p className="ml-4 text-[0.75rem]">Lukmon</p>
                  </div>
                  <div className="flex items-center gap-x-2 rounded-xl border-[0.2px] border-[#E3E4E8] px-2 py-1">
                    <Image src="/icon/paid.svg" alt="paid" height={200} width={200} className="w-4 h-4 object-contain" />
                    <p className="text-[#555965] font-medium text-[0.75rem]">Paid</p>
                  </div>
                </div>

                <div className="w-full flex justify-between items-center border-b-[0.2px] border-[#E3E4E8] py-2">
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full shadow-md overflow-hidden flex justify-center items-center relative">
                      <Image src="/avatar/hope.webp" alt="hope" height={200} width={100} quality={75} className="w-6 h-6 object-cover" />
                    </div>
                    <p className="ml-4 text-[0.75rem]">Hope</p>
                  </div>
                  <div className="flex items-center gap-x-2 rounded-xl border-[0.2px] border-[#E3E4E8] px-2 py-1">
                    <Image src="/icon/unpaid.svg" alt="unpaid" height={200} width={200} className="w-4 h-4 object-contain" />
                    <p className="text-[#555965] font-medium text-[0.75rem]">Unpaid</p>
                  </div>
                </div>

                <div className="w-full flex justify-between items-center border-b-[0.2px] border-[#E3E4E8] py-2">
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full shadow-md overflow-hidden flex justify-center items-center relative">
                      <Image src="/avatar/dara.webp" alt="dara" height={200} width={100} quality={75} className="w-6 h-6 object-cover" />
                    </div>
                    <p className="ml-4 text-[0.75rem]">Dara</p>
                  </div>
                  <div className="flex items-center gap-x-2 rounded-xl border-[0.2px] border-[#E3E4E8] px-2 py-1">
                    <Image src="/icon/unpaid.svg" alt="unpaid" height={200} width={200} className="w-4 h-4 object-contain" />
                    <p className="text-[#555965] font-medium text-[0.75rem]">Unpaid</p>
                  </div>
                </div>

                <div className="h-100 border-l-[0.2px] border-[#E3E4E8] absolute left-10 top-0" />
              </div>

              <div className="mt-2 w-full py-2 px-2 border-[0.2px] border-[#E3E4E8] rounded-[0.8rem]">
                <div className="flex justify-between items-center text-[#000012]">
                  <p className="text-[0.75rem]">Payment Status</p>
                  <p className="text-[1.125rem] font-medium">UNPAID</p>
                </div>

                {/* <div className="w-full relative h-fit flex justify-between px-4 mt-2">
                  <div className="absolute w-[80%] h-2 left-5 top-2 bg-[#F1F4F9]" />

                  <div className="absolute w-[63%] h-2 left-5 top-2 bg-[#000012]" />
                  <div className="w-6 h-6 rounded-full shadow-md overflow-hidden flex justify-center items-center relative bg-white">
                    <Image src="/icon/paid-stats.svg" alt="payment-stat" height={200} width={100} quality={75} className="w-4 h-4 object-cover" />
                  </div>

                  <div className="w-6 h-6 rounded-full shadow-md overflow-hidden flex justify-center items-center relative bg-white">
                    <Image src="/icon/paid-stats.svg" alt="payment-stat" height={200} width={100} quality={75} className="w-4 h-4 object-cover" />
                  </div>

                  <div className="w-6 h-6 rounded-full shadow-md overflow-hidden flex justify-center items-center relative bg-white">
                    <Image src="/icon/paid-stats.svg" alt="payment-stat" height={200} width={100} quality={75} className="w-4 h-4 object-cover" />
                  </div>

                  <div className="w-6 h-6 rounded-full shadow-md overflow-hidden flex justify-center items-center relative bg-white">
                    <div className="w-4 h-4 object-cover bg-[#000012] rounded-full" />
                  </div>

                  <div className="w-6 h-6 rounded-full shadow-md overflow-hidden flex justify-center items-center relative bg-white">
                    <Stamp height={200} width={100} className="w-4 h-4 object-cover" />
                  </div>
                </div> */}
                <motion.div
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.4 }}
                  variants={progressParent}
                  className="w-full relative h-fit flex justify-between px-4 mt-2"
                >
                  <div className="absolute w-[80%] h-2 left-5 top-2 bg-[#F1F4F9]" />
                  <motion.div
                    className="absolute h-2 left-5 top-2 bg-[#000012]"
                    initial={{ width: 0 }}
                    whileInView={{ width: "63%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
                  />


                  {["paid-1", "paid-2", "paid-3", "current", "stamp"].map((key, i) => (
                    <motion.div
                      key={key}
                      variants={progressChild}
                      transition={{ type: "spring", stiffness: 320, damping: 22 }}
                      className="w-6 h-6 rounded-full shadow-md overflow-hidden flex justify-center items-center relative bg-white"
                    >
                      {i < 3 ? (
                        <Image src="/icon/paid-stats.svg" alt="payment-stat" height={200} width={100} quality={75} className="w-4 h-4 object-cover" />
                      ) : i === 3 ? (
                        <div className="w-4 h-4 bg-[#000012] rounded-full" />
                      ) : (
                        <Stamp height={200} width={100} className="w-4 h-4 object-cover" />
                      )}
                    </motion.div>
                  ))}
                </motion.div>


              </div>

              <div className="w-full flex items-center justify-between mt-4">
                <div className="w-[40%] py-1 rounded-full flex justify-center items-center bg-[#2D303F] shadow-md text-white cursor-pointer min-[380px]:text-base text-xs">Set Reminder</div>
                <div className="w-[55%] py-1 rounded-full flex justify-center items-center bg-white shadow-md text-[#2D303F] cursor-pointer min-[380px]:text-base text-xs">Download Invoice</div>
              </div>
            </div>
          </motion.div>
          <div className="absolute bg-black h-8 w-full blur-2xl top-6 left-0 " />
          <div className="absolute bg-black h-6 blur-sm top-3 w-[95%] md:left-2 left-2  " />


        </div>
        <div className="absolute w-full h-fit bottom-2 left-0 pt-2.5">
          <div className="w-[95%] border-b border-[#BFC6CE] mx-auto" />

          <div className="flex items-center justify-between my-2 w-[90%] mx-auto">
            <p className={`text-[#495562] ${poppins.className} min-[380px]:text-base text-xs`}>Payment Method</p>
            <div className="flex items-center gap-x-1.5">
              <p className={`text-[#495562] ${poppins.className} min-[380px]:text-base text-xs`}>Visa Ending 2986</p>
              <div className="w-12 h-8 rounded-md bg-[#1433C9]"></div>
            </div>
          </div>

          <div className="w-[90%] h-10 mx-auto rounded-md flex justify-center items-center bg-[#2D303F] shadow-md text-white cursor-pointer font-semibold">Pay Now</div>
        </div>
      </div>
    </main>
  );
}
