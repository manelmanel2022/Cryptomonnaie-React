# Cryptomonnaie-React     

                                                        @@ Crypto-Monnaie /REACT @@

![Project Image](https://masterthecrypto.com/wp-content/uploads/2019/11/Coingecko.jpg)



### Sommaire

- [Description](#description)
- [Definition des entetes des resultats de  notre API](#definition-des-entetes-des-resultats-de-notre-api)
- [Installation ](#installation)
- [API-Reference](#api-reference)
- [Membres-du-groupe](#membres-du-groupe)



---
# Description
Nous avons opté pour l’api CoinGecko (API publique principalement utilisée pour les tests et les loisirs non commerciaux) qui fournit les données cryptographiques les plus complètes et les plus fiables via les points de terminaison RESTful JSON. Des milliers de projets avant-gardistes, de développeurs Web3, de chercheurs, d'institutions et d'entreprises utilisent cette API pour obtenir des flux de prix, des données de marché, des métadonnées et des données historiques sur les actifs cryptographiques, les NFT et les échanges.

Dans notre interface nous avons choisis d'implementer deux differents composants et ainsi deux end points:      
Le premier sert a afficher  le prix historique et les données du marché d'une monnaie selectionnée ainsi que sa capitalisation boursiére comparé a la cryptomonnaie choisis.  
Le deuxieme sert a afficher la valeure totale des actions d'une cryptomonnaie ainsi que toutes les compagnies actionnaires (avec toutes leurs donnés) dans la cryptomonnaie selectionnée

# Definition des entetes des resultats de  notre API

> Bitcoin Dominance: est une mesure de la part ou du taux de la capitalisation 
boursière totale des crypto-monnaies composée de Bitcoin.
-->La capitalisation boursière: fait référence à la valeur totale des actions ordinaires et privilégiées en circulation d’une société cotée en bourse sur le marché libre.                                                                   
Les sociétés cotées en bourse sont inscrites à une bourse publique.Voici la formule pour calculer la capitalisation boursière:                       
**(Nombre d’actions ordinaires x prix du marché) + (nombre d’actions privilégiées x prix du marché) Dans ce calcul, on inclut uniquement les actions autorisées et émises.                                                  
->La valeur marchande des actions d’une entreprise s’avère souvent beaucoup plus élevée que la «valeur comptable» indiquée dans le bilan de la société. 
La valeur comptable indique la valeur lors de l’émission des actions.                                                
->le volume totale mesure l'intensité et le degré d'importance ou le pourcentage des tendances sur le marché d'une crypto monnaie par rapport à une dévise.            
-> Volume 24h : C'est le montant total de la crypto-monnaie dans une dévise donnée qui a circulé dans un laps de temps de 24h.                           
En d'autres termes, c'est le total des ordres de ventes et achats qui ont été reccueillis dans l'intervalle de 24h dans un devise donnée                  
 
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
