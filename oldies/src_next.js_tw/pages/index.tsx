import { Inter } from "next/font/google";
import NavMenu from "./components/NavMenu";
import TopBar from "./components/TopBar";
import Dashboard from "./components/Dashboard";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div
      className={`mx-auto min-h-screen flex items-center justify-center p-2 ${inter.className}`}
    >
      <div className="flex w-full bg-white border-8 border-[#FF7D7D] rounded-3xl">
        <header className="hidden sm:flex w-1/6">
          <NavMenu />
        </header>
        <main className="flex flex-col w-full">
          <TopBar />
          <Dashboard />
        </main>
      </div>
    </div>
  );
}
