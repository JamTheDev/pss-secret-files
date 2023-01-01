import { NextPage } from "next";
import BackgroundMain from "../components/main/bg.main";
import MainFooter from "../components/main/footer.main";
import CardMain from "../components/main/input.main";

// GUIDES FOR STRUCTURING PROJECTS
// https://giancarlobuomprisco.com/next/a-scalable-nextjs-project-structure

const IndexPage: NextPage = () => {
  return (
    <>
      <div className="relative h-[88vh]">
        <BackgroundMain />
        <CardMain />
      </div>
      <MainFooter />
    </>
  )
}

export default IndexPage;