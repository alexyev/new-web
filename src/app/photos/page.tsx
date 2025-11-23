'use client'
import PhotoGrid from "@/components/photogrid";
import { Header, SidebarSection } from "@/components/sidebar";

export default function Home() {
  return (
    <div>
      <Header />

      <main className="flex flex-col lg:flex-row w-full px-4 lg:px-8 gap-8 mt-4">
        <SidebarSection />
        {/* Main content */}
        <section className="w-full lg:w-[75%] mt-8 lg:mt-0">
                <h1 className="text-4xl mb-4 text-center lg:text-left">Snapshots of my life...</h1>
                <div className="h-full flex flex-col items-center lg:items-start">
                    <PhotoGrid
                        title="Princeton and New York"
                        photoPaths={["/photos/pny/1.jpg", "/photos/pny/2.jpg", "/photos/pny/3.jpg","/photos/pny/4.jpg","/photos/pny/5.jpg","/photos/pny/7.jpg"]}
                    />
                    <PhotoGrid
                        title="Chicago"
                        photoPaths={["/photos/chi/1.jpg", "/photos/chi/2.jpg", "/photos/chi/3.jpg", "/photos/chi/4.jpg", "/photos/chi/5.jpg", "/photos/chi/6.jpg", "/photos/chi/7.jpg", "/photos/chi/8.jpg", "/photos/chi/10.jpg", "/photos/chi/11.jpg", "/photos/chi/12.jpg", "/photos/chi/13.jpg"]}
                    />
                </div>
            </section>
        </main>
    </div>
  );
}