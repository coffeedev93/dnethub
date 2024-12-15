import axios from "axios";
import { v4 as uuidv4 } from 'uuid';

const hederaBaseAPI = "https://testnet.mirrornode.hedera.com";

const request = async ({url, fname, method = 'GET', data = null, _baseURL = null}) => {
	const instance = axios.create();
	const baseURL = _baseURL;
	return instance.request({
		baseURL,
		url,
		method,
		data
	})
	.then(response => response.data)
	.catch(err => {
		const { message, response:{data, status} } = err;
		console.log(`request error in %c ${fname}`, 'font-weight:900');
		console.log(message);
		return { err: true, errmsg: message, ...data };
	})
}

export async function getAccountInfo(accountId) {
    const response = await request({
        _baseURL: hederaBaseAPI,
        url: `/api/v1/accounts/${accountId}`,
        fname: 'getAccountInfo'
    });

    return response;
}

export async function getAccountTokens(accountId) {
    const response = await request({
        _baseURL: hederaBaseAPI,
        url: `/api/v1/tokens?account.id=${accountId}`,
        fname: 'getAccountTokens'
    });

    return response;
}

export async function getAccountNfts(accountId) {
    const response = await request({
        _baseURL: hederaBaseAPI,
        url: `/api/v1/accounts/${accountId}/nfts`,
        fname: 'getAccountNfts'
    });

    return response;
}

export async function getTokenInfo(tokenId) {
    const response = await request({
        _baseURL: hederaBaseAPI,
        url: `/api/v1/tokens/${tokenId}`,
        fname: 'getTokenInfo'
    });

    return response;
}

export async function getNftInfo(tokenId, serialNumber) {
    const response = await request({
        _baseURL: hederaBaseAPI,
        url: `/api/v1/tokens/${tokenId}/nfts/${serialNumber}`,
        fname: 'getTokenInfo'
    });

    return response;
}