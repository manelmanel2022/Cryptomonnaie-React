import  { Component } from 'react';
import React from 'react';
import { Button, Select } from 'semantic-ui-react';

// composant  qui va recuperer l'historique d'une crypto-monnaie sélectionnée et  comparer avec une autre dévise
class SearchMarket extends Component {
    state = {
        cryptoid: this.props.cryptoid,
        monnaie: this.props.monnaie,
        jours:this.props.jours,
        interval:this.props.interval
    }

    // fonction qui sert à modifier  l'etat de la props de crypto-monnaie en fonction de la crypto-monnaie selectionnée
    onCryptoChange = (e, data) => {
        this.setState({cryptoid: data.value})
    }

     // fonction qui sert à modifier  l'etat de la props de monnaie en fonction de la monnaie selectionnée
    onMonnaieChange = (e, data) => {
        this.setState({ monnaie: data.value })
    }

    // fonction qui sert à modifier   l'etat de la props de jours en fonction du nombre de jours selectionné
    onNbreJoursChange = (e, data) => {
        this.setState({ jours: data.value })
    }

    // fonction qui sert à modifier   l'etat de la props intervalle en fonction de l'occurence selectionnée
    onIntervalle = (e, data) => {
        this.setState({ interval: data.value })
    }
    render() {
        // option qui permet de lister les crypto-monnaies 
        const optionsCrypto = [
            { value: "bitcoin", key: "btc", text:"Bitcoin"},
            { value: "ethereum", key: "ethereum", text: "Ethereum" },
            { value: "cardano", key: "cardano", text: "Cardano" },
            { value: "bitcoffeen", key: "bff", text:"Bitcoffeen"},
            { value: "bitcoin-2", key: "btc2", text:"Bitcoin 2"},
            { value: "bitcoin-adult", key: "btad", text:"Bitcoin Adult"},
            { value: "bitcoin-international", key: "btci", text:"Bitcoin International"}
        ];

         // option qui permet de lister les dévises
        const optionsMonnaie = [
            { value: "usd", key:"USD", text: "Dollar Americain"},
            { value: "cad", key:"CAD", text: "Dollar Canadien"},
            { value: "gbp", key:"GBP", text: "Livre Sterling"},
            { value: "eur", key:"EUR", text: "l'Euro"},
            { value: "cny", key:"CNY", text: "Yuan Chinois"},
            { value: "jpy", key:"JPY", text: "Yen Japonais"} 
        ];

         // option qui permet de lister le nbre de jours écoulés
        const optionsNbreJours = [
            { value: "0", key: "0", text: "Aujourd'hui" },
            { value: "1", key: "1", text: "hier" },
            { value: "2", key: "2", text: "2 jours écoulés" },
            { value: "3", key: "3", text: "3 jours écoulés" },
            { value: "4", key: "4", text: "4 jours écoulés" },
            { value: "5", key: "5", text: "5 jours écoulés" },
            { value: "6", key: "6", text: "5 jours écoulés" }
        ];

       // option qui permet de lister l'occurence 
        const optionsInterval = [
            { value: "daily", key: "daily", text: "Daily" },
            { value: "hourly", key: "hourly", text: "Hourly" }, 
            { value: "none", key: "none", text: "None" } 
        ];
        return (
            <div className="recherche">
                <h2>Historique du marché des cryptomonnaies</h2>
                <Select onChange={this.onCryptoChange} placeholder="Selectionnez la crypto-monnaie" options={optionsCrypto} value={this.state.cryptoid} />
                <Select onChange={this.onMonnaieChange} placeholder="Selectionnez la devise" options={optionsMonnaie} value={this.state.monnaie} />
                <Select onChange={this.onNbreJoursChange} placeholder="Selectionnez le nombre de jours" options={optionsNbreJours} value={this.state.jours} />
                <Select onChange={this.onIntervalle} placeholder="Selectionnez intervalle" options={optionsInterval} value={this.state.interval} />
                <Button id="bouton_1" onClick={()=>this.props.onSearchMarket(this.state.cryptoid, this.state.monnaie, this.state.jours, this.state.interval) }primary>Rechercher</Button>
                <Button id="bouton_2" onClick={() => this.props.onEmpty()} secondary>Vider la recherche</Button>
           
            </div >
        )
    }
}

export default SearchMarket;