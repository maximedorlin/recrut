

// import { getDefaultMiddleware } from '@reduxjs/toolkit'
import { configureStore } from '@reduxjs/toolkit';
import UserInterface from '../interfaces/UserInterface';
import SondageInterface from '../interfaces/SondageInterface';
import PostulantInterface from '../interfaces/PostulantInterface';
import MailInterface from '../interfaces/MailInterface';
import JobInterface from '../interfaces/JobInterface';
import EvaluationInterface from '../interfaces/EvaluationInterface';
import DocumentInterface from '../interfaces/DocumentInterface';
import DomaineCompetenceInterface from '../interfaces/DomaineCompetenceInterface';
import CritereEvalInterface from '../interfaces/CritereEvalInterface';
import CritereEvalNoteInterface from '../interfaces/CritereEvalNoteInterface';
import CompetenceInterface from '../interfaces/CompetenceInterface';
import PostulerInterface  from '../interfaces/CandidatureInterface';


const store = configureStore({
  reducer: {
    user: UserInterface,
    sondage: SondageInterface,
    postulant: PostulantInterface,
    mail: MailInterface,
    job: JobInterface,
    evaluation: EvaluationInterface,
    document: DocumentInterface,
    domaineCompetence: DomaineCompetenceInterface,
    critereEval: CritereEvalInterface,
    critereEvalNote: CritereEvalNoteInterface,
    competence: CompetenceInterface,
    postuler: PostulerInterface,
  },
//   middleware: customizedMiddleware,
});

export default store;
