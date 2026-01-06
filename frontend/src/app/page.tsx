import FooterSection from '@/widgets/Footer/Footer';
import Header from "@/widgets/Header/Header";
import HelloSectionSSR from "@/widgets/HelloSection/HelloSectionSSR";
import MotivationSection from '@/widgets/MotivationSection/MotivationSection';
import SliderSection from '@/widgets/SliderSection/SliderSection';

export default async function Home() {
  return (
    <div>
        <Header/>
      <main>
        <HelloSectionSSR/>
        <SliderSection/>
        <MotivationSection/>
      </main>
      <FooterSection/>
    </div>
  );
}
