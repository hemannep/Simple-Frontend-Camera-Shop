window.onscroll = function() {getScrollAmount()};

        function getScrollAmount() {
            var scrollTop = 0;
            scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
            var buttonTracker = document.getElementById("myBtn");
            var indicatorValue = document.getElementById("indicator");
            if(scrollTop < 100){
                indicatorValue.innerHTML = '<i class="fa-solid fa-angle-down"></i>';
                buttonTracker.onclick = function() {gotoBottom()};
            }else{
                indicatorValue.innerHTML = '<i class="fa-solid fa-angle-up"></i>';
                buttonTracker.onclick = function() {gotoTop()};
            }
        }

        function gotoTop(){
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
        }

        function gotoBottom(){
            document.body.scrollTop = 99999;
            document.documentElement.scrollTop = 99999;
        }