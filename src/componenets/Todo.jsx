import React, { useRef } from 'react'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { addAction } from '../../redux/actions/todoAction';

function Todo() {
  const { list } = useSelector(state => state.list)
  const description = useRef();
  const dispatch = useDispatch()

  const [inputValue, setInputValue] = useState('');
  const [submittedValue, setSubmittedValue] = useState('');
  const [dateValue, setDateValue] = useState('');
  const [timeValue, setTmieValue] = useState('');

  //Description
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };
  //Date
  const handleDateChange = (event) => {
    setDateValue(event.target.value);
  }
  //Time
  const handleTimeChange = (event) => {
    setTmieValue(event.target.value);
  }

  // console.log(list)

  const handleSubmit = (e) => {
    // const descriptionValue = description.current.value
    // dispatch(addAction(date))
    // dispatch(addAction(descriptionValue))
    // setSubmittedValue(inputValue);
    // setSubmitedDateValue(dateValue);
    const setNewSubmit = [...submittedValue, { text: inputValue, date: dateValue, time: timeValue }]
    setSubmittedValue(setNewSubmit)
    setInputValue('');
    setDateValue('');
    setTmieValue('');
  }
  const handleDelete = (index) => {
    const updateSubmittedData = submittedValue.filter((_, i) => i !== index);
    setSubmittedValue(updateSubmittedData);
  }
  return (
    <>
      <div className="container m-4">
        <form name='todo' className='todo' >
          <input type="text" placeholder='Descreption' value={inputValue} ref={description} onChange={handleInputChange} />
          <input type="date" name="date" id="date" value={dateValue} onChange={handleDateChange} />
          <input type="time" name="" id="" value={timeValue} onChange={handleTimeChange} />
          <button className='sub-btn' type='button' onClick={handleSubmit}>Add</button>
        </form>

        <div className="container m-4 ">
          {submittedValue.length > 0 && (

            <table style={{ borderCollapse: 'collapse', width: '50%' }}>
              <thead>
                <tr>
                  <th style={{ border: '1px solid #ddd', padding: '8px' }} >Task</th>
                  <th style={{ border: '1px solid #ddd', padding: '8px' }} >Date</th>
                  <th style={{ border: '1px solid #ddd', padding: '8px' }} >Time</th>
                </tr>
              </thead>
              <tbody>
                {submittedValue.map((data, index) => (

                  <tr key={index}>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }} >{data.text}</td>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }} >{data.date}</td>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }} >{data.time}</td>
                    <button className='todo-del'onClick={()=>handleDelete(index)} > Delete</button>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </>
  )
}

export default Todo
