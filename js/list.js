
$(document).ready(function($) {
    $('form').submit(function() {
        if ($('.input').val() !== '') {
            var newTask = $('.input').val();
            var newLi = $('<li>' + "\u2022 " + newTask + '</li>');
            newLi.on('click', function() {
                $(this).remove(); // Attach the event handler *before* adding the element
            });
            $('ul').prepend(newLi); // To put the new task at the top of the list
            $('.input').val('');
            return false; // So the change persists
        }
    });
    $('ul').sortable(); // Because what good is a to-do list that you can't sort? :)
});

$(document).ready(function(){
var images = ['pics/background0.jpeg',
                'pics/background1.jpeg',
                'pics/background2.jpeg', 
                'pics/background3.jpeg',
                'pics/background4.jpeg',
                'pics/background5.jpeg', 
                'pics/background6.jpeg',
                'pics/background8.jpeg',
                'pics/background9.jpeg',
                'pics/background10.jpeg'];

var randomNumber = Math.floor(Math.random() * images.length);
var bgImg = 'url(' + images[randomNumber] + ')';

$('body').css({'background':bgImg, 'background-size':'cover', });

});


        // function saveTodos() {
        //     var str = JSON.stringify(.input);
        //     localStorage.setItem(".input", str);
        // }
        // function getTasks(){
        //     var str = localStorage.getItem(".input")
        //     tasks = JSON.parse(str);
        //     if (!todos) {
        //         todos = [];
        //     }
        // }

        // getTodos();
        // listTodos();


//             if (localStorage['.input']) {
//               var tasks = JSON.parse(localStorage['.input']);
//                 }
//             else {
//                  var tasks = [];
// };