import React, { useState, useEffect } from "react";
import { Formik, Form } from "formik";
import ShowData from "./ShowData";
import {
  getStudent,
  getFaculty,
  getMajor,
} from "../../service/Student-service";


function MainStudent() {

  const [data, setData] = useState([]);
  const [dataFaculty, setDataFaculty] = useState([]);
  const [dataMajor, setDataMajor] = useState([]);
  const [pagin, setPagin] =useState({
    totalrow:0, //จำนวนชุดข้อมูลทั้งหมด นับจำนวนออบเจกต์ในอาร์เรย์
            pagesize:10, //ดึงครั้งละเท่าไหร่ เช่น 10รายการต่อหน้าเป็นต้น
            currentpage:1,  //อยู่หน้าที่เท่าไหร่
            totalpage:0, //หน้าทั้งหมดมีกี่หน้า โดยใช้จำนวนหน้าทั้งหมด/รายการที่แสดง

  })

  useEffect(() => {
    get("",0,0,10,1);
    GetFaculty();
    GetMajor(0);
  }, []);

  function get(search,faculty,major,pagesize,currentpage) {
    let res = getStudent(search,faculty,major,pagesize,currentpage);
    console.log(res)
    setData(res.data);
    setPagin(res.pagin)
  }

  function GetFaculty() {
    let res = getFaculty();
    setDataFaculty(res);
  }
  function GetMajor(facultyId) {
    let res = getMajor(facultyId);
    setDataMajor(res);
  }



  return (
    <div className="col-12 px-4">
      <Formik
        initialValues={{
          search: '',
         faculty: 0,
         major:0,
        }}
       
        onSubmit={(values, ) => {
         get(values.search,values.faculty,values.major)
        }}
      >
        {({ values, errors, touched, setFieldValue }) => (
          <Form>
            <div className="row">
              <div className="col-12 col-md-4 px-1 mt-1">
                <label>ค้นหา</label>
                <input
                value={values.search}
                  type="text"
                  className="form-control"
                  onChange={(e) => {
                    setFieldValue("search",e.target.value)
                    console.log(e.target.value);
                  }}
                />
              </div>
              <div className="col-12 col-md-4 px-1 mt-1">
                <label>คณะ</label>
                
                <select
                value={values.faculty}
                  className="form-control form-select"
                  onChange={(e) => {
                    setFieldValue("faculty",e.target.value)
                    GetMajor(e.target.value);
                    console.log(e.target.value);
                  }}
                >
                  <option value={0}> ----เลือกคณะ----</option>
                  {dataFaculty.map((item, index) => (
                    <option key={item.id} value={item.id}>
                      {item.faculty}
                    </option>
                  ))}
                </select>
              </div>
              <div className="col-12 col-md-4 px-1 mt-1">
                <label>สาขา</label>
                <select
                value={values.major}
                  className="form-control form-select"
                  onChange={(e) => {
                    setFieldValue("major",e.target.value)
                    GetMajor(e.target.value);
                    
                  }}
                >
                  <option value={0}> ----เลือกสาขา----</option>
                  {dataMajor.map((item, index) => (
                    <option key={item.id} value={item.id}>
                      {item.major}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <br></br>
            <div className="d-flex justify-content-center">
              <button
                type="submit"
                className="btn btn-primary mx-1"
                onChange={(e) => {
                  
                  console.log();
                }}
              >
                {" "}
                ค้นหา
              </button>
              <div className="d-flex justify-content-center">
                <button
                  type="reset"
                  className="btn btn-warning mx-1"
                  onClick={() => {
                    GetMajor(0); //เอาเงื่อนไขบรรทัดที่19มาใส่
                    get("",0,0,10,1); //เอาเงื่อนไขบรรทัดที่17มาใส่
                    console.log();
                  }}
                >
                  {" "}
                  ล้าง
                </button>
              </div>
            </div>
            <div>
              <ShowData 
              data={data} pagin={pagin}
             changePage ={(page) =>{
              get(values.search,values.faculty,values.major,pagin.pagesize,page)
              //console.log('page',page)
             }} 
             changePageSize ={(pagesize) =>{
              get(values.search,values.faculty,values.major,pagesize,1)
              //console.log('pagesize',pagesize)
             }}/>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default MainStudent;
