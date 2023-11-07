

$('form').submit(function (event) {
    event.preventDefault()

    let taskName = $('#taskInput').val()
    if (taskName) {
        let newTask = $('<li>').text(taskName)
        $('ul').append(newTask)
        $('#taskInput').val('')
    }

    $('li').click(function () {
        $(this).toggleClass('sobreporLinha');
    });

})


