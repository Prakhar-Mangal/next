import Layout from '../components/Layout'
import Prices from '../components/Prices'
import axios from 'axios'

const Index = (props) =>  (
    <Layout>
    <div>
    <h1 className="text-success">Welcome to BitzCost</h1>
    <p>Check current bitcoin rates</p>
    <Prices bpi={props.bpi}/>
    
    </div>
    </Layout>
);

Index.getInitialProps = async function() {
    let s = []
    await axios.get('https://api.coindesk.com/v1/bpi/currentprice.json')
    .then(res=>{
        // console.log(res.data)
        
        s.push(res.data)
        
    })
    console.log(s[0].bpi)
   return {
       bpi : s[0].bpi
   }

}


export default Index