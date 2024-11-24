# Vision_IT - Shiny

## Lancer l'API en local

Pour utiliser notre siteweb, vous aurez besoin d'installer l'API en local sur votre machine. Pour cela :
1. Faites un `git clone https://github.com/Ordy-97/API-VISION_IT.git`
2. Installez les `node_modules` avec `npm/yarn`
3. Faites tourner l'API avec `npm/yarn start`


## Consommer l 'API
L'API Vision_IT est une API REST.
Une fois lancée, cette API met plusieurs routes à votre disposition :

- La route pour récupérer les profils des freelances :
`GET /freelances`

- La route pour avoir le détail d'un profil de freelance :
`GET /profile/?id={id}`

- La route pour avoir le questionnaire :
`GET /survey/`

- La route pour obtenir le résultat du questionnaire :
`GET /results/?a1={answer1}&a2={answer2}&a3={answer3}...`



N'hésitez pas à explorer l'API pour tester.
