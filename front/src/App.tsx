import { useEffect, useState } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import Loader from './common/Loader';
import PageTitle from './components/PageTitle';
import Connection from './pages/Login/Connection';
import DefaultLayout from './layout/DefaultLayout';
import Settings from './pages/Settings';
import Form_Utilisateur from './pages/Utilisateur/Form_Utilisateur';
import Form_Sondage from './pages/Sondage/Form_Sondage';
import Liste_Sondage from './pages/Sondage/Liste_Sondage';
import Form_Evaluation from './pages/Evaluation/Form_Evaluation';
import Liste_Utilisateure from './pages/Utilisateur/Liste_Utilisateur';
import Liste_Candidat from './pages/Candidat/List_Candidat';
import Accueil from './pages/Accueil/Accueil';
import Accueil_d from './pages/Dashboard/Accueil_d';
import Connection_Cand from './pages/Login/Connection_Cand';
import Profil from './pages/Candidat/Profil';
import P404 from './pages/erreur/404';
import Liste_Evaluation from './pages/Evaluation/Liste_Evaluation';
import Liste_Mail from './pages/Mail/Liste_Mail';
import Form_Mail from './pages/Mail/Form_Mail';
import Form_Question from './pages/Evaluation/question.tsx';
import Compte from './pages/Accueil/Compte.tsx';
import ForgotPassword from './pages/Accueil/ForgotPosword.tsx';
import Postuler from './pages/Accueil/Postuler.tsx';
import Form_Offre_A from './pages/Offre_A/Form_Offre_A.tsx';
import Liste_Offre_A from './pages/Offre_A/Liste_Offre_A.tsx';
import Mes_Infos from './pages/Candidat/Mes_Infos.tsx';
import SignUp from './pages/Login/Deconnecter.tsx';
import Deconnecter from './pages/Login/Deconnecter.tsx';

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
      <Route path="/" element={<Navigate to="/web" />} />
      <Route path="/web" element={<Accueil />} />
      <Route path="login" element={<Connection
      //  onLogin={undefined} 
      />} />
      <Route path="compte" element={<Compte />} />
      <Route path="forgot_password" element={<ForgotPassword />} />
      <Route path="Connection_Cand" element={<Connection_Cand />} />
      <Route
        path="Postuler"
        element={
          <>
            <PageTitle title="Postuler | AFT_RECRUTEMENT" />
            <Postuler />
          </>
        }
      />

      <Route
        path="Infos_Candidat"
        element={
          <>
            <PageTitle title="Mes_Infos | AFT_RECRUTEMENT" />
            <Mes_Infos />
          </>
        }
      >
        <Route
          index
          path="Mes_Infos"
          element={
            <>
              <PageTitle title="Profil | AFT_RECRUTEMENT" />
              <Profil />
            </>
          }
        />
        <Route
          path="Form_Evaluation"
          element={
            <>
              <PageTitle title="Form Evaluation | AFT_RECRUTEMENT" />
              <Form_Evaluation />
            </>
          }
        />
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

        <Route path="Sondage">
          <Route
            path="Form_Sondage"
            element={
              <>
                <PageTitle title="Form Sondage | AFT_RECRUTEMENT" />
                <Form_Sondage />
              </>
            }
          />
          <Route
            path="Liste_Sondage"
            element={
              <>
                <PageTitle title="Liste Sondage | AFT_RECRUTEMENT" />
                <Liste_Sondage />
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

        <Route path="Evaluation">
          <Route
            path="Form_Evaluation"
            element={
              <>
                <PageTitle title="Form Evaluation | AFT_RECRUTEMENT" />
                <Form_Evaluation />
              </>
            }
          />
          <Route
            path="Liste_Evaluation"
            element={
              <>
                <PageTitle title="Liste Evaluation | AFT_RECRUTEMENT" />
                <Liste_Evaluation />
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

        <Route path="Candidat">
          {/* <Route
            path="Form_Candidat"
            element={
              <>
                <PageTitle title="Form Candidat | AFT_RECRUTEMENT" />
                <Form_Candidat />
              </>
            }
          /> */}
          <Route
            path="Liste_Candidat"
            element={
              <>
                <PageTitle title="Liste Candidat | AFT_RECRUTEMENT" />
                <Liste_Candidat />
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

        <Route path="Mail">
          <Route
            path="Form_Mail"
            element={
              <>
                <PageTitle title="Form Mail | AFT_RECRUTEMENT" />
                <Form_Mail />
              </>
            }
          />
          <Route
            path="Liste_Mail"
            element={
              <>
                <PageTitle title="Liste Mail | AFT_RECRUTEMENT" />
                <Liste_Mail />
              </>
            }
          />
        </Route>

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
      <Route
        path="Deconnecter"
        element={
          <>
            <PageTitle title="Deconnecter | AFT_RECRUTEMENT" />
            <Deconnecter />
          </>
        }
      />
    </Routes>
  );
}

export default App;
