import Header from "@/components/header/header";
import GetCashback from "@/components/home/get-cashback";
import HighestCashback from "@/components/home/highest-cashback";
import HowItWorks from "@/components/home/how-it-works";
import Testimonial from "@/components/home/testimonial";

import Image from "next/image";

export default function Home() {
  return (
    <div className=" mt-[80px] py-10 px-10">
      <GetCashback />
      <HighestCashback />
      <HowItWorks />
      <Testimonial />
    </div>
  );
}
