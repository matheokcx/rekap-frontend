import Navbar from '@/components/UI/Landing/Navbar/Navbar.tsx';
import HeroSection from '@/components/UI/Landing/HeroSection/HeroSection.tsx';
import ProblemSection from '@/components/UI/Landing/ProblemSection/ProblemSection.tsx';
import ProcessSection from '@/components/UI/Landing/ProcessSection/ProcessSection.tsx';
import PricingSection from '@/components/UI/Landing/PricingSection/PricingSection.tsx';
import WaitlistSection from '@/components/UI/Landing/WaitlistSection/WaitlistSection.tsx';
import Footer from '@/components/UI/Landing/Footer/Footer.tsx';

const HomePage = () => {
    return (
        <>
            <Navbar />
            <HeroSection />
            <ProblemSection />
            <ProcessSection />
            <PricingSection />
            <WaitlistSection />
            <Footer />
        </>
    );
};

export default HomePage;
