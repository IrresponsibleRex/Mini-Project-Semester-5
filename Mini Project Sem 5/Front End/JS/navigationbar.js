const createNav=()=>{
    let nav = document.querySelector('.navbar');
    nav.innerHTML=`
    <div class="navigation">
        <img src="../../Images/logogehu.jpg" alt="Logo" class="top-left-logo">
        <div class="navigation-content">
            <div class="Search-bar">
                <!-- <input type="text" class="search-bar" placeholder="Search Service">
                <button class="search-button"><img src="../../Images/search-icon.png" alt=""></button> -->
                <form id="form" role="search">
        <input type="search" id="query" name="q"
         placeholder="Search..."
         aria-label="Search through site content">
        <!-- <button>Search</button> -->
        <svg viewBox="0 0 1024 1024"><path class="path1" d="M848.471 928l-263.059-263.059c-48.941 36.706-110.118 55.059-177.412 55.059-171.294 0-312-140.706-312-312s140.706-312 312-312c171.294 0 312 140.706 312 312 0 67.294-24.471 128.471-55.059 177.412l263.059 263.059-79.529 79.529zM189.623 408.078c0 121.364 97.091 218.455 218.455 218.455s218.455-97.091 218.455-218.455c0-121.364-103.159-218.455-218.455-218.455-121.364 0-218.455 97.091-218.455 218.455z"></path></svg>
      </form>
            </div>
            <a href="../HTML/user.html"><img class="user" src="../../Images/user.png" alt="user"></a>
        </div>
    </div>
    <ul class="links-navigation">
        <li class="navigation-item"><a href="../HTML/homepage.html" class="link">Home</a></li>
        <li class="navigation-item"><a href="../HTML/Budget.html" class="link">Finance</a></li>
        <li class="navigation-item"><a href="../HTML/About-Us.html" class="link">About Us</a></li>
        <li class="navigation-item"><a href="" class="link">Feedback</a></li>
    </ul>
    `
}
createNav();