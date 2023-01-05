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

    find(val, current) {
        if (current === undefined) {
            current = this.root;
        }

        if (current === null) {
            return false;
        }

        if (val === current.value) {
            return true;
        } else if (val < current.value) {
            return this.find(val, current.left);
        } else {
            return this.find(val, current.right);
        }
    };

    removeLargest(runner = this.root) {
        if (this.root === null) {
            return false;
        }

        if (runner.right === null) {
            this.root = runner.left;
            runner.left = null;
            return runner;
        } else if (runner.right.right === null) {
            let temp = runner.right;
            runner.right = temp.left;
            temp.left = null;
            return temp;
        } else {
            return this.removeLargest(runner.right);
        }
    };

    removeSmallest(runner = this.root) {
        if (runner === null) {
            return false;
        }

        if (runner.left.left === null) {
            this.root = runner.right;
            runner.right = null;
            return runner;
        } else if (runner.left.left === null) {
            let temp = runner.left;
            runner.left = temp.right;
            temp.right = null;
            return temp;
        } else {
            return this.removeSmallest(runner.left);
        }
    };

    delete(value) {
        let runner = this.root;

        if (runner === null) {
            return null;
        }
        // TO-DO: DELETE VALUE FROM BST 
    };
};

// Whiteboarded the solution, but still need to test by running code