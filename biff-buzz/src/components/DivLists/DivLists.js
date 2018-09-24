import React from 'react';
import DivList from './DivList/Div';

const divList = (props) => {
    const divLists = props.divList.map((item,index) => {
      let bifBuzz = '';
      if(item%3 === 0 && item%5 ===0) {
        bifBuzz = 'bifBuzz'
      }else if(item % 3 === 0) {
        bifBuzz = 'bif'
      }else if(item%5 === 0) {
        bifBuzz = 'buzz'
      }else {
        bifBuzz = item;
      }
      return (
        <DivList div={item} key={index}  bifBuzz={bifBuzz}/>
      )
    })
    return (
      <div>
          {divLists}
      </div>
    )
}

export default divList;