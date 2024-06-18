class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

function mergeTwoLists(list1, list2) {
    // Create a dummy node to start the merged list
    let dummy = new ListNode();
    // This pointer will be used to build the new list
    let tail = dummy;

    // Traverse both lists and attach the smaller node to the merged list
    while (list1 !== null && list2 !== null) {
        if (list1.val < list2.val) {
            tail.next = list1;
            list1 = list1.next;
        } else {
            tail.next = list2;
            list2 = list2.next;
        }
        tail = tail.next;
    }

    // Attach the remaining nodes, if any
    if (list1 !== null) {
        tail.next = list1;
    }
    if (list2 !== null) {
        tail.next = list2;
    }

    // Return the head of the merged list (skipping the dummy node)
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
let list1 = createLinkedList([1, 3, 5]);
let list2 = createLinkedList([2, 4, 6]);
let mergedList = mergeTwoLists(list1, list2);
printLinkedList(mergedList);
