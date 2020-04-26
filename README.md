# CiStat'imac

https://julesfouchy.github.io/CiStatImac/

Projet web-front du semestre 4 de l'IMAC.
Réalisé par Jules Fouchy, Barbara Guyonneau, Amandine Kohlmuller, Monica Lisacek et Laurelenn Sangare.

### Introduction

En cette période de confinement, il est important de passer du bon temps et de joindre l’utile à l’agréable ! Alors, comment rendre ce projet web amusant, et faire un clin d’oeil à notre merveilleuse formation d’ingénieur.e.s créati.f.ve.s ? 

Quoi de mieux qu’un dashboard sur un sujet qui nous parle tous à l’IMAC : L’humour !  Quelle promo est la plus drôle ? Sur quels sujets rigolent le plus les IMACs ? Quand sommes-nous le plus amusant ? Qui a la palme de la plus belle citation ? Tant de mystères qui ne demandent qu’à être élucidés. Mais heureusement, ce dashboard, associé aux données du site “Citat’IMAC” (le recueil de citations des IMACs) est là pour répondre à tous nos problèmes !

### Les données du Citat'imac

http://citatimac.alwaysdata.net/

Le Citat’IMAC est un site web développé dans le cadre du projet web backend du semestre 2 par Eva Benharire, Amandine Kohlmuller, Laurelenn Sangare et Margaux Vaillant.



# Mise en place

### Dépendances

```
npm install
```

### Lancer le serveur

```
npm run dev
```

# Webpack et le setup en quelques lignes

Merci à Enguerrand De Smet pour le template. Ce dernier est configuré pour se servir de différents modules (axios, hyperApp) et via webpack permet de mettre tout en place ensemble, compiler le scss en css etc.

Il dispose :
- d'un serveur intégré pour pouvoir travailler facilement
- de Babel, un module pour gérer la retro compatibilité avec les vieux navigateurs
- d'un linter
