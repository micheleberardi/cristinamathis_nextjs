import React from "react";

const personalInfoContent = [
  { meta: "first name", metaInfo: "Cristina", hasColor: "" },
  { meta: "last name", metaInfo: "Mathis", hasColor: "" },
  { meta: "Age", metaInfo: "42 Years", hasColor: "" },
  { meta: "Nationality", metaInfo: "Italian", hasColor: "" },
  { meta: "Freelance", metaInfo: "Available", hasColor: "green" },
  { meta: "Address", metaInfo: "New York", hasColor: "" },
  { meta: "phone", metaInfo: "+1646913714", hasColor: "" },
  { meta: "Email", metaInfo: "cristinamathis@gmail.com", hasColor: "" },
  { meta: "Skype", metaInfo: "cristinamathis", hasColor: "" },
  { meta: "langages", metaInfo: "Italian,French, English", hasColor: "" },
];

const PersonalInfo = () => {
  return (
    <ul className="about-list list-unstyled open-sans-font">
      {personalInfoContent.map((val, i) => (
        <li key={i}>
          <span className="title">{val.meta}: </span>
          <span
            className={`value d-block d-sm-inline-block d-lg-block d-xl-inline-block ${val.hasColor}`}
          >
            {val.metaInfo}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default PersonalInfo;
