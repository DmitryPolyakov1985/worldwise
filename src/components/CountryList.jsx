import styles from "./CountryList.module.css";
import Spinner from "./Spinner";
import CountryItem from "./CountryItem";
import Message from "./Message";
import { useCities } from "../contexts/CitiesContext";

function CounryList() {
  const { cities, isLoading } = useCities();

  if (isLoading) {
    return <Spinner />;
  }

  if (cities?.length === 0) {
    return (
      <Message message="Add your first city by clicking on the city on the map..." />
    );
  }

  const countries = cities.reduce((arr, city) => {
    if (!arr.map((el) => el.country).includes(city.country)) {
      return [...arr, { country: city.country, emoji: city.emoji }];
    } else {
      return arr;
    }
  }, []);

  return (
    <ul className={styles.countryList}>
      {countries?.map((country, index) => (
        <CountryItem country={country} key={index} />
      ))}
    </ul>
  );
}

import PropTypes from "prop-types";

CounryList.propTypes = {
  cities: PropTypes.array,
  isLoading: PropTypes.bool,
};

export default CounryList;
