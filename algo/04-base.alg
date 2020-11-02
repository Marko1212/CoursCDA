<?xml version="1.0" encoding="UTF-8"?>
<Algo>
    <description courant="AFFICHER PRENOM" texte=""/>
    <extension extnom="inactif"/>
    <fonction fctcode="" fctetat="inactif"/>
    <F2 F2defaut="" F2lignes="" F2etat="inactif" F2para=""/>
    <repere repetat="inactif" repcode="-10#10#-10#10#2#2"/>
    <param maxBoucle="500000" totalBoucles="5000000" nbDecimales="8" epaisseurPoint="2" totalAffichages="1000" epaisseurLigne="2" arrondiAuto="vrai"/>
    <item code="200#declarationfonctions" algoitem="FONCTIONS_UTILISEES"/>
    <item code="100#declarationsvariables" algoitem="VARIABLES">
        <item code="1#CHAINE#PRENOM" algoitem="PRENOM EST_DU_TYPE CHAINE"/>
    </item>
    <item code="101#debutalgo" algoitem="DEBUT_ALGORITHME">
        <item code="2#PRENOM#pasliste" algoitem="LIRE PRENOM"/>
        <item code="4#Ton prénom est #0" algoitem="AFFICHER &quot;Ton prénom est &quot;"/>
        <item code="3#PRENOM#0#pasliste" algoitem="AFFICHER PRENOM"/>
    </item>
    <item code="102#finalgo" algoitem="FIN_ALGORITHME"/>
</Algo>
