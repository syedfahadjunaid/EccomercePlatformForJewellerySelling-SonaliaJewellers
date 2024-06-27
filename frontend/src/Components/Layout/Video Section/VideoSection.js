import React, { useEffect, useState } from "react";
import "./VideoSection.css";
import img from "../../Assests/Image/Rectangle 48.png";
import img1 from "../../Assests/Image/Rectangle 49.png";
import img2 from "../../Assests/Image/Rectangle 50.png";
import img3 from "../../Assests/Image/Rectangle 51.png";
import video from "../../Assests/video/production_id_4004214 (1080p).mp4";
import video1 from "../../Assests/video/production-id-4004214-1080p.mp4";
import video2 from "../../Assests/video/1103135-1080p-Detail-Pretty-1920.mp4";
import axios from "axios";
function VideoSection() {
  const [isLoading, setIsLoading] = useState();
  const [allVideo, setAllVideo] = useState();
  const allVideoHandle = async () => {
    const { data } = await axios
      .get(`${process.env.React_App_Base_Url + "getAllShartVideo"}`, {
        headers: { "Content-type": "multipart/form-date" },
      })
      .then((response) => response, setIsLoading(true))
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false));
    setAllVideo(data && data);
  };
  useEffect(() => {
    allVideoHandle();
  }, []);
  return (
    <div className="videosection">
      <div className="videosection_heading">
        <h3>Short video </h3>
      </div>
      <div className="videosection_video_card">
        {allVideo?.filter((item)=> item?.ShartVideoPublished===true)?.map((item, index) => (
          <video controls autoPlay={false} key={index + 1} style={{objectFit:'cover'}}>
            <source
              src={`${
                process.env.React_App_Base_Image_Url + item?.ShartVideoVideo[0]
              }`}
              type="video/mp4"
            />
          </video>
        ))}
      </div>
    </div>
  );
}

export default VideoSection;
