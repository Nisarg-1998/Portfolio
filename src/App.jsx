import { Suspense, lazy, useEffect, useState } from "react";
import Hero from "./components/Hero";
import Navbar from "./Layouts/Navbar";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Footer from "./components/Footer";
import Aos from "aos";
import "aos/dist/aos.css";
import Loading from "./components/Loading";
const Projects = lazy(() => import("./components/Projects"));
import Experience from "./components/Experience";

const App = () => {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const interval = setTimeout(() => { setIsLoading(false) }, 1600);

    return () => {
      clearTimeout(interval);
    }
  }, [])

  useEffect(() => {
    Aos.init({
      duration: 1800,
      offset: 100,
      disable: "mobile",
    });
  }, []);

  if (isLoading) {
    return (
      <div className="bg-primary w-full overflow-hidden bg-secondaryLinear">
        <Loading isLoading={isLoading} />
      </div>
    )
  }

  return (
    <Suspense fallback={<Loading />}>
      <div className="overflow-hidden">
        <div className={`sm:px-16 px-6 flex justify-center items-center`}>
            <Navbar />
        </div>

        <div className={`flex justify-center items-start w-full`}>
          <Hero />
        </div>
        <div className="bg-secondaryLinear pb-5">
          <Skills />
          <Experience />
        </div>
        <Education />
        <Projects />
        
        <Footer />
      </div>
    </Suspense>
  );
};

export default App;
