export function pagination(pagesize,currentpage,data){
    let value = data.slice(pagesize*(currentpage-1),pagesize*currentpage).slice(0,pagesize); //เช่น 65 รายการ ดึงจาก0-10รายการ
    return{
        statusCode:200,
        taskStatus:true,
        message:'Success',
        pagin:{
            totalrow:data.length, //จำนวนชุดข้อมูลทั้งหมด นับจำนวนออบเจกต์ในอาร์เรย์
            pagesize:pagesize, //ดึงครั้งละเท่าไหร่ เช่น 10รายการต่อหน้าเป็นต้น
            currentpage:currentpage,  //อยู่หน้าที่เท่าไหร่
            totalpage:Math.ceil(data.length/pagesize), //หน้าทั้งหมดมีกี่หน้า โดยใช้จำนวนหน้าทั้งหมด/รายการที่แสดง
        },
        data:value,
    }
}
