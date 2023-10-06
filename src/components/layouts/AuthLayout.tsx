import { Box } from "@mui/material";

export const AuthLayout = ({ children }: { children: React.ReactNode }) => {
 return (
  <>
   <main
    style={{ margin: "80px auto", maxWidth: "1440px", padding: "0px 30px" }}
   >
    <Box
     display='flex'
     justifyContent='center'
     alignItems='center'
     height='calc(100vh - 200px)'
    >
     {children}
    </Box>
   </main>
  </>
 );
};
