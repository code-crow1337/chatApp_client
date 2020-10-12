import React from 'react';
import { IButton } from '../../../types';
import './ChatButton.scss';

export default function ChatButton(props: IButton) {
  const { type, textContent } = props;

  return (
    <div className="button">
      <button type={type}>{textContent}</button>
      <span className="button__effect"></span>
    </div>
  );
}
