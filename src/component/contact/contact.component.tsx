interface IProps {
  id: string;
}
export function Contact(props: IProps) {
  return (
    <div className="contact-container" id={props.id}>
      <a href="https: //">Contact</a>
    </div>
  );
}
