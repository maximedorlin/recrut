import { useEffect, useState } from 'react';
import {Route, Routes, useLocation } from 'react-router-dom';
import Loader from './common/Loader';
import PageTitle from './components/PageTitle';
import Connection from './pages/Login/Connection';
import DefaultLayout from './layout/DefaultLayout';
import Settings from './pages/Settings';
import Form_Utilisateur from './pages/Utilisateur/Form_Utilisateur';
import Liste_Utilisateure from './pages/Utilisateur/Liste_Utilisateur';
import Liste_Candidature from './pages/Candidature/List_Candidature.tsx';
import Accueil from './pages/Accueil/Accueil';
import Accueil_d from './pages/Dashboard/Accueil_d';
import Connection_Cand from './pages/Login/Connection_Cand';
import Profil from './pages/Candidature/Profil.tsx';
import P404 from './pages/erreur/404';
import Compte from './pages/Accueil/Compte.tsx';
import ForgotPassword from './pages/Accueil/ForgotPosword.tsx';
import Postuler from './pages/Accueil/Candidature.tsx';
import Form_Offre_A from './pages/Offre_Emploi/Form_Offre_Emploi.tsx';
import Liste_Offre_A from './pages/Offre_Emploi/Liste_Offre_Emploi.tsx';
import Mes_Infos from './pages/Candidature/Mes_Infos.tsx';
import Liste_Question from './pages/Question/Liste_Question.tsx';
import Form_Question from './pages/Question/Form_Question.tsx';

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
        <Route path="/" index element={<Accueil />} />

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
          path="/web/Postuler"
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
            index
            element={
              <>
                <PageTitle title="Profil | AFT_RECRUTEMENT" />
                <Profil />
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
          {/* <Route
            path="Form_Candidature"
            element={
              <>
                <PageTitle title="Form Candidature | AFT_RECRUTEMENT" />
                <Form_Candidature />
              </>
            }
          /> */}
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
          path="settings"
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

      <Route
        path="Profil"
        element={
          <>
            <PageTitle title="Profil | User" />
            <Profil />
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
    </Routes>
  );
}

export default App;
