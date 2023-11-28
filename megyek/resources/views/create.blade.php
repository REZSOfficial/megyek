<form>
    @method('POST')
    <div class="mb-3">
      <label for="city" class="form-label">Város</label>
      <input type="text" class="form-control" id="city" name="city">
    </div>
    <div class="mb-3">
      <input value="{{$county->id}}" type="number" class="form-control" id="megyeId" name="megyeId">
    </div>
    <button onclick="saveCity()" type="submit" class="btn btn-primary">Feltöltés</button>
  </form>