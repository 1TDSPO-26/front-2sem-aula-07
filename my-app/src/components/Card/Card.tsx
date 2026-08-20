
type TipoProps = {
    title:String;
}

export default function Card(props:TipoProps) {
  return (
    <div>
        <h2>{props.title}</h2>
    </div>
  )
}
