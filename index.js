// ___________________________CARD__________________________________

let butColorCard = document.querySelector(".but_color_card");
let inpColorCard = document.querySelector(".inp_color_card");
let card = document.querySelector(".card");
let empty = document.querySelector(".empty");

butColorCard.onclick = () => {
  let colorCard = inpColorCard.value;
  card.style.backgroundColor = colorCard;
  empty.style.color = colorCard;
};

// -----------------------------------------------------------------

let butColorTop = document.querySelector(".but_color_top");
let inpColorTop = document.querySelector(".inp_color_top");
let topCard = document.querySelector(".top_card");

butColorTop.onclick = () => {
  let colorTop = inpColorTop.value;
  topCard.style.backgroundColor = colorTop;
};

// -----------------------------------------------------------------

let butColorTopText = document.querySelector(".but_color_top_text");
let inpColorTopText = document.querySelector(".inp_color_top_text");
let topText = document.querySelector(".top_card");

butColorTopText.onclick = () => {
  let colorTopText = inpColorTopText.value;
  topText.style.color = colorTopText;
};

// -----------------------------------------------------------------

let butColorText = document.querySelector(".but_color_text");
let inpColorText = document.querySelector(".inp_color_text");
let colorText = document.querySelectorAll(".color_p");

butColorText.onclick = () => {
  let colorTextCard = inpColorText.value;
  for (i of colorText) {
    i.style.color = colorTextCard;
  }
};

// -----------------------------------------------------------------

let butColorField = document.querySelector(".but_color_field");
let inpColorField = document.querySelector(".inp_color_field");
let colorField = document.querySelectorAll(".inp_card");
let colorFieldData = document.querySelectorAll(".inp_card_data");

butColorField.onclick = () => {
  let colorFieldCard = inpColorField.value;
  for (i of colorField) {
    i.style.backgroundColor = colorFieldCard;
  }
  for (i of colorFieldData) {
    i.style.backgroundColor = colorFieldCard;
  }
};

// _________________________________________________________________

let butCardOption1 = document.querySelector(".but_card_option_1");

let card1 = document.querySelector(".card");
let empty1 = document.querySelector(".empty");
let top1 = document.querySelector(".top_card");
let topText1 = document.querySelector(".top_card");
let text1 = document.querySelectorAll(".color_p");

let field1 = document.querySelectorAll(".inp_card");
let fieldData1 = document.querySelectorAll(".inp_card_data");

butCardOption1.onclick = () => {
  let colorCard1 = "#ffd800";
  card1.style.backgroundColor = colorCard1;
  empty1.style.color = colorCard1;

  let colorTop1 = "#466c6f";
  top1.style.backgroundColor = colorTop1;

  let colorTopText1 = "#a9d2d2";
  topText1.style.color = colorTopText1;

  let colorText1 = "#db6423";
  for (i of text1) {
    i.style.color = colorText1;
  }

  let colorField1 = "#ffffff";
  for (i of field1) {
    i.style.backgroundColor = colorField1;
  }
  for (i of fieldData1) {
    i.style.backgroundColor = colorField1;
  }
};

// -----------------------------------------------------------------

let butCardOption2 = document.querySelector(".but_card_option_2");

let card2 = document.querySelector(".card");
let empty2 = document.querySelector(".empty");
let top2 = document.querySelector(".top_card");
let topText2 = document.querySelector(".top_card");
let text2 = document.querySelectorAll(".color_p");

let field2 = document.querySelectorAll(".inp_card");
let fieldData2 = document.querySelectorAll(".inp_card_data");

butCardOption2.onclick = () => {
  let colorCard2 = "#466c6f";
  card2.style.backgroundColor = colorCard2;
  empty2.style.color = colorCard2;

  let colorTop2 = "#a9d2d2";
  top2.style.backgroundColor = colorTop2;

  let colorTopText2 = "#db6423";
  topText2.style.color = colorTopText2;

  let colorText2 = "#a9d2d2";
  for (i of text2) {
    i.style.color = colorText2;
  }

  let colorField2 = "#ffd800";
  for (i of field2) {
    i.style.backgroundColor = colorField2;
  }
  for (i of fieldData2) {
    i.style.backgroundColor = colorField2;
  }
};

// -----------------------------------------------------------------

let butCardOption3 = document.querySelector(".but_card_option_3");

let card3 = document.querySelector(".card");
let empty3 = document.querySelector(".empty");
let top3 = document.querySelector(".top_card");
let topText3 = document.querySelector(".top_card");
let text3 = document.querySelectorAll(".color_p");

let field3 = document.querySelectorAll(".inp_card");
let fieldData3 = document.querySelectorAll(".inp_card_data");

butCardOption3.onclick = () => {
  let colorCard3 = "#db6423";
  card3.style.backgroundColor = colorCard3;
  empty3.style.color = colorCard3;

  let colorTop3 = "#ffd800";
  top3.style.backgroundColor = colorTop3;

  let colorTopText3 = "#466c6f";
  topText3.style.color = colorTopText3;

  let colorText3 = "#ffffff";
  for (i of text3) {
    i.style.color = colorText3;
  }

  let colorField3 = "#466c6f";
  for (i of field3) {
    i.style.backgroundColor = colorField3;
  }
  for (i of fieldData3) {
    i.style.backgroundColor = colorField3;
  }
};

// -----------------------------------------------------------------

let butCardOption4 = document.querySelector(".but_card_option_4");

let card4 = document.querySelector(".card");
let empty4 = document.querySelector(".empty");
let top4 = document.querySelector(".top_card");
let topText4 = document.querySelector(".top_card");
let text4 = document.querySelectorAll(".color_p");

let field4 = document.querySelectorAll(".inp_card");
let fieldData4 = document.querySelectorAll(".inp_card_data");

butCardOption4.onclick = () => {
  let colorCard4 = "#9fcdcd";
  card4.style.backgroundColor = colorCard4;
  empty4.style.color = colorCard4;

  let colorTop4 = "#db6423";
  top4.style.backgroundColor = colorTop4;

  let colorTopText4 = "#ffffff";
  topText4.style.color = colorTopText4;

  let colorText4 = "#466c6f";
  for (i of text4) {
    i.style.color = colorText4;
  }

  let colorField4 = "#a8d1d1";
  for (i of field4) {
    i.style.backgroundColor = colorField4;
  }
  for (i of fieldData4) {
    i.style.backgroundColor = colorField4;
  }
};

// _________________________________________________________________

let butMain = document.querySelector(".but_main");

let inp1 = document.querySelector(".inp_1");
let inp2 = document.querySelector(".inp_2");
let inp3 = document.querySelector(".inp_3");
let inp4 = document.querySelector(".inp_4");
let inp5 = document.querySelector(".inp_5");

butMain.onclick = () => {
  let inpCard1 = +inp1.value;
  let inpCard2 = inp2.value;
  let inpCard3 = +inp3.value;
  let inpCard4 = +inp4.value;
  let inpCard5 = +inp5.value;

  if (
    inpCard1 == "" ||
    inpCard2 == "" ||
    inpCard3 == "" ||
    inpCard4 == "" ||
    inpCard5 == ""
  ) {
    alert("Enter your card details");
  } else {
    alert(`
    Your card details 
    
    Card Number: ${inpCard1}
    Name On Card: ${inpCard2}
    Expiry Date: ${inpCard3}/${inpCard4}
    CVV/CVN: ${inpCard5}
    `);
  }
};
