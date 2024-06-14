"use server"

const fs = require('fs');
const pg = require('pg');
const url = require('url');

const ADMIN_PASSWORD = '~"/9VWb8rDgJmESJGu8:b/%;mZ$Z/=*vJ"eisz-b7/WHsmSzz06yf4:#-g,h1W"_';
const DATABASE_URL = "84.235.229.201";
const DB_PORT = 5432;
const USERNAME = 'portefoliosrv1';
const TARGET_DB = 'portefolio-content';

const configPublic = {
    user: USERNAME,
    password: ADMIN_PASSWORD,
    host: DATABASE_URL,
    port: DB_PORT,
    database: TARGET_DB,
};

/**
 * Execute one request on the server by automatically connecting the client to the database, making the request and closing the connection.
 * @param {Request to execute on the DATABASE SERVER} request 
 * @param {Parameters for the request (not mandatory)} params 
 */
let execOneRequest = async (request, params) => {
    const DB_CLIENT = new pg.Client(configPublic);
    try {
        DB_CLIENT.connect();
        let res;
        if (params == null || params == undefined) {
            res = await DB_CLIENT.query(request);
        } else {
            res = await DB_CLIENT.query(request, params);
        }
        DB_CLIENT.end();
        return res;
    } catch (err) {
        throw err;
    }
}

export async function getProgLang(cid) {
    let results = await execOneRequest(`SELECT pdpname FROM cplangs INNER JOIN plangs ON cplangs.plid = plangs.plid WHERE cid=${cid}`).catch(err => {
        throw err;
    });
    return JSON.stringify(results.rows);

}

export async function getAllRetexIds(lang) {
    if (lang == null || lang == undefined) {
        lang = 'fr';
    }
    let results = await execOneRequest(`SELECT cid FROM ${lang} INNER JOIN ctypes ON ctypes.tyid = ${lang}.ctype WHERE ctypes.tylabel = 'retex' ORDER BY cdate ASC`).catch(err => {
        throw err;
    });
    return JSON.stringify(results.rows);
}

export async function getRetexFromID(lang, id) {
    if (lang == null || lang == undefined) {
        lang = 'fr';
    }
    let results = await execOneRequest(`SELECT * FROM ${lang} WHERE cid = ${id}`).catch(err => {
        throw err;
    });
    return JSON.stringify(results.rows);
}

export async function getAllLang() {
    let results = await execOneRequest("SELECT * FROM lang ORDER BY llabel").catch(err => {
        throw err;
    });
    return JSON.stringify(results.rows);
}

export async function getAllLangllabel() {
    let results = await execOneRequest("SELECT llabel FROM lang").catch(err => {
        throw err;
    });
    return JSON.stringify(results.rows);
}

export async function getDescription(lang) {
    let res = await execOneRequest(`SELECT cdesc FROM ${lang} INNER JOIN ctypes ON ${lang}.ctype = ctypes.tyid WHERE ctypes.tylabel = 'description'`).catch(err => {
        throw err;
    });;
    res = res.rows;
    res = res[0];
    res = res.cdesc;
    return JSON.stringify(res);
}