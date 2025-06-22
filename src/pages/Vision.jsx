import Certificate from "../components/vision-page/Certificate";
import Introduction from "../components/vision-page/Introduction";
import Review from "../components/vision-page/Review";
import TabMenu from "../components/vision-page/TabMenu";
import Transparency from "../components/vision-page/Transparency";
import VideoComponent from "../components/vision-page/VideoComponent";
import ImpactOnMarket from "./ImpactOnMarket";

const Vision = () => {
  return (
    <>
        <VideoComponent/>
        <div>
            <TabMenu/>
            <Introduction/>
            <Transparency/>
            <Certificate/>
            <ImpactOnMarket/>
            <Review/>
        </div>
    </>
  );
};

export default Vision;
