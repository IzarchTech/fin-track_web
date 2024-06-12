import finImg from "@/assets/Revenue-bro.png";
import Image from "next/image";
import FeaturesSection from "./_components/features-section";
export default function Home() {
  return (
    <main className="flex flex-col items-center space-y-2 w-full">
      <div className="w-full container grid grid-cols-[auto_1fr] place-items-center justify-items-center px-4">
        <div className="w-full max-w-[40ch] text-left">
          <h1>Take Control of Your Finances Effortlessly</h1>
          <p>
            Stay on top of your finances with our intuitive and user-friendly
            expense and income tracker. Whether you’re managing your personal
            budget, saving for a goal, or monitoring your business expenses,
            FinTrack provides the tools you need to stay organized and in
            control.
          </p>
        </div>
        <div className="relative h-[500px] w-full">
          <Image
            src={finImg}
            alt={"finance control"}
            objectFit="contain"
            fill
            priority
          />
        </div>
      </div>
      <FeaturesSection />
    </main>
  );
}
