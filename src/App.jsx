import './App.css';
import FooterComponent from './components/FooterComponent.jsx';
import HeaderComponent from './components/HeaderComponent.jsx';
import HeroSectionComponent from './components/HeroSectionComponent.jsx';
import ProjectComponent from './components/ProjectComponent.jsx';
import SkillsSectionComponent from './components/SkillComponent.jsx';

function App() {
  return (
    <div data-theme="driptown" className="relative min-h-screen overflow-hidden">
      <HeaderComponent />
      <div id="hakkimda" className="flex justify-center p-10">
        <HeroSectionComponent />
      </div>
      <div id="öneçıkanlar" className="flex pt-10 justify-center">
        <ProjectComponent />
      </div>
      <div id="yeteneklerim" className="flex pt-10 justify-center">
        <SkillsSectionComponent />
      </div>
      <FooterComponent />
    </div>
  );
}

export default App;
