import { useNavigate } from "react-router-dom";
import { useState } from "react";
import RatingSelector from "../components/RatingSelector.jsx";
import classes from "./RatingPage.module.css";
import StarIcon from "../assets/images/icon-star.svg";

const RatingPage = ({}) => {
  const [currentRating, setCurrentRating] = useState(null);

  const navigate = useNavigate();

  const updateCurrentRating = (event) => {
    setCurrentRating(event.target.id);
  };

  const submitRating = () => {
    localStorage.setItem("lastRating", currentRating.toString());
    navigate("/thank-you", { state: { currentRating } });
    setCurrentRating(null);
  };

  return (
    <>
      <div className={classes.ratingContainer}>
        <div className={classes.starIconContainer}>
          <img src={StarIcon} alt="Orange Star Icon" />
        </div>

        <p className={classes.ratingTitle}>How did we do?</p>
        <p className={classes.ratingDescription}>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>

        <RatingSelector currentRating={currentRating} updateCurrentRating={updateCurrentRating}></RatingSelector>

        <button className={classes.submitButton} onClick={submitRating}>
          Submit
        </button>
      </div>
    </>
  );
};

export default RatingPage;
