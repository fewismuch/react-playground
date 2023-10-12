export const Message = ({ type, context }) => {
  const [dismissed, setDismissed] = useState(true);

  return (
    <div
      class="msg err"
    >
      <pre>abc</pre>
      <button class="dismiss" >✕</button>
    </div>
  );
};
