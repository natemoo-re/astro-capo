import type { ElementNode } from 'ultrahtml';
import { parse, walkSync, renderSync, ELEMENT_NODE } from 'ultrahtml';
import { getWeight } from './rules.js';

export default function capo(html: string) {
    const ast = parse(html);
    try {
        walkSync(ast, (node, parent, index) => {
            if (node.type === ELEMENT_NODE && node.name === 'head') {
                if (parent) {
                    parent.children.splice(index, 1, getSortedHead(node));
                    throw 'done' // short-circuit
                }
            }
        })
    } catch (e) {
        if (e !== 'done') throw e;
    }
    return renderSync(ast);
}

function getSortedHead(head: ElementNode): ElementNode {
    const weightedChildren = head.children.map((node) => {
        if (node.type === ELEMENT_NODE) {
            const weight = getWeight(node);
            return [weight, node];
        }
    }).filter(Boolean) as [number, ElementNode][]
    const children = weightedChildren.sort((a, b) => b[0] - a[0]).map(([_, element]) => element)
    return { ...head, children };
}
