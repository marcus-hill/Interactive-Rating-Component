import classes from "./RatingSelector.module.css";

const RatingSelector = ({ currentRating, updateCurrentRating }) => {
  return (
    <>
      <fieldset className={classes.ratingGroupContainer}>
        <legend className="visually-hidden">Rate our service</legend>
        <div className={classes.ratingGroup}>
          <input type="radio" id="1" name="rating" value="1" onChange={updateCurrentRating} checked={currentRating?.toString() === "1" ? "checked" : ""} />
          <label htmlFor="1" aria-label="1 out of 5">
            1
          </label>

          <input type="radio" id="2" name="rating" value="2" onChange={updateCurrentRating} checked={currentRating?.toString() === "2" ? "checked" : ""} />
          <label htmlFor="2" aria-label="2 out of 5">
            2
          </label>

          <input type="radio" id="3" name="rating" value="3" onChange={updateCurrentRating} checked={currentRating?.toString() === "3" ? "checked" : ""} />
          <label htmlFor="3" aria-label="3 out of 5">
            3
          </label>

          <input type="radio" id="4" name="rating" value="4" onChange={updateCurrentRating} checked={currentRating?.toString() === "4" ? "checked" : ""} />
          <label htmlFor="4" aria-label="4 out of 5">
            4
          </label>

          <input type="radio" id="5" name="rating" value="5" onChange={updateCurrentRating} checked={currentRating?.toString() === "5" ? "checked" : ""} />
          <label htmlFor="5" aria-label="5 out of 5">
            5
          </label>
        </div>
      </fieldset>
    </>
  );
};

export default RatingSelector;
