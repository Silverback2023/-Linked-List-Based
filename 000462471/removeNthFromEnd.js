class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

function removeNthFromEnd(head, n) {
    // Create a dummy node that points to the head of the list
    let dummy = new ListNode(0, head);
    let first = dummy;
    let second = dummy;

    // Move the second pointer n steps ahead
    for (let i = 0; i <= n; i++) {
        second = second.next;
    }

    // Move both pointers until second reaches the end
    while (second !== null) {
        first = first.next;
        second = second.next;
    }

    // Remove the nth node from the end
    first.next = first.next.next;

    // Return the head of the modified list
    return dummy.next;
}

// Helper function to create a linked list from an array
function createLinkedList(arr) {
    if (arr.length === 0) return null;
    let head = new ListNode(arr[0]);
    let current = head;
    for (let i = 1; i < arr.length; i++) {
        current.next = new ListNode(arr[i]);
        current = current.next;
    }
    return head;
}

// Helper function to print a linked list
function printLinkedList(head) {
    let current = head;
    while (current !== null) {
        process.stdout.write(current.val + (current.next ? " -> " : ""));
        current = current.next;
    }
    console.log();
}

// Test the function with the given input
let list = createLinkedList([1, 2, 3, 4, 5]);
let n = 2;
let updatedList = removeNthFromEnd(list, n);
printLinkedList(updatedList);
