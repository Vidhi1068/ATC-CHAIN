import "../styles/globals.css";
import { Poppins } from "@next/font/google";
import Layout from "../components/Ui/Layout/Layout";
import { Inter } from "@next/font/google";
import { ContextProvider } from "./api/auth/Contexts/ContextProvider";
const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({
  weight: "400",
});
export default function App({ Component, pageProps }) {
  return (
    <div className={poppins.className}>
      <style jsx global>{`
        html {
          font-family: ${inter.style.fontFamily};
        }
      `}</style>
      <ContextProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ContextProvider>
    </div>
  );
}
