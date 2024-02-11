import React from 'react'
import {Link, useLocation, useNavigate} from 'react-router-dom'
import {useSelector} from 'react-redux'

import './HomeMainbar.css'
import QuestionList from './QuestionList'

const HomeMainbar = () => {

  const questionsList = useSelector(state => state.questionReducer)
  console.log(questionsList)

  /*var questionsList=[{
  id:1,
  upVotes:3,
  downVotes:2,
  noOfAnswer: 2,
  questionTitle: "What is a function?",
  questionBody: "It meant to be",
  questionTags: ["java","node js","react js","mongo db"],
  userPosted: "kms",
  userId: 1,
  askedOn: "jan 1",
  answer:[{
    answerBody: "Answer",
    userAnswered: "jeevana",
    answeredOn: "jan 2",
    userId: 4,
  }],
},
{
  id:2,
  upVotes:10,
  downVotes:2,
  noOfAnswer: 5,
  questionTitle: "What is a function?",
  questionBody: "It meant to be",
  questionTags: ["javascript","node js","react js","mongo db"],
  userPosted: "jeev",
  userId: 2,
  askedOn: "jan 1",
  answer:[{
    answerBody: "Answer",
    userAnswered: "jeevana",
    answeredOn: "jan 2",
    userId: 4,
  }],
},{
  id:3,
  upVotes:5,
  downVotes:2,
  noOfAnswer: 3,
  questionTitle: "What is a function?",
  questionBody: "It meant to be",
  questionTags: ["java","node js","python","mongo db"],
  userPosted: "far",
  userId: 3,
  askedOn: "jan 1",
  answer:[{
    answerBody: "Answer",
    userAnswered: "jeevana",
    answeredOn: "jan 2",
    userId: 4,
  }],
}]*/

const location = useLocation()

const user = 1;
const navigate = useNavigate()

const checkAuth = () =>{
  if(user === null){
    alert("login or signup to ask a question")
        navigate('./Auth')
  }
  else{
    navigate('/AskQuestion')
  }
}

  return (
    <div className='main-bar'>
      <div className='main-bar-header'>
        {
            location.pathname==='/'? <h1>Top Questions</h1> : <h1>All Questions</h1>
        }
        <button to='/AskQuestion' onClick={checkAuth} className='ask-btn'>Ask Question</button>
      </div>
      <div>
        {
          questionsList.data === null ?
          <h1>Loading...</h1>:
          <>
            <p> {questionsList.data.length} questions</p>
            <QuestionList questionList={questionsList.data}/>
          </>
        }
      </div>
    </div>
  )
}

export default HomeMainbar