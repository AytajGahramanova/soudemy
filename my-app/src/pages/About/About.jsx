import React from "react";
import FreeDelivery from "../../components/FreeDelivery/FreeDelivery";
import ProgressBar from "../../components/ProgressBar/ProgressBar";
import VideoCover from "../../components/VideoCover/VideoCover";
import data from "../../../db.json";
import AboutCoverImg from "../../images/about-page-bg-video-cover.png";
import FadeIn from "../../components/FadeIn/FadeIn";
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";

const About = () => {
  return (
    <div>
      <fadeIn>
        <div className="breadcrumb mt-[50px]">
          <div className="w-[90%] m-auto">
            <div
              className="relative bg-cover bg-center h-[500px]"
              style={{
                backgroundImage: `url(${data.aboutPage.breadCrumb.image})`,
              }}
            >
              <div className="absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2">
                <h2 className="font-medium md:text-[50px] text-[35px] text-[#3F3F3F]">
                  {data.aboutPage.breadCrumb.title}
                </h2>
              </div>
            </div>
          </div>
        </div>
      </fadeIn>

      <FadeIn>
        <FreeDelivery />
      </FadeIn>

      <FadeIn>
        <div className="w-[90%] m-auto">
          <VideoCover bgImage={AboutCoverImg} />
        </div>
      </FadeIn>

      <FadeIn>
        <section className="progress-section">
          <div className="w-[90%] m-auto flex gap-[70px] justify-between mt-[80px] md:flex-row flex-col">
            <div className="w-full max-w-[600px]">
              <h2 className="font-medium text-[40px] mb-4">
                {data.aboutPage.progress.title}
              </h2>
              <p className="text-[20px] text-[#898989]">
                {data.aboutPage.progress.desc}
              </p>
            </div>
            <div>
              <ProgressBar />
            </div>
          </div>
        </section>
      </FadeIn>

      <ScrollToTop />
    </div>
  );
};

export default About;
