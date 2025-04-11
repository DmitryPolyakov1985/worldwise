import styles from "./Message.module.css";

function Message({ message }) {
  return (
    <p className={styles.message}>
      <span role="img">👋</span> {message}
    </p>
  );
}

import PropTypes from "prop-types";

Message.propTypes = {
  message: PropTypes.string,
};

export default Message;
