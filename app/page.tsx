import { About } from "./components/About";
import { Header } from "./components/Header";
import { Work } from "./components/Work";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
    <Header />
    <main className="flex-1 bg-background">
      <About />
      <div className="w-full max-w-xl mx-auto px-4">
        <div className="h-px bg-border w-full my-4"></div>
      </div>
      <Work />
    </main>
  </div>
  );
}
