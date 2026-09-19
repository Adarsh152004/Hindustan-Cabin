import Slider from '../component/slider';
import ProductShowcase from '../component/ProductShowcase';
import About from '../component/About';





export default function Home() {
  return (
    <div className="-mt-[72px] xl:-mt-[112px]">
      <Slider/>
      <ProductShowcase/>
      <About/>
    </div>
  );
}

