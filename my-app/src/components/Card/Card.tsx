
type TipoProps = {
    title:string;
}

export default function Card(props:TipoProps) {
  return (
    <div>{props.title}</div>
  )
}
