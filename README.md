 # Cryptomonnaie-React     

                                                        @@ Crypto-Monnaie /REACT @@

![Project Image](https://masterthecrypto.com/wp-content/uploads/2019/11/Coingecko.jpg)



### Sommaire

- [Description](#description)
- [Installation ](#installation)
- [API-Reference](#api-reference)
- [Membres-du-groupe](#membres-du-groupe)


---
# Description
Nous avons opté pour l’api CoinGecko (API publique principalement utilisée pour les tests et les loisirs non commerciaux) qui fournit les données cryptographiques les plus complètes et les plus fiables via les points de terminaison RESTful JSON. Des milliers de projets avant-gardistes, de développeurs Web3, de chercheurs, d'institutions et d'entreprises utilisent cette API pour obtenir des flux de prix, des données de marché, des métadonnées et des données historiques sur les actifs cryptographiques, les NFT et les échanges.

Dans notre interface nous avons choisis d'implementer deux differents composants et ainsi deux end points:      
Le premier sert a afficher  le prix historique et les données du marché d'une monnaie selectionnée ainsi que sa capitalisation boursiére comparé a la cryptomonnaie choisis.  
Le deuxieme sert a afficher la valeure totale des actions d'une cryptomonnaie ainsi que toutes les compagnies actionnaires (avec toutes leurs donnés) dans la cryptomonnaie selectionnée
 
# Installation

L'installation d'une version recente de visual studion code est necessaire afin de faire fonctionner notre application.
Dans un premier temps il faut Telecharger notre dossier de projet et l'ouvrir dans VSCode,ouvrir le terminal et tapez la commande suivante :

> npm install

Puis la commande suivante 

> npm start

La commande suivante sert a faire les corrections necessaire dans le cas d'un nombre important de vulnerabilités

> npm audit fix

A cette etape l'application s'executera sur une nouvelle page du navigateur et la recherche peut commencer en selectionnant une cryptomonnaie et une monnais ainsi que les recurrences de recherche (daily...etc),le resultat s'affiche par la suite selon le nombre de jours de recherche demandés

---


#### API Reference
https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=1
https://api.coingecko.com/api/v3/companies/public_treasury/bitcoin





# Membres du groupe 
- [Tchokouani Hugues](1231458@crosemont.qc.ca)
- [Mallem Manel](6178168@crosemont.qc.ca)



[Back To The Top](#cryptomonnaie-react)
