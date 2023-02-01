import  { Component } from 'react';
import React from 'react';
import { Button, Select } from 'semantic-ui-react';

// composant  qui va recuperer les compagnies actionnaires de la cryptomonnaie choisie
class SearchCompany extends Component {
    state = {
        coin_id: this.props.coin_id
    }

    // fonction qui sert à modifier  l'etat de la props de coin_id en fonction de la crypto-monnaie selectionnée
    onCryptoChanges = (e, data) => {
        this.setState({coin_id: data.value})
    }

   
    render() {
        //option qui permet de lister les crypto-monnaies disponible dans l'application
        const optionsCrypto = [
            { value: "bitcoin", key: "bitcoin", text:"Bitcoin"},
            { value: "ethereum", key: "ethereum", text: "Ethereum" },
            { value: "bitcoin-international", key: "btci", text:"Bitcoin International"},
        ];
        
        return (
            <div className="chercher">
                <h2>compagnies - actionnaires des crypto-monnaies</h2>
                <Select onChange={this.onCryptoChanges} placeholder="Selectionnez la crypto-monnaie" options={optionsCrypto} value={this.state.coin_id} />
                <Button id="bouton1" onClick={()=>this.props.onSearchCompany(this.state.coin_id)}primary>Afficher</Button>
                <Button id="bouton2" onClick={() => this.props.onVider()} secondary>Vider l'affichage</Button>
            </div >
        )
    }
}

export default SearchCompany;