import React, {useState} from 'react'
import moment from 'moment'
import { useParams, Link, useNavigate, useLocation } from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import copy from 'copy-to-clipboard'

import upvote from '../../assets/upvote.png'
import downvote from '../../assets/downvote.png'
import './Questions.css'
import Avatar from '../../components/Avatar/Avatar'
import DisplayAnswer from './DisplayAnswer'
import {postAnswer, deleteQuestion, voteQuestion} from '../../actions/question.js'

const QuestionsDetails = () => {

    const navigate = useNavigate()
    const {id} = useParams();
    const questionsList = useSelector(state => state.questionReducer)
    /*var questionsList=[{
        id:'1',
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
      const [Answer, setAnswer] = useState('')
      const dispatch = useDispatch()
      const User = useSelector((state) => (state.currentUserReducer))
      const url = 'http://localhost:3000/'

      const handlePostAns = (e, answerLength) => {
        e.preventDefault()
        if(User === null){
            alert('Login or Signup to answer a question')
            navigate('/Auth')
        } else{
            if(Answer === ''){
                alert('Enter an answer before submitting')
            } else{
                dispatch(postAnswer({id, noOfAnswers: answerLength + 1, answerBody: Answer, userAnswered: User.result.name, userId: User.result._id}))
            }

        }
      }

      const handleShare = () => {
        copy(url+location.pathname)
        alert('Copied url:' +url+location.pathname)
      }

      const handleDelete = () => {
        dispatch(deleteQuestion(id, navigate))
      }

      const handleUpVote = () => {
        dispatch(voteQuestion(id, 'upvote', User.result._id))
        console.log("in handleUpVote")
      }

      const handleDownVote = () => {
        dispatch(voteQuestion(id, 'downvote', User.result._id))
      }

  return (
    
    <div className='question-detail-page'>
       {
         questionsList.data === null ? 
         <h1>Loading...</h1>:
         <>
            {
                questionsList.data.filter(question => question._id == id).map(question => (
                    <div key={question._id}>
                        {console.log(question)}
                        <section className='question-details-container'>
                            <h1>{question.questionTitle}</h1>
                            <div className='question-details-container-2'>
                                <div className='question-votes'>
                                    <img src={upvote} alt='up' width='18px' className='votes-icon' onClick={handleUpVote} />
                                    <p>{question.upVote.length - question.downVote.length}</p>
                                    <img src={downvote} alt='down' width='18px' className='votes-icon' onClick={handleDownVote}/>
                                </div>
                                <div className='a'>
                                    <p className='question-body'>{question.questionBody}</p>
                                    <div className='question-details-tags'>
                                        {
                                            question.questionTags.map((tag) => (
                                                <p key={tag}>{tag}</p>
                                            ))
                                        }
                                    </div>
                                    <div className='question-actions-user'>
                                        <div>
                                            <button type='button' onClick={handleShare}>Share</button>
                                            {
                                                User?.result?._id === question?.userId && (
                                                    <button type='button' onClick={handleDelete}>Delete</button>
                                                )
                                            }
                                            
                                        </div>
                                        <div>
                                            <p>Asked {moment(question.askedOn).fromNow()}</p>
                                            <Link to={`/Users/${question.userId}`} className='user-link' style={{color:'#0086d8'}}>
                                            <Avatar backgroundColor='orange' px='8px' py='5px'>{question.userPosted.charAt(0).toUpperCase()}</Avatar>
                                            <div>
                                                {question.userPosted}
                                            </div>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        {
                            question.noOfAnswers !== 0 && (
                                <section>
                                    <h3>{question.noOfAnswers} Answers</h3>
                                    <DisplayAnswer key={question._id} question={question} handleShare={handleShare}/>
                                </section>
                            )
                        }
                        <section className='post-ans-container'>
                            <h3>Your Answer</h3>
                            <form onSubmit={ (e) => {handlePostAns(e, question.answer.length) }}>
                                <textarea name="" id="" cols="30" rows="10" onChange= {e => setAnswer(e.target.value)}></textarea>
                                <input type="Submit" className='post-ans-btn' value='Post your Answer'/>
                            </form>
                            <p>
                                Browse other Question tagged
                                {
                                    question.questionTags.map((tag) => (
                                        <Link to='/Tags' key={tag} className='ans-tags'> {tag}</Link>
                                    ))
                                } or
                                <Link to='/AskQuestion' style={{textDecoration:'none',color:'#009dff'}}> ask your own question</Link>
                            </p>
                        </section>
                    </div>
                ))
            }
         </>
       } 
    </div>
  )
}

export default QuestionsDetails