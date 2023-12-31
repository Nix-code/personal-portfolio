import { FC } from "react";
import {
  HeroBodyContainer,
  HeroBodyDescriptionContainer,
  HeroBodyImage,
  HeroTypeWriterContainer,
} from "../../../assets/styles/herobody/herobodystyle";
import BgImage from "../../../assets/images/hero-background-representational-image.png";
import TypeWriterEffect from "../typewriter/TypeWriterEffect";
import customizedDevData from "../../../assets/config/developer_data/customizedev";
const HeroBodyWithHeroImageAssociation: FC = () => {
  const { developer_quote, herobody_img_description, typeWriter_speed } = customizedDevData;
  return (
    <div id = "/">
    <HeroBodyContainer>
      <HeroBodyImage src={BgImage} alt={herobody_img_description} />
      <HeroBodyDescriptionContainer>
        <HeroTypeWriterContainer>
          <TypeWriterEffect fullText={developer_quote} typeWriterSpeed={typeWriter_speed} />
        </HeroTypeWriterContainer>
      </HeroBodyDescriptionContainer>
    </HeroBodyContainer>
    </div>
  );
};

export default HeroBodyWithHeroImageAssociation;
