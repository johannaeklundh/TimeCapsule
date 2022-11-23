import ImageGallery from "react-image-gallery";
import Grupp1 from "../gruppbild1.jpg";
import Grupp2 from "../gruppbild2.jpg";
import Grupp3 from "../gruppbild3.jpg";
import EE from "../EbbaEmil.jpg";

const images = [
  {
    original: Grupp1,
    thumbnail: Grupp1,
  },
  {
    original: Grupp2,
    thumbnail: Grupp2,
  },
  {
    original: Grupp3,
    thumbnail: Grupp3,
  },
  {
    original: EE,
    thumbnail: EE,
  },
];
const SlideShow = () => {
  return <ImageGallery items={images} />;
};
export default SlideShow;
