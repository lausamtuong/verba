import Header from "@/components/Header";
import { ReactNode } from "react";

const Layout = async ({ children }: { children: ReactNode }) => {
  return (
    <div className="">
      <Header />
      {children}
    </div>
  );
};

export default Layout;
