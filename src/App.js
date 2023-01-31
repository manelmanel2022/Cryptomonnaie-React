
import './App.css';
import { Fragment } from 'react';
import { BrowserRouter} from 'react-router-dom';
import { Message,Menu, MenuItem} from "semantic-ui-react";
import { Component } from 'react';
import SearchMarket from "./composants/SearchMarket";
import SearchCompany from "./composants/SearchCompany";

class App extends Component {
  // initialisation des props dans un state.
  state = {
    data: [],
    error: '',
    cryptoid:'',
    monnaie: '',
    jours: '',
    interval:'',
    prix: '',
    capitalisationBoursiere: '',
    volumeTotale: '',
    resultat: '',
    data2:[],
    erreur:'',
    coin_id:'',
    avoirs_totaux:'',
    valeur_totale_usd:'',
    domination_capitalisation_boursière:'',
    compagnies:''
  }


// fonction onSearchMarket permettant de parcourir et recuperer les données dans l'api coingecko en fetchant le point de terminaison market_chart
  onSearchMarket = async (cryptoid, monnaie, jours, interval) => {

    if (cryptoid && monnaie && jours && interval) {
      try {
        let response = await fetch(`https://api.coingecko.com/api/v3/coins/${cryptoid}/market_chart?vs_currency=${monnaie}&days=${jours}&interval=${interval}`);
        
        let donnees = await response.json();
        this.setState({
          data: donnees,
          error: '',
          cryptoid: cryptoid,
          monnaie: monnaie,
          jours: jours,
          interval: interval,
          prix: donnees.prices,
          capitalisationBoursiere: donnees.market_caps,
          volumeTotale: donnees.total_volumes,
          resultat: Object.values(Object.values(donnees)[0])
        })
      }
      catch (e) {
        this.setState({ error: "Erreur lors de la recherche" });
      }
    }
    else {
      this.setState({ error: "SVP Choisisez une monnaie et un jour" });
    }
  }

  // fonction onEmpty() permettant d'effacer les valeurs sélectionnées dans l'api
  onEmpty = () => {
    this.setState({
      data: [],
      error: '',
      erreur:'',
      cryptoid: '',
      monnaie: '',
      jours: '',
      interval:'',
      prix: '',
      capitalisationBoursiere: '',
      volumeTotale: '',
      resultat: ''}
      )

  }

  // fonction et propriété  permetant à fetcher l'url de l'api et le point de terminaison compagnie
  onSearchCompany = async (a) => {
    if (a) {
      try {
        let reponses = await fetch(`https://api.coingecko.com/api/v3/companies/public_treasury/${a}`);
        let donnees = await reponses.json();
        this.setState(
          {data2:donnees,
          coin_id:a,
          avoirs_totaux:donnees.total_holdings,
          valeur_totale_usd: donnees.total_value_usd,
          domination_capitalisation_boursière: donnees.market_cap_dominance,
          compagnies:donnees.companies,
          erreur:''})
      } catch (e) {
        this.setState({erreur :"Echec de connexion"});
       }
    }
    else { 
      this.setState({erreur :"Merci d'effectuer votre choix"});
    }
  }

  
// Methode onVider permettant de vider les champs sélectionnés
  onVider=()=>{this.setState(
    { data2:[], 
      coin_id:'',
      avoirs_totaux:'',
      valeur_totale_usd:'',
      domination_capitalisation_boursière:'',
      compagnies:'',
      erreur:''})}


  // fonction qui retourne le prix
  functionPrices =()=>{
    return(
      this.state.prix
    );
  }

   // fonction qui retourne la capitalisation boursiere
  functionCapitalisationBoursiere =()=>{
    return(
      this.state.capitalisationBoursiere
    );
  }
  
  // fonction qui retourne le volume totale
  functionVolumeTotale =()=>{
    return(
      this.state.volumeTotale
    );
  }

  // fonction qui retourne les avoirs totaux de toutes les compagnies
  functionAvoirsTotaux =()=>{
    return(
      this.state.avoirs_totaux
    );
  }

   // fonction qui retourne la valeur totale de la cryptomonnaie
  functionValeurTotale =()=>{
    return(
      this.state.valeur_totale_usd
    );
  }
  
  // fonction qui retourne le facteur de la capitalisation boursière
  functionFacteurCapitalisationBoursière =()=>{
    return(
      this.state.domination_capitalisation_boursière
    );
  }

  // fonction qui retourne les compagnies actionnaires de la crypto-monnaie
  functionCompagnies =()=>{
    return(
      this.state.compagnies
    )
  }

