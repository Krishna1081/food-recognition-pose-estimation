import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";

function VideosSection() {
  return (
    <div className="Videos">
      <video width={750} height={500} controls>
        <source src={video1} type="video/mp4" />
        Your browser does not support this video format.
      </video>
      <video width={750} height={500} controls>
        <source src={video2} type="video/mp4" />
        Your browser does not support this video format.
      </video>
    </div>
  );
}

export default VideosSection;
