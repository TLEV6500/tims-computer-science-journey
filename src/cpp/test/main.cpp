#include <iostream>
#include "linearprobing_ht.hpp"

struct node {
    int elem;
};

int main(int argc, char const *argv[])
{
    LinearProbingHT<std::string, node>* ht = new LinearProbingHT<std::string, node>(13);
    ht->get("hello");
    std::cout << "Hello!!" << std::endl;
    
    return 0;
}
