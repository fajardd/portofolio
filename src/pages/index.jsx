import html2canvas from "html2canvas";
import Image from "next/image";
import CssIcon from "../assets/images/css-icon.png";
import HtmlIcon from "../assets/images/html-icon.png";
import NextjsIcon from "../assets/images/nextjs-icon.png";
import profile from "../assets/images/profile.jpg";
import ReactIcon from "../assets/images/react-icon.png";
import TailwindIcon from "../assets/images/tailwind-icon.png";

const Main = () => {
  // SCREENSHOOT
  const handleTakeScreenshot = async () => {
    // Mengambil referensi ke elemen yang ingin di-screenshot (dalam hal ini, div dengan class 'border-blue-400')
    const elementToCapture = document.querySelector(
      ".mt-20.lg\\:mt-32.px-10.lg\\:px-20"
    );

    // Mengambil screenshot menggunakan html2canvas
    const canvas = await html2canvas(elementToCapture);

    // Mengubah canvas menjadi data URL gambar
    const screenshotDataUrl = canvas.toDataURL("image/png");

    // Membuat link untuk men-download gambar
    const link = document.createElement("a");
    link.href = screenshotDataUrl;
    link.download = "screenshot.png";

    link.click();
  };
  return (
    <div className="mt-20 lg:mt-32 px-10 lg:px-20   ">
      {/* ABOUT */}
      <div id="about" className="lg:grid lg:grid-cols-2   lg:h-screen lg:p-10">
        <div className="lg:p-10">
          <Image
            src={profile}
            alt="Deskripsi gambar"
            width={6000}
            height={4000}
          />
        </div>
        <div className="lg:p-10">
          <div className="text-[#101828] text-[24px] font-semibold animate__animated animate__slideInLeft">
            <h1>About me</h1>
          </div>
          <div className="text-[#101828] text-justify font-medium mt-[8px]">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum scelerisque ligula non congue pellentesque. Integer at
              ex nisl. Cras vel leo eu tortor rhoncus eleifend. Suspendisse ut
              enim lorem. Duis aliquet sem in fringilla viverra.
            </p>
          </div>
          <div className="mt-[24px]">
            <div className="flex justify-center bg-green-600 text-white rounded-[10px] h-[48px] w-[150px]">
              <button type="button" onClick={handleTakeScreenshot}>
                Download
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* SKILLS */}
      <div id="skills" className="mt-[100px] lg:mt-0 mb-6 lg:p-10">
        <div className="flex justify-center items-center text-[#101828] text-[24px] font-semibold">
          <h1>Skills</h1>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:flex justify-center items-center p-4  lg:p-10 lg:space-x-40 border shadow rounded-[20px] mt-[24px]">
          <div className="mx-auto border shadow p-[24px] rounded-[10px] w-[100px] h-auto">
            <Image src={HtmlIcon} />
          </div>
          <div className="mx-auto border shadow p-[24px] rounded-[10px] w-[100px] h-auto">
            <Image src={CssIcon} />
          </div>
          <div className="mx-auto border shadow p-[24px] rounded-[10px] w-[100px] h-auto">
            <Image src={TailwindIcon} />
          </div>
          <div className="mx-auto border shadow p-[24px] rounded-[10px] w-[100px] h-auto">
            <Image src={ReactIcon} />
          </div>
          <div className="mx-auto border shadow p-[24px] rounded-[10px] w-[100px] h-auto">
            <Image src={NextjsIcon} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Main;
