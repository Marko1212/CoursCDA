<?xml version="1.0" encoding="UTF-8"?>
<Algo>
    <description courant="AFFICHER NOMBRE_DE_SEC" texte=""/>
    <extension extnom="inactif"/>
    <fonction fctcode="" fctetat="inactif"/>
    <F2 F2para="" F2defaut="" F2lignes="" F2etat="inactif"/>
    <repere repetat="inactif" repcode="-10#10#-10#10#2#2"/>
    <param totalBoucles="5000000" epaisseurPoint="2" epaisseurLigne="2" maxBoucle="500000" arrondiAuto="vrai" totalAffichages="1000" nbDecimales="8"/>
    <item code="200#declarationfonctions" algoitem="FONCTIONS_UTILISEES"/>
    <item code="100#declarationsvariables" algoitem="VARIABLES">
        <item code="1#NOMBRE#INPUT" algoitem="INPUT EST_DU_TYPE NOMBRE"/>
        <item code="1#NOMBRE#NOMBRE_D_HEURES" algoitem="NOMBRE_D_HEURES EST_DU_TYPE NOMBRE"/>
        <item code="1#NOMBRE#NOMBRE_DE_MINUTES" algoitem="NOMBRE_DE_MINUTES EST_DU_TYPE NOMBRE"/>
        <item code="1#NOMBRE#NOMBRE_DE_SEC" algoitem="NOMBRE_DE_SEC EST_DU_TYPE NOMBRE"/>
    </item>
    <item code="101#debutalgo" algoitem="DEBUT_ALGORITHME">
        <item code="4#Entrez le nombre de secondes#1" algoitem="AFFICHER &quot;Entrez le nombre de secondes&quot;"/>
        <item code="2#INPUT#pasliste" algoitem="LIRE INPUT"/>
        <item code="5#NOMBRE_D_HEURES#FLOOR(INPUT/3600)#pasliste" algoitem="NOMBRE_D_HEURES PREND_LA_VALEUR FLOOR(INPUT/3600)"/>
        <item code="5#INPUT#INPUT%3600#pasliste" algoitem="INPUT PREND_LA_VALEUR INPUT%3600"/>
        <item code="5#NOMBRE_DE_MINUTES#FLOOR(INPUT / 60)#pasliste" algoitem="NOMBRE_DE_MINUTES PREND_LA_VALEUR FLOOR(INPUT / 60)"/>
        <item code="5#NOMBRE_DE_SEC#INPUT%60#pasliste" algoitem="NOMBRE_DE_SEC PREND_LA_VALEUR INPUT%60"/>
        <item code="4#Nombre d'heures : #0" algoitem="AFFICHER &quot;Nombre d'heures : &quot;"/>
        <item code="3#NOMBRE_D_HEURES#1#pasliste" algoitem="AFFICHER NOMBRE_D_HEURES"/>
        <item code="4#Nombre de minutes : #0" algoitem="AFFICHER &quot;Nombre de minutes : &quot;"/>
        <item code="3#NOMBRE_DE_MINUTES#1#pasliste" algoitem="AFFICHER NOMBRE_DE_MINUTES"/>
        <item code="4#Nombre de secondes : #0" algoitem="AFFICHER &quot;Nombre de secondes : &quot;"/>
        <item code="3#NOMBRE_DE_SEC#0#pasliste" algoitem="AFFICHER NOMBRE_DE_SEC"/>
    </item>
    <item code="102#finalgo" algoitem="FIN_ALGORITHME"/>
</Algo>
