import { ReactNode } from "react";
import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";

type Props = {
    children: ReactNode;
};

function FrontLayout({ children }: Props) {
    return (
        <div>
            <Navbar />
            <main className="sm:pt-20 lg:pt-8">
                {children}
            </main>
            <Footer />
        </div>
    );
}

export default FrontLayout;
