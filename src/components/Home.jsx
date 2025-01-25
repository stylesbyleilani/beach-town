
"use client"
import React, { useState, useRef } from 'react' 
import { FaXTwitter, FaJs, FaHtml5, FaCss3Alt, FaGitAlt } from "react-icons/fa6";
import { IoLogoGithub, IoLogoReact } from "react-icons/io";
import { RiNextjsFill } from "react-icons/ri";
import Select from 'react-dropdown-select'; 
import html2canvas from 'html2canvas';
import { SiReact } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { RiFirebaseFill } from "react-icons/ri";
import { ImSphere } from "react-icons/im";


const Home = () => { 
  const [formData, setFormData] = useState({
    fullname: "",
    field: "",
    socialsT: "",
    socialsG: "",
    porfolio: "" 
  });
  const [showbanner, setShowBanner] = useState(false);
  const [stack, setStack] = useState([]);
  const [isDownloading, setIsDownloading] = useState(false);
  const [gradientColors, setGradientColors] = useState({
    color1: "#1a1a1a",
    color2: "#2d2d2d"
  });
  const [borderColor, setBorderColor] = useState("#9333ea"); 
  const [gradientAngle, setGradientAngle] = useState(45); 
  
  const bannerRef = useRef(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleGradientChange = (e) => {
    const { name, value } = e.target;
    setGradientColors(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmiit = (e) => {
    e.preventDefault();
    setShowBanner(true);
  };

  const options = [
    { id: "Html", icons: <div className="w-4 h-4 px-1 flex items-center bg-white rounded-sm"><FaHtml5 className='text-yellow-600 text-lg' /></div>, name: 1 },
    { id: "Css", icons: <div className="w-4 h-4 px-1 flex items-center bg-white rounded-sm"><FaCss3Alt className='text-yellow-300 text-lg'/></div>, name: 2 },
    { id: "React", icons: <div className="w-4 h-4 px-1 flex items-center bg-white rounded-sm"><SiReact className='text-blue-500 text-lg'/></div>, name: 3 },
    { id: "JavaScript", icons: <div className="w-4 h-4 px-1 flex items-center bg-white rounded-sm"><FaJs className='text-yellow-500 text-lg'/></div>, name: 4 },
    { id: "NextJs", icons: <div className="w-4 h-4 px-1 flex items-center bg-white rounded-sm"><RiNextjsFill className='text-gray-900 text-lg' /></div>, name: 6 },
    { id: "Tailwind css", icons: <div className="w-4 h-4 px-1 flex items-center bg-white rounded-sm"><SiTailwindcss className=' text-cyan-500 text-lg' /></div>, name: 7 },
    { id: "Firebase", icons: <div className="w-4 h-4 px-1 flex items-center bg-white rounded-sm"><RiFirebaseFill className='text-orange-700 text-lg' /></div>, name: 8 },
    { id: "Git", icons: <div className="w-4 h-4 px-1 flex items-center bg-white rounded-sm"><FaGitAlt className='text-orange-700 text-lg' /></div>, name: 9 },
  ];

  const downloadBanner = async () => {
    if (!bannerRef.current) return;
    
    try {
      setIsDownloading(true);
      const canvas = await html2canvas(bannerRef.current, {
        backgroundColor: null,
        scale: 2,
        logging: false,
      });

      canvas.toBlob((blob) => {
        if (blob) {
          const url = URL.createObjectURL(blob);
          const link = document.createElement('a');
          link.href = url;
          link.download = `${formData.fullname.replace(/\s+/g, '-').toLowerCase()}-banner.png`;
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
          URL.revokeObjectURL(url);
        }
      }, 'image/png', 1.0);
    } catch (error) {
      console.error('Error generating banner:', error);
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <div className='min-h-screen bg-black'>
      <div className='container mx-auto px-4 py-10'>
        <div className='max-w-md mx-auto'>
          <form className='flex flex-col gap-4 p-6 border border-purple-500 rounded-lg' onSubmit={handleSubmiit}>
            <div className='space-y-2'>
              <label className='text-gray-100'>Full name</label>
              <input
                type="text"
                name="fullname"
                placeholder='Your fullname'
                required
                value={formData.fullname}
                onChange={handleInputChange}
                className='w-full p-2 rounded-md border border-purple-500 bg-black outline-none text-gray-100'
              />
            </div>

            <div className='space-y-2'>
              <label className='text-gray-100'>Field</label>
              <select
                name="field"
                required
                className='w-full p-2 rounded-md border outline-none text-gray-100 border-purple-500 bg-black'
                value={formData.field}
                onChange={handleInputChange}
              >
                <option value="" disabled>Select your field</option>
                <option value="Frontend web developer_">Frontend Web Developer</option>
                <option value=" Ui/Ux Designer_"> Ui/Ux Designer</option>
                <option value="Product Designer_">Product Designer</option>
                <option value="Software Developer_">Software Developer</option> 
                <option value="Backend Developer_">Backend Developer</option> 
              </select>
            </div>



            <div className='space-y-2'>

                   <label className='text-gray-100'>Socials</label>
              <div className='grid grid-cols-2 gap-4'>
                <input
                  type="text"
                  name="socialsT"
                  placeholder='Twitter/X'
                  required
                  className='w-full p-2 outline-none rounded-md border border-purple-500 bg-black text-gray-100'
                  value={formData.socialsT}
                  onChange={handleInputChange}
                />
                <input
                  type="text"
                  name="socialsG"
                  placeholder='GitHub'
                  className='w-full p-2 rounded-md border border-purple-500 bg-black text-gray-100'
                  value={formData.socialsG}
                  onChange={handleInputChange}
                />
              </div>

              <div className='space-y-2'>
              <label className='text-gray-100'>Portfolio Url</label> 
              <input
                type="text"
                name="porfolio"
                placeholder='Your portfolio'
                value={formData.porfolio}
                onChange={handleInputChange}
                className='w-full p-2 rounded-md border border-purple-500 bg-black outline-none text-gray-100'
              />
            </div>

                

            </div>


            <div className='space-y-2'>
              <label className='text-gray-100'>Tech Stack</label>
              <Select
                options={options}
                labelField="id"
                valueField="name"
                multi
                onChange={(values) => {
                  const selectedStacks = values.map((item) => (
                    <div className="flex items-center gap-2" key={item.id}>
                      <span>{item.icons}</span>
                    </div>
                  ));
                  setStack(selectedStacks);
                }}
                className="p-3 rounded-md border-2 border-purple-500 bg-black text-gray-900"
                optionRenderer={({ item }) => (
                  <span className="flex items-center gap-3 border-2 rounded-md border-purple-500 p-2 hover:bg-gray-800 transition-colors">
                    <span>{item.icons}</span>
                    <span className="text-gray-200 text-sm">{item.id}</span>
                  </span>
                )}
              />
            </div>

            <div className='space-y-2'>
              <label className='text-gray-100'>Background Gradient</label>
              <div className='grid grid-cols-2 gap-4'>
                <div>
                  <label className='text-xs text-gray-400'>Color 1</label>
                  <input
                    type="color"
                    name="color1"
                    value={gradientColors.color1}
                    onChange={handleGradientChange}
                    className='w-full h-10 rounded-md border border-purple-500 bg-black cursor-pointer'
                  />
                </div>
                <div>
                  <label className='text-xs text-gray-400'>Color 2</label>
                  <input
                    type="color"
                    name="color2"
                    value={gradientColors.color2}
                    onChange={handleGradientChange}
                    className='w-full h-10 rounded-md border border-purple-500 bg-black cursor-pointer'
                  />
                </div>
              </div>
            </div>

            <div className='space-y-2'>
              <label className='text-gray-100'>Gradient Angle</label>
              <input
                type="range"
                min="0"
                max="360"
                value={gradientAngle}
                onChange={(e) => setGradientAngle(e.target.value)}
                className='w-full' 
              />
              <div className='text-gray-400 text-sm text-center'>{gradientAngle}°</div>
            </div>

            <div className='space-y-2'>
              <label className='text-gray-100'>Border Color</label>
              <input
                type="color"
                value={borderColor}
                onChange={(e) => setBorderColor(e.target.value)}
                className='w-full h-8 overflow-hidden rounded-md border border-purple-500 bg-black cursor-pointer'
              />
            </div>


            <button
              type='submit'
              className='w-full p-2 rounded-md border border-purple-500 bg-purple-500 text-gray-100 hover:bg-purple-600 transition-colors'
            >
              Generate Banner
            </button>
          </form>
        </div>

        {showbanner && (
          <div className="mt-10 flex flex-col items-center font-serif space-y-4 px-4">
            <div
              ref={bannerRef}
              className="w-full max-w-[400px] rounded-lg p-3"
              style={{
                background: `linear-gradient(${gradientAngle}deg, ${gradientColors.color1}, ${gradientColors.color2})`,
                border: `2px solid ${borderColor}`
              }}
            >
              <h1 className='font-bold text-md  text-gray-200'>{formData.fullname}</h1>
              <p className='text-base md:text-md  text-gray-200'>{formData.field}</p>
              <div className="flex flex-nowrap items-center gap-2 text-sm text-gray-300 mt-1 font-medium ">
                <div className='flex text-sm items-center gap-1 '>
                 <FaXTwitter className="" />
                 <p  className="text-gray-300">{formData.socialsT} </p>
                  <p> |</p>
                </div>
                
                {/* <span className='text-center truncate  '> | </span> */}
                
                <div className='flex items-center text-sm gap-1 min-w-0'>
                  <IoLogoGithub className="" />
                <p  className="text-gray-300 ">{formData.socialsG}</p>
                </div>
              </div>


<div className='flex items-center gap-1 text-sm min-w-0'>
  {formData.porfolio === "" ? "" : <ImSphere/> }
                <p  className="text-gray-300 text-sm "> <a className='text-gray-300' href= {formData.porfolio}>  {formData.porfolio}</a></p>
                </div>
              

              <div className="mt-1 flex flex-wrap items-center justify-end gap-2 text-gray-200">
                <p className='text-base md:text-md font-medium'>Stack:</p>
                <div className='flex flex-wrap gap-1'>{stack}</div>
              </div>
            </div>

            <button
              onClick={downloadBanner}
              disabled={isDownloading}
              className='w-full max-w-[460px] p-3 rounded-md border border-purple-500 bg-purple-500 text-gray-100 hover:bg-purple-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed'
            >
              {isDownloading ? 'Downloading...' : 'Download Banner'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;

