
 $(".catsit").hover(
        function () {
            $(".catsit").fadeOut();
        },
        function () {
            $(".catsleep").fadeIn();
        },
        function () {
            $(".catsleep").fadeOut();
        }
    );


 $(".catsleep").hover(
         function () {
            $(".catsleep").fadeOut();
        },
        function () {
            $(".catrun").fadeIn();
        },
        function () {
            $(".catrun").fadeOut();
        }
    );

 $(".catrun").hover(
         function () {
            $(".catrun").fadeOut();
        },
        function () {
            $(".catsit").fadeIn();
        },
        function () {
            $(".catsit").fadeOut();
        }
    );