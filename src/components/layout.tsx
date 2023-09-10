import 'bootstrap/dist/css/bootstrap.css';
import Script from "next/script";
import { BASE_ASSETS_PATH } from "@/config";
import { LayoutContentHeader } from "./layout-content-header";
import { LayoutContentWrapper } from "./layout-content-wrapper";
import { LayoutFooter } from "./layout-footer";
import { LayoutHeader } from "./layout-header";

export const Layout = (where?: string) => ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
    <body>
      <LayoutHeader />
      <main>
        <LayoutContentHeader where={where} />
        <LayoutContentWrapper>
          {children}
        </LayoutContentWrapper>
      </main>
      <LayoutFooter />
      <Script src={BASE_ASSETS_PATH + '/bootstrap-5.3.1-dist/js/bootstrap.bundle.min.js'} />
    </body>
  </html>
  )
}