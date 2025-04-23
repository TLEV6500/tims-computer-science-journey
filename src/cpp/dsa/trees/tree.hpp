template <typename E>
class Tree {
	protected:
	int size;
	struct node;
	struct node* root;
	virtual Tree* getNodeAsSubtree(node* n) = 0;
	virtual node* createNode(E elem) = 0;
	virtual int getHeight(node* n) = 0;
	virtual int getBalance(node* n) = 0;
	
	public:
	virtual int getHeight() = 0;
	virtual int getBreadth() = 0;
	virtual int getWidth(int level) = 0;
	virtual int getBalance() = 0;
	virtual bool isOrdered() = 0;
	virtual bool isComplete() = 0;
	virtual bool isBalanced() = 0;
	virtual void add(E elem) = 0;
	virtual void remove(E elem) = 0;
	virtual bool find(E elem) = 0;
	virtual void print() = 0;
	
	int getSize() {
		return size;
	}
};