import Saloon from "./assets/Saloon.png";

const homeContent = () => {
    const content = document.getElementById("insideTab");

    while (content.firstChild) {
        content.removeChild(content.firstChild);
    }
    const description = document.createElement("div");
    const para = document.createElement("p");
    const img = document.createElement("img");

    img.classList.add("saloonImg");
    img.src = Saloon;


    para.textContent = "The Stardrop Saloon is the main bar/restaurant in Stardew Valley. It located toward the center of Pelican Town. The owner of the Saloon is Gus who also lives there.";

    description.classList.add("description");

    description.appendChild(img);
    description.appendChild(para);

    
    const quote = document.createElement("blockquote");
    quote.textContent = "“Hungry? Thirsty? I've got just the thing!”";
    quote.classList.add("quote");
    
    const caption = document.createElement("figcaption");
    caption.classList.add("caption");
    
    caption.innerHTML = `&mdash; Gus,
    <cite>Stardew Valley wikiFandom</cite>`;
    quote.appendChild(caption);
    content.appendChild(description);
    content.appendChild(quote);

};

export default homeContent;

