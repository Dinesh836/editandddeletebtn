<html>
    <body>
        <form onsubmit="saveToLocalStorage(e)">
            <label>Name:</label>
            <input id="username"type="text" name="username" required>
            <label>Email:</label>
            <input id="email" type="email" name="emailId" required>
            <label>Mobile No:</label>
            <input id="phonenumber" type="number" name="phoneNo" required>
            <button>Submit</button>
        </form>
        <ul id="listOfUser"></ul>
        <script>
            function saveToLocalStorage(e){
                event.preventDefault();
                const name=e.target.username.value;
                const email=e.target.emailId.value;
                const mobile=e.target.phoneNo.value;
              
                const newObj={
                    name:name;
                    email:email;
                    mobile:mobile;
                }
                localStorage.setItem(newObj.email,JSON.stringify(newObj));
                showUser(newObj)
            }
            function showUser(user){
                const parentNode=document.getElementById("listOfUser");
                const childHTML=`<li> ${user.name} - ${user.email} 
                    <button onclick=deleteUser('${user.email}')>Delete</button>
                    <button onclick=editUser('${user.email}','${user.name}')>Edit</button>

                    </li>`;
                parenrNode.innerHTML=parenrNode.innerHTML+childHTML;
            }
              function editUser(emailId,name){
                 document.getElementById('email').value='';
                 document.getElementById('username').value='';
                 deleteUser(emailId);

              }

            function deleteUser(email) {
                localStorage.removeItem(email)
                removeItemFromScreen(email)
            }

            function removeItemFromScreen(email){
                const parentNode = document.getElementById('listOfitems');
                const elem = document.getElementById(email)
                parentNode.removeChild(elem);
            }
        </script>
    </body>
</html>
