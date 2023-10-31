import axios from 'axios'

async function fetchUser(user:any){
    const res = await axios.get('https://api.github.com/users/'+ user)

    return res.data
}


export default fetchUser