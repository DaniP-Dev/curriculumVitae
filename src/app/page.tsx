import ContentPage from "@/components/layout/ContentPage";
import Layout from "@/components/layout/Layout";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="h-screen overflow-y-auto snap-y snap-mandatory">
        <ContentPage>hola</ContentPage>
        <ContentPage>sgundo hola</ContentPage>
      </div>
    </>
  );
}
