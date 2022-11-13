import React from "react";
import "./Widgets.css";
import InfoIcon from "@mui/icons-material/Info";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

function Widgets() {
  const newsArticle = (heading, subtitle) => (
    <div className="widgets__article">
      <div className="widgets__articleLeft">
        <FiberManualRecordIcon />
      </div>
      <div className="widgets__articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );

  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>Top Articles</h2>
        <InfoIcon />
      </div>
      {newsArticle(
        "9 Docker Extensions Every Developer Must Try",
        "#docker #devops #kubernetes"
      )}
      {newsArticle(
        "8 must-know tips for writing clean code with Javascript",
        "#javascript #refactorit #webdev #beginners"
      )}
      {newsArticle(
        "I made 10x faster JSON.stringify() functions, even type safe",
        "#javascript #programming #typescript #opensource"
      )}
      {newsArticle(
        "Design Patterns in Software Development",
        "#tutorial #opensource #productivity #community"
      )}
      {newsArticle(
        "Why We're Breaking Up with CSS-in-JS",
        "#javascript #react #css #typescript"
      )}
      {newsArticle(
        "Advice for Junior Developers",
        "#beginners #productivity #codenewbie #learning"
      )}
    </div>
  );
}

export default Widgets;
