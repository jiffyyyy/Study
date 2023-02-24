import React, { useEffect, useState } from "react";
import animal from ".././data/animal.json";

const MainTest = () => {
  const [data, setData] = useState([]);
  //let data = "Cat"; //คอมโพแนนของตัวเอง
  //var data2 ="Dog"; //ส่งคอมโพแนนตัวอื่นได้
  //console.log("Animal",animal.find (a => a === "แมว")) //แบบ string
  //console.log("Animal",animal.filter (a => a === "แมว")) //แบบ filter กรองข้อมูลดึงมาใช้แค่ตัวเดียว

  useEffect(() => {
    setData(animal);
  }, []);

  function addArray(text) {
    animal.push(text);
    console.log(animal);
    animal.push(text);
    setData(animal);
  }

  function deleteArray(text) {
    // console.log(text);
    animal.pop(text);
    console.log("Animal", animal);
  }

  function filterArray(text) {
    console.log(text);
    let array = animal.filter((a) => a !== text);
    console.log("Animal", array);
  }

  return (
    <div>
      <button
        type="button"
        onClick={() => {
          filterArray("แมว");
        }}
      >
        Click
      </button>
      <div className="row">
        {data.map((item, index) => {  //{} ต้องมี return () ไม่ต้องreturn
          return (
            <div className="col" key={index}>
              <p>{item}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MainTest;
