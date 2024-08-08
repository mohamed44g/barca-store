import { OrbitProgress } from "react-loading-indicators";
import './style.scss'


export default function index() {
  return (
    <div className="loader d-flex justify-content-center align-items-center">
    <OrbitProgress color="#fff" size="medium" text="" textColor="" />
  </div>
  )
}
