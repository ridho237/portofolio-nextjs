import Nav from './components/navbar';
import Hero from './layout/herosection';
import SkillSection from './layout/skillsection';
import CertSection from './layout/certsection';
import Aboutsection from './layout/aboutsection';
import Contactsection from './layout/contactsection';
import Footer from './layout/footersection';

export default function Home() {
	return (
		<main>
			<Nav></Nav>
			<Hero></Hero>
			<SkillSection></SkillSection>
			<CertSection></CertSection>
			<Aboutsection></Aboutsection>
			<Contactsection></Contactsection>
			<Footer></Footer>
		</main>
	);
}
