import { useState } from "react";
import Button from "@/components/Button";

interface QRVCardProps {
  onGenerate: (text: string) => void;
}

export default function QRVCard({ onGenerate }: QRVCardProps) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [organization, setOrganization] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");

  const handleGenerate = () => {
    const vCardData = `BEGIN:VCARD
VERSION:3.0
N:${lastName};${firstName}
FN:${firstName} ${lastName}
ORG:${organization}
TEL:${phone}
EMAIL:${email}
${website ? `URL:${website}` : ""}
END:VCARD`;

    onGenerate(vCardData);
  };

  return (
    <div className="flex flex-col">
      <div className="grid grid-cols-2 gap-2 mb-2">
        <input
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          className="border p-2 rounded w-full bg-white text-gray-900 dark:bg-gray-800 dark:text-gray-200 dark:border-gray-700"
        />
        <input
          type="text"
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          className="border p-2 rounded w-full bg-white text-gray-900 dark:bg-gray-800 dark:text-gray-200 dark:border-gray-700"
        />
      </div>

      <input
        type="text"
        placeholder="Organization"
        value={organization}
        onChange={(e) => setOrganization(e.target.value)}
        className="border p-2 rounded w-full mb-2 bg-white text-gray-900 dark:bg-gray-800 dark:text-gray-200 dark:border-gray-700"
      />

      <input
        type="text"
        placeholder="Phone Number"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        className="border p-2 rounded w-full mb-2 bg-white text-gray-900 dark:bg-gray-800 dark:text-gray-200 dark:border-gray-700"
      />

      <input
        type="email"
        placeholder="Email Address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border p-2 rounded w-full mb-2 bg-white text-gray-900 dark:bg-gray-800 dark:text-gray-200 dark:border-gray-700"
      />

      <input
        type="url"
        placeholder="Website (Optional)"
        value={website}
        onChange={(e) => setWebsite(e.target.value)}
        className="border p-2 rounded w-full mb-4 bg-white text-gray-900 dark:bg-gray-800 dark:text-gray-200 dark:border-gray-700"
      />

      <Button onClick={handleGenerate} variant="primary">
        Generate QR Code
      </Button>
    </div>
  );
}
