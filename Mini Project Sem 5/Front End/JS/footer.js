const createFooter = () => {
    let footer = document.querySelector('footer');
    footer.innerHTML = `
    <div class="footer-content">
    <img src="../../Images/logogehu.jpg" alt="logo">
    <div class="footer-ul">
        <ul class="category" style="color: white">
            <li class="category-title"><a href="#" class="footer-l"> Home </a></li>
            <li class="category-title"><a href="#" class="footer-l">Finance</a></li>
            <li class="category-title"><a href="#" class="footer-l">About</a></li>
        </ul>
        <ul class="aout-foot">
            <li style="font-size: larger;" class="category-title"><a href="#" class="about-f">About us</a></li>
            <li style="font-size: larger;" class="footer-h"><h3>Contact us</h3></li>
            <li class="category-title"><a href="#" class="about-f">Bhawesh Sammal</a></li>
            <li class="category-title"><a href="#" class="about-f">Gaurav Pathak</a></li>
            <li class="category-title"><a href="#" class="about-f">Bhumika Bisht</a></li>
        </ul>
    </div>
</div>
<p class="title-f">Finance Tracker</p>
<p class="info">Website created to keep track of your finances</p>
<p class="info-2">Contact support- abc@gmail.com</p>
<p class="cred">Future Goals- Visualise your transactions</p>

    `;
}

createFooter();