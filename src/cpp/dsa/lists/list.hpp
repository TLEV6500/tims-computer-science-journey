#pragma once
#include <functional>

template <typename E>
class List
{
protected:
    int size;
    explicit List() : size(0) {}

public:
    virtual void addFirst(E) = 0;
    virtual void addLast(E) = 0;
    virtual void insert(E, int) = 0;
    virtual E removeFirst() = 0;
    virtual E removeLast() = 0;
    virtual E get(int) = 0;
    virtual E set(E, int) = 0;
    virtual int remove(E) = 0;
    virtual void swap(int,int) = 0;
    virtual void print() = 0;
    virtual void forEach(const std::function<void(E, int, int, E *)> iter) = 0;
    int length()
    {
        return size;
    }

    bool isEmpty()
    {
        return size == 0;
    }
    E operator [](int index) {
		return this->get(index);
	}
};