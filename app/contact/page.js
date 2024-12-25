import { INSTA_CHAT_LINK, MAIL, WHATSAPP_LINK } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Contact Us",
  description: ` We're here to help. Chat to our friendly team 24/7 and get set up and`,
};

export default function Contact() {
  const mapUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.979202023854!2d77.63525299999999!3d12.909058199999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2f9ebf593bb7e5fd%3A0x81be059b3d7e434!2sHappy%20Tokens!5e0!3m2!1sen!2sin!4v1735126849285!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade`;
  return (
    <div className="mt-[100px] mx-8 flex flex-col md:flex-row justify-between items-start pb-[500px] gap-5">
      <div className="">
        <h1 className="text-customBlue text-2xl md:text-5xl">Get in Touch</h1>
        <p className="mt-5 text-customBlue2">
          We're here to help. Chat to our friendly team 24/7 and get set up and
          ready to go in just 5 minutes.
        </p>

        <Link href={INSTA_CHAT_LINK}>
          <span className="inline-flex gap-5 justify-start items-center mt-5">
            <Image
              src={"/contact/insta.png"}
              height={30}
              width={30}
              alt="insta"
            />
            <p className="font-bold text-customBlue2">Chat Now</p>
          </span>
        </Link>
        <div>
          <Link href={MAIL}>
            <span className="inline-flex gap-5 justify-start items-center mt-3">
              <Image
                src={"/contact/mail.png"}
                height={30}
                width={30}
                alt="insta"
              />
              <p className="font-bold text-customBlue2">Mail Us</p>
            </span>
          </Link>
        </div>
        <div>
          <Link href={WHATSAPP_LINK}>
            <span className="inline-flex gap-5 justify-start items-center mt-3">
              <Image
                src={"/contact/wa.png"}
                height={30}
                width={30}
                alt="insta"
              />
              <p className="font-bold text-customBlue2">WhatsApp Now</p>
            </span>
          </Link>
        </div>
      </div>
      <iframe
        src={mapUrl}
        className="mt-5 w-full h-[300px] md:h-[650px] rounded-lg"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      />
    </div>
  );
}
