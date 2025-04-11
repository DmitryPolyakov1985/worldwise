import styles from "./CountryItem.module.css";

function CountryItem({ country }) {
  return (
    <li className={styles.countryItem}>
      <span>{country.emoji}</span>
      <span>{country.country}</span>
    </li>
  );
}

import PropTypes from "prop-types";

CountryItem.propTypes = {
  country: PropTypes.shape({
    emoji: PropTypes.string,
    country: PropTypes.string,
  }),
};

export default CountryItem;
