
// BISA tapi belum untuk semua metode pembayaran
document.getElementById("donateButton").addEventListener("click", function () {
    var selectedAmount = document.querySelector(
      'input[id="btnradio1"]:checked'
    );

    if (selectedAmount) {
      var modal = new bootstrap.Modal(
        document.getElementById("modalGopay"),
        { backdrop: "static", keyboard: false }
      );
      modal.show();
    }
  });

  document.getElementById("donateButton").addEventListener("click", function () {
    var selectedAmount = document.querySelector(
      'input[id="btnradio2"]:checked'
    );

    if (selectedAmount) {
      var modal = new bootstrap.Modal(
        document.getElementById("modalDana"),
        { backdrop: "static", keyboard: false }
      );
      modal.show();
    }
  });

  document.getElementById("donateButton").addEventListener("click", function () {
    var selectedAmount = document.querySelector(
      'input[id="btnradio3"]:checked'
    );

    if (selectedAmount) {
      var modal = new bootstrap.Modal(
        document.getElementById("modalShopee"),
        { backdrop: "static", keyboard: false }
      );
      modal.show();
    }
  });

  document.getElementById("donateButton").addEventListener("click", function () {
    var selectedMethod = document.querySelector('input[name="btnradio"]:checked');

    if (selectedAmount) {
        var modalId = selectedAmount.id.replace("btnradio", "modal");
        var modal = new bootstrap.Modal(document.getElementById(modalId), { backdrop: "static", keyboard: false });
        modal.show();
    }
});