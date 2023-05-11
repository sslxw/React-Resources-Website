function renderPage() {
    const bodyContent = document.body.innerHTML;
    document.body.innerHTML = `    
        <header>
            <nav>
                <ul>    
                    <li class="logo-container"> <img class="nav-logo-img" src="images/logo.png" alt="react logo"> </li>
                    <li> <a class="nav-link" href="index.html">Introduction</a> </li>
                    <li> <a class="nav-link" href="lectures.html">Lectures</a> </li>
                    <li> <a class="nav-link" href="tutorials.html">Tutorials</a> </li>
                    <li> <a class="nav-link" href="resources.html">Resources</a> </li>
                    <li> <a class="nav-link" href="aboutsite.html">About website</a> </li>
                </ul>
            </nav>
        </header>

        <main>${bodyContent}</main>

        <div class="footer">
            <p class="copyright">© 2023 IS424 Project.</p>
        <div>
    `;
}

function sendEmail(){
    var fullName = document.getElementById("first-name").value + " " + document.getElementById("last-name").value;
    var age = document.getElementById("age").value;
    var coutnry = document.getElementById("country").value;
    var message = document.getElementById("message").value;
    
    if(fullName !== "" && message !== ""){
        window.location.href = 
`mailto:randomEmail@mail.com?subject=IS424&body=
Information of The User: %0D%0A
Full Name: ${fullName} %0D%0A
Country: ${coutnry} %0D%0A
Age: ${age} %0D%0A %0D%0A

Here's The Message of The User: %0D%0A
${message} %0D%0A %0D%0A`;
    }

}

renderPage()