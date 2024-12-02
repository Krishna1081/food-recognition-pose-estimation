import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";

function VideosSection() {
  return (
    <div className="VideosSection container mx-auto p-4">
      <div className="video-block mb-8">
        <video width={750} height={500} controls className="block mx-auto">
          <source src={video1} type="video/mp4" />
          Your browser does not support this video format.
        </video>
        <div className="description mt-4 text-center">
          <h2 className="text-xl font-bold">Push-Up Counter Using Mediapipe</h2>
          <p className="text-gray-700 mt-2">
            This video demonstrates an innovative push-up counter built using{" "}
            <strong>Google's Mediapipe framework</strong>. The application uses
            pose estimation to detect and track body landmarks in real time. By
            analyzing key points such as shoulders, elbows, and hips, the system
            accurately counts the number of push-ups performed.
          </p>
          <ul className="list-disc text-gray-700 mt-4 mx-auto max-w-md">
            <li>Real-time feedback ensures proper form and alignment.</li>
            <li>Accurate tracking of repetitions.</li>
            <li>Applications in fitness apps and personal training tools.</li>
          </ul>
        </div>
      </div>

      <div className="video-block">
        <video width={750} height={500} controls className="block mx-auto">
          <source src={video2} type="video/mp4" />
          Your browser does not support this video format.
        </video>
        <div className="description mt-4 text-center">
          <h2 className="text-xl font-bold">Food Detection Using YOLO</h2>
          <p className="text-gray-700 mt-2">
            This video highlights a powerful food detection system built with
            <strong> YOLO (You Only Look Once)</strong> object detection. The
            model recognizes various food items in real time and can even
            estimate calorie intake when paired with a nutritional database.
          </p>
          <ul className="list-disc text-gray-700 mt-4 mx-auto max-w-md">
            <li>Real-time detection of food items from images or videos.</li>
            <li>Supports calorie estimation for dietary tracking.</li>
            <li>
              Fine-tuned on a diverse food dataset for broad applicability.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default VideosSection;
