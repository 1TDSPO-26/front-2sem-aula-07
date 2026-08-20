
type TipoProps = {
  title: string;
}

export default function Card(props:TipoProps) {
  return (
    <div>
      <p>{props.title}</p>
    </div>
  )
}
