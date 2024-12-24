// import Image from "next/image";
// import { UnderlineText } from "./get-cashback";

// export default function HighestCashback() {
//   return (
//     <div className="mt-52 text-center">
//       <h1 className="text-6xl tracking-widest text-customBlue">HIGHEST</h1>
//       <UnderlineText text={"Cashback Guaranteed"} fontSize={"text-6xl"} />
//       <p className="mt-5 text-customBlue2">
//         Get cashback on every transaction over 36000 stores
//       </p>
//       <div className="flex justify-center items-center gap-10 mt-20">
//         <CashbackTile
//           icon={"/home/users.png"}
//           title={"10,000"}
//           subtitle={"Registered Users"}
//           height={103}
//           width={160}
//         />
//         <CashbackTile
//           icon={"/home/cashback-paid.png"}
//           title={"₹90,000"}
//           subtitle={"Cashback Paid"}
//           height={120}
//           width={120}
//         />
//         <CashbackTile
//           icon={"/home/shop.png"}
//           title={"36,000"}
//           subtitle={"Registered Shops"}
//           height={106}
//           width={106}
//         />
//       </div>
//     </div>
//   );
// }

// function CashbackTile({ icon, title, subtitle, height, width }) {
//   return (
//     <div className="h-[300px] w-[300px] shadow-md rounded-md mt-5 flex flex-col justify-center items-center gap-3">
//       <Image src={icon} height={height} width={width} alt="users icon" />
//       <h1 className="text-6xl text-customBlue">{title}</h1>
//       <p className="mt-5 text-customBlue2">{subtitle}</p>
//     </div>
//   );
// }
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { UnderlineText } from "./get-cashback";

// Animation variants for fade-in effect
const fadeInVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

export default function HighestCashback() {
  return (
    <motion.div
      className="mt-32 md:mt-52 text-center"
      variants={fadeInVariants}
      initial="hidden"
      whileInView="visible"
      transition={{ duration: 0.8 }}
    >
      <h1 className="text-4xl md:text-6xl tracking-widest text-customBlue">
        HIGHEST
      </h1>
      <UnderlineText
        text={"Cashback Guaranteed"}
        fontSize={"text-xl md:text-6xl"}
      />
      <p className="mt-5 text-customBlue2">
        Get cashback on every transaction over 36000 stores
      </p>
      <div className="flex flex-col md:flex-row justify-center items-center gap-10 mt-20">
        <motion.div
          variants={fadeInVariants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.8 }}
        >
          <CashbackTile
            icon={"/home/users.png"}
            title={"10,000"}
            subtitle={"Registered Users"}
            height={103}
            width={160}
          />
        </motion.div>

        <motion.div
          variants={fadeInVariants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.8 }}
        >
          <CashbackTile
            icon={"/home/cashback-paid.png"}
            title={"₹90,000"}
            subtitle={"Cashback Paid"}
            height={120}
            width={120}
          />
        </motion.div>

        <motion.div
          variants={fadeInVariants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.8 }}
        >
          <CashbackTile
            icon={"/home/shop.png"}
            title={"36,000"}
            subtitle={"Registered Shops"}
            height={106}
            width={106}
          />
        </motion.div>
      </div>
    </motion.div>
  );
}

function CashbackTile({ icon, title, subtitle, height, width }) {
  return (
    <div className="h-[300px] w-[300px] shadow-md rounded-md mt-5 flex flex-col justify-center items-center gap-3">
      <Image src={icon} height={height} width={width} alt="icon" />
      <h1 className="text-4xl md:text-6xl text-customBlue">{title}</h1>
      <p className="mt-5 text-customBlue2">{subtitle}</p>
    </div>
  );
}
