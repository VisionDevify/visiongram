import { getProviders, signIn as SignIntoProvider} from "next-auth/react";
import Header from "../../components/Header"
import visionlogo from '/images/vision-logo.png'
import Image from "next/image"

//Browser...
function signIn({ providers }) {
    return (
        <>
        <Header />
        <div className="flex flex-col items-center justify-center min-h-screen py-2 px-14 text-center">
        <div className="w-80">
            <Image src={visionlogo} alt="visionlogo" />
            <p className="font-xs italic mt-5">
                DISCLAIMER: VisionGram is not a real WebApp and it was built by Vision for display and educational purposes.
            </p>
        </div>

        <div className="mt-40">
      {Object.values(providers).map((provider) => (
        <div key={provider.name}>
          <button  className="p-3 bg-blue-500 rounded-lg text-white"onClick={() => SignIntoProvider(provider.id, {callbackUrl: '/'})}>
            Sign in with {provider.name}
          </button>
        </div>
      ))}
        </div>
    </div>


    </>
    )
}

export async function getServerSideProps() {
    const providers = await getProviders();

    return {
        props: {
            providers
        }
    }
}

export default signIn
