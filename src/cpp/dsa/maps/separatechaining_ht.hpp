#ifndef SEPARATECHAININGHT
#define SEPARATECHAININGHT
#include "hashtable.hpp"

template <typename K, typename V>
class SeparateChainingHT : HashTable<K, V>
{
private:
    V **array;
    int a;

    int hashCode(K key);
    int compress(int code);

public:
    SeparateChainingHT(int size);
    SeparateChainingHT(int size, int a);
    void set(K key, V *value);
    V get(K key);
    void print();
};

#include "separatechaining_ht.tpp"
#endif