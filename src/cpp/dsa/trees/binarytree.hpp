#include "tree.hpp"
#include "../../helpers/node.hpp"
#include <algorithm>
#include <cstdlib>
#include <iostream>
#include <stdexcept>

template <typename E>
class BinaryTree : Tree<E> {	
	protected:
	struct node;
	
	BinaryTree(node* root): Tree<E>() {
		this->root = root;
	}
	
	BinaryTree<E>* getNodeAsSubtree(node* n) override {
		return new BinaryTree<E>{this->root=n};
	}
	
	node* createNode(E elem) override {
		return new node(elem);
	}
	
	int getHeight(node* n) override {
		if (!n) return 0;
		return std::max(getHeight(n->left()), getHeight(n->right())) + 1;
	}
	
	int getBalance(node* n) override {
		return getHeight(n->left()) - getHeight(n->right());
	}
	node* getSuccessor(node* n) {
		if (n->isLeaf()) return nullptr;
		if (n->right()) {
			node* cur = n->right();
			while (cur->left()) cur = cur->left();
			return cur;
		} 
		return n->left();
	}
	E deleteNode(node* n) {
		E x = n->element;
		node* succ = getSuccessor(n);
		replaceNode(n, succ);
		delete n;
		return x;
	}
	void replaceNode(node* from, node* to) {
		if (!from) return;
		if (from->isLeftChild()) from->parent()->left(to);
		else from->parent()->right(to);
		if (to->left()) to->parent()->left(to->left());
		if (to->right()) to->parent()->right(to->right()); 
	}
	node* findNode(E elem, node* root) {
		if (!root || elem == root->element) return root;
		if (elem < root->element) findNode(elem, root->left());
		else findNode(elem, root->right());
	}

  	public:
	BinaryTree(): Tree<E>() {
		this->root = nullptr;
	}
	~BinaryTree() {
		deleteTree(this->root);
	}
	
	int getHeight() override {
		return getHeight(this->root);
	}

	int getBreadth() override {
		throw std::logic_error("Method not yet implemented!");
	}

	int getWidth(int level) override {
		throw std::logic_error("Method not yet implemented!");
	}
	
	int getBalance() override {
		return getBalance(this->root);
	}

	bool isOrdered() override {
		throw std::logic_error("Method not yet implemented!");
	}

	bool isComplete() override {
		throw std::logic_error("Method not yet implemented!");
	}

	bool isBalanced() override {
		return abs(getBalance()) <= 1;
	}

	void add(E elem) override {
		throw std::logic_error("Method not yet implemented!");
	}

	void remove(E elem) override {
		throw std::logic_error("Method not yet implemented!");
	}

	bool find(E elem) override {
		throw std::logic_error("Method not yet implemented!");
	}

	void print() override {
		printNode(this->root, 0, 'R');
	}
	
	private:
	void deleteTree(node* n) {
		if (!n) return; 
		deleteTree(n->left());
		deleteTree(n->right());
		if (n->isLeftChild()) n->parent()->left(nullptr);
		else n->parent()->right(nullptr);
		delete n;
	}
	void printNode(node* n, int level, char label) {
		if (!n) return;
		for (int i = 0; i < level; ++i) {
			std::cout << "|__";
		}
		std::cout << label << ": " << to_string(n);
		printNode(n->left(), level+1, 'L');
		printNode(n->right(), level+1, 'R');
	}
};

template <typename E>
struct BinaryTree<E>::node : base_node<E> {
	node(E elem): base_node<E>(3) {
		this->element = elem;
	}
	node* parent() {
		return this->links[0];
	}
	node* left() {
		return this->links[1];
	}
	node* right() {
		return this->links[2];
	}
	void parent(node* n) {
		this->links[0] = n;
	}
	void left(node* n) {
		this->links[1] = n;
	}
	void right(node* n) {
		this->links[2] = n;
	}
	int getDepth(node* from) {
		if (!from) return -1;
		return 1 + getDepth(from->parent());
	}
	bool isLeaf() {
		return !left() && !right();
	}
	bool isLeftChild() {
		return parent()->left() == this;
	}
	bool isRightChild() {
		return parent()->right() == this;
	}
	
	node* extract_node(node* n) {
		node* p = n->parent();
	}
};