export default class DataSet {
    constructor(public value: string | ArrayBuffer | null = null) { }
    static readFromFile(filename: string) {
        const reader = new FileReader();
        reader.readAsArrayBuffer(new File([], filename))
        console.log(reader.result);
        return new DataSet(reader.result);
    }
}