#include "../lists/list.hpp"
#ifndef SEPARATECHAININGHT
#define SEPARATECHAININGHT
#include "../maps/hashtable.hpp"

template <typename Key, typename Value, typename Hash>
class SeparateChainingHT : public HashTable<Key, Value, Hash>
{
private:
    List<Value> **array;
    int size;
    int compress(int code);

public:
    SeparateChainingHT(int capacity, Hash hashCode);
    ~SeparateChainingHT();
    void set(Key key, Value value) override;
    Value get(Key key) override;
    void print() override;
    Key getKey(Value value) override;
};

#include "separatechaining_ht.tpp"
#endif