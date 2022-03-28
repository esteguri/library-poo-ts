import Gender from '../enums/gender.model';
import { v4 as uuidv4 } from 'uuid';


class Author {

  readonly id: string = uuidv4();
  name: string;
  email: string;
  gender: Gender;

  constructor(name: string, email: string, gender: Gender) {
    this.name = name;
    this.email = email;
    this.gender = gender;
  }

}

export default Author;