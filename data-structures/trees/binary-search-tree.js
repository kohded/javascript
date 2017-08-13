/**
 * @author Arnold Koh <arnold@kohded.com>
 * Developed: 3/18/2017
 * File: binary-search-tree.js
 */

const BinarySearchTree = function BinarySearchTree() {
  this.root = undefined;
};

const Node = function Node(key) {
  this.key = key;
  this.left = undefined;
  this.right = undefined;
};

BinarySearchTree.prototype = {
  /**
   * Insert a new node key in the tree.
   * @param key
   */
  insert(key) {
    const newNode = new Node(key);

    if (!this.root) {
      this.root = newNode;
    } else {
      const insert = (node) => {
        if (key < node.key) {
          if (node.left) {
            insert(node.left);
          } else {
            node.left = newNode;
          }
        } else if (key > node.key) {
          if (node.right) {
            insert(node.right);
          } else {
            node.right = newNode;
          }
        }
      };

      insert(this.root);
    }
  },
  /**
   * Remove a node by the specified key.
   * @param key
   */
  remove(key) {
    const remove = (node, removeKey) => {
      if (!node) {
        return undefined;
      } else if (removeKey < node.key) {
        node.left = remove(node.left, removeKey);

        return node;
      } else if (removeKey > node.key) {
        node.right = remove(node.right, removeKey);

        return node;
      }

      if (!node.left && !node.right) { // Case 1 - Node with 0 children.
        node = undefined;
      } else if (!node.left) { // Case 2 - Node with 1 child.
        node = node.right;
      } else if (!node.right) {
        node = node.left;
      } else { // Case 3 - Node with 2 children.
        node.key = this.min(node.right);
        node.right = remove(node.right, node.key);
      }

      return node;
    };

    this.root = remove(this.root, key);
  },
  /**
   * Search for a key by the specified key.
   * @param key
   */
  search(key) {
    const search = (node) => {
      if (!node) {
        return undefined;
      } else if (key < node.key) {
        return search(node.left);
      } else if (key > node.key) {
        return search(node.right);
      }

      return node.key;
    };

    return search(this.root);
  },
  /**
   * Return the maximum node or key in the tree.
   * @param node
   * @returns {*}
   */
  max(node) {
    if (!this.root) { return undefined; }
    if (!node) { node = this.root; }

    while (node.right) {
      node = node.right;
    }

    return node.key;
  },
  /**
   * Return the max depth of the tree.
   */
  maxDepth() {
    const maxDepth = (node) => {
      if (!node) { return 0; }

      return Math.max(maxDepth(node.left), maxDepth(node.right)) + 1;
    };

    return maxDepth(this.root);
  },
  /**
   * Return the minimum node or key in the tree.
   * @param node
   * @returns {*}
   */
  min(node) {
    if (!this.root) { return undefined; }
    if (!node) { node = this.root; }

    while (node.left) {
      node = node.left;
    }

    return node.key;
  },
  /**
   * Return the min depth of the tree.
   */
  minDepth() {
    const minDepth = (node) => {
      if (!node) { return 0; }

      return Math.min(minDepth(node.left), minDepth(node.right)) + 1;
    };

    return minDepth(this.root);
  },
  /**
   * Return array of keys in-order.
   */
  inOrder() {
    if (!this.root) { return undefined; }

    const inOrderArray = [];
    const inOrder = (node) => {
      if (node) {
        inOrder(node.left);
        inOrderArray.push(node.key);
        inOrder(node.right);
      }
    };

    inOrder(this.root);

    return inOrderArray;
  },
  /**
   * Return array of keys in post-order.
   */
  postOrder() {
    if (!this.root) { return undefined; }

    const postOrderArray = [];
    const postOrder = (node) => {
      if (node) {
        postOrder(node.left);
        postOrder(node.right);
        postOrderArray.push(node.key);
      }
    };

    postOrder(this.root);

    return postOrderArray;
  },
  /**
   * Return array of keys in pre-order.
   */
  preOrder() {
    if (!this.root) { return undefined; }

    const preOrderArray = [];
    const preOrder = (node) => {
      if (node) {
        preOrderArray.push(node.key);
        preOrder(node.left);
        preOrder(node.right);
      }
    };

    preOrder(this.root);

    return preOrderArray;
  },
};

module.exports = BinarySearchTree;
