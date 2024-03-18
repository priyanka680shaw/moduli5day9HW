


function QuizAppCard({question , questionNo , correct_answer , incorrect_answers}){


    
    return(
        <>
            <div className="quizContainer">
                <div className="quizinnerContainer">
                    <h2>{questionNo} . {question}</h2>
                    <h3>{question}</h3>
                    <div className="quizoptions">
                        <ul>
                            <li>
                                <button>{correct_answer}</button>
                            </li>
                            
                            {
                               // console.log( incorrect_answers)
                                incorrect_answers &&  incorrect_answers.map((items , index)=>{
                                  return (
                                    <li>
                                        <button>{items}</button>
                                    </li>
                                  )
                                    
                                    
                                })
                            }
                           
                        </ul>
                    </div>
                    <p>Time Left {}</p>
                    <div>
                        <button >Skip Question</button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default QuizAppCard;