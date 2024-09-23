'use client';
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";
import { usePathname } from "next/navigation";

const ChildrenEffect = ({children}) => {
    const pathName = usePathname();
    const home = (pathName === '/')? false : true;
  return (
    <>
    {
        home ? (
            <>
                <StairTransition/>
                <PageTransition>
                    {children}
                </PageTransition>
            </>
        ) : (
            children
        )
    }
      
    </>
  )
}

export default ChildrenEffect