template <typename T, typename Key>
class Hashable
{
    virtual bool operator==(T rhs) = 0;
    virtual bool operator!=(T rhs) = 0;
    virtual Key getKey() = 0;
};