jQuery(document).ready(function ($) {
    $("#countySelect").on('change', function () {
        let countyId = $(this).val();
        if (countyId) {
            event.preventDefault();
            $.ajax({
                url: '/api/showCities/' + countyId,
                type: 'get',
                success: function (data) {
                    $('#addForm').hide();
                    $("#cities").html(data);
                },
                error: function (error) {
                }
            })
        }
    })
})

function addCity(id) {
    event.preventDefault();
    $.ajax({
        type: 'get',
        url: '/api/' + id + '/addCity',
        success: function (data) {
            $('#newCityBtn').hide();
            $('#addForm').show();
            $('#addForm').html(data);
        },
        error: function (error) {
        }
    })
}

function saveCity() {
    event.preventDefault();
    let formData = {
        varos: $('#varos').val(),
        megye_id: $('#megyeId').val()
    };
    $.ajax({
        type: 'POST',
        url: '/api/addCity',
        data: formData,
        success: function (response) {
            let id = response.city.id;
            let varos = response.city.varos;
            $('#noCities').hide();
            $('#cityList').append('<div class="container mt-2" id="' + id + '"><li onclick="enableInput(' + id + ', \'' + varos + '\')" id="varos' + id + '" value="' + varos + '" class="list-group-item">' + varos + '</li><button onclick="editCity(' + id + ')" class="btn mb-2 mr-2 hidden" id="saveBtn' + id + '">Mentés</button><button onclick="deleteCity(' + id + ')" class="btn mb-2 mr-2 hidden" id="deleteBtn' + id + '">Törlés</button><button class="btn mb-2 mr-2 hidden" id="cancelBtn' + id + '" onclick="cancel(' + id + ')">Mégsem</button></div>');
            $('#newCityBtn').show();
            $('#addForm').hide();
            $('#error').addClass('hidden');
        },
        error: function (xhr) {
            if (xhr.status === 422) {
                let errors = xhr.responseJSON.errors;
                if (errors && errors.varos) {
                    if (errors.varos[0] === 'The varos field must only contain letters.') {
                        $('#error').html('A város neve csak betkből állhat!');
                        $('#error').removeClass('hidden');
                    }
                    else if (errors.varos[0] === 'The varos has already been taken.') {
                        $('#error').html('A várost már feltöltötték!');
                        $('#error').removeClass('hidden');
                    }
                }
            }
        }
    })
}

function editCity(id) {
    event.preventDefault();
    let newCity = $('#varosInput' + id).val();
    let formData = {
        city: $('#varosInput' + id).val(),
    };
    $.ajax({
        type: 'POST',
        url: '/api/edit/' + id,
        data: formData,
        success: function (response) {
            $('#varosInput' + id).remove();
            $('#varos' + id).html(newCity);
            $('#varos' + id).show();
            $('#saveBtn' + id).addClass('hidden');
            $('#deleteBtn' + id).addClass('hidden');
            $('#cancelBtn' + id).addClass('hidden');
            $('#editError').addClass('hidden');
        },
        error: function (xhr) {
            if (xhr.status === 422) {
                let errors = xhr.responseJSON.errors;
                if (errors && errors.city) {
                    if (errors.city[0] === 'The city field must only contain letters.') {
                        $('#editError').html('A város neve csak betkből állhat!');
                        $('#editError').removeClass('hidden');
                    }
                    else if (errors.city[0] === 'The city has already been taken.') {
                        $('#editError').html('A várost már feltöltötték!');
                        $('#editError').removeClass('hidden');
                    }
                }
            }
        }
    })
}

function deleteCity(id) {
    event.preventDefault();
    let formData = {
        city: $('#varos' + id).val(),
    };
    $.ajax({
        type: 'POST',
        url: '/api/delete/' + id,
        data: formData,
        success: function (response) {
            $('#' + id).remove();
        },
        error: function (error) {
        }
    })
}

function enableInput(id, varos) {
    let input = '<input name="varosInput' + id + '" id="varosInput' + id + '" value="' + varos + '" class="list-group-item">';
    $('#' + id).append(input);
    $('#varos' + id).hide();

    $('#saveBtn' + id).removeClass('hidden');
    $('#deleteBtn' + id).removeClass('hidden');
    $('#cancelBtn' + id).removeClass('hidden');
}

function cancel(id) {
    $('#varosInput' + id).remove();
    $('#varos' + id).show();
    $('#saveBtn' + id).addClass('hidden');
    $('#deleteBtn' + id).addClass('hidden');
    $('#cancelBtn' + id).addClass('hidden');
}

