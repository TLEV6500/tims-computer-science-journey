#pragma once
#include <string>

class HashBase
{
protected:
    int prime;

public:
    explicit HashBase(int prime = 37) : prime(prime) {}
};

template <typename Key>
class Hash : public HashBase
{
public:
    explicit Hash(int prime);
    auto operator()(const Key &key) const;
};

template <typename Key>
Hash<Key>::Hash(int prime) : prime(prime)
{
    super(prime);
}

template <>
class Hash<std::string> : public HashBase
{
public:
    int operator()(const std::string &key)
    {
        int hashVal = 0;
        for (char c : key)
        {
            hashVal = prime * hashVal + c;
        }
        return hashVal;
    }
};