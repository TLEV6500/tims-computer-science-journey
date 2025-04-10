#include "../dsa/lists/list.hpp"
#include "../dsa/lists/arraylist.hpp"

int main(int argc, char const *argv[])
{
    List<int>* list = new ArrayList<int>();
    for (int i = 0; i < 5; ++i) {
		list->addLast(i+i*5+1);
	}
	list->print();
    return 0;
}
