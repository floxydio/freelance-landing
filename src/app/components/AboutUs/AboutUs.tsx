import styles from "./AboutUs.module.css";
import Image from "next/image";

export default function AboutUs() {
  return (
    <main className={`flex justify-center my-20 ${styles.bg}`}>
      <div className="row flex gap-x-5">
        <div className="columns-3 flex">
          <div className="">
            <Image
              src={`/macbook.png`}
              alt="Macbook"
              width={700}
              height={700}
            />
          </div>
        </div>
        <div className="columns-9 flex py-5 w-5/12">
          <div className="row">
            <p
              className={`${styles.color} text-sm font-bold leading-4 tracking-widest`}
            >
              HOW IT WORK
            </p>
            <p className="mt-5 text-4xl font-bold line-height:[52px]">
              Solutions for every softwore problems solved
            </p>

            <div className="list w-10/12">
              <div className="row mt-10 flex gap-x-5">
                <div className="col">
                  <p
                    className={`text-3xl font-bold leading-9 ${styles.numColor}`}
                  >
                    01
                  </p>
                </div>
                <div className="col">
                  <div className="row text-2xl font-medium leading-7 text-black mb-2">
                    Get Started
                  </div>
                  <div className="row text-sm">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Facere, asperiores nam voluptate quia, qui, officiis saepe
                    quidem dignissimos suscipit animi id accusantium eveniet
                  </div>
                </div>
              </div>
              <div className="row mt-10 flex gap-x-5">
                <div className="col">
                  <p
                    className={`text-3xl font-bold leading-9 ${styles.numColor}`}
                  >
                    02
                  </p>
                </div>
                <div className="col">
                  <div className="row text-2xl font-medium leading-7 text-black mb-2">
                    Staet Our Ideas
                  </div>
                  <div className="row text-sm">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Facere, asperiores nam voluptate quia, qui, officiis saepe
                    quidem dignissimos suscipit animi id accusantium eveniet
                  </div>
                </div>
              </div>
              <div className="row mt-10 flex gap-x-5">
                <div className="col">
                  <p
                    className={`text-3xl font-bold leading-9 ${styles.numColor}`}
                  >
                    03
                  </p>
                </div>
                <div className="col">
                  <div className="row text-2xl font-medium leading-7 text-black mb-2">
                    Software Solutions
                  </div>
                  <div className="row text-sm">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Facere, asperiores nam voluptate quia, qui, officiis saepe
                    quidem dignissimos suscipit animi id accusantium eveniet
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </main>
  );
}
