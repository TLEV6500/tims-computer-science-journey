#pragma once

template <typename K, typename V>
class Map
{
public:
    virtual void set(K key, V &value) = 0;
    virtual V* get(K key) = 0;
    virtual void print() = 0;
};