export const fallbackNoImage = "/noimage.svg";
export const cardThemeColors = "bg-white dark:bg-zinc-900";
export const bodyThemeColors =
    "bg-gray-100 text-gray-800 dark:bg-zinc-800 dark:text-zinc-100";
export const formFieldStyle = 
    "w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline";

export const getUrlComponents = () => {
    const protocol = process.env.NEXT_PUBLIC_ROOT_PROTOCOL;
    const rootHost = process.env.NEXT_PUBLIC_ROOT_DOMAIN;
    const profileHost = rootHost.includes("localhost") ? rootHost : "hbar.im";

    return {
        protocol,
        rootHost,
        profileHost
    }
}

export const AUTHORIZED_COLLECTIONS = ["0.0.5280977", "0.0.5285901"]

// gets an id string like the ones in Firebase
export const pseudoRandId = () => {
    const CHARS =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let autoId = "";

    for (let i = 0; i < 20; i++) {
        autoId += CHARS.charAt(Math.floor(Math.random() * CHARS.length));
    }
    return autoId;
};

export const isNullAddress = (addr) => {
    return addr === "0x0000000000000000000000000000000000000000";
};

export const splitHexAddress = (addr) => {
    if (!addr) return "0x0";
    return `${addr.slice(0, 6)}...${addr.slice(addr.length - 4)}`;
}

export const toFixedIfNecessary = (value, dp) => {
    return +parseFloat(value).toFixed(dp);
}

export const divideByDecimals = (num, decimals) => {
	const divider = parseInt(`1${Array(decimals).fill(0).join('')}`);
	return toFixedIfNecessary(num/divider, 8);
}

export const multiplyByDecimals = (num, decimals) => {
	const multiplier = parseInt(`1${Array(decimals).fill(0).join('')}`);
	return toFixedIfNecessary(num*multiplier, 8);
}

export function sleep(ms) {
    return new Promise((val) => setTimeout(val, ms));
}

export async function postJSON(url, data) {
    let result = null;
    try {
      const response = await fetch(url, {
        method: "POST", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
  
      result = await response.json();
    } catch (error) {
      console.error("Error:", error);
    }

    return result
}