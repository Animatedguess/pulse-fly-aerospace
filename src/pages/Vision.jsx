import Button from "../components/feedback/Button";
import Certificate from "../components/vision-page/Certificate";
import Introduction from "../components/vision-page/Introduction";
import Review from "../components/vision-page/Review";
import TabMenu from "../components/vision-page/TabMenu";
import Transparency from "../components/vision-page/Transparency";
import VideoComponent from "../components/vision-page/VideoComponent";
import ImpactOnMarket from "../components/vision-page/ImpactOnMarket";

const Vision = () => {
  return (
    <>
      <VideoComponent />
      <div className="relative">
        <TabMenu />
        <Introduction />
        <Transparency />
        <Certificate />
        <ImpactOnMarket />
        <Review />
      </div>
    </>
  );
};

export default Vision;
