import {
  findBlockNodes,
  // NodeWithPos
} from "../lib/prosemirror-utils";
import { Node } from "prosemirror-model";

interface NodeType {
  nodeSize: number;
}

interface BlockType {
  pos: number;
  node: NodeType;
}

export default function findCollapsedNodes(doc: Node) {
  const blocks = findBlockNodes(doc);
  const nodes: BlockType[] = [];

  let withinCollapsedHeading;

  for (const block of blocks) {
    if (block.node.type.name === "heading") {
      if (
        !withinCollapsedHeading ||
        block.node.attrs.level <= withinCollapsedHeading
      ) {
        if (block.node.attrs.collapsed) {
          if (!withinCollapsedHeading) {
            withinCollapsedHeading = block.node.attrs.level;
          }
        } else {
          withinCollapsedHeading = undefined;
        }
        continue;
      }
    }

    if (withinCollapsedHeading) {
      nodes.push(block);
    }
  }

  return nodes;
}
