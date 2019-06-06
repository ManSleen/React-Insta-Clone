import React from "react";

const RecommendedContainer = props => {
  return (
    <div className="reco-container">
      <div className="user-info">
        <img
          src="https://scontent-dfw5-1.cdninstagram.com/vp/31a6d74a4c7272385f7fba9f0c4ced39/5D8B58FD/t51.2885-19/s150x150/59022951_615063302296246_758405088904478720_n.jpg?_nc_ht=scontent-dfw5-1.cdninstagram.com"
          alt=""
        />
        <div className="username-realname">
          <h3>{localStorage.getItem("username")}</h3>
          <h4>Awesome McSauce</h4>
        </div>
      </div>
      <div className="reco-stories">
        <div className="stories-title">
          <h3>Stories</h3>
          <h4>Watch All</h4>
        </div>
        <div className="stories-list">
          <ul>
            <li>User 1</li>
            <li>User 2</li>
            <li>User 3</li>
            <li>User 4</li>
          </ul>
        </div>
      </div>
      <div className="reco-suggestions">
        <div className="stories-title">
          <h3>Suggestions For You</h3>
          <h4>See All</h4>
        </div>
        <div className="stories-list">
          <ul>
            <li>User 1</li>
            <li>User 2</li>
            <li>User 3</li>
            <li>User 4</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RecommendedContainer;
