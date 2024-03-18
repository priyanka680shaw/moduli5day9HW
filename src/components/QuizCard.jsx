function QuizAppCard(){
    return(
        <>
            <div className="quizContainer">
                <div className="quizinnerContainer">
                    <h2>question no</h2>
                    <h3>question</h3>
                    <div className="quizoptions">
                        <ul>
                            <li>1</li>
                            <li>2</li>
                            <li>3</li>
                            <li>4</li>
                        </ul>
                    </div>
                    <p>time left : 6</p>
                    <div>
                        <button>Skip Question</button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default QuizAppCard;