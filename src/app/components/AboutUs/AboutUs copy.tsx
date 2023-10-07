import styles from "./AboutUs.module.css";
import Image from "next/image";

export default function AboutUs() {
  return (
    <main className={`flex justify-center my-20 ${styles.bg}`}>
      <div className="row flex gap-x-5">
        <div className="columns-6 flex flex-row text-right">
          <Image
            src={`/macbook.png`}
            alt="Macbook"
            width={800}
            height={800}
          />
        </div>
        <div className="columns-6 flex py-40 w-2/6">
          <div className="row">
            <p
              className={`${styles.color} text-sm font-bold leading-4 tracking-widest`}
            >
              HOW IT WORK
            </p>
            <p className="mt-5 text-4xl font-bold line-height:[52px]">
              Solutions for every softwore problems solved
            </p>

            <div className="row mt-10 flex gap-x-5">
                <div className="col">
                    <p className={`text-3xl font-bold leading-9 ${styles.numColor}`}>01</p>
                </div>
                <div className="col">
                    <div className="row text-2xl font-medium leading-7 text-black mb-3">Get Started</div>
                    <div className="row">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere, asperiores nam voluptate quia, qui, officiis saepe quidem dignissimos suscipit animi id accusantium eveniet delectus dolorum fuga? Eos dolorum pariatur aliquid!</div>
                </div>
            </div>
            <div className="row mt-10 flex gap-x-5">
                <div className="col">
                    <p className={`text-3xl font-bold leading-9 ${styles.numColor}`}>02</p>
                </div>
                <div className="col">
                    <div className="row text-2xl font-medium leading-7 text-black mb-3">Staet Our Ideas</div>
                    <div className="row">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere, asperiores nam voluptate quia, qui, officiis saepe quidem dignissimos suscipit animi id accusantium eveniet delectus dolorum fuga? Eos dolorum pariatur aliquid!</div>
                </div>
            </div>
            <div className="row mt-10 flex gap-x-5">
                <div className="col">
                    <p className={`text-3xl font-bold leading-9 ${styles.numColor}`}>03</p>
                </div>
                <div className="col">
                    <div className="row text-2xl font-medium leading-7 text-black mb-3">Software Solutions</div>
                    <div className="row">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere, asperiores nam voluptate quia, qui, officiis saepe quidem dignissimos suscipit animi id accusantium eveniet delectus dolorum fuga? Eos dolorum pariatur aliquid!</div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
