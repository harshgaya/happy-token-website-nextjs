// import { WATCH_VIDEO } from "@/lib/constants";
// import Image from "next/image";
// import Link from "next/link";

// export default function GetCashback() {
//   return (
//     <div id="about" className="flex justify-between items-center">
//       <div className="flex flex-col justify-start items-start">
//         <p className="text-customBlue2 text-5xl">Get</p>
//         <UnderlineText text={"Cashback"} fontSize={"text-6xl"} />
//         <span className="inline-flex mt-5">
//           <p className="text-customBlue2 text-5xl">From</p>
//           <h1 className="text-customBlue text-5xl">36000 stores</h1>
//           <p className="text-customBlue2 text-5xl">!</p>
//         </span>
//         <p className="mt-5 text-customBlue2">
//           Start saving from your daily shopping & <br></br>
//           start your super affiliate business for free.
//         </p>
//         <Link href={WATCH_VIDEO}>
//           <Image
//             className="mt-20"
//             src={"/home/watch-video.png"}
//             height={81}
//             width={334}
//             alt="watch video"
//           />
//         </Link>
//       </div>
//       <Image src={"/home/girl.png"} height={700} width={600} alt="" />
//     </div>
//   );
// }

// export function UnderlineText({ text, fontSize }) {
//   return (
//     <div className="relative mt-3 inline-block">
//       <h1
//         className={`text-customBlue3 ${fontSize} font-extrabold relative z-10 inline-block`}
//       >
//         {text}
//       </h1>

//       <div className="absolute bottom-2 left-0 w-full h-[12px] bg-customYellow z-0 rounded-full"></div>
//     </div>
//   );
// }

"use client";
import { WATCH_VIDEO } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const fadeInVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

export default function GetCashback() {
  return (
    <motion.div
      id="about"
      className="flex  flex-col-reverse md:flex-row justify-between items-center"
      variants={fadeInVariants}
      initial="hidden"
      whileInView="visible"
      transition={{ duration: 0.8 }}
    >
      <div className="flex flex-col justify-start items-start">
        <p className="text-customBlue2 text-2xl md:text-5xl">Get</p>
        <UnderlineText text={"Cashback"} fontSize={"text-4xl md:text-6xl"} />
        <span className="inline-flex mt-5">
          <p className="text-customBlue2 text-2xl md:text-5xl">From</p>
          <h1 className="text-customBlue text-2xl md:text-5xl">36000 stores</h1>
          <p className="text-customBlue2 text-2xl md:text-5xl">!</p>
        </span>
        <p className="mt-5 text-customBlue2">
          Start saving from your daily shopping & <br></br>
          start your super affiliate business for free.
        </p>
        <Link href={WATCH_VIDEO}>
          <Image
            className="mt-10 md:mt-20"
            src={"/home/watch-video.png"}
            height={81}
            width={334}
            alt="watch video"
          />
        </Link>
      </div>
      <Image src={"/home/girl.png"} height={700} width={600} alt="" />
    </motion.div>
  );
}

export function UnderlineText({ text, fontSize }) {
  return (
    <div className="relative mt-3 inline-block">
      <h1
        className={`text-customBlue3 ${fontSize} font-extrabold relative z-10 inline-block`}
      >
        {text}
      </h1>

      <div className="absolute bottom-2 left-0 w-full h-[5px] md:h-[12px] bg-customYellow z-0 rounded-full"></div>
    </div>
  );
}
