import Navbar1 from "../../components/scenes/navbar";
import th2 from '../../asset/images/user/th2.png';

const ForgotPassword = () => {
  return (
    <>

      <Navbar1 />
      <div className='mt-[-50]'>


      <div
        style={{
          backgroundImage: `url(${th2})`, // Appliquer l'image d'arrière-plan
          backgroundPosition: 'center', // Centrer l'image
          backgroundSize: 'cover', // Couvrir toute la zone
          backgroundRepeat: 'no-repeat', // Ne pas répéter l'image
          height: '100vh', // Hauteur de l'écran entier
        }}
      >
        <div className="mt-40">
          <div >

            <div className="grid grid-cols-1 gap-9 sm:grid-cols-1 m-30">
              <div className="flex flex-col gap-9">
                {/* <!-- Input Fields --> */}
                <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                  <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
                    <div className="flex items-center justify-center h-full">
                      <h1 className="mb-9 text-2xl font-bold text-black dark:text-white sm:text-title-xl2 text-green-500" style={{ fontSize: '1.4rem' }}>
                        Obtenir un nouveau mot de pass
                      </h1>
                    </div>

                  </div>
                  <form action="#">
                    <div className="p-6.5">
                      <div className="mb-4.5">
                        <label htmlFor="email" className="mb-2.5 block text-black dark:text-white">
                          Entrez votre adresse email
                          <span className="text-meta-1">*</span>
                        </label>
                        <input
                          id="email"
                          type="email"
                          placeholder="Entrez votre adresse email"
                          required
                          className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                        />
                      </div>
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
      </div>
    </div >
    </>
  );
};

export default ForgotPassword;
