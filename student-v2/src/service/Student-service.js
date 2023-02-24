import StudentsData from "../data/StudentsData.json";
import FacultyData from "../data/FacultyData.json"
import MajorData from "../data/MajorData.json"
import { pagination } from "../helper/Response";
export function getStudent(search='',faculty=0,major=0,pagesize=10,currentpage=1){
    let student = StudentsData;
    if (search){
        student = student.filter(a => a.name.includes(search))
    }
    if (parseInt(faculty) !== 0){
        student =student.filter((a) => a.fac_id === parseInt(faculty)) //เงื่อนไขเสิร์ชคณะ
    }
    if (parseInt(major) !== 0){
        student =student.filter((a) => a.major_id === parseInt(major)) //เงื่อนไขเสิร์ชสาขา
    }
    
    return pagination(pagesize,currentpage,student);

    }

    export function getFaculty(facultyId){
        let faculty = FacultyData;
        return faculty;

    }
    export function getMajor(facultyId){
        let major = MajorData;
        if (parseInt(facultyId) !== 0){
            major =major.filter((a) => a.fac_id === parseInt(facultyId))
        }
        return major;
        
        

    
        }
