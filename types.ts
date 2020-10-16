import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { MouseEvent, KeyboardEvent, ReactElement } from 'react';

export type inputEventTypes = {
  event: KeyboardEvent | MouseEvent;
};

export type TButton = {
  textContent?: String;
  icon?: boolean;
  type: 'button' | 'submit' | 'reset' | undefined;
  size: 'small' | 'large';
  onClick?: any;
  iconType?: "times" |"menu" | "send";
  tabIndex?:number
};

export type Taction = {
  type: string;
  payload: any;
};

export type TAddUser = {
  type: String;
  payload: {
    username: String;
    available:boolean;
  };
};
type message = {
  senderName:string,
  message:string,
}
export type Tuser = {
  username:string,
  clientID:string,
  message?:message[]
}
export type TConnected = {
  type: String;
  payload: {
    socket:any;
    connected: boolean;
    online?:Tuser[];
  };
};
export type TUSerList = {
  type: String;
  payload: {
    open: boolean;
  };
};
export type TUsername = {
  username?: { username: String } ;
};
export type TMessage = {
  sender:boolean,
  message:String,
  username:String,
}