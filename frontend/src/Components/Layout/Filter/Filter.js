import React, { useEffect, useState } from "react";
import "./Filter.css";
function Filter({
  setProductRate,
  productRate,
  setSelectedKarat,
  selectedKarat,
}) {
  const [filter, setFilter] = useState();
  useEffect(() => {
    setProductRate(filter);
    console.log(filter, "fghujuijhuihh");
  }, [filter]);
const clearFilterHandle=()=>{
  setSelectedKarat('')
}
  return (
    <div className="filter">
      <span>
        <p>Filter By Price</p>

        <p style={{color:'#630102',fontSize:'20px',fontWeight:'500'}}>{productRate}</p>
      </span>

      <input
        type="range"
        min={1000}
        max={500000}
        onChange={(e) => setFilter(e.target.value)}
        step={20}
        value={productRate}
      />
      <span>Filter By Karat</span>
      <div>
        <p
          className={selectedKarat === "14k" && "filter_active"}
          style={{
            border: "1px solid lightgrey",
            padding: "5px",
            borderRadius: "3px",
            cursor: "pointer",
          }}
          value={14}
          onClick={(e) => setSelectedKarat(e.target.textContent)}
        >
          14k
        </p>

        <p
          className={selectedKarat === "18k" && "filter_active"}
          style={{
            border: "1px solid lightgrey",
            padding: "5px",
            borderRadius: "3px",
            cursor: "pointer",
          }}
          onClick={(e) => setSelectedKarat(e.target.textContent)}
        >
          18k
        </p>
        <p
          className={selectedKarat === "22k" && "filter_active"}
          style={{
            border: "1px solid lightgrey",
            padding: "5px",
            borderRadius: "3px",
            cursor: "pointer",
          }}
          value={22}
          onClick={(e) => setSelectedKarat(e.target.textContent)}
        >
          22k
        </p>
        <p
          className={selectedKarat === "24k" && "filter_active"}
          style={{
            border: "1px solid lightgrey",
            padding: "5px",
            borderRadius: "3px",
            cursor: "pointer",
          }}
          value={24}
          onClick={(e) => setSelectedKarat(e.target.textContent)}
        >
          24k
        </p>
      </div>
      {selectedKarat  && <div style={{display:"flex",alignItems:'center',justifyContent:'flex-end',marginTop:'10px'}}>
        <button onClick={clearFilterHandle} style={{padding:'6px ',fontSize:'18px',fontWeight:'400',backgroundColor:"#630102",color:'#fff',cursor:'pointer',borderRadius:'5px',border:'none',outline:'none'}}>Clear All</button>
      </div>}
    </div>
  );
}

export default Filter;
