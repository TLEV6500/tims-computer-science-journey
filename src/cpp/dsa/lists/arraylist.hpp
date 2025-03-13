#include <cstdlib>
#include "list.hpp"

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
        if (size < capacity)
            return;
        capacity += capacity * INCREASE_FACTOR;
        array = (E *)realloc(array, sizeof(E) * capacity);
    }

    void decreaseIfNeeded()
    {
        if (size >= capacity * DECREASE_THRESHOLD)
            return;
        capacity -= capacity * DECREASE_THRESHOLD;
        if (capacity < MIN_CAP)
            capacity = MIN_CAP;
        array = (E *)realloc(array, sizeof(E) * capacity);
    }

public:
    ArrayList(int cap) : capacity(cap)
    {
        array = (E *)malloc(sizeof(E) * capacity);
    }

    void addFirst(E elem)
    {
        increaseIfNeeded();
        for (int i = size; i > 0; --i)
        {
            array[i] = array[i - 1];
        }
        array[0] = elem;
        ++size;
    }

    void addLast(E elem)
    {
        increaseIfNeeded();
        array[size++] = elem;
    }

    void insert(E elem, int index)
    {
        increaseIfNeeded();
        for (int i = size; i > index; --i)
        {
            array[i] = array[i - 1];
        }
        array[index] = elem;
        ++size;
    }

    E removeFirst()
    {
        int x = array[0]; 
    }

    E removeLast()
    {
    }

    int remove(E)
    {
    }

    void print()
    {
    }

    int length()
    {
    }

    bool isEmpty()
    {
    }
};
