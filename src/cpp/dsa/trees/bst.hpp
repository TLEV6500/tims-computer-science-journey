#include "binarytree.hpp"

template <typename E>
class BinarySearchTree : BinaryTree<E> {
	protected:
	struct node;

	BinarySearchTree(node* root): BinaryTree<E>(root) {}
	
	public:
	BinarySearchTree(): BinaryTree<E>() {}
	
	bool isOrdered() override {
		return true;
	}

	void add(E elem) override {
		node* n = this->createNode(elem);
		if (!this->root) this->root = n;
		else addNode(n, this->root);
		++this->size;
	}

	void remove(E elem) override {
		node* n = this->findNode(elem, this->root);
		this->deleteNode(n);
	}

	bool find(E elem) override {
		return !!this->findNode(elem, this->root);
	}
	
	private:
	void addNode(node* newNode, node* cur) {
		if (newNode->element <= cur->element) {
			if (!cur->left()) cur->left(newNode);
			else addNode(newNode, cur->left());
		}
		else {
			if (!cur->right()) cur->right(newNode);
			else addNode(newNode, cur->right());
		}
	}
};