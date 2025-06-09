import Certificate from "../components/vision-page/Certificate";
import Review from "../components/vision-page/Review";
import TabMenu from "../components/vision-page/TabMenu";
import VideoComponent from "../components/vision-page/VideoComponent";

const Vision = () => {
  return (
    <>
        <VideoComponent/>
        <div>
            <TabMenu/>
            <Certificate/>
            <Review/>
        </div>
    </>
  );
};

export default Vision;
