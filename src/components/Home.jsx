
// "use client"
// import React, { useState, useRef } from 'react' 
// import { FaXTwitter } from "react-icons/fa6";
// import { IoLogoGithub } from "react-icons/io";
// import { IoLogoReact } from "react-icons/io5";
// import { FaJs } from "react-icons/fa";
// import { RiNextjsFill } from "react-icons/ri";
// import { FaHtml5 } from "react-icons/fa";
// import { FaCss3Alt } from "react-icons/fa";
// import { FaGitAlt } from "react-icons/fa";
// import Select from 'react-dropdown-select';
// import html2canvas from 'html2canvas';

// const Home = () => { 
//   const [fullname, setfullName] = useState("")
//   const [field, setfield] = useState("")
//   const [socialsT, setSocialsT] = useState("") 
//   const [socialsG, setSocialsG] = useState("")
//   const [showbanner, setShowBanner] = useState(false)  
//   const [stack, setStack] = useState([]);

//   const handleSubmiit = (e) => {
//     e.preventDefault()
//     setShowBanner(true)
//     console.log("got it")
//   }


//   const bannerRef = useRef(null);

//   const downloadBanner = async () => {
//     if (bannerRef.current) {
//       try {
//         // Create canvas from the banner div
//         const canvas = await html2canvas(bannerRef.current, {
//           backgroundColor: null,
//           scale: 2, // For better quality
//         });

//         // Convert canvas to blob
//         canvas.toBlob((blob) => {
//           if (blob) {
//             // Create download link
//             const url = URL.createObjectURL(blob);
//             const link = document.createElement('a');
//             link.href = url;
//             link.download = `${fullname}-banner.png`;
//             document.body.appendChild(link);
//             link.click();
            
//             // Cleanup
//             document.body.removeChild(link);
//             URL.revokeObjectURL(url);
//           }
//         }, 'image/png', 1.0);
//       } catch (error) {
//         console.error('Error generating banner:', error);
//       }
//     }
//   };


//   const options = [
//     { id: "Html", icons: <div className="div w-5 h-5  px-1 flex items-center bg-white rounded-sm"> <FaHtml5 className='text-yellow-600 text-lg ' /></div>, name: 1 },
//     { id: "Css", icons:   <div className="div w-5 h-5  px-1 flex items-center bg-white rounded-sm">  <FaCss3Alt  className='text-yellow-300   text-lg'/></div>, name: 2 },
//     { id: "React", icons:    <div className="div w-5 h-5  px-1 flex items-center bg-white rounded-sm">  <IoLogoReact  className='text-blue-400 text-lg'/></div>, name: 3 },
//     { id: "JavaScript", icons: <div className="div w-5 h-5  px-1 flex items-center bg-white rounded-sm">  <FaJs className='text-yellow-500 text-lg'/></div> , name: 4 },
//     { id: "Rust", icons:  <div className="div w-5 h-5  px-1 flex items-center bg-white rounded-sm">     <FaHtml5 className='text-red-500 text-lg' /></div>, name: 5 },
//     { id: "NextJs", icons:  <div className="div w-5 h-5  px-1 flex items-center bg-white rounded-sm">     <RiNextjsFill className='text-gray-200 text-lg' /></div>, name: 6 },
//   ]

//   return (
//     <>
//       <div className='bg-black text-gray-100 flex justify-center items-center mt-20 p-10'>
//         <form className='flex flex-col gap-3 p-5 border border-red-500' onSubmit={handleSubmiit}>
//           <label htmlFor="">Full name</label>
//           <input type="text" placeholder='Your fullname' required value={fullname} onChange={(e) => setfullName(e.target.value)} className='p-2 rounded-md border border-red-500 bg-black' />
          
//           <label htmlFor="">Field</label>
//           <select name="" id="" required className='p-2 rounded-md border text-gray-100 border-red-500 bg-black' value={field} onChange={(e) => setfield(e.target.value)}>
//             <option value="" disabled>Select your field</option>
//             <option value="frontend developer">Frontend Developer</option>
//             <option value="designer">Designer</option>
//             <option value="product designer">Product Designer</option>
//           </select>

