import fetchUser from './githubApi'
import { createDocumentRegistry } from 'typescript'



(async ()=>{
    const userData = await fetchUser('facundocolavini')
    document.querySelector('h1').innerHTML = JSON.stringify(userData)
})();