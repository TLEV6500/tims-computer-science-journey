#pragma once

template <typename T>
auto ErrorValue()
{
    return nullptr;
}

template <>
auto ErrorValue<int>()
{
    return -1;
}

template <>
auto ErrorValue<char>()
{
    return (char)0;
}