// import Image from "next/image";
// import { UnderlineText } from "./get-cashback";
// export default function Testimonial() {
//   return (
//     <div id="testimonial" className="mt-52 text-center">
//       <h1 className="text-6xl tracking-widest text-customBlue">TESTIMONIAL</h1>
//       <UnderlineText
//         text={"People who Already love us"}
//         fontSize={"text-6xl"}
//       />
//       <div className="w-full flex justify-center items-center overflow-x-auto  mt-20 gap-5">
//         <TestimonialTile
//           image={"/home/testimonial/test-1.jpeg"}
//           para={
//             "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley"
//           }
//           name={"Jane Doe"}
//           designation={"Engineer"}
//         />
//         <TestimonialTile
//           image={"/home/testimonial/test-1.jpeg"}
//           para={
//             "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley"
//           }
//           name={"Jane Doe"}
//           designation={"Engineer"}
//         />
//         <TestimonialTile
//           image={"/home/testimonial/test-1.jpeg"}
//           para={
//             "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley"
//           }
//           name={"Jane Doe"}
//           designation={"Engineer"}
//         />
//       </div>
//     </div>
//   );
// }

// function TestimonialTile({ image, para, name, designation }) {
//   return (
//     <div className="px-10 w-[300px] h-[400px] py-5 bg-white rounded-md flex flex-col justify-center items-start gap-5">
//       <Image src={"/home/comma.png"} height={44} width={51} alt="comma " />
//       <p className="text-start italic">{para}</p>
//       <div className="flex gap-3 justify-center items-center">
//         <div className="relative h-[100px] w-[100px]">
//           <Image
//             className="rounded-full h-[100px] w-[100px] object-cover"
//             src={"/home/testimonial/test-1.jpeg"}
//             layout="fill"
//             alt="testimonial"
//           />
//         </div>
//         <div className="flex flex-col gap-1 justify-start items-start">
//           <h2 className="text-lg font-bold">{name}</h2>
//           <p className="text-sm">{designation}</p>
//         </div>
//       </div>
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

export default function Testimonial() {
  return (
    <motion.div
      id="testimonial"
      className="mt-52 text-center"
      variants={fadeInVariants}
      initial="hidden"
      whileInView="visible"
      transition={{ duration: 0.8 }}
    >
      <h1 className="text-3xl md:text-6xl tracking-widest text-customBlue">
        TESTIMONIAL
      </h1>
      <UnderlineText
        text={"People who Already love us"}
        fontSize={"text-xl md:text-6xl"}
      />
      <div className="overflow-y-hidden w-full flex justify-start md:justify-center items-center overflow-x-auto mt-20 gap-5 scrollbar-hide">
        <motion.div
          variants={fadeInVariants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.8 }}
          className="min-w-[300px] flex-shrink-0"
        >
          <TestimonialTile
            image={""}
            para={
              "Happy Token is a game changer! Every time I dine at my favorite restaurants, I get 10-20% cashback effortlessly. It's so easy to use, and the rewards add up quickly. It's like getting paid to enjoy great food!"
            }
            name={""}
            designation={""}
          />
        </motion.div>

        <motion.div
          variants={fadeInVariants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.8 }}
          className="min-w-[300px] flex-shrink-0"
        >
          <TestimonialTile
            image={""}
            para={
              "I love eating out, and Happy Token makes it even better! I’ve saved so much money thanks to their cashback system. It’s super convenient, and I feel rewarded every time I enjoy a meal. Highly recommend!"
            }
            name={""}
            designation={""}
          />
        </motion.div>

        <motion.div
          variants={fadeInVariants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.8 }}
          className="min-w-[300px] flex-shrink-0"
        >
          <TestimonialTile
            image={""}
            para={
              "Happy Token has become my dining companion. Knowing I get 10-20% cashback makes every meal feel like a win. It’s easy to use, and the savings are real. Eating out never felt this rewarding!"
            }
            name={""}
            designation={""}
          />
        </motion.div>
      </div>
    </motion.div>
  );
}

function TestimonialTile({ image, para, name, designation }) {
  return (
    <div className="px-5 md:px-10 w-[300px] h-[400px] py-5 bg-white rounded-md flex flex-col justify-center items-start gap-5">
      <Image src={"/home/comma.png"} height={44} width={51} alt="comma " />
      <p className="text-start italic">{para}</p>
      <div className="flex gap-3 justify-center items-center">
        <div className="relative h-[100px] w-[100px]">
          <Image
            className="rounded-full h-[100px] w-[100px] object-cover"
            src={image}
            layout="fill"
            alt="testimonial"
          />
        </div>
        <div className="flex flex-col gap-1 justify-start items-start">
          <h2 className="text-lg font-bold">{name}</h2>
          <p className="text-sm">{designation}</p>
        </div>
      </div>
    </div>
  );
}
