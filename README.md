# Form made with ReactJS / NodeJS / MySQL

Bonjour Nicolas

1- $ git clone https://github.com/Nabi1/Form_ReactJS_Material-ui.git

2- $ cd Form_ReactJS_Material-ui

3- $ git checkout Cointet_Thibaut

3- $ cd back

4- $ npm install

5- $ ..

6- $ cd front

7- $ cd my-react-app

8- $ npm install

9- $ npm start // Lance le ReactJS

React est maintenant lancé pour le côté Front-end.
Tu peux déjà tester le Front-end pour tester les différents messages d'erreurs.

Remarque : Le mot de passe doit contenir 2 caractères spéciaux et non 1 comme indiqué dans le formulaire.

Passons au Back-end.

Ouvrir un nouveau terminal dans le dossier ./back (c.a.d le dossier ./back dans lequel nous avons fait un npm install lors de l'étape -4)

- $ npm start

Le server NodeJs est lancé, dans le terminal devrait être écrit "We're Listening on port 5001" et "Database is connected".

Si j'ai bien travaillé et que tu remplis correctement tous les champs du formulaire, 2 actions vont avoir lieu : 

1/ Un POST avec comme status 200 sera visible dans la console du back-end (sur la route /auth/signup), 

2/ Une snackbar apparaitra en bas de ton navigateur sous le formulaire.

Si tout s'est bien passé alors tes infos sont bien parties dans ma base de donnée SQL. Le lien entre le Front, le Back et la base de données est opérationnel.
