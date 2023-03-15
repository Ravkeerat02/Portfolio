var tablinks = document.getElementsByClassName("tab-links");
        var tabcontents = document.getElementsByClassName("tab-contents");
        
        function opentab(tabname){
            for(tablink of tablinks){
                tablink.classList.remove("active-link");
            }
            for(tabcontent of tabcontents){
                tabcontent.classList.remove("active-tab");
            }
            event.currentTarget.classList.add("active-link");
            document.getElementById(tabname).classList.add("active-tab");
        }

        var sidemenu = document.getElementById("sidemenu");
        
        function openmenu(){
            sidemenu.style.right = "0";
        }
        function closemenu(){
            sidemenu.style.right = "-200%";
        }
        // Form controls
        const scriptURL = 'https://script.google.com/macros/s/AKfycbzCBFol9kMvjsQkpKBxtdGZZsYbKBGb9lywaK4l4lPq3DJ_Id--ci_z3jOtl95ZL6zm/exec'
        const form = document.forms['submit-to-google-sheet']
        const message = document.getElementById('message')
      
        form.addEventListener('submit', e => {
          e.preventDefault()
          fetch(scriptURL, { method: 'POST', body: new FormData(form)})
            .then(response => {
                Message.innerHTML = "Thanks for contacting me, I will get back to you soon!"
                setTimeout(function(){ Message.innerHTML = ""; }, 5000);
            })
            form.reset()
            .catch(error => console.error('Error!', error.message))
        })

        // Image slideshow
        $(document).ready(function() {
        var slideIndex = 1;
        showSlides(slideIndex);

        $(".prev").click(function() {
        slideIndex -= 1;
        showSlides(slideIndex);
        });

        $(".next").click(function() {
        slideIndex += 1;
        showSlides(slideIndex);
        });

        function showSlides(n) {
            var i;
            var slides = $(".slideshow-container img");
            var prevBtn = $(".prev");
            var nextBtn = $(".next");

            if (n > slides.length) {
                slideIndex = 1;
            }
            if (n < 1) {
                slideIndex = slides.length;
            }

            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }

            slides[slideIndex - 1].style.display = "block";

            if (slideIndex == 1) {
                prevBtn.css("display", "none");
            } else {
                prevBtn.css("display", "block");
            }

            if (slideIndex == slides.length) {
                nextBtn.css("display", "none");
            } else {
                nextBtn.css("display", "block");
            }
            }
        });
      </script>
</body>
</html>