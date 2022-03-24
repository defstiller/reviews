import React, {useState} from 'react'
import dataReviews from "./dataReviews"

function Review() {
    const [index, setIndex] = useState(0)
    function selectReview(index) {
        const {id,name,job,image,text} = dataReviews[index]
        return (<>
        <div key={id}>
        <img src={image} alt={`${name} portrait`} />
        <h3>{name}</h3>
        <h4>{job.toUpperCase()}</h4>
        <p>{text}</p>
        </div>
        </>)
    }   
    function nextReview() {
        if(index >= dataReviews.length - 1) {
            setIndex(0)
        } else {
            setIndex(index + 1)
        }
    }
    function previousReview() {
        if(index <= 0) {
            setIndex(dataReviews.length - 1)
        } else {
            setIndex(index - 1)
        }

    }
    function randomizeReview() {
        const length = dataReviews.length - 1
        let rundom = Math.floor(Math.random() * length)

        if (index === rundom) {
            rundom += 1
        }
        setIndex(rundom)
    }
    return (<>
        {selectReview(index)}
        <div>
        <svg class="svg-icon" viewBox="0 0 20 20" onClick={previousReview}>
			<path fill="none" d="M8.388,10.049l4.76-4.873c0.303-0.31,0.297-0.804-0.012-1.105c-0.309-0.304-0.803-0.293-1.105,0.012L6.726,9.516c-0.303,0.31-0.296,0.805,0.012,1.105l5.433,5.307c0.152,0.148,0.35,0.223,0.547,0.223c0.203,0,0.406-0.08,0.559-0.236c0.303-0.309,0.295-0.803-0.012-1.104L8.388,10.049z"></path>
		</svg>
        <svg class="svg-icon" viewBox="0 0 20 20" onClick={nextReview}>
			<path fill="none" d="M11.611,10.049l-4.76-4.873c-0.303-0.31-0.297-0.804,0.012-1.105c0.309-0.304,0.803-0.293,1.105,0.012l5.306,5.433c0.304,0.31,0.296,0.805-0.012,1.105L7.83,15.928c-0.152,0.148-0.35,0.223-0.547,0.223c-0.203,0-0.406-0.08-0.559-0.236c-0.303-0.309-0.295-0.803,0.012-1.104L11.611,10.049z"></path>
		</svg>
        </div>
        <button className="btn" onClick={randomizeReview}>Surprize Me!</button>
    </>)
}

export default Review