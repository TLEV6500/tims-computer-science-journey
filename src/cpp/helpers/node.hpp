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
};