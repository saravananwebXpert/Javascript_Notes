// var heading = document.getElementById("heading");
        // heading.innerText = "Hello there!";
        // console.log(heading);

        var num1 = document.getElementById("input-num1");
        var num2 = document.getElementById("input-num2");
        var add = document.getElementById("add");
        var sub = document.getElementById("sub");
        var mul = document.getElementById("mul");
        var div = document.getElementById("div");
        let response = document.getElementById("response");

        add.addEventListener("click", () => {
            response.innerText = Number(num1.value) + Number(num2.value);
            // alert('Hey there, i have been clicked');
        })
        sub.addEventListener("click", () => {
            response.innerText = Number(num1.value) - Number(num2.value);
            // alert('Hey there, i have been clicked');
        })
        mul.addEventListener("click", () => {
            response.innerText = Number(num1.value) * Number(num2.value);
            // alert('Hey there, i have been clicked');
        })
        div.addEventListener("click", () => {
            response.innerText = Number(num1.value) / Number(num2.value);
            // alert('Hey there, i have been clicked');
        })

        //document.getElementById()
        var first = document.getElementById("first");
        first.style.color = "orange";

        var fourth = document.getElementById("fourth");
        fourth.style.color = "red";

        //getElementsByClassName()
        var para = document.getElementsByClassName("para");
        para.style.color = "red";

        //getElementsByTagName()

        //querySelector()
        document.querySelector("h1").style.backgroundColor = "red";

        //querySelectorAll()
        document.querySelectorAll("h2").style.backgroundColor = "blue";
        
