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
                    console.log(error);
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
            console.log(error);
        }
    })
}

function saveCity() {
    event.preventDefault();
    let formData = {
        city: $('#city').val(),
        megye_id: $('#megyeId').val()
    };
    $.ajax({
        type: 'POST',
        url: '/api/addCity',
        data: formData,
        success: function (response) {
            console.log(response.city);
            let id = response.city.id;
            let varos = response.city.varos;
            $('#noCities').hide();
            $('#cityList').append('<div class="container mt-2" id="' + id + '"><li onclick="enableInput(' + id + ', \'' + varos + '\')" id="varos' + id + '" value="' + varos + '" class="list-group-item">' + varos + '</li><button onclick="editCity(' + id + ')" class="btn btn-success hidden" id="saveBtn' + id + '">Mentés</button><button onclick="deleteCity(' + id + ')" class="btn btn-danger hidden" id="deleteBtn' + id + '">Törlés</button><button class="btn btn-warning hidden" id="cancelBtn' + id + '" onclick="cancel(' + response.city + ')">Mégsem</button></div>');
            $('#newCityBtn').show();
            $('#addForm').hide();
        },
        error: function (error) {
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
        },
        error: function (error) {
            console.log(error);
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

function cancel(city) {
    $('#varosInput' + city.id).remove();
    $('#varos' + city.id).show();
    $('#saveBtn' + city.id).addClass('hidden');
    $('#deleteBtn' + city.id).addClass('hidden');
    $('#cancelBtn' + city.id).addClass('hidden');
}

