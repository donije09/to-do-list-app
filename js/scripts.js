$(document).ready(function(){
    //add item
    $('#button').click(function(){
        let taskText = $('#input').val();
        if (taskText){
            $('#list').append('<li>' + taskText + '<span class="delete">X</span></li>');
            $('#input').val('');
        }
    });
    //cross out item
    $('#list').on('dblclick', 'li', function(){
        $(this).toggleClass('crossed');
    });
    //delete an item 
    $('#list').on('click', '.delete', function(event){
        event.stopPropagation();
        $(this).parent().remove();
    });

    //sorting order list
    $('#list').sortable();
});