#pragma once
#include "map.hpp"
template <typename K, typename V>
class HashTable : Map<K,V>
{
protected:
    int size;
    virtual int hashCode(std::string key) = 0;
    virtual int compress(int code) = 0;
    int hash(std::string key)
    {
        return compress(hashCode(key));
    }
};