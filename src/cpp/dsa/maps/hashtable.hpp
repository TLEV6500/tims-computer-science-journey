#pragma once
#include <string>
#include "map.hpp"
template <typename Key, typename Value, typename Hash>
class HashTable : Map<Key, Value>
{
protected:
    int capacity;
    Hash hashCode;
    HashTable(int capacity, Hash hashCode) : capacity(capacity), hashCode(hashCode) {}
    virtual int compress(int code) = 0;
    virtual Key getKey(Value value) = 0;

    int hash(std::string key)
    {
        return compress(hashCode(key));
    }

    // virtual bool contains(const Key key) const = 0;
    // virtual Value remove(const Key key) = 0;
    // virtual int getSize() const = 0;
    // virtual int getCapacity() const = 0;
    // virtual bool isEmpty() const = 0;
    // virtual int clear() const = 0;
    // virtual void rehash(int newCapacity) = 0;
    // float loadFactor() const = 0;
    // virtual void update(const Key key, const Value value) = 0;
    // virtual void merge(const HashTable &other) = 0;
    // virtual std::vector<Key> keys() const = 0;
    // virtual std::vector<Value> values() const = 0;
};