import { ThemeToggle } from "@/components/ui/themeToggle";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <h1 className="text-2x1 font-bold text-red-500">hello</h1>
      <ThemeToggle />
    </div>
  );
}
