<form>
    @method('POST')
    <div class="mb-3">
      <label for="varos" class="form-label">Város</label>
      <input type="text" class="form-control" id="varos" name="varos">
      <p id="error" class="text-danger mt-1 hidden">Csak betűket adhatsz meg!</p>
    </div>
    <div class="mb-3">
      <input value="{{$county->id}}" type="number" class="form-control" id="megyeId" name="megyeId">
    </div>
    <button onclick="saveCity()" type="submit" class="btn">Feltöltés</button>
  </form>