import { FlickeringGridDemo } from "@/components/Background/MainGrid";
import GlassEffectComponent from "@/components/Glass Components/idk";

export default function Home() {
  return (
    <div className="relative h-screen w-screen">
      <FlickeringGridDemo />
      <GlassEffectComponent />
    </div>
  );
}