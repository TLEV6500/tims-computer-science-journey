#pragma once
template <typename T>
struct base_node {
	T element;
	base_node(int linkCap) {
		links = new base_node<T>*[linkCap];
	}
	~base_node() {
		delete links;
	}
protected:
	base_node* links[];
	// Returns the new parent of the children of the extracted node
	virtual base_node* extractNode(base_node* n) = 0;
};