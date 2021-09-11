// import React, { useContext, useEffect, useState } from "react";
// import { UseProductContext } from "../../App";
// import Admain from "./Admain/Admain";

// const FilterAdmain = () => {
//   const [adddAdmain, setAddAdmain] = useState([]);

//   const [news, setNews] = useContext(UseProductContext);
//   useEffect(() => {
//     fetch("http://localhost:1000/addAdmain")
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(data);

//         setAddAdmain(data.rasult);
//       });
//     // for (let i = 0; i < adddAdmain.length; i++) {
//     //   const element = adddAdmain[i];
//     //   setIsAdmain(element);
//     // }
//   }, []);
//   return (
//     <div>
//       {adddAdmain.map((admain) => (
//         <Admain admain={admain}></Admain>
//       ))}
//     </div>
//   );
// };

// export default FilterAdmain;
