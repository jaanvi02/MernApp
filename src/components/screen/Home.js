import React, { useEffect, useState } from "react";
import Navbar from "../Navbar";
import Cards from "../Cards";
import Footer from "../Footer";
// import Carousel from "../Carousel";

export default function Home() {
  const [search,setsearch]=useState("");
  const [foodcat, setfoodcat] = useState([]);
  const [fooditem, setfooditem] = useState([]);

  const loaddata = async () => {
    let response = await fetch("http://deploy-mern-api-alpha.vercel.app
/fooddata", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    response = await response.json();
    setfoodcat(response[1]);
    setfooditem(response[0]);
  };

  useEffect(() => {
    loaddata();
  }, []);

  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
      <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel" objectfit="fill">

  <div className="carousel-inner" id="carousel">
  <div className="carousel-caption" style={{zIndex:"10"}}>
  <div className="d-flex justify-center">
    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={search} onChange={(e)=>{setsearch(e.target.value)}}/>
    <button className="btn btn-outline-success text-white bg-success " type="submit">Search</button>
  </div>
  </div>
    
    <div className="carousel-item active">
      <img src="https://source.unsplash.com/random/900×700/?burger" className="d-block w-100 " style={{filter: "brightness=50%"}} alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://source.unsplash.com/random/900×700/?pasta" className="d-block w-100 " style={{filter: "brightness=50%"}} alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://source.unsplash.com/random/900×700/?pastry" className="d-block w-100 " style={{filter: "brightness=50%"}} alt="..."/>
    </div>
  
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
</div>
      </div>
      <div className="container">
        {foodcat !== []
          ? foodcat.map((data) => {
            
              return ( <div className="row m-3 " key={data._id}>
                <div key={data._id} className="fs-3 m-3">{data.CategoryName}</div>
                
                  <hr />
                  {fooditem !== [] ? (
                    fooditem
                      .filter((item) => (item.CategoryName === data.CategoryName) &&(item.name.toLowerCase().includes(search.toLowerCase())) )
                      .map((filterItems) => {
                        return (
                          <div
                            key={filterItems._id}
                            className="col-12 col-md-6 col-lg-3 m-3"
                          >
                            <Cards FoodItem={filterItems}
                            options={filterItems.options[0]}
                           
                            />
                          </div>
                        );
                      })
                  ) : (
                    <div>No such data found</div>
                  )}
                
                </div> );
              
            
            })
           
          : null}
         
       
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
