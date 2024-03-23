import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { LoginButton } from "@/components/auth/login-button";

const font = Poppins({
  subsets: ["latin"],
  weight: ["400", "600"],
});

export default function Home() {
  return (
    <main className="flex h-full flex-col items-center justify-center bg-neutral-900">
      <div className={cn("space-y-8", font.className)}>
        <h1 className="text-6xl font-semibold text-white">🔐 Auth Toolkit</h1>
        <p className="text-center text-lg text-white">
          A simple authentication service
        </p>
        <div className="flex justify-center">
          <LoginButton>
            <Button variant="secondary" size="lg">
              Sign In
            </Button>
          </LoginButton>
        </div>
      </div>
    </main>
  );
}
