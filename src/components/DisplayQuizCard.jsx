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
                            console.log(data.results);
                            setData(data.results);
                            localStorage.setItem("data" , JSON.stringify(data.results));
                        })
  
},[])

    return(
        <>
        <div className="mainConatainer">
            <QuizAppCard/>

            {
               data.map((items , index)=>{
                return(
                    <QuizAppCard/>
                )
               }) 
            }
        </div>
           
        </>
    )
}
export default DisplayQuizCard;