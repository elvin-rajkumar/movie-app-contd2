import React,{useState} from "react";
import { useDispatch } from 'react-redux';
import { Link , Outlet} from "react-router-dom";
import { fetchAsyncMovies, fetchAsyncShows } from "../../features/movies/movieSlice";
import user from "../../images/user.png";
import "./Header.scss";

const Header = () => {
  const [term, setTerm] = useState("");
  
  const [year, setYear] = useState("");
  console.log("year",year)
  // console.log("year",year)
const dispatch = useDispatch();

  const submitHandler = (e) => {
     e.preventDefault();
     if(term  ==="") return alert("Please enter a search term")
    //  console.log(term);
    dispatch(fetchAsyncMovies({year,term}));
    dispatch(fetchAsyncShows({year,term}));
    // setTerm("");
    // setYear("");
  };

  // const submitYear = (e) => {
  //    e.preventDefault(); 
 
  // }
  
  return (
    <div className="header">
      
        <div className="logo">
        <Link to="/">Movie App</Link>
        </div>
      
      <div className="search-bar">
        <form onSubmit={submitHandler}>
          <div>
          <input type="text" value={term} placeholder="Search Movies Or Shows" onChange={(e) => setTerm(e.target.value)}/>
          </div>
          <div>
          <input type="text" value={year}  placeholder="Enter the year" onChange={(e) => setYear(e.target.value)}/>
          </div>
          <div>
          <button type="submit"><i className="fa fa-search"></i></button>
          </div>
          
          {/* {
            year.map((item)=>{
              return(
              <select>
                      <option value={year} placeholder="Year of release">2001</option>
                      <option value="year">2002</option>
                      <option value="year">2003</option>
                      <option value="year">2004</option>
              </select>
              )
            })
          } */}
        </form>
      </div>

      <div className="user-image">
        <img src={user} alt="user" />
      </div>
      
    </div>
  );
};

export default Header;
  {/* {
                for (let i=2000; i<=2022; i++) {
                  return i;
                }
              } */}