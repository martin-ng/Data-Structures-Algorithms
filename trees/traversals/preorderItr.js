function ListNode(value) {
  this.value = value;
  this.left = this.right = null;
}

let newNode = new ListNode(10);
newNode.left = new ListNode(5);
newNode.right = new ListNode(15);

newNode.left.left = new ListNode(3);
newNode.left.right = new ListNode(7);

newNode.right.left = new ListNode(9);
newNode.right.right = new ListNode(11);

console.log(newNode);

function traverse(node) {
  if (!root) return [];
  let res = [];
  let stack = [];

  let current = node;

  while (true) {
    if (current) {
      res.push(current.value);
      stack.push(current);
      current = current.left;
    } else {
      if (!stack.length) break;
      current = stack.pop();
      current = current.right;
    }
  }
  return res;
}

traverse(newNode);
