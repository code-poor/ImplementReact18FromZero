import { Props, Key, Ref } from 'shared/ReactTypes';
import { WorkTag } from './workTags';
import { Flags, NoFlags } from './fiberFlags';
export class FiberNode {
	type: any;
	tag: WorkTag;
	pendingProps: Props;
	memoizedProps: Props | null;
	key: Key;
	stateNode: any;
	ref: Ref;

	return: FiberNode | null;
	sibling: FiberNode | null;
	child: FiberNode | null;
	index: number;
	alternate: FiberNode | null;
	flags: Flags;
	constructor(tag: WorkTag, pendingProps: Props, key: Key) {
		// 实例
		this.tag = tag;
		this.key = key;
		this.stateNode = null;
		// FunctionComponent
		this.type = null;

		// 构成树结构
		// 指向父fiberNode
		this.return = null;
		// 右边兄弟fiberNoe
		this.sibling = null;
		// 子fiberNode
		this.child = null;
		this.index = 0;
		this.ref = null;
		// 作为工作单元
		// 准备工作时的状态
		this.pendingProps = pendingProps;
		// 工作结束时的状态
		this.memoizedProps = null;

		this.alternate = null;
		// 副作用
		this.flags = NoFlags;
	}
}
