let a = document.querySelector("select");
let i = document.querySelector("img");

s.addEventlistener("change", () => {
    if (s.value === "tiger") {
        i.src = " https://plus.unsplash.com/premium_photo-1661847643150-4e06569d2ec1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dGlnZXJ8ZW58MHx8MHx8fDA%3D"
    }
    else if (s.value === "lion") {
        i.src = " https://images.unsplash.com/photo-1546182990-dffeafbe841d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bGlvbnxlbnwwfHwwfHx8MA%3D%3D"
    }

})