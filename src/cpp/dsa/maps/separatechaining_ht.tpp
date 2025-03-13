#pragma once

#ifndef SEPARATECHAININGHT
#include "separatechaining_ht.hpp"
#endif

template <typename K, typename V>
void SeparateChainingHT<K, V>::print()
{
}

template <typename K, typename V>
int SeparateChainingHT<K, V>::hashCode(K key)
{
    return 0;
}

template <typename K, typename V>
int SeparateChainingHT<K, V>::compress(int code)
{
    return 0;
}

template <typename K, typename V>
SeparateChainingHT<K, V>::SeparateChainingHT(int size)
{
}

template <typename K, typename V>
SeparateChainingHT<K, V>::SeparateChainingHT(int size, int a)
{
}

template <typename K, typename V>
void SeparateChainingHT<K, V>::set(K key, V *value)
{
}

template <typename K, typename V>
V SeparateChainingHT<K, V>::get(K key)
{
    return V();
}
