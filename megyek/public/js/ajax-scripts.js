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
            $('#noCities').hide();
            $('#cityList').append('<div class="container mt-2" id="' + response.city.id + '"><li onclick="enableInput(' + response.city + ')" id="varos' + response.city.id + '" value="' + response.city.varos + '" class="list-group-item">' + response.city.varos + '</li><button onclick="editCity(' + response.city + ')" class="btn btn-success hidden" id="saveBtn' + response.city.id + '">Mentés</button><button onclick="deleteCity(' + response.city.id + ')" class="btn btn-danger hidden" id="deleteBtn' + response.city.id + '">Törlés</button><button class="btn btn-warning hidden" id="cancelBtn' + response.city.id + '" onclick="cancel(' + response.city + ')">Mégsem</button></div>');
            $('#newCityBtn').show();
            $('#addForm').hide();
        },
        error: function (error) {
        }
    })
}

function editCity(city) {
    event.preventDefault();
    let newCity = $('#varosInput' + city.id).val();
    let formData = {
        city: $('#varosInput' + city.id).val(),
    };
    $.ajax({
        type: 'POST',
        url: '/api/edit/' + city.id,
        data: formData,
        success: function (response) {
            $('#varosInput' + city.id).remove();
            $('#varos' + city.id).html(newCity);
            $('#varos' + city.id).show();
            $('#saveBtn' + city.id).addClass('hidden');
            $('#deleteBtn' + city.id).addClass('hidden');
            $('#cancelBtn' + city.id).addClass('hidden');
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

function enableInput(city) {
    let input = '<input onclick="enableInput(' + city.id + ')" name="varosInput' + city.id + '" id="varosInput' + city.id + '" value="' + city.varos + '" class="list-group-item">';
    $('#' + city.id).append(input);
    $('#varos' + city.id).hide();

    $('#saveBtn' + city.id).removeClass('hidden');
    $('#deleteBtn' + city.id).removeClass('hidden');
    $('#cancelBtn' + city.id).removeClass('hidden');
}

function cancel(city) {
    $('#varosInput' + city.id).remove();
    $('#varos' + city.id).show();
    $('#saveBtn' + city.id).addClass('hidden');
    $('#deleteBtn' + city.id).addClass('hidden');
    $('#cancelBtn' + city.id).addClass('hidden');
}

