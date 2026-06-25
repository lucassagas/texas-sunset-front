import type { ReactNode } from "react";
import { WhatsAppButton } from "../components/whatsapp-button";

export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex flex-col bg-brand-bg">
      {children}

      <WhatsAppButton />
    </div>
  );
};
