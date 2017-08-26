import PropTypes from 'prop-types';

export const attributesShape = {
};

export const userShape = {
  id: PropTypes.string,
  attributes: PropTypes.shape(attributesShape)
};

export const authStateShape = {
  user: PropTypes.shape(userShape)
};