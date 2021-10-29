import React from 'react';
import { Form, Ref } from 'semantic-ui-react';
import './editor.scss';

const Editor = ({ text, onChange, send }) => {
  const inputRef = React.useRef();
  const submit = (e) => {
    e.preventDefault();
    send();
    inputRef.current?.firstChild.focus();
  };

  const onReturnPress = (e) => {
    if (e.keyCode === 13 && !e.shiftKey) {
      submit(e);
    }
  };

  return (
    <div className="editor">
      <Form onSubmit={submit}>
        <Ref innerRef={inputRef}>
          <Form.TextArea
            placeholder="Message..."
            value={text}
            onChange={(e) => onChange(e.target.value)}
            onKeyDown={onReturnPress}
          />
        </Ref>
        <Form.Button type="submit" color="green">Submit</Form.Button>
      </Form>
    </div>
  );
};

export default Editor;
