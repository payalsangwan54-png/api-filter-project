 const getdata =async()=>{
     try{
        const res =await fetch("https://dummyjson.com/posts");
        const result =await res.json();
        console.log(result);
    } catch (error){
        console.log(error);
    }
 }
 getdata();
 