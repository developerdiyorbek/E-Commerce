import { ChildProps } from "@/types";

function Layout({ children }: ChildProps) {
  return (
    <>
      <main>{children}</main>
    </>
  );
}

export default Layout;
