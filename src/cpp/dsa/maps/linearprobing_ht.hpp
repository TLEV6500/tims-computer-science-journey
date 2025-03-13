#pragma once
#include <cstdlib>
#include "hashtable.hpp"

template <typename K, typename V>
class LinearProbingHT : protected HashTable<V>
{
private:
    V** array;
    int a;

    int hashCode(K key);
    int polyHashCode(K key);
    int compress(int code);

public:
    LinearProbingHT(int size);
    LinearProbingHT(int size, int a);
    void set(K key, V* value);
    V get(K key);
    void print();
};

#include "linearprobing_ht.tpp"