import { INode } from "../interfaces/INode";

export default class BinaryTree<U> {
  private root: INode<U> | undefined;

  public initialiseNode = (value: U): INode<U> => {
    return {
      value,
      left: null,
      right: null,
    };
  };

  public insert = (value: U) => {
    const currentNode = this.initialiseNode(value);

    if (!this.root) {
      this.root = currentNode;
    } else {
      this.insertNode(currentNode);
    }

    return this;
  };

  private insertNode = (currentNode: INode<U>) => {
    const { value } = currentNode;
    const traverse = (node: INode<U>) => {
      if (value > node.value) {
        if (!node.right) {
          node.right = currentNode;
        } else {
          traverse(node.right);
        }
      } else if (value < node.value) {
        if (!node.left) {
          node.left = currentNode;
        } else {
          traverse(node.left);
        }
      }
    };

    traverse(this.root as INode<U>);
  };

  public contains = (value: U) => {
    // eslint-disable-next-line consistent-return
    const traverse = (node: INode<U>): undefined | boolean => {
      if (!node) {
        return false;
      }
      if (value === node.value) {
        return true;
      }
      if (value > node.value) {
        return traverse(node.right as INode<U>);
      }
      if (value < node.value) {
        return traverse(node.left as INode<U>);
      }
    };
    const rootNode: INode<U> | undefined = this.root;

    return traverse(rootNode as INode<U>);
  };

  public findMin = () => {
    const traverse = (node: INode<U>): INode<U> | U => {
      return !node.left ? node.value : traverse(node.left);
    };
    const rootNode: INode<U> = this.root as INode<U>;

    return traverse(rootNode);
  };

  public findMax = () => {
    const traverse = (node: INode<U>): INode<U> | U => {
      return !node.right ? node.value : traverse(node.right);
    };
    const rootNode: INode<U> = this.root as INode<U>;

    return traverse(rootNode);
  };

  public preOrder = () => {
    let result: U[];

    // eslint-disable-next-line prefer-const
    result = [];

    const traverse = (node: INode<U>) => {
      result.push(node.value);
      node.left && traverse(node.left);
      node.right && traverse(node.right);
    };

    const rootNode: INode<U> | undefined = this.root as INode<U>;
    traverse(rootNode);

    return result;
  };

  public inOrder = () => {
    let result: U[];

    // eslint-disable-next-line prefer-const
    result = [];

    const traverse = (node: INode<U>) => {
      node.left && traverse(node.left);
      result.push(node.value);
      node.right && traverse(node.right);
    };

    const rootNode: INode<U> | undefined = this.root as INode<U>;
    traverse(rootNode);

    return result;
  };

  public postOrder = () => {
    let result: U[];

    // eslint-disable-next-line prefer-const
    result = [];

    const traverse = (node: INode<U>) => {
      node.left && traverse(node.left);
      node.right && traverse(node.right);
      result.push(node.value);
    };

    const rootNode: INode<U> | undefined = this.root as INode<U>;
    traverse(rootNode);

    return result;
  };

  public toString = () => {
    return JSON.stringify(this.inOrder());
  };
}
