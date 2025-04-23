#pragma once
#include "list.hpp"

template <typename E>
class LinkedList : List<E> {
	struct node;
	virtual node* insertBetween(E elem, node* pred, node* succ) = 0;
};