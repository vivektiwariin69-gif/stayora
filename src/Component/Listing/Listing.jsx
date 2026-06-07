import React, { useContext } from "react";
import "./Listing.css";
import { dataContext } from "../../Context/Usercontext";

function Listing() {
    let  {
        title,
        setTitle,
        addListing,
        setaddListing,
        addImage1,
        setaddImage1,
        addImage2,
        setaddImage2,

        addImage3,
        setaddImage3,
        price,
        setprice

    } = useContext(dataContext)
  return (
    <div id="listing"
    onSubmit={(e) => {
          e.preventDefault();
          alert("Add Listing Successfully Successfully...👍");
          setaddListing(true)
        }}>
      <form>

        <div className="heading">
          <h1>Add your Listing 🏠</h1>
          <div className="line"></div>
          <p>Fill in the details below to add your property listing.</p>
        </div>

        <div className="list">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            placeholder="Enter listing title"
            required 
            onChange={(e)=>{
                setTitle(e.target.value)
            }} value={title}
          />
        </div>

        <div className="list">
          <label htmlFor="des">Description</label>
          <textarea
            id="des"
            rows="4"
            placeholder="Describe your property..."
          ></textarea>
        </div>

        <div className="list">
          <label htmlFor="img1">Image1</label>
          <input type="file" id="img1" required onChange={(e)=>{
            setaddImage1(e.target.files[0])
          }} />
        </div>

        <div className="list">
          <label htmlFor="img2">Image2</label>
          <input type="file" id="img2" required onChange={(e)=>{
            setaddImage1(e.target.files[0])
          }}/>
        </div>

        <div className="list">
          <label htmlFor="img3">Image3</label>
          <input type="file" id="img3" required onChange={(e)=>{
            setaddImage1(e.target.files[0])
          }} />
        </div>

        <div className="list">
          <label htmlFor="price">Price</label>
          <input
            type="text"
            id="price"
            placeholder="Enter price"
            required
            onChange={(e)=>{
                setprice(e.target.value)
            }} value={price}
          />
        </div>

        <div className="list">
          <label htmlFor="location">Location</label>
          <input
            type="text"
            id="location"
            placeholder="Enter location"
            required
          />
        </div>

        <button id="listbtn">+ Add</button>

      </form>
    </div>
  );
}

export default Listing;