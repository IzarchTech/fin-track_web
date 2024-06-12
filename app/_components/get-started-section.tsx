import Image from "next/image";
import getStartedImg from "@/assets/get-started.png";

function GetStartedSection() {
  return (
    <div
      className="w-full flex items-center bg-secondary py-12"
      id="get_started"
    >
      <div className="container space-y-4 flex flex-col px-4">
        <div className="w-full text-center space-y-4">
          <h2 className="uppercase">Start Managing Your Finances Today!</h2>
          <p>
            Take the first step towards financial freedom. Sign up for free and
            start tracking your income and expenses with FinTrack.
          </p>
        </div>

        <div className="grid mt-6 lg:grid-cols-2 gap-6 lg:place-items-center lg:justify-items-center">
          <div className="space-y-4">
            <h3 className="text-center lg:text-left">Get Started Now</h3>
            <ul className="list-disc">
              <li>
                <h4>Sign Up Free</h4>Create your free account in minutes.
              </li>
              <li>
                <h4>Learn More</h4>Discover how FinTrack can help you take
                control of your finances.
              </li>
              <li>
                <h4>Contact Us</h4>Have questions? Reach out to our support team
                anytime.
              </li>
            </ul>
          </div>

          <div className="relative h-96 lg:h-[450px] w-full">
            <Image
              src={getStartedImg}
              alt={"getting started"}
              objectFit="contain"
              className="rounded-full"
              fill
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default GetStartedSection;
