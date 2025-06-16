// import React from 'react'
// import { MdOutlineFileDownload } from "react-icons/md";
// import { IoLockClosedOutline } from "react-icons/io5";
// import { CiUser } from "react-icons/ci";
// import { IoIosSearch } from "react-icons/io";
// import { LuBriefcase } from "react-icons/lu";
// import { VscGraph } from "react-icons/vsc";
// import { MdDoubleArrow } from "react-icons/md";
// import { AiOutlineCompass } from "react-icons/ai";
// import { IoChatbubbleOutline } from "react-icons/io5";
// import { RiMenuFold2Fill } from "react-icons/ri";
// import { FaRegMessage } from "react-icons/fa6";

// const Sizebar = () => {
//   return (
//     <div
//         className="position-fixed  top-0 start-0 h-100 bg-white text-black "
//         style={{
//           width: "250px",
//           zIndex: 999,
//           transform: isSidebarOpen ? "translateX(0)" : "translateX(-110%)",
//           transition: "transform 0.3s ease-in-out",
//           // borderRadius: "0 10px 10px 0",
//         }}
//       >
//         <header
//           className="p-4"
//           style={{
//             paddingBottom: "20px",
//             paddingTop: "20px",
//             borderBottom: "1px solid #ccc",
//           }}
//         >
//           <img
//             src="https://static.naukimg.com/s/0/0/i/ni-hamburger/naukri_new_logo.svg"
//             alt=""
//             style={{ width: "100px", height: "auto" }}
//           />
//         </header>
//         <ul
//           className="list-unstyled p-4"
//           style={{ display: "flex", flexDirection: "column", gap: "16px" }}
//         >
//           <li>
//             <a
//               href="#"
//               className="text-black text-decoration-none d-flex align-items-center"
//             >
//               <MdOutlineFileDownload size={24} color="gray" />
//               <span className="ms-2">Download App</span>
//             </a>
//           </li>
//           <li>
//             <a
//               href="#"
//               className="text-black text-decoration-none d-flex align-items-center"
//             >
//               <IoLockClosedOutline size={24} color="gray" />
//               <span className="ms-2">Login</span>
//             </a>
//           </li>
//           <li>
//             <a
//               href="#"
//               className="text-black text-decoration-none d-flex align-items-center"
//             >
//               <CiUser size={24} color="gray" />
//               <span className="ms-2">Register</span>
//             </a>
//           </li>
//           <li>
//             <a
//               href="#"
//               className="text-black text-decoration-none d-flex align-items-center"
//             >
//               <IoIosSearch size={24} color="gray" />
//               <span className="ms-2">Search Job</span>
//             </a>
//           </li>
//           <li>
//             <a
//               href="#"
//               className="text-black text-decoration-none d-flex align-items-center"
//             >
//               <LuBriefcase size={24} color="gray" />
//               <span className="ms-2">Jobs</span>
//             </a>
//           </li>
//           <li>
//             <a
//               href="#"
//               className="text-black text-decoration-none d-flex align-items-center"
//             >
//               <VscGraph size={24} color="gray" />
//               <span className="ms-2">Companies</span>
//             </a>
//           </li>
//           <li>
//             <a
//               href="#"
//               className="text-black text-decoration-none d-flex align-items-center"
//             >
//               <MdDoubleArrow size={24} color="gray" />
//               <span className="ms-2">Paid jobseeker services</span>
//             </a>
//           </li>
//           <li>
//             <a
//               href="#"
//               className="text-black text-decoration-none d-flex align-items-center"
//             >
//               <AiOutlineCompass size={24} color="gray" />
//               <span className="ms-2">Naukri 360 services</span>
//             </a>
//           </li>
//           <li>
//             <a
//               href="#"
//               className="text-black text-decoration-none d-flex align-items-center"
//             >
//               <IoChatbubbleOutline size={24} color="gray" />
//               <span className="ms-2">Chat for help</span>
//             </a>
//           </li>
//           <li>
//             <a
//               href="#"
//               className="text-black text-decoration-none d-flex align-items-center"
//             >
//               <RiMenuFold2Fill size={24} color="gray" />
//               <span className="ms-2">Naukri blog</span>
//             </a>
//           </li>
//           <li>
//             <a
//               href="#"
//               className="text-black text-decoration-none d-flex align-items-center"
//             >
//               <FaRegMessage size={24} color="gray" />
//               <span className="ms-2">Feedback and rate</span>
//             </a>
//           </li>
//         </ul>
//       </div>
//   )
// }

// export default Sizebar