// import React, { useContext, useEffect } from "react";
// import { Link } from "react-router-dom";

// import "react-responsive-carousel/lib/styles/carousel.min.css";

// import CatagoryWiseNews from "../../CatagoryWiseNews/CatagoryWiseNews";
// import { UseProductContext } from "../../../App";
// import "./OurAllCatagorys.css";
// const OurAllCatagorys = () => {
//   const [news, setNews] = useContext(UseProductContext);
//   console.log("news", news);
//   //
//   useEffect(() => {
//     fetch("https://intense-anchorage-50845.herokuapp.com/news")
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(data);
//         setNews(data.rasult);
//       });
//   }, []);
//   const catagories = ["news", "sports", "health"];
//   return (
//     <div className="our_all_catagorys_container">
//       <div className="  container" style={{ paddingTop: "5%" }}>
//         <div className="heading_title">
//           <h4>
//             Our All <span style={{ color: "#0288d1" }}>Categort's</span>
//           </h4>
//         </div>
//         {catagories.map((catagory) => (
//           <CatagoryWiseNews
//             catagory={catagory}
//             newss={news.filter((n) => n.catagory === catagory)}
//           ></CatagoryWiseNews>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default OurAllCatagorys;
//
//
//
//
//
//
//
import React, { useContext, useEffect } from "react";
import { useParams } from "react-router";
import { UseProductContext } from "../../../App";
import CatagoryWiseNews from "../../CatagoryWiseNews/CatagoryWiseNews";
import AllTopics from "../../News/AllTopics/AllTopics";
import { Link } from "react-router-dom";
import "./OurAllCatagorys.css";
import Bounce from "react-reveal/Bounce";
const OurAllCatagorys = () => {
  const { catagorys } = useParams();

  const [news, setNews] = useContext(UseProductContext);

  //
  useEffect(() => {
    fetch("https://intense-anchorage-50845.herokuapp.com/news")
      .then((res) => res.json())
      .then((data) => {
        setNews(data.rasult);
      });
  }, []);

  const catagories = [
    { news: "news" },
    { sports: "sports" },
    { health: "health" },
  ];
  return (
    <>
      <div className="container ">
        <div className="heading_title">
          <h4>
            Our All <span style={{ color: "#0288d1" }}>Categorie's</span>
          </h4>
        </div>
        <div className="row single_card_newss">
          <div className="col-sm-12 col-md-7 col-lg-8 col-xl-8  ">
            <Bounce left>
              <div className="row">
                {/*  */}
                <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 col-12 single_catagory_card">
                  <div className="all_categorys_containerr">
                    <div className="s-catagorys_name">
                      <h5>NEWS</h5>
                    </div>
                    <div className="category_description">
                      <div className="catagorys_bg_img"></div>
                      <small className="titles_cata_news">NEWS</small>
                      <h4>Hipster Yoga at the End of the World</h4>
                      <span>3 days ago</span>

                      <p>
                        This is a video post format example. It supports all
                        WordPress common embed features for videos.
                      </p>
                    </div>
                    <div className="our_all_category_wise_news">
                      {catagories.map((catagory) => (
                        <CatagoryWiseNews
                          catagory={catagory}
                          newss={news.filter(
                            (n) => n.catagory === catagory.news
                          )}
                        ></CatagoryWiseNews>
                      ))}
                    </div>
                  </div>
                </div>
                {/*  */}
                {/*  */}
                <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 col-12 single_catagory_card">
                  <div className="all_categorys_containerr">
                    <div className="s_catagorys_name_sports">
                      <h5>SPORTS</h5>
                    </div>
                    <div className="category_description">
                      <div className="sports_catagorys_bg_img"></div>
                      <small className="titles_cata_sport">SPORTS</small>
                      <h4>Hipster Yoga at the End of the World</h4>
                      <span>3 days ago</span>
                      <p>
                        This is a video post format example. It supports all
                        WordPress common embed features for videos.
                      </p>
                    </div>
                    <div className="our_all_category_wise_sports">
                      {catagories.map((catagory) => (
                        <CatagoryWiseNews
                          catagory={catagory}
                          newss={news.filter(
                            (n) => n.catagory === catagory.sports
                          )}
                        ></CatagoryWiseNews>
                      ))}
                    </div>
                  </div>
                </div>
                {/*  */}
                <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 col-12 single_catagory_card">
                  <div className="all_categorys_containerr">
                    <div className="s_catagorys_name_health">
                      <h5>HEALTH</h5>
                    </div>
                    <div className="category_description">
                      <div className="health_catagorys_bg_img"></div>
                      <small className="titles_cata_health">HEALTH</small>
                      <h4>Hipster Yoga at the End of the World</h4>
                      <span>3 days ago</span>
                      <p>
                        This is a video post format example. It supports all
                        WordPress common embed features for videos.
                      </p>
                    </div>
                    <div
                      className="our_all_category_wise_health"
                      style={{ height: "290px", overflowY: "auto" }}
                    >
                      {catagories.map((catagory) => (
                        <CatagoryWiseNews
                          catagory={catagory}
                          newss={news.filter(
                            (n) => n.catagory === catagory.health
                          )}
                        ></CatagoryWiseNews>
                      ))}
                    </div>
                  </div>
                </div>
                {/*  */}
              </div>
            </Bounce>
          </div>
          <div className="col-sm-12 col-md-5 col-lg-4 col-xl-4">
            <Bounce right>
              {" "}
              <AllTopics></AllTopics>
            </Bounce>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurAllCatagorys;
//
//
//
//
//
//
//
// import React, { useContext, useEffect } from "react";
// import { useParams } from "react-router";
// import { UseProductContext } from "../../../App";
// import CatagoryWiseNews from "../../CatagoryWiseNews/CatagoryWiseNews";
// import AllTopics from "../../News/AllTopics/AllTopics";
// import { Link } from "react-router-dom";
// import "./OurAllCatagorys.css";
// const OurAllCatagorys = () => {
//   const { catagorys } = useParams();
//   console.log(catagorys);
//   const [news, setNews] = useContext(UseProductContext);
//   console.log("news", news);
//   //
//   useEffect(() => {
//     fetch("https://intense-anchorage-50845.herokuapp.com/news")
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(data);
//         setNews(data.rasult);
//       });
//   }, []);

//   // const catagories = [
//   //   { news: "news" },
//   //   { sports: "sports" },
//   //   { health: "health" },
//   // ];
//   const catagories = ["news", "sports", "health"];
//   const singleCategorys = [
//     {
//       name: <h5 className="s-catagorys_name">NEWS</h5>,
//       sName: <small>NEWS</small>,
//       imge: <div className="catagorys_bg_img"></div>,
//       title: <h4>Hipster Yoga at the End of the World</h4>,
//       time: <span>3 days ago</span>,
//       description: (
//         <p>
//           {" "}
//           This is a video post format example. It supports all WordPress common
//           embed features for videos.
//         </p>
//       ),
//     },
//     {
//       name: <h5 className="s-catagorys_name">SPORTS</h5>,
//       sName: <small>SPORTS</small>,
//       imge: <div className="sports_catagorys_bg_img"></div>,
//       title: <h4>Hipster Yoga at the End of the World</h4>,
//       time: <span>3 days ago</span>,
//       description: (
//         <p>
//           {" "}
//           This is a video post format example. It supports all WordPress common
//           embed features for videos.
//         </p>
//       ),
//     },
//   ];
//   return (
//     <div className="container">
//       <div className="row">
//         <div className="col-sm-8">
//           <div className="row">
//             {/*  */}

//             {singleCategorys.map((cata) => (
//               <div className="col-sm-6">
//                 <div className="all_categorys_containerr">
//                   <div className="s-catagorys_name">{cata.name}</div>
//                   <div className="category_description">
//                     <div>{cata.imge}</div>
//                     {cata.sName}
//                     {cata.title}

//                     {cata.description}
//                   </div>
//                   <div style={{ height: "290px", overflowY: "auto" }}>
//                     {catagories.map((catagory) => (
//                       <CatagoryWiseNews
//                         catagory={catagory}
//                         newss={news.filter((n) => n.catagory === catagory)}
//                       ></CatagoryWiseNews>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             ))}

//             {/*  */}
//           </div>
//         </div>
//         <div className="col-sm-4">
//           <AllTopics></AllTopics>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default OurAllCatagorys;
