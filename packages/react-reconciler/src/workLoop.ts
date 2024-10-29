import { beginWork } from './beginWork';
import { completeWork } from './completeWork';
import { FiberNode } from './fiber';
let workInProgress: FiberNode | null = null;

function prepareFreshStack(fiber: FiberNode) {
	workInProgress = fiber;
}
function renderRoot(root: FiberNode) {
	// 设置根节点
	prepareFreshStack(root);
	do {
		try {
			// 开始遍历所有的FiberNode
			workLoop();
		} catch (error) {
			console.warn('workLoop发生错误', error);
			workInProgress = null;
			return;
		}
	} while (true);
}
function workLoop() {
	// 只要当前节点不为空，则一直遍历
	while (workInProgress !== null) {
		// 递归的递阶段触发
		performUnitOfWork(workInProgress);
	}
}
function performUnitOfWork(fiber: FiberNode) {
	// 执行beginWork节点，并获取下一个要执行的节点
	const next = beginWork(fiber);
	// 将当前节点的结束状态更改
	fiber.memoizedProps = fiber.pendingProps;
	// 如果是最后一个节点则开始递归的归过程
	if (next === null) {
		completeUnitOfWork(fiber);
	} else {
		// 否则继续
		workInProgress = next;
	}
}
function completeUnitOfWork(fiber: FiberNode) {
	let node: FiberNode | null = fiber;
	do {
		completeWork(node);
		// 获取兄弟节点
		const sibling = node.sibling;
		if (sibling !== null) {
			workInProgress = sibling;
			return;
		}
		node = node.return;
		workInProgress = node;
	} while (node !== null);
}
