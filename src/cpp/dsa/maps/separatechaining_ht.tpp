#pragma once
#include "arraylist.hpp"
#include <cstdlib>


template <typename Key, typename Value, typename Hash>
SeparateChainingHT<Key, Value, Hash>::SeparateChainingHT(int capacity, Hash hashCode) : size(0)
{
    super(capacity, hashCode);
    array = (List<Value> **)calloc(capacity, sizeof(List<Value> *));
}

template <typename Key, typename Value, typename Hash>
SeparateChainingHT<Key, Value, Hash>::~SeparateChainingHT()
{
    free(array);
}

template <typename Key, typename Value, typename Hash>
void SeparateChainingHT<Key, Value, Hash>::print()
{
}

template <typename Key, typename Value, typename Hash>
int SeparateChainingHT<Key, Value, Hash>::compress(int code)
{
    return code % capacity;
}

template <typename Key, typename Value, typename Hash>
void SeparateChainingHT<Key, Value, Hash>::set(Key key, Value value)
{
    int hash = this->hash(key);
    if (!array[hash])
        array[hash] = new ArrayList();
    array[hash]->addLast(value);
    ++size;
}

template <typename Key, typename Value, typename Hash>
Value SeparateChainingHT<Key, Value, Hash>::get(Key key)
{
    int hash = this->hash(key);
    Value val = ErrorValue<Value>();
    if (!array[hash])
        return val;
    array[hash]->forEach(
        [&val](Value x, int i, int size, Value *arr) ->
        {
            if (getKey(x) == key)
                val = x;
        });
    return val;
}

template <typename Key, typename Value, typename Hash>
Key SeparateChainingHT<Key, Value, Hash>::getKey(Value value)
{
    return value;
}