interface IProps {
  id: string;
}

export function About(props: IProps) {
  return (
    <div className="about-container" id={props.id}>
      About
    </div>
  );
}