//           <label htmlFor="" className='block'>Socials</label>
//           <div className='flex gap-4'>
//             <input type="text" placeholder='e.g x' required className='p-2 rounded-md border border-red-500 bg-black' value={socialsT} onChange={(e) => setSocialsT(e.target.value)} />
//             <input type="text" placeholder='GitHub' className='p-2 rounded-md border border-red-500 bg-black' value={socialsG} onChange={(e) => setSocialsG(e.target.value)} />
//           </div>

//           <label htmlFor="">Stack</label>
//           <Select
//   name="select"
//   options={options}
//   labelField="id"
//   valueField="name"
//   multi
//   onChange={(values) => {
//     const selectedStacks = values.map((item) => (
//       <div 
//         className="flex items-center gap-2" 
//         key={item.id}
//       >
//         <span>{item.icons}</span>
//       </div>
//     ));
//     setStack(selectedStacks);
//   }}
//   className="p-3 rounded-md border-2 border-red-500 bg-black text-gray-900"
//   optionRenderer={({ item }) => (
//     <span className="flex items-center gap-3 border-2 rounded-md border-red-500 p-2 hover:bg-gray-800 transition-colors">
//       <span>{item.icons}</span>
//       <span className="text-gray-200 text-sm">{item.id}</span>
//     </span>
//   )}
// />

//           <button type='submit' className='p-2 rounded-md border border-red-500 bg-red-500 text-gray-100'>
//             Generate Banner
//           </button>
//         </form>
//       </div>

//       {showbanner && (
//         <div className="flex flex-col gap-5 justify-center items-center bg-black p-5">
//           <div className="bg-red-900 text-black border-[2px] w-[500px] mt-5 rounded-md p-5 border-purple-500 h-max">
//             <h1 className='font-bold text-2xl text-gray-200'>{fullname}</h1>
//             <p className='text-lg text-gray-200'>{field}</p>
//             <div className="flex gap-1 text-sm text-gray-300 mt-2 font-medium items-center">
//               <div className='flex gap-1 items-center'> <FaXTwitter /> <p>{socialsT} </p>  </div>|
//               <div className='flex gap-1 items-center'> <IoLogoGithub /> <p>{socialsG} </p>  </div>
//             </div>

//             <div className="text-end text-lg  gap-2 flex justify-end text-gray-200">
//               <p className='text-lg font-semibold'> Stack:  </p>
//               <span className='text-sm flex gap-2'> {stack} </span>

//             </div>
//           </div>
//           <button onClick={downloadBanner} className='p-2 rounded-md border w-[460px] border-red-500 bg-red-500 text-gray-100'>Download Banner</button>
//         </div>
//       )}
//     </>
//   )
// }

// export default Home






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



