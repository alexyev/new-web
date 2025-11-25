import { Header, SidebarSection } from "@/components/sidebar";
import ProjectsSection from "@/components/projectSection";

export default function Home() {
  return (
    <div>
      <Header />

      <main className="flex flex-col lg:flex-row w-full px-4 lg:px-8 gap-8 mt-4">
        <SidebarSection />
        <section className="w-full lg:w-[75%] mt-8 lg:mt-0">
          <h1 className="text-4xl mb-4 text-center lg:text-left">My Work</h1>
          <div className="h-full w-full flex justify-center lg:justify-start">
            <ProjectsSection />
          </div>
        </section>
      </main>
    </div>
  );
}