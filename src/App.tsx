import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { ScrollToTop } from './components/layout/ScrollToTop';
import { Footer } from './components/layout/Footer';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Contact } from './pages/Contact';

// Products
import { Loans } from './pages/products/Loans';
import { Savings } from './pages/products/Savings';
import { Cards } from './pages/products/Cards';
import { POSTerminals } from './pages/products/POSTerminals';
import { CurrencyConversion } from './pages/products/CurrencyConversion';
import { BusinessAccount } from './pages/products/BusinessAccount';
import { BiometricServices } from './pages/products/BiometricServices';

// Resources
import { Blog } from './pages/resources/Blog';
import { FAQs } from './pages/resources/FAQs';
import { SecurityPrivacy } from './pages/resources/SecurityPrivacy';
import { Downloads } from './pages/resources/Downloads';
import { NotFound } from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Routes>
        {/* Main Pages */}
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />

        {/* Products */}
        <Route path='/products/loans' element={<Loans />} />
        <Route path='/products/savings' element={<Savings />} />
        <Route path='/products/cards' element={<Cards />} />
        <Route path='/products/pos-terminals' element={<POSTerminals />} />
        <Route
          path='/products/currency-conversion'
          element={<CurrencyConversion />}
        />
        <Route
          path='/products/business-account'
          element={<BusinessAccount />}
        />
        <Route
          path='/products/biometric-services'
          element={<BiometricServices />}
        />

        {/* Resources */}
        <Route path='/resources/blog' element={<Blog />} />
        <Route path='/resources/faqs' element={<FAQs />} />
        <Route
          path='/resources/security-privacy'
          element={<SecurityPrivacy />}
        />
        <Route path='/resources/downloads' element={<Downloads />} />
        {/* 404 */}
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
