
import {JetBrains_Mono} from "next/font/google";
import "./globals.css";

//Components
import Header from "@/components/Header";

import ChildrenEffect from "@/components/Childreneffect";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"], 
  weights: ['100', '200', '300', '400', '500', '600', '700', '800'],
  variable: '--font-jetbrainsMono',
});

export const metadata = {
  title: "Raman Asif",
  description: "Portfolio of Raman Asif - A web developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={jetbrainsMono.variable}>
          <Header/>
        
          <ChildrenEffect>
            {children}
          </ChildrenEffect>
          
          {/* <StairTransition/>
          <PageTransition>
        {children}
          </PageTransition> */}

      </body>
    </html>
  );
}
