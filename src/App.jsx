import Button from "./components/Button";
import Heading from "./components/Heading";
import Image from "./components/Image";
import Paragraph from "./components/Paragraph";
import { FaArrowRight } from "react-icons/fa";
import { SiMaterialdesignicons } from "react-icons/si";


function App() {
  return (
    <>
    <div className="bg">
      <div className="container mar_top_btm center">
      <Paragraph title="Hi, I'm a Freelancer"></Paragraph>
      <Heading text1="Developer"></Heading>
      <Paragraph title="based in Los Angeles, USA."></Paragraph>
      <Button text="View My Works" design="three"></Button>
      </div>
      
    </div>
    {/*===========================================
                  about section start
      ===========================================*/}
    <div>
      <div className="container mar_top_btm">
        <div className="center">
        <Paragraph title="About Me" design="three"></Paragraph>
      <Heading text1="Know Me More"></Heading>
        </div>
      <div className="flex">
      <div className="block w-60">
      <Heading text1="Hi, I'm Callum Smith"></Heading>
      <Paragraph title="I'm a designer & developer with a passion for web design. I enjoy developing simple, clean and slick websites that provide real value to the end user. Thousands of clients have procured exceptional results while working with me. Delivering work within time and budget which meets client’s requirements is our moto." design="three"></Paragraph>
      </div>
      <div className="block w-40">
      <Paragraph title="22" design="three"></Paragraph>
      <Heading text1="Years of Experiance"></Heading>
      </div>
      </div>
      <div className="flex space-bet">
        <div className="block">
        <Paragraph title="Name:"></Paragraph>
        <Heading text1="Callum Smith"></Heading>
        </div>
        <div className="block">
        <Paragraph title="Email:"></Paragraph>
        <Heading text1="chat@callum.com"></Heading>
        </div>
        <div className="block">
        <Paragraph title="Date of Birth:"></Paragraph>
        <Heading text1="11 November, 1987"></Heading>
        </div>
        <div className="block">
        <Paragraph title="From:"></Paragraph>
        <Heading text1="Los Angeles, USA."></Heading>
        </div>
      </div>
      </div>
    </div>
    {/*===========================================
                  about section end
      ===========================================*/}
    {/*===========================================
                  Do section start
      ===========================================*/}
<section>
  <div className="container">
    <div className="center">
        <Paragraph title="What I Do" design="three"></Paragraph>
        <Heading text1="How I can help your next project"></Heading>
    </div>
    <div className="flex space-bet">
      <div className="center w-30">
      <SiMaterialdesignicons />
      <Heading text1="Graphic Design"></Heading>
      <Paragraph title="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text." design="padding"></Paragraph>
      </div>
      <div className="center w-30">
      <SiMaterialdesignicons />
      <Heading text1="Web Design"></Heading>
      <Paragraph title="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text." design="padding"></Paragraph>
      </div>
      <div className="center w-30">
      <SiMaterialdesignicons />
      <Heading text1="UI/UX Design"></Heading>
      <Paragraph title="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text." design="padding"></Paragraph>
      </div>
      <div className="center w-30">
      <SiMaterialdesignicons />
      <Heading text1="App Design & Develop"></Heading>
      <Paragraph title="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text." design="padding"></Paragraph>
      </div>
      <div className="center w-30">
      <SiMaterialdesignicons />
      <Heading text1="Business Analysis"></Heading>
      <Paragraph title="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text." design="padding"></Paragraph>
      </div>
      <div className="center w-30">
      <SiMaterialdesignicons />
      <Heading text1="SEO Marketing"></Heading>
      <Paragraph title="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text." design="padding"></Paragraph>
      </div>
    </div>
  </div>
</section>
      {/*===========================================
                  Do section end
      ===========================================*/}
      {/*===========================================
                  Resume section start
      ===========================================*/}
<section>
  <div className="container">
  <div className="center">
        <Paragraph title="Resume" design="three"></Paragraph>
        <Heading text1="A summary of My Resume"></Heading>
    </div>
  </div>
</section>

      {/*===========================================
                  Resume section start
      ===========================================*/}


    <div>
      <Button text="Shawon" design="three">
      </Button>
      <FaArrowRight />
      <Button text="saroar" design="two" icon={<FaArrowRight />}>
      </Button>
    </div>
    <div>
      <Button text="Shawon" design="three">
      </Button>
    </div>
    <div>
      <Button text="saroar" design="four">
      </Button>
    </div>
     < Heading />
     < Paragraph />
    </>
  );
}

export default App
