#include "../lists/arraylist.hpp"
#include "../sorting/bubblesort.hpp"

int main() {
    List<int>* list = new ArrayList<int>();
  	for (int i = 0; i < 10; ++i) {
      	list->addLast(i * 5 - 3);
  	}
  	list->print();
	bubbleSort(list);
  	list->print();
    return 0;
}