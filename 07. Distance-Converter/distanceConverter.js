function attachEventsListeners() {
  const input = document.getElementsByTagName("label")[0];
  const button = document.getElementById("convert");
  button.addEventListener("click", convert);
  function convert() {
    let comand = document.getElementById("inputUnits").value;
    let value = Number(document.getElementById("inputDistance").value);

    let objLiteralInput = {
      km: value * 1000,
      m: value,
      cm: value / 100,
      mm: value / 1000,
      mi: value * 1609.34,
      yrd: value * 0.9144,
      ft: value * 0.3048,
      in: value * 0.0254,
    };
    let afterConvertionInMeters = objLiteralInput[comand];

    let outPutComand = document.getElementById("outputUnits").value;
    let objLiteralOutput = {
      km: afterConvertionInMeters / 1000,
      m: afterConvertionInMeters,
      cm: afterConvertionInMeters * 100,
      mm: afterConvertionInMeters * 1000,
      mi: afterConvertionInMeters / 1609.34,
      yrd: afterConvertionInMeters / 0.9144,
      ft: afterConvertionInMeters / 0.3048,
      in: afterConvertionInMeters / 0.0254,
    };
    let afterConvertionInMetersOutput = objLiteralOutput[outPutComand];
    debugger;
    let outPut = document.getElementById("outputDistance");
    outPut.value = afterConvertionInMetersOutput;
  }
}
