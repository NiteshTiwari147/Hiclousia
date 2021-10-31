import React, { useState } from 'react';
import Button from '@mui/material/Button';
import { addKeywords } from './actions';
import { useDispatch, useSelector } from 'react-redux';
import './styles.css';

function Keywords () {
        const dispatch = useDispatch();
        const keywordsObject = useSelector(state => state.keywordList);
        console.log(keywordsObject)
        return <div className="keywordsBox">   
             {keywordsObject.length ? keywordsObject.map( (obj) => {
               return  <div className="keyword">
                 #{obj}
             </div>
            }): 'Please add keywords'} 
           <Button variant="text">
               <div className="addSkillBtn" onClick={() => {
                   const list = ['cpp', 'java']
                   dispatch(addKeywords(list));
               }}>
                    addSkill
               </div>
           </Button>
        </div>
}

export default Keywords;