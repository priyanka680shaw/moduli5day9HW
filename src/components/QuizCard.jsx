import { useEffect, useState } from "react"



function QuizAppCard({question , questionNo , correct_answer , incorrect_answers , dataIndex , dataSetIndex } ){

const [result , setResult] = useState(0);
const [timeInterval , setTimeInterval] = useState(0);
useEffect(()=>{
    let timeIntervalId;

                        timeIntervalId = setInterval(()=>{
                            setTimeInterval((previous)=>{
                                console.log("setTimeInterval");
                                if((previous+1) === 5){
                                    clearInterval(timeIntervalId);
                                    dataSetIndex((previous)=>{
                                        return previous+1;
                                    })
                                }
                                return(previous+1);
                            })
                        } , 1000);
                        return()=>clearInterval(timeIntervalId) //cleaning up
} , [])

    return(
        <>
            <div className="quizContainer">
                <div className="quizinnerContainer">
                    <h2>{questionNo} . {question}</h2>
                    <h3>{question}</h3>
                    <div className="quizoptions">
                        <ul>
                            <li>
                                <button onClick={()=>{
                                    setResult((previous)=>{
                                        return(previous+1);
                                    })
                                    dataSetIndex((previous)=>{
                                        return previous+1;
                                    })
                                }}>{correct_answer}</button>
                            </li>
                            
                            {
                               // console.log( incorrect_answers)
                                incorrect_answers &&  incorrect_answers.map((items , index)=>{
                                  return (
                                    <li key={index}>
                                        <button onClick={()=>{
                                            dataSetIndex((previous)=>{
                                                return previous+1;
                                            })
                                        }}>{items}</button>
                                    </li>
                                  )  
                                })
                            }
                           
                        </ul>
                    </div>
                    <p>Time Left : {timeInterval}</p>
                    <div>
                        <button onClick={()=>{
                            dataSetIndex((previous)=>{
                                console.log("workingSkip")
                               return(previous+1)
                            })
                        }}>Skip Question</button>
                    </div>
                    <div>
                        <button onClick={()=>{
                            dataSetIndex((previous)=>{
                                console.log("workingNext")
                                return(previous+1)

                            })
                        }}>next</button>
                    </div>
                </div>
                <div>
                   {
                     (dataIndex===9 ? result : " ")
                   }
                </div>
            </div>
        </>
    )
}
export default QuizAppCard;

