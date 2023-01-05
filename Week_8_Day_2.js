class BST {
    constructor() {
        this.root = null;
    }

    isEmpty() {
        return this.root === null;
    };

    insert(node, current = this.root) {
        if (current === null) {
            this.root = node;
            return;
        }

        if (node.value > current.value) {
            if (current.right === null) {
                current.right = node;
                return;
            } else {
                this.insert(node, current.right);
            }
        }

        if (node.value < current.value) {
            if (current.left === null) {
                current.left = node;
                return;
            } else {
                this.insert(node, current.left);
            }
        }
    };

    getSmallestIterative() {
        let current = this.root;
        if (current === null) {
            return;
        }

        while (current.left != null) {
            current = current.left;
        }

        return current.value;
    };

    getLargestRecursive(current = this.root) {
        if (current === null) {
            return;
        };

        if (current.right === null) {
            return current.value;
        } else {
            this.getLargestRecursive(current.right);
        }
    };
};