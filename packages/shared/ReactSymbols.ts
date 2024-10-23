// 判断当前环境是否支持Symbol
const supportSymbol = typeof Symbol === 'function' && Symbol.for;

// 如果支持则
export const REACT_ELEMENT_TYPE = supportSymbol ? Symbol.for('react.element') : 0xeac7;
