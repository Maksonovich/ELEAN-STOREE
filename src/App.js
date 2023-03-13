//IMPORT REACT APP PACKAGES
import { Route, Routes } from 'react-router';
import { useEffect, useState } from 'react';

//IMPORT APP PAGES
import Layout from './Layout/Layout';
import Contact from './pages/Contact/Contact';
import Deliver from './pages/deliver/deliver';
import ShowRoom from "./pages/showRoom/ShowRoom"
import Home from './pages/Home/Home';
import Like from './pages/Like/Like';
import Zakaz from './pages/Zakaz/Zakaz';
import Primerka from './pages/Primerka/Primerka';
import Obmen from './pages/deliver/obmen';
import Voz from './pages/deliver/voz';
import Pay from './pages/deliver/pay';
import Modal24 from './pages/modal/modal24';
import Review from './pages/Review/Review';

//IMPORT CATALOG
import Catalog from './pages/Catalog/Catalog';

//IMPORT DOP SCSS CSS PACKAGES
import './sass/style.scss'

//IMPORT REGISTRATION PAGES
import SignUp from './pages/Sign-Up/SignUp';
import SignIn from './pages/Sign-In/SignIn';
import UserPage from './pages/UserPage/UserPage';

//IMPORT CONTEXT
import Brand from './pages/Brand/Brand';
import Favorite from './pages/Favorite/Favorite';
import Decor from './pages/Decor/Decor';
import ModalKama from './pages/modal/modalKama';
import MakeAnOrder from './pages/MakeAnOrder/MakeAnOrder';
import Makesense from './pages/MakeAnOrder/Makesense';
import Modal26 from './pages/modal/modal26';
import Modal28 from './pages/modal/modal28';
import Decoration from './pages/Decoration/decoration';
import ModalComplete from './pages/modal/complete';

function App() {

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      {
        loading ? (
          <div className="loader-container">
            <div className="spinner"></div>
          </div>
        ) : (
          <Routes>
            <Route
              path=''
              element={<Layout />}
            >
              <Route
                path='/'
                element={<Home />}
              />
              <Route
                path='deliver'
                element={<Deliver />}
              />
              <Route
                path='like'
                element={<Like />}
              />
              <Route
                path='Contact'
                element={<Contact />}
              />
              <Route
                path='showRoom'
                element={<ShowRoom />}
              />
              <Route
                path='Primerka'
                element={<Primerka />}
              />
              <Route
                path='zakaz'
                element={<Zakaz />}
              />
              <Route
                path='obmen'
                element={<Obmen />}
              />
              <Route
                path='voz'
                element={<Voz />}
              />
              <Route
                path='pay'
                element={<Pay />}
              />
              <Route
                path='size'
                element={<Modal24 />}
              />
              <Route
                path='notHave'
                element={<Modal26 />}
              />
              <Route
                path='Catalog'
                element={<Catalog />}
              />
              <Route
                path='Brand'
                element={<Brand />}
              />
              <Route
                path='Favorite'
                element={<Favorite />}
              />
              <Route
                path='Decor'
                element={<Decor />}
              />
              <Route
                path='Review'
                element={<Review />}
              />
              <Route
                path='Decoration'
                element={<Decoration />}
              />
              <Route
              path='djkama'
              element={<ModalKama/>}
              />
              <Route
              path='Thanks'
              element={<ModalComplete/>}
              />
              <Route
                path='/MakeAnOrder'
                element={<Makesense />}
              />
              <Route
                path='/complete'
                element={<ModalKama />}
              />
            </Route>
            <Route
              path="/signup"
              element={<SignUp />}
            />
            <Route
              path="/signin"
              element={<SignIn />}
            />
            <Route
              path='/userpage'
              element={<UserPage />}
            />
          </Routes>
        )
      }
    </>
  );
};

export default App;
