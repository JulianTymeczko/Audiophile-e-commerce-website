function nameTest(inputValue) {
  const namePattern = /^[A-Z][a-z]+ [A-Z][a-z]+$/;
  return namePattern.test(inputValue);
}
function emailTest(inputValue) {
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailPattern.test(inputValue);
}
function phoneTest(inputValue) {
  const phonePattern = /^\d{3}-\d{3}-\d{4}$/;
  return phonePattern.test(inputValue);
}
function addressTest(inputValue) {
  const addressPattern = /^\d+ [A-Z][a-zA-Z ]+$/;
  return addressPattern.test(inputValue);
}
function zipCodeTest(inputValue) {
  const zipCodePattern = /^\d{5}$/;
  return zipCodePattern.test(inputValue);
}
function eMoneyNumberTest(inputValue) {
  const eMoneyNumberPattern = /^\d{9}$/;

  return eMoneyNumberPattern.test(inputValue);
}
function eMoneyPINTest(inputValue) {
  const eMoneyPINPattern = /^\d{4}$/;
  return eMoneyPINPattern.test(inputValue);
}

export default function formTests(typeOfTest, inputValue) {
  if (typeOfTest == "Name") {
    return nameTest(inputValue);
  } else if (typeOfTest == "Email Address") {
    return emailTest(inputValue);
  } else if (typeOfTest == "Phone Number") {
    return phoneTest(inputValue);
  } else if (typeOfTest == "Address") {
    return addressTest(inputValue);
  } else if (typeOfTest == "ZIP Code") {
    return zipCodeTest(inputValue);
  } else if (typeOfTest == "City") {
    return nameTest(inputValue);
  } else if (typeOfTest == "Country") {
    return nameTest(inputValue);
  } else if (typeOfTest == "e-Money Number") {
    return eMoneyNumberTest(inputValue);
  } else if (typeOfTest == "e-Money PIN") {
    return eMoneyPINTest(inputValue);
  }
}
