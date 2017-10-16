import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function CautionSign() {
  return (
    <div>
      <i className="fa fa-exclamation-triangle exclamation" />
    </div>
  );
}

function ErrorBox({children}){
  return <div className="message">{children}</div>
}

function Notification(){
  return (
    <div className="error">
      <CautionSign />
      <ErrorBox>
        Yer doin it wrong!
      </ErrorBox>
    </div>
  )
}
ReactDOM.render(<Notification />, document.getElementById('root'));
