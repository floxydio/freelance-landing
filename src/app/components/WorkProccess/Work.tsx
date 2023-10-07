import styles from "./Work.module.css";
import Image from "next/image";

export default function Work() {
  return (
    <main className="flex justify-center my-20">
      <div>
        <div className="text-center h-max mb-5 py-8">
          <p
            className={`${styles.colorWork} text-sm font-bold leading-4 tracking-widest`}
          >
            WORK PROCESS
          </p>

          <p className="xl:text-4xl md:text-4xl text-2xl text-black font-bold leading-10 pt-5">
            How to work it software application
          </p>
        </div>

        <div className="flex justify-center flex-wrap gap-x-5">
          <div className="featureSatu w-80 h-64 grid text-center gap-2 max-md:mb-10">
            <p
              className={`${styles.colorNumber} font-bold lg:text-4xl md:text-xl mb-5`}
            >
              01
            </p>
            <div className="w-100 grid justify-center">
              <Image
                src={`/iconAccount.png`}
                alt="Create Account"
                width={60}
                height={60}
              />
            </div>
            <p className={`${styles.color} font-bold lg:text-2xl md:text-xl`}>
              Create Account
            </p>
            <p className={`text-sm font-normal leading-5 ${styles.colorDesc}`}>
              This should be used to tell a story and let your users know more
              about your service. How can you benefit them?
            </p>
          </div>

          <div className="featureDua w-80 h-64 grid text-center gap-2 max-md:mb-10">
            <p
              className={`${styles.colorNumber} font-bold lg:text-4xl md:text-xl mb-4`}
            >
              02
            </p>
            <div className="w-100 grid justify-center">
              <Image
                src={`/iconComputer.png`}
                alt="Computer Boots"
                width={60}
                height={60}
              />
            </div>
            <p className={`${styles.color} font-bold lg:text-2xl md:text-xl`}>
              Computer Boots
            </p>
            <p className={`text-sm font-normal leading-5 ${styles.colorDesc}`}>
              This should be used to tell a story and let your users know more
              about your service. How can you benefit them?
            </p>
          </div>

          <div className="featureTiga w-80 h-64 grid text-center gap-2">
            <p
              className={`${styles.colorNumber} font-bold lg:text-4xl md:text-xl mb-4`}
            >
              03
            </p>
            <div className="w-100 grid justify-center">
              <Image
                src={`/iconSetup.png`}
                alt="Computer Setup"
                width={60}
                height={60}
              />
            </div>
            <p className={`${styles.color} font-bold lg:text-2xl md:text-xl`}>
              Computer Setup
            </p>
            <p className={`text-sm font-normal leading-5 ${styles.colorDesc}`}>
              This should be used to tell a story and let your users know more
              about your service. How can you benefit them?
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
