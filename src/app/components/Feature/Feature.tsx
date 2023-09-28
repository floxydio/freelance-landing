// https://www.figma.com/file/2sCtxaaINlRmVcL5yhWJdS/Softsas---Software-Landing-Page-UI-Kit-(Community)?type=design&node-id=0%3A1&mode=design&t=8Xtc7HvZRGUdkSYc-1
// https://github.com/floxydio/freelance-landing
import styles from "./Feature.module.css";
import Image from "next/image";
import easy from "./img/easy.png";
import clean from "./img/clean.png";
import redint from "./img/redint.png";

export default function Feature() {
  return (
    <>
      <main>
        <div className="h-20 text-center grid gap-y-3">
          <p
            className={`${styles.color} text-[14px] font-bold leading-4 tracking-widest text-center`}
          >
            FEATURE
          </p>

          <p className="text-4xl text-black font-bold leading-10">
            We features & solution your application
          </p>
        </div>

        <div className="flex mt-11 gap-x-5">
          <div className="featureSatu w-[370px] h-[276px] grid content-center gap-4 ps-10 shadow-md">
            <Image src={easy} alt="Easy Customize" width={60} height={60} />
            <p className={`${styles.color} font-bold text-2xl`}>
              Easy To Customize
            </p>
            <p
              className={`${styles.easyColor} font-normal text-[13px] leading-5`}
            >
              A complete about-face in its core economy Amsterdams progressive
            </p>
          </div>

          <div className="featureDua w-[370px] h-[276px] grid content-center gap-4 ps-10">
            <Image src={clean} alt="Clean Code" width={60} height={60} />
            <p className={`font-bold text-2xl text-black`}>Clean Code</p>
            <p
              className={`${styles.easyColor} font-normal text-[13px] leading-5`}
            >
              A complete about-face in its core economy Amsterdams progressive
            </p>
          </div>

          <div className="featureTiga w-[370px] h-[276px] grid content-center gap-4 ps-10">
            <Image src={redint} alt="Clean Code" width={60} height={60} />
            <p className={`font-bold text-2xl text-black`}>Redint Ready</p>
            <p
              className={`${styles.easyColor} font-normal text-[13px] leading-5`}
            >
              A complete about-face in its core economy Amsterdams progressive
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
