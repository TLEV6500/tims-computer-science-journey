#include "../lists/list.hpp"

template <typename T>
void bubbleSort(List<T> *list)
{
    int len = list->size();
    int swaps = -1;
    int i;
    while (swaps != 0)
    {
        swaps = 0;
        for (i = 1; i < len; ++i)
        {
            if (list->get(i) > list->get(i + 1))
            {
                list->swap(i, i + 1);
                list->print();
                ++swaps;
            }
        }
    }
    return;
};