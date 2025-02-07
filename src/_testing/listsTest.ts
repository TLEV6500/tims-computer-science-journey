import ArrayList from "../concepts/data-structures/lists/ArrayList.ts";
import Node from "../concepts/data-structures/Node.ts";

export default function main() {
    const arrList = new ArrayList<Node<string>>();
    console.log(1, arrList.print());
    arrList.insert(new Node("hello"));
    // const n2 = new Node("hi");
    arrList.insert(new Node("hi"));
    arrList.insert(new Node("wassup"));
    console.log(2, arrList.print());
    arrList.remove(new Node("hi"));
    console.log(3, arrList.print());
    arrList.addAt(new Node("yo"), arrList.size + 1);
    // arrList.addAt(new Node("yo"), arrList.size + 10);
    console.log(4, arrList.print());
    const numList = new ArrayList<number>();
    numList.insert(2);
    numList.insert(3);
    numList.insert(4);
    numList.insert(5);
    console.log(5, numList.print());
}