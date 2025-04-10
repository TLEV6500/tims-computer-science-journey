#pragma once
#include "linkedlist.hpp"
#include "../../helpers/node.hpp"

template <typename E>
class SinglyLinkedList : LinkedList<E> {
	struct node : base_node<E> {
		node(): base_node<E>(1) {}
		node* next() {
			return this->links[0];
		}
	};
	
	node* createNode(E elem) {
		
	}

	node* insertBetween(E elem, node* pred, node* succ) {

	}

};