function additem(){
    let inputValue;
    inputValue = document.getElementById("inputData").value;

        if(inputValue == ""){
            alert("Please Add a task!")            
        }
        else{
            // Add tasks as a pTag in resault section
            document.getElementById("inputData").value = " ";
            let pTag = document.createElement("p");
            let spanTag = document.createElement("span");
            let taskValue = document.createTextNode(inputValue);
            spanTag.appendChild(taskValue);
            pTag.appendChild(spanTag);
            let resault = document.getElementById("resault");
            resault.appendChild(pTag);
            // Move to done section
            spanTag.addEventListener("click",line);
                function line(){
                    let doneContainer = document.getElementById("done-container");
                    doneContainer.appendChild(pTag)
                    spanTag.setAttribute('id','rtn')
                    spanTag.style.textDecoration = "Line-through"
                    spanTag.style.color = 'blue'
                    pTag.style.backgroundColor = 'white'
                }
                let remove = document.createElement("span");
                remove.setAttribute("id","cls")
                let close = document.createTextNode("x")
                remove.appendChild(close);
                pTag.appendChild(remove);
                remove.setAttribute("onclick","this.parentNode.remove();");
                }
            }
                // ClearAll button
                function removeAll(){
                    let content = document.getElementById("done-container");
                    content.innerHTML = " "
                }
