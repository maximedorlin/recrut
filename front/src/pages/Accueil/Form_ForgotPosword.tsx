import LoadingButton from "../../components/button/LodingButton";
import Footer from "../../components/scenes/footer";
import Navbar1 from "../../components/scenes/navbar";
// import '../../asset/css/offre.css';
// import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';

const ForgotPassword = () => {
  return (
    <>
      {/*<Breadcrumb pageName="Form Candidat" />*/}

      <Navbar1 />
      <div className="mt-40">
        {/* <h1 style={{ textAlign: 'center', fontWeight: 'bold' }}>Crée un compte</h1> */}
        <div >

          <div className="grid grid-cols-1 gap-9 sm:grid-cols-1 m-30">
            <div className="flex flex-col gap-9">
              {/* <!-- Input Fields --> */}
              <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
                  <h3 className="font-medium text-black dark:text-white" style={{ fontSize: '1.4rem' }}>
                    Obtenir un nouveau mot de pass
                  </h3>
                </div>
                <form action="#">
                  <div className="p-6.5">
                    <div className="mb-4.5">
                      <label htmlFor="email" className="mb-2.5 block text-black dark:text-white">
                        Entrez votre adresse email  <span className="text-meta-1">*</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        placeholder="Entrez votre adresse email"
                        required
                        className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                      />
                    </div>

                    {/* <button
                        type="submit"
                        className="flex w-full justify-center hover:bg-opacity-90"
                      >
                        <LoadingButton/>
                      </button> */}

                    <button
                      type="submit"
                      className="flex ml-auto justify-center text-green-500 p-2 rounded-md border border-green-500 hover:bg-green-500 hover:text-white"
                    >
                      Soumetre
                    </button>
                  </div>
                </form>
              </div>
            </div>

            {/* Additional content can be added here */}
            <div className="flex flex-col gap-9"></div>
          </div>
        </div>
      </div>
      {/* <Footer/> */}
    </>
  );
};

export default ForgotPassword;
