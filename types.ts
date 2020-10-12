import {MouseEvent, KeyboardEvent, FormEvent} from 'react'

export type inputEventTypes = {
  event: KeyboardEvent | MouseEvent
}

export type IButton  = {
  textContent: String;
  type: "button" | "submit" | "reset" | undefined;
}

export type TAddUser = {
  type:String,
  payload:{
    username:String
  }
}
