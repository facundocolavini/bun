import fetchUser from './githubApi'

(async ()=>{
    const userData = await fetchUser('facundocolavini')
    document.querySelector('h1').innerHTML = JSON.stringify(userData)
})();