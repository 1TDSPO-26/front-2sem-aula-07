type TipoProps = {
    title:string;
}

export default function Cardp(props:any) {
  return (
    <div>
        <h2>
            {props.title}
        </h2>
    </div>
  )
}
