export default class ToDo {
  // declare object keys and what data type they should have
  id: number;
  text: string;

  // constructor constructs the way key values are handled, setting the inital oject state. Keys are pointed to with 'this'.
  constructor(todoText: string) {
    this.text = todoText; // text is expected as a string argument when a new ToDo is declared
    this.id = Math.random() * 1000; // id is automatically generated here and requires no user input
  }
}
