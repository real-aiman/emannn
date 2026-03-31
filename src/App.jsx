import Header from "./components/Header";
import Profile from "./components/Profile";  
import Objective from "./components/Objective";
import Education from "./components/Education";
import Experience from './components/Experience';
import Skills from './components/Skills';
import Footer from './components/Footer';
import './index.css';

export default function App() {
  return ( 

    <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '800px', margin: 'auto', lineHeight: '1.5' }}>
      
      <table width="100%" cellSpacing="0" cellPadding="0" border="1" style={{ borderCollapse: 'collapse' }}>
        <tbody>
          <tr>
            <td style={{ padding: '0', margin: '0', verticalAlign: 'middle' }}>
              <Header />
            </td>
            <td style={{ padding: '0', margin: '0', textAlign: 'center', verticalAlign: 'middle', width: '130px', height: '160px' }}>
              <Profile />
            </td>
          </tr>
        </tbody>
      </table>

      <Objective />
      <Education />
      <Experience />
      <Skills />
      <Footer />
    </div>
  );
}