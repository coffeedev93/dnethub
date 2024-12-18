import { HashConnectConnectionState } from "hashconnect";
import { useApp } from "@/src/context";

const ConnectButton = () => {
    const {
        data: { pairingData, connectionStatus },
        fn: { connect, disconnect }
    } = useApp()

    const handleClick = async () => {
        if (connectionStatus !== HashConnectConnectionState.Paired) {
            connect();
        }
        else {
            const x = confirm("Do you want to disconnect this wallet?");
            if (x) disconnect();
        }
    }

    console.log(connectionStatus)
    return (
        <button 
            type="button" 
            className="flex text-sm px-5 py-2 text-slate-900 rounded-md bg-pink-300 focus:outline-none"
            onClick={() => handleClick()}
        >
            <div>
                {
                    connectionStatus === HashConnectConnectionState.Paired ?
                    <span className="block text-md">{pairingData.accountIds[0]}</span> :
                    <span className="block text-md">Connect Wallet</span>
                }
            </div>
        </button>
    )
}

export default ConnectButton;