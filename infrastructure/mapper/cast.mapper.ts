import { Cast } from "../interfaces/cast.interface";
import { CastCharacter } from "../interfaces/castdb.response";

export class CastMapper {
  static fromTheCastCharacter = (cast:CastCharacter):Cast => {
    return {
       id: cast.id,
       name: cast.name,
       character: cast.character,
       avatar: cast.profile_path
      }
  }
}