  render() {
    // affichage dans la console du resultat des donnéees de l'api avec le point de terminaison market_chart 
    console.log(this.state.data);
    // affichage dans la console du resultat des donnéees de l'api avec le point de terminaison companies
    console.log(this.state.data2);
    return (
      <div className="App">
        <h1>La cryptomonnaie</h1>

        <SearchMarket onSearchMarket={this.onSearchMarket} onEmpty={this.onEmpty}  />
        {this.state.error ? <Message warning>Erreur:{this.state.error}</Message> : undefined}
        
        <Fragment>
            <BrowserRouter>
                <Menu>
                    <Menu.Header className="largeurColonne">
                      Prix 
                      <MenuItem>
                      {this.functionPrices()? <Message className="message" warning> {this.functionPrices().map((leprix,index1) => {return (<p>{index1}-  [  {leprix[0]} ,  <br/>{leprix[1]}  ]</p>)})}</Message>: undefined}
                      </MenuItem>
                    </Menu.Header>
                    <Menu.Header className="largeurColonne">
                       Capitalisation Boursiere 
                       <MenuItem>
                       {this.functionCapitalisationBoursiere()? <Message className="message" warning> {this.functionCapitalisationBoursiere().map((laCapitalisation,index2) => {return (<p>{index2}- [  {laCapitalisation[0]} ,  <br/>{laCapitalisation[1]}  ]</p>)})}</Message>: undefined}
                      </MenuItem>
                    </Menu.Header>
                    <Menu.Header className="largeurColonne">
                      Volume(24h)
                      <MenuItem>
                      {this.functionVolumeTotale()? <Message className="message" warning> {this.functionVolumeTotale().map((leVolumeTotal,index3) => {return (<p>{index3}-  [  {leVolumeTotal[0]} ,  <br/>{leVolumeTotal[1]}  ]</p>)})}</Message>: undefined}
                      </MenuItem>
                    </Menu.Header>
                </Menu>
            </BrowserRouter>
            <SearchCompany onSearchCompany={this.onSearchCompany} onVider={this.onVider}  />
           {this.state.erreur ? <Message warning>Erreur:{this.state.erreur}</Message> : undefined}
            <BrowserRouter>
                <Menu>
                    <Menu.Header className="largeurColonne">
                    Avoirs totaux 
                      <MenuItem>
                      {this.functionAvoirsTotaux()? <Message className="message1" warning> {this.functionAvoirsTotaux()}</Message>: undefined}
                      </MenuItem>
                    </Menu.Header>
                    <Menu.Header className="largeurColonne">
                    Valeur totale en usd
                       <MenuItem>
                       {this.functionValeurTotale()? <Message className="message1" warning> {this.functionValeurTotale()}</Message>: undefined} 
                      </MenuItem>
                    </Menu.Header>
                    <Menu.Header className="largeurColonne">
                     Domination de la capitalisation boursière
                      <MenuItem>
                      {this.functionFacteurCapitalisationBoursière()? <Message className="message1" warning> {this.functionFacteurCapitalisationBoursière()}</Message>: undefined}
                      </MenuItem>
                    </Menu.Header>
                </Menu>
                <Menu>
                    <Menu.Header className="largeurColonne">
                      compagnies 
                      <MenuItem>
                      {this.functionCompagnies()? <Message className="message3" warning> {this.functionCompagnies().map((avoirTotal,index) => {
                        return (<p>{index+1} <br/>   
                        {Object.keys(avoirTotal)[0]} : {Object.values(avoirTotal)[0]} <br/> 
                        {Object.keys(avoirTotal)[1]} : {Object.values(avoirTotal)[1]} <br/>
                        {Object.keys(avoirTotal)[2]} : {Object.values(avoirTotal)[2]} <br/> 
                        {Object.keys(avoirTotal)[3]} : {Object.values(avoirTotal)[3]} <br/> 
                        {Object.keys(avoirTotal)[4]} : {Object.values(avoirTotal)[4]} <br/> 
                        {Object.keys(avoirTotal)[5]} : {Object.values(avoirTotal)[5]} <br/> 
                        {Object.keys(avoirTotal)[6]} : {Object.values(avoirTotal)[6]} <br/> 
                        </p>)})}</Message>: undefined}
                      </MenuItem>
                    </Menu.Header>
                </Menu>
            </BrowserRouter>
        </Fragment>
      </div>
    );
  }
  
}

export default App;