const Home = () => { 
  const [formData, setFormData] = useState({
    fullname: "",
    field: "",
    socialsT: "",
    socialsG: ""
  });
  const [showbanner, setShowBanner] = useState(false);
  const [stack, setStack] = useState([]);
  const [isDownloading, setIsDownloading] = useState(false);
  const bannerRef = useRef(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmiit = (e) => {
    e.preventDefault();
    setShowBanner(true);
  };

  const options = [
    { id: "Html", icons: <div className="w-5 h-5 px-1 flex items-center bg-white rounded-sm"><FaHtml5 className='text-yellow-600 text-lg' /></div>, name: 1 },
    { id: "Css", icons: <div className="w-5 h-5 px-1 flex items-center bg-white rounded-sm"><FaCss3Alt className='text-yellow-300 text-lg'/></div>, name: 2 },
    { id: "React", icons: <div className="w-5 h-5 px-1 flex items-center bg-white rounded-sm"><SiReact className='text-blue-500 text-lg'/></div>, name: 3 },
    { id: "JavaScript", icons: <div className="w-5 h-5 px-1 flex items-center bg-white rounded-sm"><FaJs className='text-yellow-500 text-lg'/></div>, name: 4 },
    { id: "NextJs", icons: <div className="w-5 h-5 px-1 flex items-center bg-white rounded-sm"><RiNextjsFill className='text-gray-900 text-lg' /></div>, name: 6 },
    { id: "Tailwind css", icons: <div className="w-5 h-5 px-1 flex items-center bg-white rounded-sm"><SiTailwindcss className=' text-cyan-500 text-lg' /></div>, name: 7 },
    { id: "Firebase", icons: <div className="w-5 h-5 px-1 flex items-center bg-white rounded-sm"><RiFirebaseFill className='text-orange-700 text-lg' /></div>, name: 8 },
    { id: "Git", icons: <div className="w-5 h-5 px-1 flex items-center bg-white rounded-sm"><FaGitAlt className='text-orange-700 text-lg' /></div>, name: 9 },


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
          <form className='flex flex-col gap-4 p-6 border border-red-500 rounded-lg' onSubmit={handleSubmiit}>
            <div className='space-y-2'>
              <label className='text-gray-100'>Full name</label>
              <input
                type="text"
                name="fullname"
                placeholder='Your fullname'
                required
                value={formData.fullname}
                onChange={handleInputChange}
                className='w-full p-2 rounded-md border border-red-500 bg-black outline-none text-gray-100'
              />
            </div>

            <div className='space-y-2'>
              <label className='text-gray-100'>Field</label>
              <select
                name="field"
                required
                className='w-full p-2 rounded-md border outline-none text-gray-100 border-red-500 bg-black'
                value={formData.field}
                onChange={handleInputChange}
              >
                <option value="" disabled>Select your field</option>
                <option value="Frontend Web developer_">Frontend Web Developer</option>
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
                  className='w-full p-2 outline-none rounded-md border border-red-500 bg-black text-gray-100'
                  value={formData.socialsT}
                  onChange={handleInputChange}
                />
                <input
                  type="text"
                  name="socialsG"
                  placeholder='GitHub'
                  className='w-full p-2 rounded-md border border-red-500 bg-black text-gray-100'
                  value={formData.socialsG}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div className='space-y-2'>
              <label className='text-gray-100'>Stack</label>
              <Select
                name="select"
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
                className="p-3 rounded-md border-2 border-red-500 bg-black text-gray-900"
                optionRenderer={({ item }) => (
                  <span className="flex items-center gap-3 border-2 rounded-md border-red-500 p-2 hover:bg-gray-800 transition-colors">
                    <span>{item.icons}</span>
                    <span className="text-gray-200 text-sm">{item.id}</span>
                  </span>
                )}
              />
            </div>

            <button
              type='submit'
              className='w-full p-3 rounded-md border border-red-500 bg-red-500 text-gray-100 hover:bg-red-600 transition-colors'
            >
              Generate Banner
            </button>
          </form>
        </div>

        {showbanner && (
          <div className="mt-10 flex flex-col items-center font-serif space-y-4 px-4">
            <div
              ref={bannerRef}
              className="w-full max-w-[500px] bg-gray-900 rounded-lg p-6 border-2 border-purple-500"
            >
              <h1 className='font-bold text-xl md:text-2xl text-gray-200'>{formData.fullname}</h1>
              <p className='text-base md:text-lg text-gray-200'>{formData.field}</p>
              <div className="flex flex-wrap gap-2 text-sm text-gray-300 mt-3 font-medium items-center">
                <div className='flex items-center gap-1'>
                  <FaXTwitter />
                  <p>{formData.socialsT}</p>
                </div>
                <span>|</span>
                <div className='flex items-center gap-1'>
                  <IoLogoGithub />
                  <p>{formData.socialsG}</p>
                </div>
              </div>

              <div className="mt-4 flex flex-wrap items-center justify-end gap-2 text-gray-200">
                <p className='text-base md:text-lg font-semibold'>Stack:</p>
                <div className='flex flex-wrap gap-2'>{stack}</div>
              </div>
            </div>

            <button
              onClick={downloadBanner}
              disabled={isDownloading}
              className='w-full max-w-[460px] p-3 rounded-md border border-red-500 bg-red-500 text-gray-100 hover:bg-red-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed'
            >
              {isDownloading ? 'Generating...' : 'Download Banner'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;



