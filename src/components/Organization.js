import React, { useState } from "react";
import ceremony1 from "../assets/images/ceremony 1.png";
import ceremony2 from "../assets/images/ceremony 2.png";
import ceremony3 from "../assets/images/ceremony 3.png";
import ceremony4 from "../assets/images/ceremony 4.png";
import ceremony5 from "../assets/images/ceremony 5.png";
import ceremony6 from "../assets/images/ceremony 6.png";
import ceremony7 from "../assets/images/ceremony 7.png";
import ceremony8 from "../assets/images/ceremony 8.png";

function Organization() {
  const [translations, setTranslations] = useState({});

  const ceremonies = [
    {
      number: "01",
      title: "VRATHAM",
      titleTamil: "व्रत",
      description:
        "This is conducted to convey a message to the groom that he has to prepare himself to move from Brahmacharyam (Bachelor) to Grahasthashramam (Married life). Prayers will be conducted to seek the blessings of the ancestors.",
      descriptionTamil:
        "यह समारोह वर को यह संदेश देने के लिए आयोजित किया जाता है कि उसे ब्रह्मचर्य (कुंवारा जीवन) से गृहस्थाश्रम (वैवाहिक जीवन) की ओर स्वयं को तैयार करना चाहिए। पूर्वजों के आशीर्वाद के लिए प्रार्थनाएँ की जाएँगी।",
      image: ceremony1,
    },
    {
      number: "02",
      title: "Nichayathartham",
      titleTamil: "निश्चयार्थ (सगाई)",
      description:
        "Nichayathartham is the formal engagement ceremony, where families agree to the marriage and officially announce the engagement and the wedding date",
      descriptionTamil:
        "निश्चयार्थ एक औपचारिक सगाई समारोह है, जहाँ परिवार विवाह के लिए सहमति देते हैं और औपचारिक रूप से सगाई तथा विवाह की तारीख की घोषणा करते हैं।",
      image: ceremony7,
    },
    {
      number: "03",
      title: "Reception",
      titleTamil: "स्वागत समारोह / रिसेप्शन",
      description:
        "A gathering where love is celebrated and blessings are received. A moment to cherish joy with family and friends. A beginning marked with laughter, light, and togetherness.",
      descriptionTamil:
        "एक सभा जहाँ प्रेम का जश्न मनाया जाता है और आशीर्वाद प्राप्त होते हैं। परिवार और मित्रों के साथ खुशी साझा करने का अवसर। यह हँसी, रोशनी और एकजुटता के साथ चिह्नित एक शुरुआत है।",
      image: ceremony8,
    },
    {
      number: "04",
      title: "KASI YATRAI",
      titleTamil: "काशी यात्रा",
      description:
        "The groom decides to give up worldly pleasures and prepares to go to Kasi to lead the life of an ascetic. The parents and the Guru advise the groom to marry the bride and enter Grahastashrama (sacred family life).",
      descriptionTamil:
        "दूल्हा सांसारिक सुखों को त्यागकर तपस्या का जीवन अपनाने के लिए काशी जाने का निर्णय लेता है। माता-पिता और गुरु दूल्हे को विवाह करने और गृहस्थाश्रम (पवित्र पारिवारिक जीवन) में प्रवेश करने की सलाह देते हैं।",
      image: ceremony2,
    },
    {
      number: "05",
      title: "THE 'OONJAL' CEREMONY",
      titleTamil: "ऊंजल (झूला) समारोह",
      description:
        "The bride and the groom sit on the swing. Friends and relatives display their talent in classical music, providing festivity to the atmosphere. The oonjal (swing) signifies the ups and downs of life.",
      descriptionTamil:
        "दूल्हा-दुल्हन झूले पर बैठते हैं। मित्र और रिश्तेदार पारंपरिक संगीत में अपनी प्रतिभा दिखाते हैं, जिससे माहौल में उत्सव का जान पड़ता है। झूला जीवन के उतार-चढ़ाव का प्रतीक है।",
      image: ceremony3,
    },
    {
      number: "06",
      title: "MANGALYA DHARANAM",
      titleTamil: "मांगल्य धारण",
      description:
        "The most precious moment in one's life. The bride sits on her father's lap. The groom ties the Mangalya Sutra around the bride's neck with prayers for his well-being and for her to live a hundred years.",
      descriptionTamil:
        "किसी के जीवन का सबसे कीमती क्षण। दुल्हन अपने पिता की गोद में बैठती है। दूल्हा प्रार्थनाओं के साथ दुल्हन के गले में मंगलसूत्र बाँधता है, उनकी भलाई और दीर्घायु की कामना करते हुए।",
      image: ceremony4,
    },
    {
      number: "07",
      title: "PANIGRAHANAM",
      titleTamil: "पाणिग्रहण",
      description:
        "The groom holds the bride's right hand and recites the marriage vows in four mantras. He prays to Agni, Saraswathi, and Vayu for blessings, long life, and confluence of mind.",
      descriptionTamil:
        "दूल्हा दुल्हन का दाहिना हाथ पकड़कर चार मंत्रों में विवाह शपथ पढ़ता है। वह अग्नि, सरस्वती और वायु से आशीर्वाद, दीर्घायु और मानसिक एकता की प्रार्थना करता है।",
      image: ceremony5,
    },
    {
      number: "08",
      title: "NALANGU",
      titleTamil: "नलंगु (परंपरागत विवाह उत्सव)",
      description:
        "The evening of the marriage day is the time to relax and play. The newly-wed wife calls her husband for play, inviting him through a song. Much to the merriment of all gathered, there follows a series of playful events and laughter.",
      descriptionTamil:
        "विवाह के दिन की शाम आराम और खेलकूद का समय होती है। नवविवाहित दम्पति एक-दूसरे को खेल के लिए बुलाते हैं और गीतों से आमंत्रित करते हैं। सभी उपस्थित लोग हँसी और खेल-खेल में शामिल होते हैं।",
      image: ceremony6,
    },
  ];

  const toggleTranslation = (index) => {
    setTranslations((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <div id="organization" className="organization section-padding">
      <div className="container">
        <div className="row">
          <div className="col-md-12 mb-30 text-center">
            <span className="oliven-title-meta">Vivaha Vaibhavam</span>
          </div>
        </div>
        <div className="ceremonies-list">
          {ceremonies.map((ceremony, index) => (
            <div key={index} className="ceremony-item">
              <div className="ceremony-image-wrapper">
                <img
                  src={ceremony.image}
                  alt={ceremony.title}
                  className="ceremony-image"
                />
                <div className="image-border-effect"></div>
              </div>
              <div className="ceremony-text">
                <div className="ceremony-header">
                  <h2 className="custom-font ceremony-number">
                    {ceremony.number}
                  </h2>
                  <button
                    className="invitation-translate-btn"
                    onClick={() => toggleTranslation(index)}
                    aria-label={
                      translations[index] ? "Show English" : "Show Tamil"
                    }
                    title={
                      translations[index]
                        ? "Switch to English"
                        : "Switch to Tamil"
                    }
                  >
                    {translations[index] ? "A" : "अ"}
                  </button>
                </div>
                <h5 className="ceremony-title">
                  {translations[index] ? ceremony.titleTamil : ceremony.title}
                </h5>
                <div className="title-underline"></div>
                <p className="ceremony-description">
                  {translations[index]
                    ? ceremony.descriptionTamil
                    : ceremony.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Organization;
