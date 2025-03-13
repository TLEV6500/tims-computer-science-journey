template <typename E>
class List {
protected:
    int size;

public:
    virtual void addFirst(E) = 0;
    virtual void addLast(E) = 0;
    virtual void insert(E, int) = 0;
    virtual E removeFirst() = 0;
    virtual E removeLast() = 0;
    virtual int remove(E) = 0;
    virtual void print() = 0;
    virtual int length() = 0;
    virtual bool isEmpty() = 0;
};