#pragma once
#include "list.hpp"

template <typename E>
class LinkedList : List<E> {
	struct node;
	virtual node* createNode(E elem) = 0;
	virtual node* insertBetween(E elem, node* pred, node* succ) = 0;
};