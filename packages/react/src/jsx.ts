import { REACT_ELEMENT_TYPE } from 'shared/ReactSymbols';
import { Key, Ref, Props, ReactElementType, ElementType } from 'shared/ReactTypes';
// ReactElement
const ReactElement = function (type: ElementType, key: Key, ref: Ref, props: Props): ReactElementType {
	const element: ReactElementType = {
		$$typeof: REACT_ELEMENT_TYPE,
		type: type,
		key,
		ref,
		props,
		__mark: 'codePoor'
	};

	return element;
};
export const jsxDEV = (type: ElementType, config: any) => {
	let key: Key = null;
	const props: Props = {};
	let ref: Ref = null;
	for (const prop in config) {
		const val = config[prop];
		if (prop === 'key') {
			if (val !== undefined) {
				key = '' + val;
			}
			continue;
		}
		if (prop === 'ref') {
			if (val !== undefined) {
				ref = val;
			}
			continue;
		}
		// 判断是不是对象自身的属性
		if (Object.hasOwnProperty.call(config, prop)) {
			props[prop] = val;
		}
	}
	return ReactElement(type, key, ref, props);
};

export const jsx = (type: ElementType, config: any, ...maybeChildren: any) => {
	let key: Key = null;
	const props: Props = {};
	let ref: Ref = null;
	for (const prop in config) {
		const val = config[prop];
		if (prop === 'key') {
			if (val !== undefined) {
				key = '' + val;
			}
			continue;
		}
		if (prop === 'ref') {
			if (val !== undefined) {
				ref = val;
			}
			continue;
		}
		// 判断是不是对象自身的属性
		if (Object.hasOwnProperty.call(config, prop)) {
			props[prop] = val;
		}
	}
	// 判断剩余参数的长度
	const maybeChildrenLength = maybeChildren.length;
	if (maybeChildrenLength === 1) {
		props.children = maybeChildren[0];
	} else {
		props.children = maybeChildren;
	}
	return ReactElement(type, key, ref, props);
};
