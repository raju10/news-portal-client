import React from "react";

import {
  FaSupple,
  FaAviato,
  FaAngrycreative,
  FaEmber,
  FaDAndDBeyond,
  FaHips,
  FaApper,
} from "react-icons/fa";

const ourBrandsIcon = [
  {
    icons: <FaSupple />,
  },
  {
    icons: <FaAviato />,
  },
  {
    icons: <FaAngrycreative />,
  },
  {
    icons: <FaEmber />,
  },
  {
    icons: <FaDAndDBeyond />,
  },
  {
    icons: <FaHips />,
  },
  {
    icons: <FaApper />,
  },
  {
    icons: <FaAviato />,
  },
];
const Ards = () => {
  return (
    <div className="container">
      <div className="heading_title">
        <h4>
          Our All <span style={{ color: "#0288d1" }}>Brands</span>
        </h4>
      </div>
      <div style={{ paddingTop: "3%", paddingBottom: "5%" }}>
        <div className="row">
          {ourBrandsIcon.map((icon) => (
            <div
              className="col-sm-3 col-6 "
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "80px",
                color: "#556575",
              }}
            >
              {icon.icons}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Ards;
