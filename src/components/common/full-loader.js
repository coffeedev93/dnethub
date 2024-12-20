import { useApp } from '@/src/context';

function FullLoader() {
    const { 
        data:{ loaderMessage }
    } = useApp();

    if (loaderMessage === null) {
        return <></>
    }

    return (
        <div className="w-full h-screen fixed top-0 left-0 flex flex-col justify-center items-center z-10000 bg-black bg-opacity-60">
           <span className="loader_sq"></span>
           <div className="text-white text-md my-5 font-sans font-semibold">{ loaderMessage }</div>
        </div>
    )
}

export default FullLoader;