// import { UnderlineText } from "./get-cashback";
// import Image from "next/image";
// export default function HowItWorks() {
//   return (
//     <div id="how" className="mt-52 text-center">
//       <h1 className="text-6xl tracking-widest text-customBlue">
//         ITS EASY & SECURE
//       </h1>
//       <UnderlineText text={"How It Works"} fontSize={"text-6xl"} />
//       <p className="mt-5 text-customBlue2">
//         Get cashback on every transaction over 36000 stores
//       </p>
//       <div className="flex justify-center items-center gap-10 mt-20">
//         <HowTile
//           icon={"/home/register.png"}
//           title={"Register Account"}
//           subtitle={
//             "Everybody can join the cashback platform online through mobile app. It takes only few minutes, and It’s completely free."
//           }
//           height={232}
//           width={353}
//         />
//         <HowTile
//           icon={"/home/shop_i.png"}
//           title={"Shop and start Earning"}
//           subtitle={
//             "Shop anything listed on our app and start earning cashback immediately."
//           }
//           height={235}
//           width={254}
//         />
//         <HowTile
//           icon={"/home/withdraw.png"}
//           title={"Withdraw Profit"}
//           subtitle={
//             "Withdraw cashback anytime or shop with the cashback anytime."
//           }
//           height={211}
//           width={223}
//         />
//       </div>
//     </div>
//   );
// }
// function HowTile({ icon, title, subtitle, height, width }) {
//   return (
//     <div className="py-5 px-5 w-[400px] mt-5 flex flex-col justify-center items-center gap-3">
//       <Image src={icon} height={height} width={width} alt="users icon" />
//       <h1 className="mt-5 text-4xl text-customBlue3">{title}</h1>
//       <p className="mt-5 text-customBlue2">{subtitle}</p>
//     </div>
//   );
// }
"use client";

import { motion } from "framer-motion";
import { UnderlineText } from "./get-cashback";
import Image from "next/image";

// Animation variants for fade-in effect
const fadeInVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

export default function HowItWorks() {
  return (
    <motion.div
      id="how"
      className="mt-32 md:mt-52 text-center"
      variants={fadeInVariants}
      initial="hidden"
      whileInView="visible"
      transition={{ duration: 0.8 }}
    >
      <h1 className="text-4xl md:text-6xl tracking-widest text-customBlue">
        ITS EASY & SECURE
      </h1>
      <UnderlineText text={"How It Works"} fontSize={"text-xl md:text-6xl"} />
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
          <HowTile
            icon={"/home/register.png"}
            title={"Register Account"}
            subtitle={
              "Everybody can join the cashback platform online through mobile app. It takes only few minutes, and It’s completely free."
            }
            height={232}
            width={353}
          />
        </motion.div>

        <motion.div
          variants={fadeInVariants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.8 }}
        >
          <HowTile
            icon={"/home/shop_i.png"}
            title={"Shop and start Earning"}
            subtitle={
              "Shop anything listed on our app and start earning cashback immediately."
            }
            height={235}
            width={254}
          />
        </motion.div>

        <motion.div
          variants={fadeInVariants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.8 }}
        >
          <HowTile
            icon={"/home/withdraw.png"}
            title={"Withdraw Profit"}
            subtitle={
              "Withdraw cashback anytime or shop with the cashback anytime."
            }
            height={211}
            width={223}
          />
        </motion.div>
      </div>
    </motion.div>
  );
}

function HowTile({ icon, title, subtitle, height, width }) {
  return (
    <div className="py-5 px-5 w-[400px] mt-5 flex flex-col justify-center items-center gap-3">
      <Image src={icon} height={height} width={width} alt="users icon" />
      <h1 className="mt-5 text-3xl md:text-4xl text-customBlue3">{title}</h1>
      <p className="mt-5 text-customBlue2">{subtitle}</p>
    </div>
  );
}
