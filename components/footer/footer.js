// import Image from "next/image";
// import { NavItem } from "../header/header";
// import Link from "next/link";
// import { INSTA_LINK, WHATSAPP_LINK } from "@/lib/constants";

// export default function Footer() {
//   return (
//     <footer className="py-10 px-5 bg-white flex justify-between items-start">
//       <div className="flex flex-col justify-center items-center gap-5">
//         <Image
//           src={"/header/logo-ht.png"}
//           height={111}
//           width={211}
//           alt="happy tokens"
//         />
//         <span className="inline-flex gap-3">
//           <Link href={INSTA_LINK}>
//             {" "}
//             <Image
//               src={"/footer/insta-ht.png"}
//               height={34}
//               width={34}
//               alt="instagram"
//             />
//           </Link>
//           <Link href={INSTA_LINK}>
//             {" "}
//             <Image
//               src={"/footer/fb-ht.png"}
//               height={34}
//               width={34}
//               alt="facebook"
//             />
//           </Link>
//           <Link href={WHATSAPP_LINK}>
//             {" "}
//             <Image
//               src={"/footer/wa-ht.png"}
//               height={34}
//               width={34}
//               alt="whatsapp"
//             />
//           </Link>
//         </span>
//       </div>
//       <div className="flex flex-col gap-4 text-customBlue3">
//         <h1 className="text-3xl font-extrabold">Information</h1>
//         <div className="flex flex-col gap-2 ">
//           <NavItem link={"/terms-and-condition"} title={"Terms & Condition"} />
//           <NavItem link={"/privacy-policy"} title={"Privacy Policy"} />
//         </div>
//       </div>
//       <div className="flex flex-col gap-4 text-customBlue3">
//         <h1 className="text-3xl font-extrabold">User Guide</h1>
//         <div className="flex flex-col gap-2 ">
//           <NavItem link={"/#how"} title={"How It Works"} />
//           <NavItem link={"/#testimonial"} title={"Testimonials"} />
//         </div>
//       </div>
//       <div className="flex flex-col gap-4 text-customBlue3">
//         <h1 className="text-3xl font-extrabold">Head Office</h1>
//         <div className="flex flex-col gap-2 ">
//           <NavItem link={""} title={`12th Floor,Electronic City, Bengaluru`} />
//         </div>
//       </div>
//     </footer>
//   );
// }
"use client";
import Image from "next/image";
import { NavItem } from "../header/header";
import Link from "next/link";
import { INSTA_LINK, WHATSAPP_LINK } from "@/lib/constants";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="py-10 px-5 bg-white flex flex-col md:flex-row gap-8 md:gap-0 justify-between items-start">
      {/* Logo and Social Media */}
      <motion.div
        className="flex flex-col justify-center items-center gap-5"
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
      >
        <Image
          src={"/header/logo-ht.png"}
          height={111}
          width={211}
          alt="Happy Tokens Logo"
        />
        <div className="inline-flex gap-3">
          <Link href={INSTA_LINK} passHref>
            <Image
              src={"/footer/insta-ht.png"}
              height={34}
              width={34}
              alt="Instagram"
              className="transform hover:scale-110 transition-all duration-300"
            />
          </Link>
          <Link href={INSTA_LINK} passHref>
            <Image
              src={"/footer/fb-ht.png"}
              height={34}
              width={34}
              alt="Facebook"
              className="transform hover:scale-110 transition-all duration-300"
            />
          </Link>
          <Link href={WHATSAPP_LINK} passHref>
            <Image
              src={"/footer/wa-ht.png"}
              height={34}
              width={34}
              alt="WhatsApp"
              className="transform hover:scale-110 transition-all duration-300"
            />
          </Link>
        </div>
      </motion.div>

      {/* Information Section */}
      <motion.div
        className="flex flex-col gap-4 text-customBlue3"
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -20 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-3xl font-extrabold">Information</h1>
        <div className="flex flex-col gap-2">
          <NavItem link={"/terms-and-condition"} title={"Terms & Condition"} />
          <NavItem link={"/privacy-policy"} title={"Privacy Policy"} />
        </div>
      </motion.div>

      {/* User Guide Section */}
      <motion.div
        className="flex flex-col gap-4 text-customBlue3"
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -20 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-3xl font-extrabold">User Guide</h1>
        <div className="flex flex-col gap-2">
          <NavItem link={"/#how"} title={"How It Works"} />
          <NavItem link={"/#testimonial"} title={"Testimonials"} />
        </div>
      </motion.div>

      {/* Head Office Section */}
      <motion.div
        className="flex flex-col gap-4 text-customBlue3"
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -20 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-3xl font-extrabold">Head Office</h1>
        <div className="flex flex-col gap-2">
          <NavItem link={""} title={`12th Floor, Electronic City, Bengaluru`} />
        </div>
      </motion.div>
    </footer>
  );
}
