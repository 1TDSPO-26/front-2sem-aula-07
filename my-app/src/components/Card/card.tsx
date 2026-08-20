
type TipoProps = {
    title:string;
}

export default function card(props:any) {
  return (
    <div>
        <h2>{props.title}</h2>
    </div>
  )
}
