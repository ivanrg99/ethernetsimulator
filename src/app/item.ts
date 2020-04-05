export class Item {
  x: number;
  y: number;
  type: string;
  id: number;
  color: string;
  name: string;

  constructor(x: number, y: number, type: string, color: string, name: string) {
    this.x = x;
    this.y = y;
    this.type = type;
    this.color = color;
    this.name = name;
    this.generateId();
  }

  generateId(): void {
    this.id = (this.x + this.y + parseInt(this.color.slice(1,7),16));
  }

}
