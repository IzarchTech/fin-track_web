import Image from "next/image";
import { Metadata } from "next";

import learnMoreImg from "@/assets/learn-more.png";
import SimplifyYourFinancialManagementSection from "./_components/simplify-your-financial-management-section";
import MasterYourBudgetSection from "./_components/master-your-budget-section";
import GainInsightfulReportsSection from "./_components/gain-insightful-reports-section";
import StayConnectedAndSecureSection from "./_components/stay-connected-and-secure-section";

export const metadata: Metadata = {
  title: "Learn More - FinTrack",
  description:
    "Discover How FinTrack Can Help You Take Control of Your Finances",
  openGraph: {
    title: "Learn More - FinTrack",
    description:
      "Discover How FinTrack Can Help You Take Control of Your Finances",
    type: "website",
  },
  twitter: {
    title: "Learn More - FinTrack",
    description:
      "Discover How FinTrack Can Help You Take Control of Your Finances",
  },
};

function LearnMorePage() {
  return (
    <div className="w-full flex flex-col items-center">
      <div className="container grid lg:grid-cols-2 py-12 px-4 place-items-center">
        <div className="space-y-4">
          <h1>
            Discover How FinTrack Can Help You Take Control of Your Finances
          </h1>
          <p>
            Managing your finances doesn’t have to be overwhelming or
            complicated. At FinTrack, we believe in empowering you with the
            tools and insights to take full control of your financial life.
            Here&apos;s how our app can make a difference for you:
          </p>
        </div>
        <div className="relative hidden lg:block h-[450px] w-full">
          <Image
            src={learnMoreImg}
            alt="Learn More"
            objectFit="contain"
            className="rounded-full"
            fill
            priority
          />
        </div>
      </div>
      <SimplifyYourFinancialManagementSection />
      <MasterYourBudgetSection />
      <GainInsightfulReportsSection />
      <StayConnectedAndSecureSection />
    </div>
  );
}

export default LearnMorePage;
