import ButtonCheck from "@/components/ui/buttonCheck";
import { CardWelcome } from "@/components/widget/avatarCardWelcome/CardWelcome";
export default function WelcomePage() {
  return (
    <section className="flex flex-col justify-center items-center lg:flex-row lg:items-start w-screen h-screen pt-16 px-8">
      <h1 className="lg:mt-[2rem] text-2xl leading-[3rem] font-bold text-center">
        Bienvenido a una experiencia única, comencemos, Contanos quienes van a
        pedir?
      </h1>
      <div className="flex-col items-center justify-center">
        <CardWelcome />
        <span className="w-[80vw] lg:max-w-[30rem] mt-2 h-[10rem] flex items-center justify-end">
          <ButtonCheck />
        </span>
      </div>
    </section>
  );
}
