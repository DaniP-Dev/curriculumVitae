import ContentPage from "@/components/layout/ContentPage";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="h-[100dvh] overflow-y-auto snap-y snap-mandatory">
        <ContentPage>hola</ContentPage>
        <ContentPage bgcolor="bg-blue-500">sgundo hola</ContentPage>
      </div>
    </>
  );
}
