import CategoryWidget from "../../components/categoryWidget/CategoryWidget";
import Topbar from "../../components/topbar/Topbar";
import "./home.css";

export default function Home() {
  return (
    <div className="deneme22">
        <CategoryWidget
            icon=""
            title="İçecekler"
        />
        <CategoryWidget
            icon=""
            title="bi seyler"
        />
        <CategoryWidget
            icon=""
            title="falan"
        />
    </div>
  )
}
