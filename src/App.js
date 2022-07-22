import { useState } from 'react';
import './App.css';

function App() {
  let [listNmae, reListName] = useState([])
  let [addList, setAddList] = useState('')

  let [listdate, reListdate] = useState([])
  let [addNal, setAddNal] = useState('')

  let [good, regood] = useState([])
  let [modal, setModal] = useState(false)
  let [titleNo, setTitleNo] = useState(0)
  return (
    <>
      <header>
        <div>방명록 - 길형인</div>
        <div>저에게 하고싶은 말 남겨주세요.</div>
      </header>
      {
        modal == true ? <Modal listNmae={listNmae} titleNo={titleNo}></Modal> : null
      }
      {
      listNmae.map((a,i)=>{
        return(
            <div className="list" key={i}>
              <p className='listname' onClick={()=>{
                setModal(!modal)
                setTitleNo(i)
                }}>{a}</p>

              <p className='good'><span onClick={()=>{
                let copy = [...good]
                copy[i] = copy[i]+1
                regood(copy)
                }}>😊</span> {good[i]} </p>

              <p className='date'>{listdate[i]}</p>

              <button className='but2' onClick={()=>{
                let copy = [...listNmae]
                copy.splice(i, 1)
                reListName(copy)
                let copy2 = [...good]
                copy2.splice(i, 1)
                regood(copy2)
              }}>삭제</button>

            </div>
        )
      })
      }

      <div className='input'>
        <p>제목<input className='ip' type='text' onChange={(e)=>{
          setAddList(e.target.value)
          }} /></p>

        <p>내용 <textarea className='ip2' onChange={(e)=>{
          setAddNal(e.target.value)
          }} /></p>

        <button className='but' onClick={()=>{
          let copy = [...listNmae]
          copy.unshift(addList)
          reListName(copy)

          let copy2 = [...good]
          copy2.unshift(0)
          regood(copy2)

          let copy3 = [...listdate]
          copy3.unshift(addNal)
          reListdate(copy3)


        }}>전송</button>
      </div>
    </>
  );
}
function Modal(props){
  return(
    <>
        <div className='modal'>
          <h4>{props.listNmae[props.titleNo]}</h4>
          <p>상세내용</p>
          <p>날자</p>
        </div>
    </>
  )
}
export default App;