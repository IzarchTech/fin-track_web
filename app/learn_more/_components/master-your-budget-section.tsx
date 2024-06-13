function MasterYourBudgetSection() {
  return (
    <div className="w-full flex items-center py-12">
      <div className="container space-y-6">
        <h2 className="text-center">Master Your Budget</h2>
        <div className="space-y-4">
          <h3>Set and Stick to Your Budget</h3>
          <p>
            Budgeting is crucial for financial stability. With FinTrack, you can
            set up monthly budgets for different categories and track your
            spending against these limits. Our app will alert you when you’re
            approaching or exceeding your budget, helping you stay on track.
          </p>
          <ul className="list-disc ml-12">
            <li>
              <span className="font-bold font-teko text-lg">
                Custom Budget Categories
              </span>
              : Tailor budgets to fit your unique needs and goals.
            </li>
            <li>
              <span className="font-bold font-teko text-lg">
                Progress Tracking
              </span>
              : Monitor your budget performance with ease.
            </li>
          </ul>

          <h3>Achieve Your Financial Goals</h3>
          <p>
            Whether you&apos;re saving for a vacation, a new home, or just want
            to build an emergency fund, FinTrack helps you set and achieve your
            financial goals. Define your targets, track your progress, and
            celebrate your achievements.
          </p>
          <ul className="list-disc ml-12">
            <li>
              <span className="font-bold font-teko text-lg">Goal Setting</span>:
              Create savings goals and monitor your journey towards achieving
              them.
            </li>
            <li>
              <span className="font-bold font-teko text-lg">
                Milestone Celebrations
              </span>
              : Get notified and rewarded as you reach your financial
              milestones.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default MasterYourBudgetSection;
