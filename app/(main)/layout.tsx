import { LayoutClient } from "./layoutClient";

export default function Layout({ children }) {
  return (
    <>
      <LayoutClient />
      <main>{children}</main>
    </>
  );
}
