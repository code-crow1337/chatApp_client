import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { MouseEvent, KeyboardEvent, ReactElement } from 'react';
import {Socket } from 'socket.io-client';


export type TSocketIO =  typeof Socket;

export type inputEventTypes = {
  event: KeyboardEvent | MouseEvent;
};

export type TButton = {
  textContent?: string;
  icon?: boolean;
  type: 'button' | 'submit' | 'reset' | undefined;
  size: 'small' | 'large';
  onClick?: any;
  iconType?: "times" |"menu" | "send";
  tabIndex?:number
};
export type TStateSocketIo = {
  connected: boolean,
  socket: any,
  online?: Tuser[],
}
export type TStateUserlist = {
  open:boolean,
}
export type TStateUsername = {
  username:string,
  available:boolean,
}
export type Taction = {
  type: string;
  payload: any;
};

export type TAddUser = {
  type: string;
  payload: {
    username: string;
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
  type: string;
  payload: {
    socket:any;
    connected: boolean;
    online?:Tuser[];
  };
};
export type TUSerList = {
  type: string;
  payload: {
    open: boolean;
  };
};
export type TUsername = {
  username?: { username: string } ;
};
export type TMessage = {
  sender:boolean,
  message:string,
  username:string,
}