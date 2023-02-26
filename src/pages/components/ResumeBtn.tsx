import { useEffect, useState } from "react";
import { getResume } from "../../lib/services/workService";

const ResumeBtn = () => {
  const [fileUrl, setFileUrl] = useState(null);

  useEffect(() => {
    getResume()
      .then((data) => setFileUrl(data))
      .catch((error) => console.error("Error retrieving file", error));
  }, []);

  const handleDownload = (url, filename) => {
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", filename);
    link.setAttribute("target", "_blank");
    link.setAttribute("rel", "noopener noreferrer");

    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);
  };

  const handleButtonClick = () => {
    console.log(fileUrl);
    if (fileUrl) {
      handleDownload(fileUrl, "my-cv.pdf");
    }
  };

  return (
    <button
      className="group cursor-pointer bg-transparent border-solid border-2 border-rose-500 rounded-sm w-16 h-8 hover:bg-pink-500 transition duration-300 ease-in-out mobile:hidden"
      onClick={handleButtonClick}
    >
      <p className="text-rose-500 group-hover:text-white transition duration-300 ease-in-out">
        CV
      </p>
    </button>
  );
};

export default ResumeBtn;
