// https://www.figma.com/file/2sCtxaaINlRmVcL5yhWJdS/Softsas---Software-Landing-Page-UI-Kit-(Community)?type=design&node-id=0%3A1&mode=design&t=8Xtc7HvZRGUdkSYc-1
// https://github.com/floxydio/freelance-landing
import styles from "./Feature.module.css";
import Image from "next/image";
// import easy from "/easy.png";
// import clean from "/clean.png";
// import redint from "/redint.png";

export default function Feature() {
  return (
      <main className="flex justify-center my-20">
        <div>
          <div className="text-center h-max mb-5 py-8">
            <p
              className={`${styles.color} text-sm font-bold leading-4 tracking-widest`}
            >
              FEATURE
            </p>

            <p className="xl:text-4xl md:text-4xl text-2xl text-black font-bold leading-10 pt-5">
              We features & solution your application
            </p>
          </div>

          <div className="flex justify-center flex-wrap gap-5">
            <div className="featureSatu w-80 h-64 grid content-center gap-4 ps-10 shadow-md">
              <Image src={`/easy.png`} alt="Easy Customize" width={60} height={60} />
              <p className={`${styles.color} font-bold lg:text-2xl md:text-xl`}>
                Easy To Customize
              </p>
              <p
                className={`${styles.easyColor} font-normal text-[13px] leading-5`}
              >
                A complete about-face in its core economy Amsterdams progressive
              </p>
            </div>

            <div className="featureDua w-80 h-64 grid content-center gap-4 ps-10">
              <Image src={`/clean.png`} alt="Clean Code" width={60} height={60} />
              <p className={`font-bold lg:text-2xl md:text-xl text-black`}>Clean Code</p>
              <p
                className={`${styles.easyColor} font-normal text-[13px] leading-5`}
              >
                A complete about-face in its core economy Amsterdams progressive
              </p>
            </div>

            <div className="featureTiga w-80 h-64 grid content-center gap-4 ps-10">
              <Image src={`/redint.png`} alt="Clean Code" width={60} height={60} />
              <p className={`font-bold lg:text-2xl md:text-xl text-black`}>Redint Ready</p>
              <p
                className={`${styles.easyColor} font-normal text-[13px] leading-5`}
              >
                A complete about-face in its core economy Amsterdams progressive
              </p>
            </div>
          </div>
        </div>
      </main>
  );
}
