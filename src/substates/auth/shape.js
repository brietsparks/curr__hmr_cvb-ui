import PropTypes from 'prop-types';

export const attributesShape = {
};

export const userShape = {
  id: PropTypes.string,
  attributes: PropTypes.shape(attributesShape).isRequired
};

export const authStateShape = {
  initialized: PropTypes.bool,
  user: PropTypes.shape(userShape).isRequired
};