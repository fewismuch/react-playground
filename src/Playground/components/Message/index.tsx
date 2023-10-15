import React, {useState} from "react";

interface Props {
  type: 'error' | 'warn'
  context: string
}

export const Message: React.FC<Props> = (props) => {
  const {type, context} = props
  const [dismissed, setDismissed] = useState(true);

  return (
    <div className="msg err">
      <pre>{context}</pre>
      <button className="dismiss">✕</button>
    </div>
  );
};
