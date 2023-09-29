import { Navbar } from "../ui";

export const ShopLayout = ({ children }: { children: React.ReactNode }) => {
 return (
  <>
   <nav>
    <Navbar />
   </nav>

   <main
    style={{ margin: "80px auto", maxWidth: "1440px", padding: "0px 30px" }}
   >
    {children}
   </main>
   {/* foooter */}
   <footer></footer>
  </>
 );
};
