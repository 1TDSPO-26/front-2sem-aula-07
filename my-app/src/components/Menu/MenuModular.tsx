import { Link } from "react-router";

export default function MenuModular() {

  return (
    <nav>
      <ul className="flex justify-around w-screen">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/produtos">Produtos</Link></li>
        <li><Link to="/analinda">Ana Linda</Link></li>
      </ul>
    </nav>
  )
}