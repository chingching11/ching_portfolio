import Image from "next/image";
import ProjectList from "./components/ProjectList";
import Skills from "./components/Skills";
import Ex from "./components/Ex";
import Intro from "./components/Intro";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div>
      <Intro />
      <Skills />
      <Ex />
      <ProjectList />
    </div>
  );
}
