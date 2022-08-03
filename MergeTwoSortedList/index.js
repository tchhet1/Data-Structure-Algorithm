/* 

You are given the heads of two sorted linked lists list1 and list2.

Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.

Return the head of the merged linked list. 

Input: list1 = [1,2,4], list2 = [1,3,4]
Output: [1,1,2,3,4,4]
*/

var mergeTwoLists = function(l1, l2) {
    let l3 = new ListNode();
    
    let prev = l3;
    
    if(!l1) {
        return l2;
    }
    
    if(!l2) {
        return l1;
    }
    
    while(l1 && l2){
        if(l1.val <= l2.val){
            prev.next = l1;
            prev = l1;
            l1 = l1.next
        } else {
            prev.next = l2;
            prev = l2;
            l2 = l2.next;
        }
        
        if(!l1) prev.next = l2;
        if(!l2) prev.next = l1;
    }
    
    return l3.next;
};