
import Image from "next/image";
import Name from "@/components/name";
import Skills from "@/components/skills";
import Spin from "@/components/spin";

export default function Home() {
  

  return (
    <>
      <section className="flex flex-col h-screen items-center justify-center">
        
        <Name />
      </section>
      
      <section className="flex gap-[32px] row-start-2 items-center justify-between  h-screen p-22">
        <Spin posx="50" posy="100" name="spin" className="max-md:hidden"/>

        <Skills />
        <Spin posx="-50" posy="100" name="spin2" className="max-md:hidden"/>

      </section>
      <section className="flex flex-col gap-[32px] row-start-3 items-center justify-center h-screen">
        <h2 className="text2 text-2xl sm:text-4xl font-semibold ">
            Ismael Resendis
        </h2>
      </section>
      <section className="flex flex-col gap-[32px] row-start-4 items-center justify-center h-screen">
        <h2 className="text2 text-2xl sm:text-4xl font-semibold">
            Ismael Resendis
        </h2>
      </section>
    </>
  );
}
