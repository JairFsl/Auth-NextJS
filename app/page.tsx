import { Button } from "@/components/ui/button";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import { LoginButton } from "@/components/auth/login-button";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

export default function Home() {
  return (
    <main className="flex h-full flex-col items-center justify-center bg-gray-900">
      <div className="space-y-6 text-center">
        <h1
          className={cn(
            "font-bold text-white drop-shadow-md text-6xl",
            font.className
          )}
        >
          Next Auth
        </h1>
        <p className="text-white text-lg">Autenticação usando Next Auth V5</p>
        <div>
          <LoginButton>
            <Button variant={"secondary"} size={"lg"}>
              Sign In
            </Button>
          </LoginButton>
        </div>
      </div>
    </main>
  );
}
