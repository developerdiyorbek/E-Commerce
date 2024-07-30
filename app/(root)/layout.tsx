import { ChildProps } from "@/types";
import Navbar from "./_components/Navbar";

function Layout({ children }: ChildProps) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  );
}

export default Layout;
