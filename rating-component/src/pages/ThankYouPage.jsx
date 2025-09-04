import { useLocation, useNavigate } from "react-router-dom";
import classes from "./ThankYouPage.module.css";
import ThankYouImage from "../assets/images/illustration-thank-you.svg";

const ThankYouPage = ({}) => {
  const location = useLocation();
  const navigate = useNavigate();

  const rating = location.state?.currentRating ? localStorage.getItem("lastRating") : null;
  return (
    <div className={classes.thankYouContainer}>
      <img src={ThankYouImage} alt="Thank You Image of a Mobile Phone" />

      <div className={classes.selectedRatingContainer}>
        <p className={classes.selectedRatingText}>You selected {rating} out of 5</p>
      </div>

      <p className={classes.thankYouText}>Thank you!</p>

      <p className={classes.thankYouDescription}>We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!</p>
    </div>
  );
};

export default ThankYouPage;
