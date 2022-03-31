import NavBar from '../../NavBar/NavBar';
import SearchBar from '../../SearchBar/SearchBar';
import useFetch  from '../../../hooks/useFetch';
import Table from 'react-bootstrap/Table';
import './MarketPage.css';
import UserSendHttpRequest from '../User/UserHttpHandler';
import Currency from '../User/Currency';
import {useState, useEffect} from 'react';
import {useParams} from "react-router-dom";
import {useNavigate} from "react-router-dom"
import { Container } from 'react-bootstrap';

const followArr = [];

function searchFun(param) {
  const inVal = document.getElementById('my-input').value;
  const txtVal = inVal.toUpperCase();
  for (var i = 0; i < param.length; i++){
    if (param[i].symbol.toUpperCase() == txtVal || param[i].name.toUpperCase() == txtVal){
      window.location = "market/" + param[i].symbol;
    }
  }
}

function filterFun(param){
  const input = document.getElementById('my-input').value;
  const table = document.getElementById('market-table');
  const tr = table.getElementsByTagName("tr");
  const filter = input.toUpperCase();
  
  
  for (var i = 0; i < tr.length; i++) {
    const td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      const txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else{
        tr[i].style.display = "none";
      }
    }
  }
}
function sendCurData(info) {
  UserSendHttpRequest('POST', 'http://localhost:5000/followCurrency', info).then(responseData => {console.log(responseData)})
}

function sendunFolData(info) {
  UserSendHttpRequest('POST', 'http://localhost:5000/unfollowCurrency', info).then(responseData => {console.log(responseData)})
}

function butFun(rowNum, marketDataSymbol){
  const but = document.getElementById('table-but' + rowNum);
  const tbrow = document.getElementById('table_row' + rowNum);
  //const followTab = document.getElementById('follow-table');
  var cryInfo = {
    "newCrypto" : marketDataSymbol
  }
  if (but.value == 'follow'){
    but.value = 'unfollow';
    but.innerText = 'unfollow';
    tbrow.style.backgroundColor='RGB(247, 143, 195)';

    

    sendCurData(cryInfo);

    console.log(marketDataSymbol);
  } else {
    but.value ='follow';
    but.innerText = 'follow';
    tbrow.style.backgroundColor='white';
    sendunFolData(cryInfo);
    console.log(marketDataSymbol);
    // const rowIndex = followArr.length - 1 - followArr.indexOf(marketData[rowNum])
    // console.log(followArr.indexOf(marketData[rowNum]));
    // followTab.deleteRow(rowIndex);
    // followArr.splice(followArr.indexOf(marketData[rowNum]), 1);
  }
}


function allPaint(marketData, coinLst) {
  for (var i = 0; i <marketData.length; i ++) {
    for (var j = 0; j < coinLst.length; j++) {
      if (coinLst[j] === marketData[i].symbol) {
        const but = document.getElementById('table-but' + i);
        const tbrow = document.getElementById('table_row' + i);
        if (but === null || tbrow === null) {
          console.log('Market Not Ready');
        } else {
          but.value ='unfollow';
          but.innerText = 'unfollow';
          tbrow.style.backgroundColor='RGB(247, 143, 195)';
        }
        // console.log("btn is   " + but);
        
      }
    }
    
  }
}

function Market() {
  const [isLoggedIn, setIsLoggedIn] = useState({loggedIn: false, user: null})
  const [isOwner, setIsOwner] = useState(false)
  const params = useParams();
  const [userLoad, setUserLoad] = useState(true);
  const [userStatus, setUserStatus] = useState(false)
  const navigate = useNavigate()
  const {data: marketData, isLoading: mkload, error} = useFetch("http://localhost:5000/market/main");
  var urlName = '';
    	useEffect(() => {
        // Check if the current user is logged in, and if this is their profile page
		const token = localStorage.getItem('token')
		if (token) {
            fetch('http://localhost:5000/loggedIn/', {
                headers: {
                    'x-access-token': token,
                },
            })
            .then(response => response.json())
            .then(response => {
                if (response.status === 200){
                    urlName = response.user.username;
                    console.log('this is url ++' + urlName);
                    console.log(response.user.username)
                    console.log(params.username)
                    setIsLoggedIn({loggedIn: true, user: response.user})
                    setIsOwner(response.user.username === params.username)
                    setUserLoad(false);
                } else {
                    setIsLoggedIn({loggedIn: false, user: null})
                }
            })
            .catch(e1 => {
                console.log(e1)
                setIsLoggedIn({loggedIn: false, user: null})
            })

		} else{
            setIsLoggedIn({loggedIn: false, user: null})
            // navigate('/logIn', { state: "You must be logged in to view other users' profiles!" })
            setUserLoad(false);
        }
        setUserStatus(true)
        
    }, []);

    if (mkload) {
      return(<div><h1>Loading....</h1></div>)
    }
    if (userLoad) {
      return(<div><h1>Loading 2 ....</h1></div>)
    }

  var User = null;
  var coinData = []
  if (isLoggedIn.loggedIn) {
    User = isLoggedIn.user;
    coinData = User.followingCryptos;
  }



  return <div id="market_page">
      <NavBar/>
      <Container className='d-flex align-items-center justify-content-center pt-1'>
      <SearchBar butFun={searchFun} param={marketData} inVal={document.getElementById("my-input")} inFun={filterFun}
      text={"Enter Symbol"} haveBut={true}/>
      {/* {isLoggedIn.loggedIn && <Currency isOwner={isOwner} userCurrency={User.followingCryptos} style={{width: 300}} />} */}
      </Container>
      <div id="datatable">
      

        <Table striped bordered hover id="market-table">
          <thead>
            <tr>
              <th>Coin</th>
              <th>Price (USD)</th>
              <th>24h</th>
              <th>7d</th>
            </tr>
          </thead>
          <tbody>
            {Array.from({length: marketData.length}).map((_, index1) => (
              <tr id={'table_row' + index1}>
                <td><a href={"market/" + marketData[index1].symbol}>{marketData[index1].symbol}</a></td>
                  <td>{marketData[index1].quote.USD.price}</td>
                  <td>{marketData[index1].quote.USD.percent_change_24h}</td>
                  <td>{marketData[index1].quote.USD.percent_change_7d}</td>
                  <td id="but-col"><button id={"table-but" + index1} class="btn btn-outline-secondary" 
                  type="buton" onClick={()=>butFun(index1, marketData[index1].symbol)} value='follow'>follow</button></td>
                  {allPaint(marketData, coinData)}
                  
              </tr>
            ))}
          </tbody>
        </Table>
        
      </div>
      {/* {allPaint(marketData, coinData)} */}
  </div>;
  
}

export default Market;
