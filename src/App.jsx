import { useState } from "react";
import people from "./data";
import { FaAngleDoubleLeft, FaAngleDoubleRight, FaBeer } from 'react-icons/fa'

const App = () => {


  const [index, setIndex] = useState(0);
  const { name, image, text, job } = people[index];

  // const checkNumber = (number) => {

  //   if (number > people.length - 1) {

  //     return 0
  //   }
  //   if (number < 0) {
  //     return people.length - 1;
  //   }
  //   return number

  // }

  // 1 % 4 === 1
  // 2 % 4 === 2
  // 3 % 4 === 3
  // 4 % 4 === 0
  

  const nextPerson = () => {


    setIndex((index) => {

      let newIndex = (index + 1) % people.length;

      return newIndex
    })
  }
  const prevPerson = () => {


    setIndex((index) => {

      let newIndex = (index - 1 + people.length) % people.length;

      return newIndex
    })
  }
  const randomPerson=()=>{

   let randomNumber=Math.floor(Math.random()* people.length);
  //  console.log(randomNumber)
   if(randomNumber===index){
    let randomNumber=index+1;
   }
   let newIndex=randomNumber%people.length;
   setIndex(newIndex)
  }

  return (

    <main>


      <div className='review'  >
        <div className="img-container">


          <img src={image} alt={name} className='person-img' />
          <div className="quote-icon">
            <FaBeer className='beer' />
          </div>
        </div>

        <h4 className='author'>
          {name}
        </h4>
        <p className="job">
          {job}
        </p>
        <div className="info">

          {text}
        </div>
        <div className="btn-container">
          <button className='btn prev-btn' onClick={prevPerson}  >
            <FaAngleDoubleLeft />
          </button>
          <button className='btn next-btn' onClick={nextPerson}>
            <FaAngleDoubleRight />
          </button>

        </div>
        <button className="btn" onClick={randomPerson}>suprise me</button>




      </div>

    </main>
  );
};
export default App;
