import fs from 'node:fs/promises';

export async function chargerBacklog(path){
    try {
        const rawData = await fs.readFile(path, { encoding: 'utf8' });
        return JSON.parse(rawData);
    } catch (err) {
        console.error(err);
    }
}