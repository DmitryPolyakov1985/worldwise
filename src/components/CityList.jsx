import styles from "./CityList.module.css";
import Spinner from "./Spinner";
import CityItem from "./CityItem";
import Message from "./Message";

function CityList({ cities, isLoading }) {
  if (isLoading) {
    return <Spinner />;
  }

  if (cities?.length === 0) {
    return (
      <Message message="Add your first city by clicking on the city on the map..." />
    );
  }
  return (
    <ul className={styles.cityList}>
      {cities?.map((city) => (
        <CityItem city={city} key={city.id} />
      ))}
    </ul>
  );
}

import PropTypes from "prop-types";

CityList.propTypes = {
  cities: PropTypes.array,
  isLoading: PropTypes.bool,
};

export default CityList;
