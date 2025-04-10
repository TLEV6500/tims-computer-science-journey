#include "../lists/list.hpp"

template <typename T>
void quicksort(List<T> *list) {
    quicksort_helper(list, 0, list->size);
}

// Common implementation actually uses the last or a random index as pivot
template <typename T>
int lomuto_partition(List<T> *list, int low, int high) {
	int pivot = list[low];
	int i = low;
	for (int j = low + 1; j <= high; ++j) {
		if (list[j] <= pivot) {
			++i;
			list->swap(i, j);
		}
	}
	list->swap(low, i);
	return i;
}

template <typename T>
void quicksort_helper(List<T> *list, int low, int high) {
	if (low >= high) return;
	int pivot = lomuto_partition(list, low, high);
	quicksort_helper(list, low, pivot-1);
	quicksort_helper(list, pivot+1, high);
}