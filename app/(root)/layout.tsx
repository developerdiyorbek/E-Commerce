import { ChildProps } from "@/types";
import Navbar from "./_components/Navbar";

function Layout({ children }: ChildProps) {
  return (
    <>
      <Navbar />
      <main className="mt-20">{children}</main>
    </>
  );
}

export default Layout;
