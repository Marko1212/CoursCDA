# Hébergement

Un site web doit être accessible 24h/24. Pour cela, on doit héberger le site sur un serveur.
La plupart du temps, on accède à un site web via un nom de domaine, par exemple https://boxydev.com

http:// ou https:// est un protocole permettant de communiquer avec le serveur, on appelle cela un serveur web.

Le nom de domaine est payant et dépend d'une autorité (AFNIC pour le .fr par exemple). C'est un abonnement annuel à renouveller tous les ans à vie. Le tarif est d'environ 10 euros pour une année sur un .fr mais le prix peut varier pour d'autres domaines de premier niveau (.com, .it, .de, .voyage, .paris).

Le domaine seul ne suffit pas à héberger le site web, il doit être associé à un hébergement. Il existe plusieurs types d'hébergements :

### Hébergement mutualisé

Cet hébergement est le moins coûteux et le plus facile à mettre en oeuvre techniquement. C'est un fournisseur qui s'occupe du serveur et il vous donne juste un accès FTP (Pour envoyer les fichiers de votre site) et une ou plusieurs bases de données.

Je vous recommande cette solution pour démarrer.

### VPS

Le VPS (Virtual Private Server) est un serveur virtuel situé sur un serveur physique. Il y a plusieurs VPS sur un serveur. L'avantage de cette solution est que vous pouvez installer ce que vous voulez sur ce serveur (même un serveur de jeu) mais c'est à vous de le faire. C'est un métier différent de développeur mais fortement lié, administrateur système. Aujourd'hui, un développeur qui sait faire cela est appelé "DevOps". Il est nécessaire de bien connaitre la couche OSI de l'informatique ainsi que l'OS Linux. Il faut bien entendu être à l'aise avec la ligne de commande car il n'y a pas d'écran sur un serveur.

### Serveur dédié

C'est un serveur physique. Il présente les mêmes caractéristiques qu'un VPS mais c'est vous qui êtes maître du serveur.

### Cloud

Le cloud comme le propose Scaleway ou Digital Ocean, c'est le fait de pouvoir créer plusieurs VPS à la volée en quelques secondes pour faire des tests et les arrêter n'importe quand. On paye donc la consommation à l'heure et non au mois.

## Envoyer les fichiers

Pour envoyer vos fichiers HTML et CSS, vous devez vous munir de vos accès FTP :

Hôte: matthieu.m2i.boxydev.com
Login: matthieu
Mot de passe: Envoyé en MP sur Discord

Attention, vous devez remplacer matthieu par votre prénom. Il est nécessaire d'installer un logiciel comme Cyberduck ou Filezilla pour envoyer vos fichiers sur le serveur.
