/* @flow */

const ThreeStateBooleanDefinition = {
  TRUE: 1,
  FALSE: -1,
  INDETERMINATE: 0,
};

type ThreeStateBoolean = $Keys<typeof ThreeStateBooleanDefinition>;

export default ThreeStateBoolean;
