import "./categoryWidget.css";

function CategoryWidget(props) {
  return (
    <div className='categoryWidget'>
        <img src={props.icon} alt="" className="categoryImg" />
        <span className="categoryTitle">{props.title}</span>
    </div>
  )
}

export default CategoryWidget