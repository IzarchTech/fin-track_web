function StayConnectedAndSecureSection() {
  return (
    <div className="w-full flex items-center py-12 bg-secondary">
      <div className="container space-y-6">
        <h2 className="text-center">Stay Connected and Secure</h2>
        <div className="space-y-4">
          <h3>Access Your Data Anywhere</h3>
          <p>
            Whether you’re at home, at work, or on the go, [App Name] keeps you
            connected to your finances. Our app syncs seamlessly across all your
            devices, so your data is always up-to-date and accessible wherever
            you are.
          </p>
          <ul className="list-disc ml-12">
            <li>
              <span className="font-bold font-teko text-lg">
                Multi-Device Sync
              </span>
              : Access your account from your phone, tablet, or computer.
            </li>
            <li>
              <span className="font-bold font-teko text-lg">
                Offline Access
              </span>
              : View and edit your data even without an internet connection.
            </li>
          </ul>

          <h3>Your Security is Our Priority</h3>
          <p>
            We understand that your financial data is sensitive. That’s why
            FinTrack employs advanced security measures to protect your
            information. Your data is encrypted and stored securely, giving you
            peace of mind.
          </p>
          <ul className="list-disc ml-12">
            <li>
              <span className="font-bold font-teko text-lg">
                Data Encryption
              </span>
              : Protecting your data with the highest levels of encryption.
            </li>
            <li>
              <span className="font-bold font-teko text-lg">
                Secure Cloud Storage
              </span>
              : Safe, reliable storage for all your financial information.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default StayConnectedAndSecureSection;
