import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes,faPaperPlane, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { TButton } from '../../../types';

import './ChatButton.scss';

export default function ChatButton(props: TButton) {
  let { type, textContent, size, icon, iconType, ...rest } = props;
  let fontawesomeIcon:IconDefinition;
  if(iconType === "menu"){
    fontawesomeIcon =faBars
  }else if( iconType === "times"){
    fontawesomeIcon = faTimes;
  }else {
    fontawesomeIcon = faPaperPlane
  }
  const text = icon ? (
    <FontAwesomeIcon icon={fontawesomeIcon} className="button__icon" />
    ) : (
    textContent
  );

  return (
    <div className={`button ${size === 'large' ? 'large ' : 'small'}`}>
      <button {...rest} type={type}>
        {text}
      </button>
      <span className="button__effect"></span>
    </div>
  );
}
