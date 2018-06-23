
    $('#sortable').sortable({ connectWith: "#sortableToo", placeholder: "placeholderBox" });
    $('#sortableToo').sortable({ connectWith: "#sortable", placeholder: "placeholderBox" });
    //Funcion Datepicker
    $('.date').datepicker({
        showOtherMonths: true,
        selectOtherMonths: true,
        showButtonPanel: true,
        changeMonth: false,
        changeYear: false,
        numberOfMonths: 2,
        minDate: -1,
        maxDate: "+1W +5D"
    });

    //Lista Para Hacer

    $('#todoList ul').sortable({
        items: "li:not('.listTitle, .addItem')",
        connectWith: "ul",
        dropOnEmpty: true,
        placeholder: "emptySpace"
    });
    $('input').keydown(function(e){
        if(e.keyCode == 13){
            var item = $(this).val();

            $(this).parent().parent().append('<li>' + item + '</li>');
            $(this).val('');
        }
        $('#trash').droppable({
            drop: function(event, ui) {
                ui.draggable.remove();
            }
        });
    })

