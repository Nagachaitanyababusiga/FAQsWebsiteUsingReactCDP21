import {Component} from 'react'
import FaqItem from '../FaqItem'
import './index.css'

class Faqs extends Component {
  state = {status: [true, true, true, true]}

  changeState = id => {
    // console.log(id)
    this.setState(prevState => {
      const Lister = [...prevState.status]
      // console.log(Lister)
      Lister[id] = !Lister[id]
      // console.log(Lister)
      return {status: Lister}
    })
  }

  render() {
    const {faqsList} = this.props
    const {status} = this.state
    const ModifiedList = faqsList.map(x => ({
      id: x.id,
      questionText: x.questionText,
      answerText: x.answerText,
      isHidden: status[x.id],
    }))
    // console.log(ModifiedList)
    return (
      <div className="cont-1">
        <div className="cont-2">
          <h1 className="header">FAQs</h1>
          <ul className="list-cont">
            {ModifiedList.map(x => (
              <FaqItem Details={x} changeState={this.changeState} key={x.id} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Faqs
