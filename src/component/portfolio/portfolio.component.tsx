interface IProps {
  id: string;
}

export function Portfolio(props: IProps) {
  return (
    <div className="portfolio-container" id={props.id}>
      Portfolio
    </div>
  );
}
