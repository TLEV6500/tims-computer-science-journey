#pragma once
#include "list.hpp"
#include <cstdlib>
#include <functional>
#include <iostream>

constexpr float INCREASE_FACTOR = 0.5;
constexpr float DECREASE_FACTOR = 0.25;
constexpr float DECREASE_THRESHOLD = 2.0 / 3.0;
constexpr int MIN_CAP = 5;

template <typename E>
class ArrayList : public List<E>
{
private:
    E *array;
    int capacity;

    void increaseIfNeeded()
    {
        if (getLength() < capacity)
            return;
        capacity += capacity * INCREASE_FACTOR;
        array = (E *)realloc(array, sizeof(E) * capacity);
    }

    void decreaseIfNeeded()
    {
        if (this->size >= capacity * DECREASE_THRESHOLD)
            return;
        capacity -= capacity * DECREASE_THRESHOLD;
        if (capacity < MIN_CAP)
            capacity = MIN_CAP;
        array = (E *)realloc(array, sizeof(E) * capacity);
    }

public:
    explicit ArrayList(int cap = MIN_CAP) : capacity(cap)
    {
        array = (E *)malloc(sizeof(E) * capacity);
    }

    void addFirst(E elem)
    {
        increaseIfNeeded();
        for (int i = this->size; i > 0; --i)
        {
            array[i] = array[i - 1];
        }
        array[0] = elem;
        ++this->size;
    }

    void addLast(E elem)
    {
        increaseIfNeeded();
        array[this->size++] = elem;
    }

    void insert(E elem, int index)
    {
        increaseIfNeeded();
        for (int i = this->size; i > index; --i)
        {
            array[i] = array[i - 1];
        }
        array[index] = elem;
        ++this->size;
    }

    E removeFirst()
    {
        E x = array[0];
        for (int i = 0; i < this->size - 1; ++i)
        {
            array[i] = array[i + 1];
        }
        --this->size;
        return x;
    }

    E removeLast()
    {
        return array[--this->size];
    }

    int remove(E elem)
    {
        for (int i = 0, j = 0; i < this->size; ++i)
        {
            if (array[i] == elem)
            {
                for (j = i; j < this->size - 1; ++j)
                {
                    array[j] = array[j + 1];
                }
                return i;
            }
        }
        return -1;
    }

    E get(int index)
    {
        return array[index];
    }

    E set(E elem, int index)
    {
        E x = array[index];
        array[index] = elem;
        return x;
    }
    
    void swap(int a, int b) {
		E t = array[a];
		array[a] = array[b];
		array[b] = t;
	}

    void print()
    {
        std::cout << "{ ";
        for (int i = 0; i < this->size; ++i)
        {
            std::cout << array[i] << ", ";
        }
        std::cout << "}" << std::endl;
    }

    void forEach(const std::function<void(E, int, int, E *)> iter)
    {
        E val;
        for (int i = 0; i < this->size; ++i)
        {
            val = array[i];
            iter(val, i, this->size, array);
        }
    }
};
