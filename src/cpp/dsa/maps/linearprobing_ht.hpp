#pragma once
#include "hashtable.hpp"
#include <cstdlib>

template <typename Key, typename Value>
class LinearProbingHT : protected HashTable<Value>
{
private:
    Value **array;
    int a;

    int hashCode(Key key);
    int polyHashCode(Key key);
    int compress(int code);

public:
    LinearProbingHT(int size);
    LinearProbingHT(int size, int a);
    void set(Key key, Value *value);
    Value get(Key key);
    void print();
};

#include "linearprobing_ht.tpp"