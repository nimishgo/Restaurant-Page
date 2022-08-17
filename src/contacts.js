import Gus from "./assets/Gus.png";

function contactContent() {
    const content = document.getElementById("insideTab");

    while (content.firstChild) {
        content.removeChild(content.firstChild);
    }

    const cardContacts = document.createElement("div");
    cardContacts.classList.add("cardContacts");

    const gusImg = document.createElement("img");
    gusImg.src = Gus;
    cardContacts.appendChild(gusImg);

    const contactTable = document.createElement("table");
    const tableRow = document.createElement("tr");
    const tableTime = document.createElement("td");
    const tableTvalue = document.createElement("td");

    tableTime.textContent =  "Opening Hours";
    tableTvalue.textContent = "12:00pm to 12:00am"

    const tableRow1 = document.createElement("tr");
    const tableAddress = document.createElement("td");
    const tableAvalue = document.createElement("td");

    tableAddress.textContent = "Address";
    tableAvalue.textContent = "Pelican Town";

    const tableRow2 = document.createElement("tr");
    const tableNumber = document.createElement("td");
    const tableNvalue = document.createElement("td");

    tableNumber.textContent = "Contact No.";
    tableNvalue.textContent = "+007 6969420"

    cardContacts.appendChild(contactTable);
    contactTable.appendChild(tableRow);
    contactTable.appendChild(tableRow1);
    contactTable.appendChild(tableRow2);


    tableRow.appendChild(tableTime);
    tableRow.appendChild(tableTvalue);

    tableRow1.appendChild(tableAddress);
    tableRow1.appendChild(tableAvalue);

    tableRow2.appendChild(tableNumber);
    tableRow2.appendChild(tableNvalue);


    content.appendChild(cardContacts);
}

export default contactContent;

