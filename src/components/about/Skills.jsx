import React from "react";

const skillsContent = [
  { skillClass: "p25", skillPercent: "25", skillName: "HTML" },
  { skillClass: "p90", skillPercent: "89", skillName: "Social Media" },
  { skillClass: "p25", skillPercent: "70", skillName: "CSS" },
  { skillClass: "p80", skillPercent: "66", skillName: "UX" },
  { skillClass: "p95", skillPercent: "95", skillName: "Animation" },
  { skillClass: "p95", skillPercent: "50", skillName: "Art Direction" },
  { skillClass: "p95", skillPercent: "50", skillName: "Video promos" },
  { skillClass: "p95", skillPercent: "50", skillName: "Brochure" },
  { skillClass: "p95", skillPercent: "50", skillName: "Corporate identity " },
];

const Skills = () => {
  return (
    <>
      {skillsContent.map((val, i) => (
        <div className="col-6 col-md-3 mb-3 mb-sm-5" key={i}>
          <div className={`c100 ${val.skillClass}`}>
            <span>{val.skillPercent}%</span>
            <div className="slice">
              <div className="bar"></div>
              <div className="fill"></div>
            </div>
          </div>
          <h6 className="text-uppercase open-sans-font text-center mt-2 mt-sm-4">
            {val.skillName}
          </h6>
        </div>
      ))}
    </>
  );
};

export default Skills;
