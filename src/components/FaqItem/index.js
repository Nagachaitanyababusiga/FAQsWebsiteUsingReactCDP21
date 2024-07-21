import './index.css'

const FaqItem = props => {
  const {Details, changeState} = props
  const {id, questionText, answerText, isHidden} = Details
  const imgUrl = isHidden
    ? 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png '
  const altvalue = isHidden ? 'plus' : 'minus'
  const del = () => {
    changeState(id)
    // console.log(id)
  }
  return (
    <li className="list-itm-card">
      <div className="lst-itm-text">
        <h1 className="questionText">{questionText}</h1>
        <button type="button" className="onlybtn" onClick={del}>
          <img src={imgUrl} alt={altvalue} />
        </button>
      </div>
      {!isHidden && (
        <div className="hidden-text-cont">
          <hr className="hrline" />
          <p className="answerText">{answerText}</p>
        </div>
      )}
    </li>
  )
}

export default FaqItem
