import { Sidebar } from "@/components/widgets/sidebar";
import { Events } from "@/components/widgets/events";
import { Recommendations } from "../components/widgets/recomendations";

export default function Home() {
  return (
    <div className="flex justify-center">
      <nav className="w-1/12 h-screen">
        <Sidebar />
      </nav>
      <main className="w-11/12 h-screen bg-accent flex flex-col justify-evenly pl-5 ">
        <div
          data-slot="welcome"
          id="welcome_message"
          className="text-center text-2xl font-bold "
        >
          Bienvenido
        </div>
        <Recommendations />
        <Events />
      </main>
    </div>
  );
}
