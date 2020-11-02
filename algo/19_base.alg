<?xml version="1.0" encoding="UTF-8"?>
<Algo>
    <description courant="AFFICHER SECONDES" texte=""/>
    <extension extnom="inactif"/>
    <fonction fctetat="inactif" fctcode=""/>
    <F2 F2defaut="" F2para="" F2etat="inactif" F2lignes=""/>
    <repere repcode="-10#10#-10#10#2#2" repetat="inactif"/>
    <param totalAffichages="1000" epaisseurPoint="2" arrondiAuto="vrai" maxBoucle="500000" totalBoucles="5000000" epaisseurLigne="2" nbDecimales="8"/>
    <item code="200#declarationfonctions" algoitem="FONCTIONS_UTILISEES"/>
    <item code="100#declarationsvariables" algoitem="VARIABLES">
        <item code="1#NOMBRE#DUREE" algoitem="DUREE EST_DU_TYPE NOMBRE"/>
        <item code="1#NOMBRE#HEURES" algoitem="HEURES EST_DU_TYPE NOMBRE"/>
        <item code="1#NOMBRE#RESTE_MINUTES" algoitem="RESTE_MINUTES EST_DU_TYPE NOMBRE"/>
        <item code="1#NOMBRE#MINUTES" algoitem="MINUTES EST_DU_TYPE NOMBRE"/>
        <item code="1#NOMBRE#SECONDES" algoitem="SECONDES EST_DU_TYPE NOMBRE"/>
    </item>
    <item code="101#debutalgo" algoitem="DEBUT_ALGORITHME">
        <item code="4#Entrez le nombre de secondes#1" algoitem="AFFICHER &quot;Entrez le nombre de secondes&quot;"/>
        <item code="2#DUREE#pasliste" algoitem="LIRE DUREE"/>
        <item code="5#RESTE_MINUTES#DUREE % 3600#pasliste" algoitem="RESTE_MINUTES PREND_LA_VALEUR DUREE % 3600"/>
        <item code="5#HEURES#(DUREE - RESTE_MINUTES)/3600#pasliste" algoitem="HEURES PREND_LA_VALEUR (DUREE - RESTE_MINUTES)/3600"/>
        <item code="5#MINUTES#(RESTE_MINUTES - RESTE_MINUTES%60) / 60#pasliste" algoitem="MINUTES PREND_LA_VALEUR (RESTE_MINUTES - RESTE_MINUTES%60) / 60"/>
        <item code="5#SECONDES#RESTE_MINUTES%60#pasliste" algoitem="SECONDES PREND_LA_VALEUR RESTE_MINUTES%60"/>
        <item code="4#Nombre d'heures : #0" algoitem="AFFICHER &quot;Nombre d'heures : &quot;"/>
        <item code="3#HEURES#1#pasliste" algoitem="AFFICHER HEURES"/>
        <item code="4#Nombre de minutes : #0" algoitem="AFFICHER &quot;Nombre de minutes : &quot;"/>
        <item code="3#MINUTES#1#pasliste" algoitem="AFFICHER MINUTES"/>
        <item code="4#Nombre de secondes : #0" algoitem="AFFICHER &quot;Nombre de secondes : &quot;"/>
        <item code="3#SECONDES#0#pasliste" algoitem="AFFICHER SECONDES"/>
    </item>
    <item code="102#finalgo" algoitem="FIN_ALGORITHME"/>
</Algo>
