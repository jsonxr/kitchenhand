export class Recipe {
  id: string;
  title: string;
  picture?: string;

  constructor(id: string, title: string, picture: string) {
    this.id = id;
    this.title = title;
    this.picture = picture;
  }
}
