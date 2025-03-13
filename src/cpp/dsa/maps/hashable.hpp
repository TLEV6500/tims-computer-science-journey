template <typename T, typename K>
class Hashable
{
    virtual bool operator==(T rhs) = 0;
    virtual bool operator!=(T rhs) = 0;
};