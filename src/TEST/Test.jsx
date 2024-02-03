import styled from '@emotion/styled'
import { useRef, useState } from 'react';
import { cloneDeep } from "lodash";

const Test = () => {
  const [column1,setColumn1]=useState([1,2,3])
  const [column2,setColumn2]=useState([4,5,6])
  const currentCard = useRef(null)
  const colCurrent =useRef(null)
  const cardDragStart = (e, column)=>{
    // console.log("start >>> ",e.target)
    colCurrent.current = column
    e.target.classList.add('dragging')
    currentCard.current = e.target;
    // currentCard.current.classList.remove('dragging')
    // console.log(currentCard.current)
    
 } 
  const cardDragEnter =(e) =>{
  console.log('enter>> ', e.target)
 

  if(currentCard.current){
    let fake = currentCard.current.style.order;
    currentCard.current.style.order = e.target.style.order;
    e.target.style.order = fake;
  }
}
  const cardDragEnd =(e) =>{
  currentCard.current =null;
  document.getElementsByClassName('dragging')[0].classList.remove('dragging')
}

//ENTER COLUMN
  const dragEnterColumn =(e, column) =>{

    if(column !== colCurrent.current){
      colCurrent.current = cloneDeep(column)
      const node = document.createElement("div")
      const textnode = document.createTextNode(`${currentCard.current.innerHTML}`)
      console.log(node.appendChild(textnode))
      node.style.order = 4
      node.classList.add('css-1sqglu0')
      node.setAttribute('draggable', true);

      document.getElementsByClassName('isColumn')[1].appendChild(node)
    }
    
  }

    return (
        <TestContainer>
            <ColumnItem className='isColumn' onDragEnter={(e)=>dragEnterColumn(e, 'col1')}>
              {column1 && column1.map((card,index)=>{
                return(
                  <Item onDragEnd={(e)=>cardDragEnd(e)} onDragStart={(e)=>cardDragStart(e,'col1')} onDragEnter={(e)=>cardDragEnter(e,card)} key={index} style={{order:index}} draggable> Item {card} </Item>
                )
              })}
               
            </ColumnItem>
            <ColumnItem className='isColumn' onDragEnter={(e)=>dragEnterColumn(e,'col2')}>
              {column2 && column2.map((card,index)=>{
                return(
                  <Item onDragEnd={(e)=>cardDragEnd(e)} key={index} onDragStart={(e)=>cardDragStart(e,'col2')} onDragEnter={(e)=>cardDragEnter(e,card)} style={{order:index}} draggable> Item {card} </Item>
                )
              })}
            </ColumnItem>
        </TestContainer>
    );
};

export default Test;


const TestContainer = styled.div`
  width: 800px;
  padding: 20px;
  margin-top: 100px;
  display: flex;
  justify-content: center;
  gap: 50px
`
const ColumnItem = styled.div`
  border: 3px dotted #ffffff;
  width: 300px;
//   height: 500px;
  padding: 30px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;  
  gap: 20px;                                                                                         
`
const Item = styled.div`
  background: #fa3664;
  width: 250px;
  height: 60px;
  color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-weight: 600
`