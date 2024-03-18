import { useEffect, useState } from "react";
import QuizAppCard from "./QuizCard"
function DisplayQuizCard(){
//styling part in app.css
    
//Api calling
const url = 'https://opentdb.com/api.php?amount=10&type=multiple';
//state
const [data , setData] = useState([]);
useEffect(()=>{
  
    const ApiResponse = fetch(url)
                        .then((Response)=>Response.json()).
                        then((data)=>{
                            console.log(data)
                            const dataRecived = data.results;
                            setData(dataRecived);
                            console.log("recived" , dataRecived)
                            localStorage.setItem("data" , JSON.stringify(dataRecived));
                        })
  
},[])

    return(
        <>
        <div className="mainConatainer">
            <QuizAppCard/>

            {
               data &&  data.map((items , index)=>{
                const questionNo = index+1; 
                return(
                    <QuizAppCard question = {items.question
                    } questionNo = {questionNo} correct_answer ={items.correct_answer} incorrect_answers={items.incorrect_answers} 
                    />
                )
               }) 
            }
        </div>
        
        </>
    )
}
export default DisplayQuizCard;