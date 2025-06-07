document.addEventListener("DOMContentLoaded", function () {
  const registeredUsers = {
    // 101: { name: "John Doe", region: "North", phone: "1234567890" },
    mfmyc344: { name: "Abigail Owoniyi", region: "sw23", phone: "09157705709" },
    mfmyc325: {
      name: "Adegbile Adetoun",
      region: "sw23",
      phone: "09037336760",
    },
    mfmyc181: { name: "Adekunle Grace", region: "sw23", phone: "08164565309" },
    mfmyc356: { name: "Adenira Glory", region: "sw23", phone: "08141248230" },
    mfmyc682: {
      name: "Aderibigbe Samuel",
      region: "sw23",
      phone: "07080582772",
    },
    mfmyc751: {
      name: "Agboola Oluwaseun",
      region: "sw23",
      phone: "08069062240",
    },
    mfmyc726: {
      name: "Akhagbosu Daniel",
      region: "sw23",
      phone: "09121359229",
    },
    mfmyc541: { name: "Ali Prudence", region: "sw23", phone: "08026630488" },
    mfmyc463: { name: "Ali Promise", region: "sw23", phone: "07010363168" },
    mfmyc116: { name: "Aretu Emmanuel", region: "sw23", phone: "09126090320" },
    mfmyc537: { name: "Ayodeji David", region: "sw23", phone: "09045962422" },
    mfmyc649: { name: "Gade Olajumoke", region: "sw23", phone: "09139058839" },
    mfmyc142: { name: "Gade Oyindamola", region: "sw23", phone: "08144550278" },
    mfmyc691: { name: "Onifade Mary", region: "sw23", phone: "08159470566" },
    mfmyc247: {
      name: "Ologunye Deborah",
      region: "sw23",
      phone: "08072572031",
    },
    mfmyc311: { name: "Olufemi Thelma", region: "sw23", phone: "08022338368" },
    mfmyc626: { name: "Olumayowa Jesse", region: "sw23", phone: "08115627612" },
    mfmyc227: { name: "Aderibigbe Paul", region: "sw23", phone: "09063211274" },
    mfmyc164: { name: "Joel Ruth", region: "sw23", phone: "09066749301" },
    mfmyc140: { name: "Ogunmileto Joy", region: "sw23", phone: "09114868331" },
  };

  document
    .getElementById("user-info-form")
    .addEventListener("submit", function (e) {
      e.preventDefault();

      const name = document.getElementById("name").value.trim();
      const examNumber = document.getElementById("examNumber").value.trim();
      const region = document.getElementById("region").value.trim();
      const phone = document.getElementById("phone").value.trim();

      if (!registeredUsers[examNumber]) {
        alert("Invalid Exam Number. Please enter a valid exam number.");
        return;
      }

      if (
        registeredUsers[examNumber].name !== name ||
        registeredUsers[examNumber].phone !== phone
      ) {
        alert("User details do not match the registered exam number.");
        return;
      }

      // Store in sessionStorage for quiz access
      sessionStorage.setItem(
        "user",
        JSON.stringify({ name, examNumber, region, phone })
      );

      alert("Details submitted successfully!");
      document.querySelector(".Proceed-to-start-Quiz-btn").style.display =
        "block";
    });

  // Hide Proceed button initially
  document.querySelector(".Proceed-to-start-Quiz-btn").style.display = "none";
});

document.addEventListener("selectstart", function (e) {
  e.preventDefault();
});
