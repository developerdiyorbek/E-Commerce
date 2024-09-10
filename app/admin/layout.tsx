import { ChildProps } from "@/types";
import Navbar from "./_components/Navbar";
import Sidebar from "./_components/Sidebar";

function Layout({ children }: ChildProps) {
  return (
    <>
      <Navbar />
      <Sidebar />
      <main className="w-full p-4 pl-[320px] pt-[12vh] max-md:pl-20">
        <section className="size-full rounded-md bg-secondary px-4 pb-4">
          {children}
        </section>
      </main>
    </>
  );
}

export default Layout;
