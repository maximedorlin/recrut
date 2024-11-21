import { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Loader from './common/Loader';
import PageTitle from './components/autres/PageTitle.tsx';
import Connection from './pages/Accueil/Form_Connection.tsx';
import DefaultLayout from './layout/DefaultLayout';
import Form_Utilisateur from './pages/Dashboard/Form_Utilisateur.tsx';
import Liste_Utilisateure from './pages/Dashboard/Liste_Utilisateur.tsx';
import Liste_Candidature from './pages/Dashboard/List_Candidature.tsx';
import Accueil from './pages/Accueil/Accueil';
import Accueil_d from './pages/Dashboard/Accueil_d';
import Connection_Cand from './pages/Accueil/Form_Connection_Cand.tsx';
import P404 from './pages/404.tsx';
import Compte from './pages/Accueil/Form_Compte.tsx';
import ForgotPassword from './pages/Accueil/Form_ForgotPosword.tsx';
import Postuler from './pages/Accueil/Form_Candidature.tsx';
import Form_Offre_A from './pages/Dashboard/Form_Offre_Emploi.tsx';
import Liste_Offre_A from './pages/Dashboard/Liste_Offre_Emploi.tsx';
import Mes_Infos from './pages/Accueil/Mes_Infos.tsx';
import Liste_Question from './pages/Dashboard/Liste_Question.tsx';
import Form_Question from './pages/Dashboard/Form_Evaluation.tsx';
import Offre from './pages/Accueil/Form_Offre.tsx';
import Form_Candidature from './pages/Accueil/Form_Candidature.tsx';
import Profile from './pages/Dashboard/Form_Profile.tsx';
import Settings from './pages/Dashboard/Settings.tsx';

function App() {

  const [loading, setLoading] = useState<boolean>(true);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <Routes>
      {/* Public Routes */}
      <Route>
        <Route path="/web" index element={<Accueil />} />

        <Route
          path="/web/login"
          element={
            <>
              <PageTitle title="login | AFT_RECRUTEMENT" />
              <Connection />
            </>
          }
        />

        <Route
          path="/web/offre"
          element={
            <>
              <PageTitle title="offre | AFT_RECRUTEMENT" />
              <Offre />
            </>
          }
        />


        <Route
          path="/web/compte"
          element={
            <>
              <PageTitle title="compte | AFT_RECRUTEMENT" />
              <Compte />
            </>
          }
        />

        <Route
          path="/web/forgot_password"
          element={
            <>
              <PageTitle title="forgot_password | AFT_RECRUTEMENT" />
              <ForgotPassword />
            </>
          }
        />

        <Route
          path="/web/Connection_Cand"
          element={
            <>
              <PageTitle title="Connection_Cand | AFT_RECRUTEMENT" />
              <Connection_Cand />
            </>
          }
        />

        <Route
          path="/web/postuler"
          element={
            <>
              <PageTitle title="Postuler | AFT_RECRUTEMENT" />
              <Postuler />
            </>
          }
        />

        <Route path="/web/Infos_Candidat" element={
          <>
            <PageTitle title="Mes_Infos | AFT_RECRUTEMENT" />
            <Mes_Infos />
          </>
        }>
          <Route
            path="Form_Question"
            element={
              <>
                <PageTitle title="Form Question | AFT_RECRUTEMENT" />
                <Form_Question />
              </>
            }
          />
        </Route>
      </Route>




      {/* Protected Routes with DefaultLayout */}
      <Route path="/dashboard" element={<DefaultLayout />}>
        <Route index element={<Accueil_d />} />

        <Route path="Utilisateur">
          <Route
            path="Form_Utilisateur"
            element={
              <>
                <PageTitle title="Form Utilisateure | AFT_RECRUTEMENT" />
                <Form_Utilisateur />
              </>
            }
          />
          <Route
            path="Liste_Utilisateure"
            element={
              <>
                <PageTitle title="Liste Utilisateurs | AFT_RECRUTEMENT" />
                <Liste_Utilisateure />
              </>
            }
          />
        </Route>

        <Route path="Offre_A">
          <Route
            path="Form_Offre_A"
            element={
              <>
                <PageTitle title="Form Offre A | AFT_RECRUTEMENT" />
                <Form_Offre_A />
              </>
            }
          />
          <Route
            path="Liste_Offre_A"
            element={
              <>
                <PageTitle title="Liste Offre A | AFT_RECRUTEMENT" />
                <Liste_Offre_A />
              </>
            }
          />
        </Route>

        <Route path="Question">
          <Route
            path="Liste_Question"
            element={
              <>
                <PageTitle title="Liste Question | AFT_RECRUTEMENT" />
                <Liste_Question />
              </>
            }
          />
          <Route
            path="Form_Question"
            element={
              <>
                <PageTitle title="Form Question | AFT_RECRUTEMENT" />
                <Form_Question />
              </>
            }
          />
        </Route>

        <Route path="Candidature">
          <Route
            path="Form_Candidature"
            element={
              <>
                <PageTitle title="Form Candidature | AFT_RECRUTEMENT" />
                <Form_Candidature />
              </>
            }
          />
          <Route
            path="Liste_Candidature"
            element={
              <>
                <PageTitle title="Liste Candidature | AFT_RECRUTEMENT" />
                <Liste_Candidature />
              </>
            }
          />
        </Route>

        <Route
          path="Profile"
          element={
            <>
              <PageTitle title="Profile | User" />
              <Profile />
            </>
          }
        />

        <Route
          path="Settings"
          element={
            <>
              <PageTitle title="Settings | AFT_RECRUTEMENT" />
              <Settings />
            </>
          }
        />

        <Route
          path="*"
          element={
            <>
              <PageTitle title="404 | AFT_RECRUTEMENT" />
              <P404 />
            </>
          }
        />
      </Route>


    </Routes>
  );
}

export default App;
