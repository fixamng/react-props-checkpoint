import React from "react";
import PropTypes from "prop-types";

export default function Profile(props) {
  const { fullName, bio, profession, handleName } = props;
  return (
    <div>
      <div>
        <p>Full Name: {fullName}.</p>
      </div>
      <div>
        <p>Bio: {bio}.</p>
      </div>
      <div>
        <p>Profession: {profession}.</p>
      </div>
      <button onClick={() => handleName(fullName)}>CLICK!</button>
      <div>{props.children}</div>
    </div>
  );
}

Profile.propTypes = {
  fullName: PropTypes.string,
  bio: PropTypes.string,
  profession: PropTypes.string,
};

Profile.defaultProps = {
  fullName: "Input Name",
  bio: "Write a little about yourself",
  profession: "How do you earn a living?",
};
