/**
 * @author Arnold Koh <arnold@kohded.com>
 * Developed: 3/18/2017
 * File: binary-search-tree.js
 */

(function () {
  const BinarySearchTree = function () {
    this.root = null;
  };

  const Node = function (key) {
    this.key = key;
    this.left = null;
    this.right = null;
  };

  BinarySearchTree.prototype = {
    /**
     * Insert a new node key in the tree.
     * @param key
     */
    insert(key) {
      const node = new Node(key);

      if (!this.root) {
        this.root = node;
      }
      else {
        const insert = function (current) {
          if (node.key < current.key) {
            if (!current.left) {
              current.left = node;
            }
            else {
              insert(current.left);
            }
          }
          else if (node.key > current.key) {
            if (!current.right) {
              current.right = node;
            }
            else {
              insert(current.right);
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
      const that = this;
      const remove = function (node, keyRemove) {
        if (!node) {
          return null;
        }

        if (keyRemove < node.key) {
          node.left = remove(node.left, keyRemove);
          return node;
        }
        else if (keyRemove > node.key) {
          node.right = remove(node.right, keyRemove);
          return node;
        }

        // Case 1. Leaf node.
        if (!node.left && !node.right) {
          node = null;
          return node;
        }

        // Case 2. Node with 1 child.
        if (!node.left) {
          node = node.right;
          return node;
        }
        else if (!node.right) {
          node = node.left;
          return node;
        }

        // Case 3. Node with 2 children.
        node.key = that.min(node.right);
        node.right = remove(node.right, node.key);
        return node;
      };

      this.root = remove(this.root, key);
    },
    /**
     * Search for a key by the specified key.
     * @param key
     */
    search(key) {
      const search = function (node) {
        if (!node) {
          return null;
        }
        else if (key < node.key) {
          return search(node.left);
        }
        else if (key > node.key) {
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
      if (!this.root) { return null; }
      if (!node) { node = this.root; }

      while (node && node.right) {
        node = node.right;
      }

      return node.key;
    },
    /**
     * Return the minimum node or key in the tree.
     * @param node
     * @returns {*}
     */
    min(node) {
      if (!this.root) { return null; }
      if (!node) { node = this.root; }

      while (node && node.left) {
        node = node.left;
      }

      return node.key;
    },
    /**
     * Visit all nodes with in-order traversal.
     * @param callback
     */
    inOrder(callback) {
      const inOrder = function (node) {
        if (node) {
          inOrder(node.left);
          callback(node.key);
          inOrder(node.right);
        }
      };

      inOrder(this.root);
    },
    /**
     * Visit all nodes with post-order traversal.
     * @param callback
     */
    postOrder(callback) {
      const postOrder = function (node) {
        if (node) {
          postOrder(node.left);
          postOrder(node.right);
          callback(node.key);
        }
      };

      postOrder(this.root);
    },
    /**
     * Visit all nodes with pre-order traversal.
     * @param callback
     */
    preOrder(callback) {
      const preOrder = function (node) {
        if (node) {
          callback(node.key);
          preOrder(node.left);
          preOrder(node.right);
        }
      };

      preOrder(this.root);
    },
    /**
     * Print the key for a node.
     * @param key
     */
    printKey(key) {
      console.log(key);
    }
  };

  module.exports = BinarySearchTree;
}());
